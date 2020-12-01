import React from 'react'
import './IndiretaFilho.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const cb = props.quandoClicar
    
    const min = 50
    const max = 70
    
    const gerarIdade = () => parseInt(Math.random() * (max - min + 1) + min)
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div className="Indireta-filho">
            <div>
                Filho
            </div>
            <button onClick={e => cb('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}