import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  display: flex;
  width: auto;
  height: 10rem;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: ${colors.tertiary};
`

export const logo = css`
  width: 8rem;
  height: 8rem;
`
export const list = css`
  ul {
    list-style: none;
  }
`

export const item = css`
  display: inline-block;
  margin-right: 1rem;

  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.secondary};
  }

  a: hover {
    text-decoration: underline;
    color: ${colors.white};
  }
`
