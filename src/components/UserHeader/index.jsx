/** @jsx jsx */
import { useContext, useState } from 'react'
import { jsx } from '@emotion/react'

import userContext from '@/context/userContext'

import { userContainer, list, container } from './styles'

function UserHeader () {
  const { user } = useContext(userContext)
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => setIsHidden(!isHidden)
  const handleLogout = () => {
    window.localStorage.removeItem('jwt')
    window.localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <div css={container}>
      <div css={userContainer}>
        <button onClick={handleClick}>{user}</button>
      </div>
      <div css={list({ hidden: isHidden })}>
        <button className='close' onClick={handleClick}>
          close
        </button>
        <ul>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserHeader
