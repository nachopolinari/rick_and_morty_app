import CardItem from "../CardItem/CardItem";

const CardsList = (props) => {/**lo que recibo en el obejto props es un array characters con objetos dentro */
    return (
        <div>
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
        </div>
    )
}

export default CardsList;