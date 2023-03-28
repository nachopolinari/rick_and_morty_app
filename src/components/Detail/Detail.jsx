import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = (props) => {

    const params = useParams() //el useParams de react router dom me trae cualquier valor que este en routes de app luego de los ":"  ...por ejemplo ":detailID " en este caso. Lo guarda en params

    const [character, setCharacter] = useState({})

    //el USEEFFECT escrito de esta forma trabaja directamente cuando el componente se monta ("comoponent DID mount")
    useEffect(() => { // este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información. 
        axios(`https://rickandmortyapi.com/api/character/${params.id}`)
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
 
        //Existe character.name ? Pintame esto : Sino pintame LOADING...
        <div> 
            {character.name ? (  <>
            <h2>Detail´s:</h2>
                <h3>Name:{character.name}</h3>
                <img src={character.image} alt={character.name} />
                <h3>{character.status}</h3>
                <h3>{character.species}</h3>
                <h3>{character.gender}</h3>
                <h3>{character.origin?.name}</h3>
            </> ) : (  <h3>Loading...</h3> )}
        </div> //
    )
}

// EXTRA 2: Ahora te desafiamos a que crees un nuevo componente llamado Error. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404. ¡Puedes inspirarte en este ejemplo!

// El desafío es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que 

//ejemplo: https://github.com/errroorrxd

export default Detail;