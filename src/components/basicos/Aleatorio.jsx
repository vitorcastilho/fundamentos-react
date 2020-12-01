import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const resultado = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    return (
        <div>
            <h1>Valor Aleatório</h1>
            <p>Valor Mínimo: {props.min}</p>
            <p>Valor Máximo: {props.max}</p>
            <p>Resultado: {resultado}</p>
        </div>
    )
}