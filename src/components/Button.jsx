// importo referencias
import React from "react";
import PropTypes from 'prop-types'

// componente funcional
const Button = ({ type, text, clickHandler }) => {
    /* sin llaves*/
    return (
        <button className={type} onClick={() => clickHandler(text)}>

    {/* con llaves
        <button className={type} onClick={() => {
            console.log("click button 1")
            clickHandler(text)
        }}>
    */}
            <span>{ text }</span>
        </button>
    )
}

// otra forma de hacer lo anterior es sin return y sin llaves
// cuando el return es la primera línea, es decir que no hay
// otro algoritmo incluido
/*
const Button = ({ type, text, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{ text }</span>
    </button>
)
*/

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
// exportación
export default Button