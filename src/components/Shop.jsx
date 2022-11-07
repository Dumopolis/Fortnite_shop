import React, { useContext, useEffect } from 'react';
import preloader from '../img/preloader.gif';
import header from '../img/shop-header.png';
import Cards from './Cards';
import Basket from './Basket';
import BasketList from './BasketList';
import Thanks from './Thanks';
import { Link } from 'react-router-dom';
import { API_KEY } from '../config';
import { ShopContext } from '../context';

export default function Shop(props) {

    const { quantityCards } = props;


    const { order, goods, setGoods, loading, isThanksShow, isBasketShow } = useContext(ShopContext)


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

        fetch(`https://fortniteapi.io/v2/items/list?lang=en`, {
            method: 'GET',
            headers:
                { Authorization: API_KEY },
            redirect: 'follow'

        })
            .then(response => response.json())
            .then(data => {
                setGoods(data);
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        const closeBurgerMenu = () => {
            document.querySelector('.BurgerMenu-Items').classList.remove('Open')
        }
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
            {(isThanksShow) ? <Thanks /> : (isBasketShow) ? <BasketList /> : null}
            <Basket />
            {(!loading) ? (goods !== undefined) ?
                <Cards quantityCards={quantityCards}  /> 
            : <h1>Сегодня товаров не будет</h1>
            : <img className='Preloader' src={preloader} alt='preloader' /> }
            {(quantityCards <= 4) ? <Link to="/market" className="Button Button-More"> </Link> : null }
        </div>
    )

}