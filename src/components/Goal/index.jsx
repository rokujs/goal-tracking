/* eslint-disable react/prop-types */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import {
  container,
  title as styleTitle,
  description as styleDescription,
  info,
  end,
  btn
} from './style'
import Button from '../Button'

const t = new Date(2020, 3, 6)

function Goal ({ title, description, timeEnd, tries, todayDone, days, url }) {
  console.log(t)
  return (
    <div css={container}>
      <h3 css={styleTitle}>{title}</h3>

      <div css={styleDescription}>
        <p>{description}</p>
      </div>

      <div css={info}>
        <div>
          <span>Tries</span>
          <b>{tries}</b>
          <Button href={url}>History</Button>
        </div>

        <div>
          <span>Consecutive days</span>
          <b>{days}</b>
        </div>
      </div>

      <div css={end}>
        <span>The goal will end in</span>
        <b>{timeEnd}</b>
        <span>{timeEnd === 1 ? 'day' : 'days'}</span>
      </div>

      <div css={btn}>
        <Button>{todayDone ? <span>Done</span> : <span>Pending</span>}</Button>
      </div>
    </div>
  )
}

export default Goal
