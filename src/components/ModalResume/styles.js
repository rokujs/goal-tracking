import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const form = css`
  background-color: ${colors.white};
  padding: 3rem;

  div {
    width: 100%;
    margin-bottom: 3rem;
  }
`

export const date = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 1.4rem;
    color: ${colors.secondary};
  }
`

export const titleStyles = css`
  color: ${colors.primary};
  font-size: 2.4rem;
`
