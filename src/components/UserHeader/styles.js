import { css } from '@emotion/react'
import { colors } from '@/styles/theme'

export const container = css`
  position: relative;
`

export const userContainer = css`
  display: inline-block;

  button {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.secondary};
    cursor: pointer;
    background: none;
    border: none;
  }

  button: hover {
    color: ${colors.white};
    text-decoration: underline;
  }
`

export const list = ({ hidden }) => css`
  display: ${hidden ? 'none' : 'block'};
  position: absolute;
  background-color: ${colors.white};
  padding: 1rem 1.4rem;
  border-radius: 0.5rem;
  width: max-content;
  top: 3rem;
  right: 0.5rem;
  text-align: right;


  .close {
    background: none;
    border: none;
    font-size: 1rem;
    text-align: right;
    cursor: pointer;
    color: ${colors.delete};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: auto;
    margin-top: 1rem;
    margin-right: 1rem;
  }

  ul > li > button {
    background: none;
    border: none;
    color: ${colors.secondary};
    font-size: 1.4rem;
    cursor: pointer;
  }
`

export const item = css`
  display: inline-block;
  margin-right: 1rem;

  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.secondary};
  }

  a: hover {
    text-decoration: underline;
    color: ${colors.white};
  }
`
