/** @jsx jsx */
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

function Goal ({
  id,
  title,
  description,
  timeEnd,
  tries,
  todayDone,
  days,
  url,
  dayWithoutFail,
  start,
  onClick,
  onDrop
}) {
  return (
    <div css={container}>
      <h3 css={styleTitle}>{title}</h3>

      <div css={styleDescription}>
        <p>{description}</p>
      </div>

      {tries.length > 0 && (
        <div css={info}>
          <div>
            <span>Tries</span>
            <b>{tries.length}</b>
            <Button href={url}>History</Button>
          </div>

          <div>
            <span>Consecutive days</span>
            <b>{days}</b>
          </div>
        </div>
      )}

      <div css={end}>
        <span>The goal will end in</span>
        <b>{timeEnd}</b>
        <span>{timeEnd === 1 ? 'day' : 'days'}</span>
      </div>

      <div css={btn}>
        <Button remove onClick={() => onDrop({ goalId: id, start })}>
          <span>Drop</span>
        </Button>
        <Button onClick={() => onClick(id)}>
          {todayDone ? <span>Done</span> : <span>Pending</span>}
        </Button>
      </div>
    </div>
  )
}

export default Goal
