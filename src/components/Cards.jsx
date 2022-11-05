
import Card from "./Card";

//(prop.type.name === 'Harvesting Tool')(оружие)(prop.type.name === 'Outfit') одежда && (prop.type.name === 'Glider')транспорт
export default function Cards(props) {
    const {quantityCards, 
        addToBasket = Function.prototype,
    shop,

    } = props;

    const item = shop.filter((prop) => (prop.price > 0) && (prop.images.background));

    let counter = 0;
    
    return (
        <>
        
        {item.map(thing => 
            { if (counter < quantityCards){
                
                counter++
                return <Card addToBasket={addToBasket} key={thing.id} {...thing}/>
            }
             return null
            }
        )}
        </>
    )
}