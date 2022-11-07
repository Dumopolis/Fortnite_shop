import { useContext } from "react"
import { ShopContext } from "../context"

export default function Card(props) {
    const {addToBasket} = useContext(ShopContext)
    const { 
        name,
        price,
        id,
        images } = props
        
    return (

        <div className="Card Flex-Column-Center">

            <img className="Card-Img" src={images.background} alt="" />

            <div className="Title Card-Name">
                {name}
                <br />
                {price}$
            </div>

            <button onClick={() => addToBasket({
                id,
                name,
                price,
                images
            })}
                className="Button"></button>
        </div>


    )
}