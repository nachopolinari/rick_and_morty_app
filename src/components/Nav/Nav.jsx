import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => { //nav solo se encarga de hacer un pasamanos

    return (
        <div className={style.NavStyle}>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/about" >About</Link>
            <br />
            <Link to='/favorites'>Favorites</Link>
            <br />
            <Link to="/" /*extra de forms->si tocas logout te lleva al inicio*/ >LogOut</Link> 
            <br />
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

//EXTRA 1: crea un boton que permita agregar un personaje random

export default Nav; 