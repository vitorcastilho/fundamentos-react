import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <div>
                    Pai
                </div>
                {nome !== '?' && //  idade && nerd &&
                    <div>
                        <span>{nome} </span>
                        <span><strong>{idade}</strong></span>
                        <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
                    </div>
                }
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}