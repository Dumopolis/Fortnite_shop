export default function Thanks(props) {
    const { handleBuyNow = Function.prototype } = props
    return (
        <div className="BasketList">

            <div className="Thanks">
                <h2>Thank you for shopping at <br /> <span className="Logo">Fortnite Shop</span></h2>
                <span onClick={handleBuyNow} className="Closer BasketList-Closer">X</span>
            </div>
            
        </div>
    )
}
