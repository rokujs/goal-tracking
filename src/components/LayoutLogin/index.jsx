/** @jsx jsx */
import { jsx } from '@emotion/react'
import FormLogin from '../FormLogin'

import { container, image, title, card } from './styles'

function LayoutLogin () {
  return (
    <main css={container}>
      <div css={card}>
        <div css={image}>
          <img src='/logo.svg' />
        </div>
        <h2 css={title}>Login</h2>
        <FormLogin />
      </div>
    </main>
  )
}

export default LayoutLogin
