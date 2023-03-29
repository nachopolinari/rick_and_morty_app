import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = { //defino mi estado inicial como un objeto 
    myFavorites: [],   //que tiene como propiedad un array vacio que se llama myFavorites
}

const reducer = (state = initialState, action) => { //el reducer es una funcion que tiene por parametros el state seteado en initialState y actions

    switch (action.type) { //con switch iremos comparando lo que llega por actions y accionando en base a ello.
        case ADD_FAV: //en caso de que me llegue ADD_FAV
            return {
                ...state, //hago una copia de mi estado para no perder datos que no quiero modificar
                myFavorites: [...state.myFavorites, action.payload] //y le indico que en myFavorites quiero guardar: una copia de lo que ya hay en state.myFavorites y agregarle lo q venga en action.payload. De otra manera hubiera perdido otros favoritos que estaban antes.graxx spread operetor
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== parseInt(action.payload)) //quiero guardar en el array myFavorites: recorre todo el array state.myFavorites y filtralo -> fijate en cada char y dejame en el array que devuelve filter solamente los char cuyo id sean distintos al que me llego en action.payload
            }

        default: // por default se retorna una copia del estado
            return { ...state };
    }
}

export default reducer;