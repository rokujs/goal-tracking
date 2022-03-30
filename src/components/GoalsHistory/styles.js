import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const styleTitle = css`
  font-size: 3.6rem;
  color: ${colors.secondary};
  margin-bottom: 3rem;
`

export const styleDescription = css`
  font-size: 2.4rem;
  color: ${colors.primary};
  margin-bottom: 2rem;
  margin-left: 1rem;
`

export const containerTable = css`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`

export const table = css`
  background-color: ${colors.white};
  border-radius: 1rem;
  width: 50vw;
  padding: 1rem;
  color: ${colors.white};

  tbody > tr {
    background-color: ${colors.primary};
    height: 2rem;
  }

tbody > tr:first-of-type {
  background-color: ${colors.secondary} !important;
}

  tbody > tr:nth-of-type(odd) {
    background-color: ${colors.primary};
  }

  tbody > tr:nth-of-type(even) {
    background-color: ${colors.tertiary};
  }

  tbody > tr > th {
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  tbody > tr > td {
    padding: 1rem;
    font-size: 1.8rem;
    text-align: center;
  }

  tbody > tr > td > span {
    margin: 0 0.4rem;
  }
`
