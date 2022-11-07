
import { useContext } from "react";
import { ShopContext } from "../context";
import Card from "./Card";

//(prop.type.name === 'Harvesting Tool')(оружие)(prop.type.name === 'Outfit') одежда && (prop.type.name === 'Glider')транспорт
export default function Cards(props) {
    const {goods} = useContext(ShopContext)
    const { quantityCards,
    } = props;

    const item = goods.filter((prop) => (prop.price > 0) && (prop.images.background));

    let counter = 0;

    return (
        <div className="Cards Flex-Row-Center">

            {item.map(thing => {
                if (counter < quantityCards) {

                    counter++
                    return (
                        
                            <Card key={thing.id} {...thing} />
                        
                    )
                }
                return null
            }
            )}
        </div>
    )
}