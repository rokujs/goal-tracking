import styled from '@emotion/styled'
import { Link as Wouter } from 'wouter'
import { colors } from '@/styles/theme'

const common = `
  background-color: ${colors.tertiary};
  padding: 1rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  color: ${colors.black};
  font-weight: 700;
`

export const Button = styled.button(common)
export const Link = styled(Wouter)`
${common}
padding: .8rem;
border-radius: 5px;
text-decoration: none;
`
