import Card from "./Card";

//(prop.type.name === 'Harvesting Tool')(оружие)(prop.type.name === 'Outfit') одежда && (prop.type.name === 'Glider')транспорт
export default function Cards(props) {
    console.log(props.shop)
    const item = props.shop.filter((prop) => (prop.price > 0) && (prop.images.background));
    console.log(item);
    let counter = 0
    const quantity = props.quantity
    return (
        <>
        {item.map(thing => 
            { if (counter < quantity){
                counter++
                return <Card key={thing.id} {...thing}/>
            }
             return null
            }
        )}
        </>
    )
}