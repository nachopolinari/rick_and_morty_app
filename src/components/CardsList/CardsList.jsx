import CardItem from "../CardItem/CardItem";
import { CardsListContainer } from "./styledComponentsCardList";

const CardsList = (props) => {/**lo que recibo en el objeto props es un array characters con objetos dentro */

    return (
        <CardsListContainer /**esto antes era un div pero lo cambié por CardsListContainer para darle estilo con styled-component */>
            {props.characters.map((character) => {/**mapeo el array characters (llamandolo desde el obj props), y por cada objeto que recorra.. */
                return <CardItem key={character.id} /**retorno un component CardItem, al que ademas le paso props..*/
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name} /**ojo con origin */
                    image={character.image}
                    onClose={props.onClose}
                />
            })}
        </CardsListContainer>
    )
}

export default CardsList;