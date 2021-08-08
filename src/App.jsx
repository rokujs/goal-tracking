import React from 'react'
import { Route, Switch } from 'wouter'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
