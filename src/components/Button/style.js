import styled from '@emotion/styled'
import { Link as Wouter } from 'wouter'
import { colors } from '@/styles/theme'

const common = `
  background-color: ${colors.tertiary};
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${colors.black};
  font-weight: 700;

  &[disabled] {
    opacity: 0.5;
  }
`

export const Button = styled.button(common)

export const Delete = styled.button(`
  ${common}
  color: ${colors.white};
  background-color: ${colors.delete};
`)

export const Link = styled(Wouter)`
${common}
padding: .8rem;
border-radius: 5px;
text-decoration: none;
`
export const Outline = styled.button(`
  ${common}
  color: ${colors.white};
  background-color: transparent;
  border: 2px solid ${colors.white};
`)
