/** @jsx jsx */
import { jsx } from '@emotion/react'

import {
  container,
  title as styleTitle,
  description as styleDescription,
  info,
  end as styleEnd,
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
  start,
  end,
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
        </div>
      )}

      {!end && (
        <div css={info}>
          <div>
            <span>Consecutive days</span>
            <b>{todayDone ? days : days - 1}</b>
          </div>
        </div>
      )}

      {!end && (
        <div css={styleEnd}>
          <span>The goal will end in</span>
          <b>{timeEnd}</b>
          <span>{timeEnd === 1 ? 'day' : 'days'}</span>
        </div>
      )}

      <div css={btn}>
        {end
          ? <Button><span>Resume</span></Button>
          : <Button remove onClick={() => onDrop({ goalId: id, start })}><span>Drop</span></Button>
        }

        {todayDone
          ? <Button disabled><span>Done</span></Button>
          : <Button onClick={() => onClick(id)} ><span>Pending</span></Button>
        }
      </div>
    </div>
  )
}

export default Goal
