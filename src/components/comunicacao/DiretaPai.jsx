import React from 'react'
import DiretaFilho from './DiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <DiretaFilho nome='Sofia' idade={5} nerd={true} />
            <DiretaFilho nome='Pedro' idade={1} nerd={false} />
        </div>
    )
}