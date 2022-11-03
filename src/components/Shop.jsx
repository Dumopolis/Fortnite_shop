import React, { useState, useEffect } from 'react';
import preloader from '../img/preloader.gif';
import header from '../img/shop-header.png';
import Cards from './Cards';
import Basket from './Basket';
import BasketList from './BasketList';
import Thanks from './Thanks';
import { Link } from 'react-router-dom';

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
        document.querySelector('body').classList.toggle('Overflow');
        document.querySelector('.Basket-Opener').classList.toggle('None')
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
                { 'Authorization': '4666c65d-634a6cd5-8421f409-01a2578f' },

            redirect: 'follow'

        })
            .then(response => response.json())
            .then(data => {
                setResponse(data.items);
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="Shop Flex-Column-Center">
            
            <img className="Shop-Img" src={header} alt="Shop Header" />
            {(isThanksShow)?<Thanks handleBuyNow={handleBuyNow} />:(isBasketShow) ? <BasketList
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

            {(!loading) ?
                <>
                    <div className="Cards Flex-Row-Center">
                        <Cards shop={response} addToBasket={addToBasket} quantityCards={quantityCards} />
                    </div>
                    {(quantityCards <= 4) ? <Link to="/market"  className="Button Button-More"></Link> : null}
                </>
                : <img className='Preloader' src={preloader} alt='preloader' />}
        </div>
    )

}