import React, { cloneElement } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            {/* Passa explicitamente uma propriedade para o filho */}
            {/* <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome}/> */}
            {/* Passa todas as propriedades para o filho */}
            {/* <FamiliaMembro nome='Ana' {...props}/>  */}
            {/* Funciona quando recebe apenas um elemento */}
            {/* {cloneElement(props.children, {...props})} */}

            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i })
            })}
        </div>
    )
}