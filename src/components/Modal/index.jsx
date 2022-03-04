/** @jsx jsx */
import { jsx } from '@emotion/react'
import { createPortal } from 'react-dom'

import { container, modal, bg, btn } from './styles'

function Modal ({ children, onClose }) {
  return (
    <article css={modal}>
      <div css={bg} onClick={onClose}></div>
      <div css={container}>
        <button css={btn} onClick={onClose}>
          <div></div>
        </button>
        {children}
      </div>
    </article>
  )
}

function ModalPortal ({ children, onClose }) {
  return createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}

export default ModalPortal
