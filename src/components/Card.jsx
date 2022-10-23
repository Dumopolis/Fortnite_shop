export default function Card(props) {
    const { addToBasket,
        name,
        price,
        id,
        images } = props
    return (

        <div className="main__shop__cards-item">
            <div className="main__shop__cards-item-img">
                <img src={images.background} alt="" />
            </div>
            <div className="main__shop__cards-item-title">
                <span className="main__shop__cards-item-name">{name}</span>
                <br />
                <span className="main__shop__cards-item-price">{price}$</span>
            </div>
            <button onClick={addToBasket({
                id,
                name,
                price
            })}
                className="main__shop__cards-item-button"></button>
        </div>


    )
}