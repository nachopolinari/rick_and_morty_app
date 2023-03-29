import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {

    //const myFavorites = useSelector(state => state.myFavorites) useSelector trae del estado y se queda solamente con la propiedad myFavorites(recordemos que es un array que se va llenando con la fn handleFavorite)-- todo esto lo guardo en una const myFavorites

    /*DESESTRUCTURADO SE VE ASI: */
    const { myFavorites } = useSelector(state => state);

    return (
        <div>
            {
                myFavorites.map((character) => { //creo un nuevo map para que me muestre los personajes que estan en el array myFavorites
                    return (
                        <div>
                            <Link to={`/detail/${character.id}`} /*aca le estoy diciendo que cuando toque name vaya al link detail/id*/ >   <h2>{character.name}</h2>      </Link>

                            <h3>Status: {character.status}</h3>
                            <h3>Species: {character.species}</h3>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Origin: {character.origin}</h3>
                            <img src={character.image} alt={character.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;