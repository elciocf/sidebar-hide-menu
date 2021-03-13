import React from 'react'
import { Sidebar } from './components/Sidebar'
import {Home} from './components/Pages/Home'
import {Products} from './components/Pages/Products'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles/global.scss' 

export function App(){

    return (
        <>
         <Router>
          <Sidebar />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/products' component={Products} />
          </Switch>
        </Router>
        </>
    )
}