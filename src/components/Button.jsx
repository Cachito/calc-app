// importo referencias
import React from "react";

// componente funcional
const Button = ({ type, text, clickHandler }) => {
    return (
        <button className={type} onClick={() => {
            console.log("click en 1")
            clickHandler(text)
        }}>
            <span>{ text }</span>
        </button>
    )
}

// exportación
export default Button