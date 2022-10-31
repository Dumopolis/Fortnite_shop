import BasketItem from "./BasketItem"

export default function BasketList(props) {
    const { order,
        decreaseQuantityItem = Function.prototype,
        addToBasket = Function.prototype,
        handleBasket = Function.prototype,
        removeFromBasket = Function.prototype,
        handleBuyNow = Function.prototype,
    } = props

    const fullPrice = order.reduce(((acc, obj) => acc + (obj.price * obj.quantity)), 0)

    return (
        <div className="basket__list">

            <div className="basket__list__header">
                <h2>BASKET</h2>
                <span onClick={handleBasket} className="basket__list__header-closer">X</span>
            </div>

            {order.map((item) => <BasketItem
                key={item.id}{...item}
                addToBasket={addToBasket}
                decreaseQuantityItem={decreaseQuantityItem}
                removeFromBasket={removeFromBasket}
            />)}

            <div className="basket__list__footer">
                <button className="basket__list__footer-buy" onClick={handleBuyNow}>BUY NOW</button>
                <button
                    className="basket__list__footer-continue"
                    onClick={handleBasket}>CONTINUE <br /> SHOPPING</button>
                <span className="basket__list__footer-price">Full price: {fullPrice} $</span>
            </div>

        </div>
    )
}