import React, { useState, useEffect } from 'react';
import preloader from '../img/preloader.gif';
import header from '../img/shop-header.png';
import Cards from './Cards';
import Basket from './Basket';

export default function Shop(props) {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([]);
    const { quantity } = props;
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
                if(index === itemIndex){
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    }
                }else{
                    return el
                }
                
            } )
            setOrder(newOrder);
        }
    };

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
        <div className="main__shop">
            <img className="main__shop-img" src={header} alt="Shop Header" />
            <Basket countThingOnOrder={order.length} />
            {(!loading) ?
                <>
                    <div className="main__shop__cards">
                        <Cards shop={response} addToBasket={addToBasket} quantity={quantity} />
                    </div>
                    {(quantity <= 3) ?
                        <div className="main__shop__more">
                            <button className="main__shop__more-button"></button>
                        </div> : <></>}
                </>
                : <img width='300px' src={preloader} alt='preloader' />}
        </div>
    )

}