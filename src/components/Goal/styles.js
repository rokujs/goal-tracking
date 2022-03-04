import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  min-width: 20rem;
  padding: 1rem;
  background-color: ${colors.white};
  border-radius: 1rem;

  box-shadow: 0 0.5rem 1rem #aaa;
`

export const title = css`
  color: ${colors.primary};
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
`

export const description = css`
  color: ${colors.secondary};
  padding: 0.5rem;
  font-size: 1.8rem;
  border-bottom: 2px solid #aaa;
`

export const info = css`
  padding: 0.5rem;
  font-size: 1.6rem;
  color: ${colors.black};

  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem auto;
  }
`

export const end = css`
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: ${colors.black};
  text-align: center;

  span:first-of-type {
    margin-right: 0.5rem;
  }

  span:last-child {
    margin-left: 0.5rem;
  }
`

export const btn = css`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
`
