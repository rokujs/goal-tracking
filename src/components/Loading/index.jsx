/** @jsx jsx */
import { jsx } from '@emotion/react'

import { spinner } from './styles'

function Loading () {
  return (
    <div css={spinner}>
    </div>
  )
}

export default Loading
