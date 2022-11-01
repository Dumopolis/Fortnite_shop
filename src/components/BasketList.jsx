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
        <div className="BasketList">

            <div className="Logo BasketList-Title Flex-Column-Center">
                <h2>BASKET</h2>
                <span onClick={handleBasket} className="Closer BasketList-Closer">X</span>
            </div>

            {order.map((item) => <BasketItem
                key={item.id}{...item}
                addToBasket={addToBasket}
                decreaseQuantityItem={decreaseQuantityItem}
                removeFromBasket={removeFromBasket}
            />)}

            <div className="BasketList-Footer">
                <button className="Button BasketList-Button Background-Green" onClick={handleBuyNow}>BUY NOW</button>
                <button
                    className="Button BasketList-Button Background-Purple"
                    onClick={handleBasket}>CONTINUE <br /> SHOPPING</button>
                <span className="BasketList-Button">Full price {fullPrice} $</span>
            </div>

        </div>
    )
}