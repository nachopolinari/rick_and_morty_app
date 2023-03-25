import './App.css';
import CardsList from './components/CardsList/CardsList';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import About from './Views/About/About';
import Detail from './components/Detail/Detail';


function App() {

  const [characters, setCharacters] = useState([]); //creo el estado "characters" y su funcion setCharacters, defino que el useSteta será un array vacio

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
    setCharacters(characters.filter((char) => char.id !== id)); /**setea el estado con un array filtrado dnd estan todos los characters  excepto el que le paso por id (recordar que filter no modifica el array original sino que devuelve uno nuevo.*/
  }

  return (
    <div className="App">

      <Nav onSearch={onSearch} /*app le pasa por prop la funcion onSearch*/ />
      <Routes /*Routes envuelve a todo lo que vayamos a navegar */>

        <Route path="/about" element={<About />} />
        <Route path="/home" element={<CardsList characters={characters} onClose={onClose} />} /*app le pasa por prop characters y la funcion onClose*/ />
        <Route path='/detail/:detail_Id' element={<Detail />}  /*aca le estoy diciendo que cuando este en la ruta detail/ (cualquier cosa) o mejor dicho id que viene de  cardItem, me pinte el componente detail*//>
      </Routes>

    </div >




  );
}

export default App;
