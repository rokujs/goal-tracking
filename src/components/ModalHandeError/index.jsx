/** @jsx jsx */
import { jsx } from '@emotion/react'

import { container, msg, btn } from './styles'

function ModalHandleError ({ message, onClose }) {
  return (
    <div css={container}>
      <p css={msg}>{message}</p>
      <button css={btn} onClick={onClose}>Close</button>
    </div>
  )
}

export default ModalHandleError
