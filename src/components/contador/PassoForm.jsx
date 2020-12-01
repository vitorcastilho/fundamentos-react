import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className='Contador-passo'>
            <label htmlFor="passoInput">Passo:</label>
            <input id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}