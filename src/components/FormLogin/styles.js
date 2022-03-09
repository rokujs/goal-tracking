import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  padding: 1.5rem 1rem;
`

export const input = css`
  margin-bottom: 1.6rem;

  label {
    font-size: 1rem;
    color: ${colors.white};
    font-weight: 300;

    input {
      display: block;
      margin-top: 0.5rem;
      border: none;
      border-bottom: 1px solid ${colors.white};
      width: 100%;
      background-color: ${colors.primary};
      color: ${colors.white};
      padding: 0 0.5rem 0.5rem 0.5rem;
      font-weight: 500;
      transition: border-bottom 0.15s;
      font-size: 1.6rem;
    }

    input::placeholder {
      color: ${colors.white};
    }

    input:focus {
      outline: none;
      border-bottom: 3px solid ${colors.white};
    }
  }
`

export const btn = css`
  margin-top: 5rem;
  text-align: center;
  `

export const forgot = css`
  padding: 5rem 4rem;
  height: calc(100vh - 100px);
`

export const eye = css`
  padding: 5rem 4rem;
  height: calc(100vh - 100px);
`
