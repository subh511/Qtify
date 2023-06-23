import Button from "../Buttons/Buttons";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import React from "react";

function NavBar(){
    return(
        <nav className="navbar">
        <Logo/>
        <SearchBar/>
        <Button text="Give Feedback"/>
        </nav>
    )
}
export default NavBar;
//<Button text="Give Feedback"/>