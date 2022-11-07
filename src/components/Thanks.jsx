import { useContext } from "react"
import { ShopContext } from "../context"

export default function Thanks() {

    const { handleBuyNow = Function.prototype } = useContext(ShopContext)
    return (
        <div className="BasketList">

            <div onClick={handleBuyNow} className="Thanks">
                <h2>Thank you for shopping at <br /> <span className="Logo">Fortnite Shop</span></h2>
                <span onClick={handleBuyNow} className="Closer BasketList-Closer">X</span>
            </div>
            
        </div>
    )
}
