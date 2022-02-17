// importación de referencias
import React from 'react'
import Button from './components/Button'
import Result from './components/Result'

import './App.css'

// generación de la función del componente
// al generar el componente es una buena práctica
// que el nombre coindida con el nombre del archivo
// arrow function
// son siempre anónimas
// cuando el cuerpo tiene una sola línea se puede:
// -> obviar las llaves
// -> usar parentesis para encerrar el cuerpo
// -> obviar el return
// -> si hay parámetros van en los parentesis al inicio
// -> es decir que esta sintaxis define la firma del método
const App = () => {
    const clickHandlerFunction = text => {
        console.log("clickHandler", text)
    }

    // -> cuerpo del método
    console.log("Render App")
    // acá no puedo aplicar class a un elemento, sino className
    return (
    <main className='react-calculator'>
        <Result value={undefined} />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction} />
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>clear</button>
            <button>r</button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>
    )
}

// exportación
// hay más de una manera de exportar
// por defecto se define un componente por archivo
// y se exporta con "default"
export default App
