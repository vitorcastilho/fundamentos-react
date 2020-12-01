import React from 'react'
import './Contador.css'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 4
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {

        if (this.state.numero < this.state.passo) {
            this.setState({
                numero: 0
            })
            return
        }
        if (this.state.numero === 0) {
            return
        }

        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <div className='Contador-passo'>
                    <label htmlFor="passoInput">Passo:</label>
                    <input id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso} />
                </div>
                <div className='Contador-content'>
                    <button onClick={this.dec} >-</button>
                    <p>Valor Inicial é {this.state.numero}</p>
                    <button onClick={this.inc} >+</button>
                </div>
            </div>
        )
    }
}