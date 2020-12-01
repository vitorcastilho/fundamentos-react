import React, { useState } from 'react'
import './Mega.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        return array.includes(aleatorio)
            ? gerarNumeroNaoContido(min, max, array)
            : aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' - ')}</h3>
            <div className="Mega-qtde">
                <label htmlFor="">Quantidade de Números</label>
                <input type='number' 
                        min='6'
                        max='15'
                        value={qtde} 
                        onChange={e => {
                            setQtde(+e.target.value)
                            setNumeros(gerarNumeros(+e.target.value))
                        }} />
            </div>
            <button onClick={e => setNumeros(gerarNumeros(qtde))}>Gerar Número</button>
        </div>
    )
}