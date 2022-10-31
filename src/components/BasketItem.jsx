export default function BasketItem(props) {
    const { id, 
        name,
        images,
        quantity,
        price,
        addToBasket = Function.prototype,
        decreaseQuantityItem = Function.prototype,
        removeFromBasket = Function.prototype,
    } = props

    return (
        <div className="basket__list__item">
            <img className="basket__list__item-icon" src={images.icon} alt='icon' />
            <span className="basket__list__item-name">{name}</span>
            <div className="basket__list__item-price">
                <span>{price} $</span>
                
                <span><span className="setter" onClick={() => decreaseQuantityItem({
                id,
                name,
                price,
                images
            })}>-</span>  {quantity}<span unselectable="on" onClick={() => addToBasket({
                id,
                name,
                price,
                images
            })}
            className="setter">+</span></span>
            </div>

                <span className="basket__list__item-sum">{price * quantity} $</span>
                <span onClick={() => removeFromBasket(id)} className="basket__list__item-closer">X</span>
        </div >
        
    )
}