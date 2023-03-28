import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => { //nav solo se encarga de hacer un pasamanos

    return (
        <div className={style.NavStyle}>
            <Link to="/" /*extra de forms->si tocas logout te lleva al inicio*/ >LogOut</Link> 
            <Link to="/about" >About</Link>
            <Link to="/home">Home</Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

//EXTRA 1: crea un boton que permita agregar un personaje random

export default Nav; 