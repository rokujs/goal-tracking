/** @jsx jsx */
import { jsx } from '@emotion/react'
import FormRegister from '../FormRegister'

import { container, image, title, card } from './styles'

function LayoutRegister () {
  return (
    <main css={container}>
      <div css={card}>
        <div css={image}>
          <img src='/logo.svg' />
        </div>
        <h2 css={title}>REGISTER</h2>
        <FormRegister />
      </div>
    </main>
  )
}

export default LayoutRegister
