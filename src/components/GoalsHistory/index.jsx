/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import ItemHistory from '../ItemHistory'

import { styleTitle, styleDescription, table, containerTable } from './styles'

function TableHistory ({ title, description, list }) {
  return (
    <>
      <h1 css={styleTitle}>{title}</h1>
      <h3 css={styleDescription}>{description}</h3>
      <div css={containerTable}>
      <table css={table}>
        <tbody>
          <tr>
            <th>#</th>
            <th>Start</th>
            <th>End</th>
            <th>Consecutive days</th>
          </tr>
          {list.map((goal, index) => (
            <tr key={index}>
              <ItemHistory start={goal.start} end={goal.end} index={index} />
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default TableHistory
