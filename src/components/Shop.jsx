import React, { useState, useEffect } from 'react';
import preloader from '../img/preloader.gif';
import header from '../img/shop-header.png';
import Cards from './Cards';
import Basket from './Basket';
import BasketList from './BasketList';
import Thanks from './Thanks';
import { Link } from 'react-router-dom';
import { API_KEY } from '../config';

const setDefaultValue = () => {
    const userOrder = JSON.parse(localStorage.getItem('order'));

    return userOrder ? userOrder : [];
}
export default function Shop(props) {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState(setDefaultValue);
    const [isBasketShow, setBasketShow] = useState(false);
    const [isThanksShow, setThanksShow] = useState(false)
    const { quantityCards } = props;

    const quantityItemOnOrder = order.reduce(((acc, obj) => acc + obj.quantity), 0);

    const handleBasket = () => {
        setBasketShow(!isBasketShow);

    }
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(el => el.id === item.id)

        if (itemIndex < 0) {

            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((el, index) => {
                if (index === itemIndex) {

                    return {
                        ...el,
                        quantity: el.quantity + 1,
                    }
                } else {
                    return el
                }

            })
            setOrder(newOrder);
        }
    };
    const decreaseQuantityItem = (item) => {
        const itemIndex = order.findIndex(el => el.id === item.id)


        let newOrder = order.map((el, index) => {
            if (index === itemIndex) {

                if (el.quantity > 0) {
                    return {
                        ...el,
                        quantity: el.quantity - 1,
                    }
                } else {
                    return el
                }
            } else {
                return el
            }

        })
        setOrder(newOrder);

    };
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((item) => item.id !== itemId)
        setOrder(newOrder)

    }
    const handleBuyNow = () => {
        setOrder([])
        setBasketShow(false)
        setThanksShow(!isThanksShow)
    }
    const closeBurgerMenu = () => {
        document.querySelector('.BurgerMenu-Items').classList.remove('Open')
    }
    useEffect(() => {
        if (isBasketShow) {
            document.querySelector('body').classList.add('Overflow')
        } else {
            document.querySelector('body').classList.remove('Overflow')
        }
    }, [isBasketShow])
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));

    }, [order])
    useEffect(() => {
        const newOrder = order.filter((item) => item.quantity > 0)

        setOrder(newOrder);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantityItemOnOrder])
    useEffect(() => {

        fetch(`https://fortniteapi.io/v2/items/list?lang=en`, {
            method: 'GET',
            headers:
                { Authorization: API_KEY },

            redirect: 'follow'

        })
            .then(response => response.json())
            .then(data => {
                setResponse(data.items);
                setLoading(false);

            })
            .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", closeBurgerMenu);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", closeBurgerMenu);
        };
      });
    return (
        <div className="Shop Flex-Column-Center">

            <img className="Shop-Img" src={header} alt="Shop Header" />
            {(isThanksShow) ? <Thanks handleBuyNow={handleBuyNow} /> : (isBasketShow) ? <BasketList
                decreaseQuantityItem={decreaseQuantityItem}
                addToBasket={addToBasket}
                handleBasket={handleBasket}
                order={order}
                removeFromBasket={removeFromBasket}
                handleBuyNow={handleBuyNow}
            /> : null}
            <Basket
                handleBasket={handleBasket}
                countThingOnOrder={quantityItemOnOrder} />

            {(!loading) ? (response !== undefined) ?
                <>
                    <div className="Cards Flex-Row-Center">
                        <Cards shop={response} addToBasket={addToBasket} quantityCards={quantityCards} />
                    </div>
                    {(quantityCards <= 4) ? <Link to="/market" className="Button Button-More"></Link> : null}
                </> : <h1>Сегодня товаров не будет</h1>
                : <img className='Preloader' src={preloader} alt='preloader' />}
        </div>
    )

}