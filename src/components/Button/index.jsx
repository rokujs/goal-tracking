/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Link } from './style'

function ButtonComponent ({ children, href }) {
  return href
    ? (
    <Link href={href}>
      {children}
    </Link>
      )
    : (
    <Button>{children}</Button>
      )
}

export default ButtonComponent
