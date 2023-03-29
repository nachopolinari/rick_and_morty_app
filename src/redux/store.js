import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import  thunkMiddleware  from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//esta linea nos permite conectarnos con la extension REDUX DEVTOOLS

const store = createStore( //creo el store con createStore importado de redux
    reducer, //le paso el reducer que va a ser el unico que puede cambiar el state
    composeEnhacer(applyMiddleware(thunkMiddleware)) //composeEnhacer es la configuracion para el navegador, dentro de esto le paso applyMiddleware (que esté escuchando el thunkMiddleware??) // esta linea es para poder hacer peticiones a un server.
);
//ESTO DEBE ESTAR SI O SI. COPIAR PEGAR

export default store;