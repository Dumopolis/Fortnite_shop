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
        <div className="BasketList-Item Flex-Row-SpaceBetween">
            <img className="BasketList-Item-Icon" src={images.icon} alt='icon' />
            <span className="BasketList-Item-Name">{name}</span>
            <div className="BasketList-Item-Price">
                <span>{price} $</span>
                
                <span><span className="Setter" onClick={() => decreaseQuantityItem({
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

                <span className="BasketList-Item-Sum">{price * quantity} $</span>
                <span onClick={() => removeFromBasket(id)} className="Closer">X</span>
        </div >
        
    )
}