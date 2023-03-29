import './App.css';
import CardsList from './components/CardsList/CardsList';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './Views/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';


function App() {

  const [characters, setCharacters] = useState([]); //creo el estado "characters" y su funcion setCharacters, defino que el useSteta será un array vacio
  const location = useLocation(); //hook de react-ruoter-dom=> devuelve un obj con la propiedad "pathname" que me sirve para un renderizado condicional
  const navigate = useNavigate(); //hook de react-router-dom para la simulacion de validacion ->
  const [access, setAccess] = useState(false); // creo el estado access para la simulacion de seguridad. inicia seteado en false..

  //---------SIMULACION DE VALIDACION
  const email = "rick_sanchez@gmail.com"
  const password = "WubbaLubbaDubDub1"

  const login = (userData) => {                               //login es una funcion que recibe por parametro userData de <Forms/>
    if (userData.email === email && userData.password === password) {  // si el mail y passw coinciden ...
      setAccess(true)                                               //SETEA EL ESTADO ACCESS A TRUE..
      navigate("/home")                                             // y ademas navigate nos redirige a "/home" dando la sensacion de "ingresar" al sitio..
    }
  }

  useEffect(() => {                //access inicia en false. si se mantiene en false "!access" seria true..en ese caso navigate me llevaria a "/"
    !access && navigate("/")          //sino entraria al caso del login
  }
    , [access])  //el array de dependencia queda escuchando access

  //------------------------------

  const onSearch = (id) => { //la funcion onSearch se encarga de setear el estado agregando un personaje segun el id
    // fetch(`https://rickandmortyapi.com/api/characters/${id}`) //fetch busca la indo en la API
    //   .then((response) => response.json()) //estova por defecto luego del fetch..lugo lo veremos
    //   .then((data) => { //el dato que recibe luego de fetch lo denomina "data"
    //     if (data.name && !characters.find((char)=>char.id ===data.id)) {  //si, data tiene una propiedad name y (ver find para que no repita las cards)
    //       setCharacters([...characters, data])  //setea el estado de characters agregando al array la data
    //     } else {
    //       window.alert("No hay personajes con ese ID") //si no, s  alta un alert
    //     }
    //   })

    /**LO MISMO PERO REALIZADO CON AXIOS */
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID o ya ha sido seleccionado!');
        }
      });
  }

  const onClose = (id) => { /**onClose es una funcion para quitar una card */
    const parseId = parseInt(id) //parseado para convertir a number los id que vienen como string 
    setCharacters(characters.filter((char) => char.id !== parseId)); /**setea el estado con un array filtrado dnd estan todos los characters  excepto el que le paso por id (recordar que filter no modifica el array original sino que devuelve uno nuevo.*/
  }

  return (
    <div className="App">


      {location.pathname === "/" ? <Forms login={login} /*funcion login por props*/ /> : <Nav onSearch={onSearch} /*app le pasa por prop la funcion onSearch*/
      /*SI LOCATION.PATHNAME = a "/"->RENDER FORMS,sino RENDER NAV*/ />}

      <Routes /*Routes envuelve a todo lo que vayamos a navegar */>

        <Route path="/home" element={<CardsList characters={characters} onClose={onClose} />} /*app le pasa por prop characters y la funcion onClose*/ />
        <Route path="/about" element={<About />} />
        <Route path='/detail/:id' element={<Detail />}  /*aca le estoy diciendo que cuando este en la ruta detail/ (cualquier cosa) o mejor dicho id que viene de  cardItem, me pinte el componente detail*/ />
        <Route path='/favorites' element={<Favorites/>} />

      </Routes>

    </div >




  );
}

export default App;
