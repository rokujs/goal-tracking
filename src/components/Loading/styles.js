import { css, keyframes } from '@emotion/react'
import { colors } from '@/styles/theme'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const spinner = css`
  border: 5px solid ${colors.white}ee;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-left-color: ${colors.primary};
  border-right-color: ${colors.primary};
  animation: ${spin} 1s linear infinite;
`
