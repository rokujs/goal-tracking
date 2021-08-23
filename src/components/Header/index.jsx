/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'wouter'

import { container, logo, list, item } from './styles'

function Header () {
  return (
    <div css={container}>
      <Link href='/'>
        <a>
          <img css={logo} src='public/logo.svg' />
        </a>
      </Link>
      <nav css={list}>
        <ul>
          <li css={item}>
            <Link href='/new-goal'>
              <a>Create goal</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
