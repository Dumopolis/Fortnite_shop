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
            <div className="BasketList-Item-Price ">
                <span className="BasketList-Item-Quantity None">{price}</span>
               <div className="Setter Flex-Row-SpaceBetween">
                
               <button className="Setter-Button" onClick={() => decreaseQuantityItem({
                id,
                name,
                price,
                images
            })}>-
            </button>  
            <span className="BasketList-Item-Quantity" >{quantity}</span>
            <button className="Setter-Button" unselectable="on" onClick={() => addToBasket({
                id,
                name,
                price,
                images
            })}
            >+</button>
                </div> 
            </div>

                <span className="BasketList-Item-Sum">{price * quantity}</span>
                <span onClick={() => removeFromBasket(id)} className="Closer">X</span>
        </div >
        
    )
}