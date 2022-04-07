import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const localUser = JSON.parse(window.localStorage.getItem('user'))
  const [jwt, setJwt] = useState(localUser?.jwt)
  const [user, setUser] = useState(localUser?.user)

  return (
    <Context.Provider value={{ jwt, setJwt, user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
