import React from "react";
import "./Buttons.css";
function Button({text}){

    return(
        <div>
        <button className="button">{text}</button>
        </div>
    )

}
export default Button;