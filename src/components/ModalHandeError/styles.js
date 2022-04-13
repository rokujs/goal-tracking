import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  background-color: ${colors.delete};
  margin-top: 4rem;
  padding: 3rem;
  display: inline-block;
`

export const msg = css`
  color: ${colors.white};
  font-size: 1.6rem;
  margin-right: 1rem;
  display: inline;
`

export const btn = css`
  color: ${colors.white};
  font-size: 1.6rem;
  text-decoration: underline;
  background-color: transparent;
  border: none;
`
