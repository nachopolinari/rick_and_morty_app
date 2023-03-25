import { Link } from "react-router-dom";

const CardItem = (props) => { /**me llega un obj dentro del obj props */

    const { onClose, name, status, species, gender, origin, image, id } = props //**destructuring */    
    return (/**aca pinto con JSX como si fuera HTML y dentro de { }traigo las propiedades que llegaron por objprops */
        <>

            <div>


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