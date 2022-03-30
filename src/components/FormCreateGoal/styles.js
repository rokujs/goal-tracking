import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const form = css`
background-color: ${colors.white};
padding: 3rem;

div {
  width: 100%;
  margin-bottom: 3rem;
}

div > input:focus {
  outline: none;
}
`

export const input = css`
width: 100%;
border: 0;
padding: 1rem 0 1rem 1rem;
font-size: 1.6rem;
color: ${colors.secondary};
`

export const textarea = css`
width: 100%;
height: 12rem;
resize: none;
border: 0;
padding: 1rem;
font-size: 1.6rem;
color: ${colors.secondary};
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
