import React from 'react'
import './App.css'

// Componentes
import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className='Cards'>

                <Card titulo='#13 - Mega' color='#e74c3c'>
                    <Mega qtde={6}/>
                </Card>

                <Card titulo='#12 - Contador' color='#e67e22'>
                    <Contador numeroInicial={10}></Contador>
                    {/* <Contador numeroInicial={100}></Contador> */}
                </Card>

                <Card titulo='#11 - Componente Controlado' color='#f1c40f'>
                    <Input></Input>
                </Card>

                <Card titulo='#10 - Comunicação Indireta' color='#2c3e50'>
                    <IndiretaPai />
                </Card>

                <Card titulo='#9 - Comunicação Direta' color='#8e44ad'>
                    <DiretaPai />
                </Card>

                <Card titulo='#8 - Renderização Condicional' color='#2980b9'>
                    <ParOuImpar numero={20} />
                    <ParOuImpar numero={27} />
                    <UsuarioInfo usuario={{ nome: 'Jorge' }} />
                    <UsuarioInfo usuario={{ email: 'fernando@email.com' }} />
                    <UsuarioInfo usuario={{}} />
                    <UsuarioInfo />
                </Card>

                <Card titulo='#7 - Desafio Repetição' color='#27ae60'>
                    <TabelaProdutos />
                </Card>

                <Card titulo='#6 - Repetição' color='#16a085'>
                    <ListaAlunos />
                </Card>

                <Card titulo='#5 - Componentes com Filhos' color='#34495e'>
                    <Familia sobrenome='Almeida'>
                        <FamiliaMembro nome='Pedro' />
                        <FamiliaMembro nome='Ana' />
                        <FamiliaMembro nome='Gustavo' />
                    </Familia>
                </Card>

                <Card titulo='#4 - Desafio Aleatório' color='#1abc9c'>
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo='#3 - Fragmento' color='#2ecc71'>
                    <Fragmento />
                </Card>

                <Card titulo='#2 - Utilizando Parametro' color='#3498db'>
                    <ComParamentro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card titulo='#1 - Primeiro Exemplo' color='#9b59b6'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}