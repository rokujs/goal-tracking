import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'))
  const [user, setUser] = useState(localStorage.getItem('user'))

  return (
    <Context.Provider value={{ jwt, setJwt, user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
