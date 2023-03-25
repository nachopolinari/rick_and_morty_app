import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = (props) => {

    const params = useParams() //el useParams de react router dom me trae cualquier valor que este en routes de app luego de los ":"  ...por ejemplo ":detailID " en este caso. Lo guarda en params

    const [character, setCharacter] = useState({})

    useEffect(() => { // este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información. 
        axios(`https://rickandmortyapi.com/api/character/${params.detail_Id}`)
            .then((response) => setCharacter(response.data))
    }, [])
    //esto tmb podia ser  
    //      .then(({ data }) => {
    //        if (data.name) {
    //           setCharacter(data);
    //        } else {
    //           window.alert('No hay personajes con ese ID');
    //        }
    //     });
    //     return setCharacter({});
    //  }, []);

    return (
        // <div>
        //     <h4>Soy el detail, perras! </h4>

        //     <h3>Nombre: {character.name}</h3>
        //     <img src={character.image} alt={character.name} />
        //     <h4>Status: {character.status}</h4>
        //     <h4>Species: {character.species}</h4>
        //     <h4>Gender: {character.gender}</h4>
        //     <h4>Origin: {character.origin?.name /*aca le agregamos la pregunta para asegurarnos que la demora en encontrar la proopiedad de un objeto dentro de otro objeto no nos mande al 
        //     "Error:  Cannot read properties of undefined"-> atento que esto va a pasar siempre*/ } </h4> 
        // </div>
 
        //existe character.name ? pintame esto: sino pintame loading...
        <div> 
            {character.name ? (  <>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
            </> ) : (  <h3>Loading...</h3> )}
        </div> //
    )
}

export default Detail;