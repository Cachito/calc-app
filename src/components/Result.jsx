import React from "react";
import PropTypes from 'prop-types'

/* puedo declara la funcion con un parámetro que será un ojeto */
/* const Result = (props) => */

/*
    puedo declarar el destructuring en la firma
    es decir, en los parametros son objetos qye tendrán propiedades
    con nombres como los que le pusimos en la llamada,
    pero si en la firma pongo el mismo nombre entre llaves
    esto entiende que es esa propiedad del objeto que recibió
    así, puedo tener uno o más parametros en la llamada y
    una o mas variables en la firma
*/

// result sin simplificar
{/*
const Result = ({ value }) => {
    //acá declaro el destructuring
    //const { value } = props
    //debugger
    //console.log("Render Result", value)
    return (
        <div className="result">
                esto se puede hacer en más de una línea:
                {
                    props.value
                }

            //acá uso destructuring
            {value}
        </div>
    )
*/}

//result simplificado
const Result = ({ value }) =>(
    <div className="result">
        {value}
    </div>
)

/*
    se valida el tipo de dato del parámetro value
    usando prop-types
    sólo funciona en modo debug,
    una vez compilado el proyecto para producción
    no se muestran los warnings
*/
Result.propTypes = {
    value: PropTypes.string.isRequired
}

/*
    se asigna un valor por defecto
    al parámetro esperado
    esto funciona incluso envinado "undefined"
*/
Result.defaultProps = {
    value: "0"
}

export default Result