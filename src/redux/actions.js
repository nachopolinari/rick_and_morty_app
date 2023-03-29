import { ADD_FAV,REMOVE_FAV } from "./action-types"; // me importo las actions-type guardadas en variables const

//cada action es una funcion 
export const addFavorite=(character)=>{ //esta recibe un character como parametro 
    return{
        type: ADD_FAV, //retorna el type con el string que le indicamos(esto lo utilizará el reducer en el switch para comparar)
        payload: character //payload es el valor que queremos cambiar..en este caso el valor será lo que recibimos por parametro
    }
}

export const removeFavorite=(id)=>{ //en este caso recibimos por parametro el id del character que queremos eliminar
    return {
        type: REMOVE_FAV,
        payload: id
    }
}