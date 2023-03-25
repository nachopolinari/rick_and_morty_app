import { useState } from "react";


const SearchBar = (props) => { /**recibo por props onSearch que es una funcion */
    const { onSearch } = props /**destructuring para sacarla del obj props */

    const [id, setId] = useState("")  // creo el estado Id, su funcion setId que lo modificará  y el hook es un array vacio

    const handleChange = (event) => { //funcion que va a recibir el evento y setea el ID asignandole el valor que el usuario escribe en el input
        setId(event.target.value)
    }
    console.log(id);
    return (
        <div>
            <input type="search" onChange={handleChange}/*al escribir algo en el input, se seteará el ID del componente*/ />
            <button onClick={() => onSearch(id)} /*esta es una funcion flecha que retorna la ejecucion de onSearch() con parametro id*/ >Agregar </button>
            
            <button /**aca crearemos una funcion para que seleccione un personaje aleatorio */>Agregar de forma  aleatoria</button>

        </div>
    )
}

export default SearchBar;



//QUIERO QUE EL INPUT SOLO PERMITA ESCRIBIR NUMEROS
//QUIERO QUE EXISTA UN BOTON QUE ELIJA ALEATORIAMENTE
//QUE SALGA UN CARTEL QUE INDIQUE QUE UN PERSONAJE YA FUE ELEGIDO
