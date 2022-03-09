import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const card = css`
  background-color: ${colors.primary};
  width: 34rem;
  height: 60rem;
  padding: 3rem;
`

export const image = css`
  width: 100%;
  margin-bottom: 4rem;
  img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`

export const title = css`
  font-size: 2.2rem;
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.15rem;
  margin-bottom: 2rem;
`
