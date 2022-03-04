import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

const sizeClose = '3rem'

export const container = css`
  z-index: 10;
  position: relative;
  padding: 1.2rem;
  min-width: 36rem;
  max-width: 52rem;
  min-height: 20rem;
  max-height: 60rem;
  overflow-y: auto;
  background-color: ${colors.white};
  border-radius: 1rem;
`

export const modal = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const bg = css`
  background-color: ${colors.black}22;
  backdrop-filter: blur(2px);
  width: inherit;
  min-height: inherit;
  position: absolute;
  z-index: 9;
`

export const btn = css`
  padding: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${colors.secondary};
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;

  & > div {
    height: ${sizeClose};
    width: ${sizeClose};
    position: relative;

    &:after {
      content: '';
      background: ${colors.primary};
      position: absolute;
      height: ${sizeClose};
      left: 1rem;
      border-radius: 1rem;
      transform: rotate(45deg);
      width: 0.75rem;
    }

    &:before {
      content: '';
      background: ${colors.primary};
      position: absolute;
      height: ${sizeClose};
      left: 1rem;
      border-radius: 1rem;
      transform: rotate(-45deg);
      width: 0.75rem;
    }

  }
`
