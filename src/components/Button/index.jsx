/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Link, Delete, Outline } from './style'

function ButtonComponent ({ children, href, remove, onClick, disabled, outline }) {
  if (remove) return <Delete onClick={onClick}>{children}</Delete>

  if (outline) return <Outline onClick={onClick}>{children}</Outline>

  return href
    ? <Link href={href}>{children}</Link>
    : <Button onClick={onClick} disabled={disabled}>{children}</Button>
}

export default ButtonComponent
