import { Link } from "react-router-dom";
import style from "./CardItem.module.css"
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //el hook useDispatch reemplaza al mapDispatchToProps, el useSelector selecciona una propiedad del estado global(para no traerte todo)


const CardItem = (props) => { /**me llega un obj dentro del obj props */
    const { onClose, name, status, species, gender, origin, image, id } = props //**destructuring */    

    const dispatch = useDispatch(); //guardo en una constante el dispatch para luego usarlo
    const myFavorites = useSelector(state => state.myFavorites) // useSelector trae del estado y se queda solamente con la propiedad myFavorites(recordemos que es un array que se va llenando con la fn handleFavorite)-- todo esto lo guardo en una const myFavorites

    const [isFav, setIsFav] = useState(false); //creo un estado "isFav" que inicia como false

    const handleFavorite = () => { //creo una funcion "handleFavorite"
        if (isFav) {                 // si el estado isFav esta en true..
            setIsFav(false);         // seteo el estado en false
            dispatch(removeFavorite(id)) //despacho la funcion removeFavorite y le paso el id desestructurado que el componente esta recibiendo por props
        }
        else {                          //si el estado isFav esta en false..
            setIsFav(true);             //seteo el estado en true
            dispatch(addFavorite({ onClose, name, status, species, gender, origin, image, id }))   // y despacho la fn addFavorite con toda la info que viene por props.. aclaracion: en este caso ya esta desestructurada si no estuviera desestructurada pasaria "props" directamente
        }
    }

    useEffect(() => { //este useEffect se queda escuchando cambios en myFavorites. cuando algo cambie vuelve a renderizar
        myFavorites.forEach((fav) => { // recorre el array estado global myFavorites y por cada uno analiza..
            if (fav.id === id) { //si fav.id es igual a props.id..
                setIsFav(true);         // setea el estado en true para que se guarde eso sin importar si nos vamos de la pag y luego volvemos
            }
        });
    }, [myFavorites]);

    return (/**aca pinto con JSX como si fuera HTML y dentro de { }traigo las propiedades que llegaron por objprops */
        <>

            <div className={style.CardItem}>

                {isFav ? (  //esto es un renderizado condicional del corazon rojo o corazon blanco para indicar si está en favoritos o no. 
                    <button onClick={handleFavorite}>❤️</button> //esta en fav? si es si, pinta el corazon rojo, 
                ) : (                                         //si es NO pinta el corazon blanco
                    <button onClick={handleFavorite}>🤍</button>   // en ambos se dispara la fn handleFavorite al hacer click
                )
                }

                <button onClick={() => onClose(id)}>X</button>
                <Link to={`/detail/${id}`} /*aca le estoy diciendo que cuando toque name vaya al link detail/id*/ >   <h2>{name}</h2>      </Link>

                <h3>Status: {status}</h3>
                <h3>Species: {species}</h3>
                <h3>Gender: {gender}</h3>
                <h3>Origin: {origin}</h3>
                <img src={image} alt={name} />

            </div>
        </>

    )
}

export default CardItem;