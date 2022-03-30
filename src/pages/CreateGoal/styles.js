import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  display: flex;
  height: calc(100vh - 100px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const title = css`
  font-size: 2.4rem;
  margin-bottom: 4rem;
  color: ${colors.primary};
`
