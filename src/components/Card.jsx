export default function Card(props) {
    const { addToBasket,
        name,
        price,
        id,
        images } = props
    return (

        <div className="Card Flex-Column-Center">

            <img className="Card-Img" src={images.background} alt="" />

            <div className="Title ">
                {name}
                <br />
                {price} $
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