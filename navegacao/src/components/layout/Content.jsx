import React from 'react'
import './Content.css'

import { Switch, Route } from 'react-router-dom'

// Components
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className='Content'>
        <Switch>
            <Route exact path='/param'>
                <Param />
            </Route>
            <Route exact path='/param/:id'>
                <Param />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>

            <Route exact path='/'>
                <Home />
            </Route>

            {/* Garante que caso seja digitado um link que não existe, seja direcionado para página home */}
            {/* <Route path='/'>
                <Home />
            </Route> */}

            <Route path='*'>
                <NotFound />
            </Route>

        </Switch>
    </main>
)

export default Content