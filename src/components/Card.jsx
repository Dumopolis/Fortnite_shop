export default function Card(props) {
   
    return (
      
            <div className="main__shop__cards-item">
                <div className="main__shop__cards-item-img">
                    <img src={props.images.background} alt="" />
                </div>
                <div className="main__shop__cards-item-title">
                    <span className="main__shop__cards-item-name">{props.name}</span>
                    <br />
                    <span className="main__shop__cards-item-price">{props.price}$</span>
                </div>
                <button className="main__shop__cards-item-button"></button>
            </div>

        
    )
}