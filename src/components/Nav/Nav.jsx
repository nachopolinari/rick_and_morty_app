import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav= (props)=>{ //nav solo se encarga de hacer un pasamanos

    return(
        <>
        <SearchBar onSearch={props.onSearch}/>
        <Link to="/about" >About</Link>
        <Link to="/home">Home</Link>
        </>
    )
}

export default Nav; 