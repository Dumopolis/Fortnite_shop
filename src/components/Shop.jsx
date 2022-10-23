import React, { useState, useEffect } from 'react';
import preloader from '../img/preloader.gif';
import header from '../img/shop-header.png';
import Cards from './Cards';

export default function Shop() {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(true)
    const quantity = 3;
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
            {(!loading) ?
                <>
                <div className="main__shop__cards">
                    <Cards shop={response} quantity={quantity} />
                </div> 
                <div className="main__shop__more">
                    <button className="main__shop__more-button"></button>
                </div>
                </>
                : <img width='300px' src={preloader} alt='preloader' />}
        </div>
    )

}