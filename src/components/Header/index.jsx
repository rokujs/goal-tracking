/** @jsx jsx */
import React, { useContext } from 'react'
import { jsx } from '@emotion/react'
import { Link } from 'wouter'

import userContext from '@/context/userContext'
import UserHeader from '@/components/UserHeader'

import { container, logo, list, item } from './styles'

function Header () {
  const { user } = useContext(userContext)

  return (
    <header css={container}>
      <Link href='/'>
        <a>
          <img css={logo} src='/logo.svg' />
        </a>
      </Link>
      <nav css={list}>
        <ul>
          {user
            ? (
            <>
              <li css={item}>
                <Link href='/new-goal'>
                  <a>Create goal</a>
                </Link>
              </li>
              <li css={item}>
                <UserHeader />
              </li>
            </>
              )
            : (
            <>
              <li css={item}>
                <Link href='/login'>
                  <a>Login</a>
                </Link>
              </li>
              <li css={item}>
                <Link href='/register'>
                  <a>Register</a>
                </Link>
              </li>
            </>
              )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
