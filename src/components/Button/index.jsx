/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Link, Delete } from './style'

function ButtonComponent ({ children, href, remove, onClick, disabled }) {
  if (remove) return <Delete onClick={onClick}>{children}</Delete>

  return href
    ? <Link href={href}>{children}</Link>
    : <Button onClick={onClick} disabled={disabled}>{children}</Button>
}

export default ButtonComponent
