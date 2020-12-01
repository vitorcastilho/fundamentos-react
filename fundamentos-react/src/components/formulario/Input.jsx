import React, { useState } from 'react'
import './Input.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [valor, setvalor] = useState('Inicial')

    function quandoMudar(e) {
        setvalor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div className='Input-controlado'>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
            </div>
        </div>
    )
}