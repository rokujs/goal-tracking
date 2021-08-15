import React from 'react'
import { Route, Switch } from 'wouter'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Register from '@/pages/Register'

function App () {
  return (
    <div className=''>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
