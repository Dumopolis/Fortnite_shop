export default function Thanks(props) {
    const { handleBuyNow = Function.prototype } = props
    return (<div className="basket__list">

        <div className="basket__list-thanks">
            <h2>Thank you for shopping at <br /> <span className="header__menu-logo">Fortnite Shop</span></h2>
            <span onClick={handleBuyNow} className="basket__list__header-closer">X</span>
        </div>



    </div>
    )
}
