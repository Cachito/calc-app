// importo referencias
import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

// componente funcional
const MathOperations = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        <Button text = "+" clickHandler={onClickOperation} />
        <Button text = "-" clickHandler={onClickOperation} />
        <Button text = "*" clickHandler={onClickOperation} />
        <Button text = "/" clickHandler={onClickOperation} />
        <Button text = "=" clickHandler={onClickEqual} />
    </section>
)

// prop-types
MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

// exportación
export default MathOperations