import React from 'react'
import { Route, Switch } from 'wouter'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Register from '@/pages/Register'
import CreateGoal from './pages/CreateGoal'

function App () {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/new-goal' component={CreateGoal} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
