import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  min-width: 25rem;
  max-width: 30rem;
  min-height: 30rem;
  padding: 3rem;
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
  margin-bottom: 1.5rem;
`

export const info = css`
  padding: 0.5rem;
  font-size: 1.8rem;
  color: ${colors.black};
  margin: 0.5rem 0;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1.5rem auto;

    p {
      span {
        margin-right: 0.5rem;
      }
    }
  }
`

export const end = css`
  width: 100%;
  padding: 0.6rem 0;
  font-size: 1.8rem;
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
  padding-top: 1rem;
  border-top: 2px solid #aaa;
`
