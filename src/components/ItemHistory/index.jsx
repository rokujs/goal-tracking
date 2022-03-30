import React from 'react'
import { TimeDiff, StartDay } from '@/utils/Date'

function ItemHistory ({ start, end, index }) {
  const time = TimeDiff(start, end)
  const [startDay, startDayMonth, startMonth, startYear] = StartDay(start)
  const [endDay, endDayMonth, endMonth, endYear] = StartDay(end)

  return (
    <>
      <td>{index + 1}</td>
      <td>
        <span>{startDay}</span>
        <span>{startDayMonth}</span>
        <span>{startMonth}</span>
        <span>{startYear}</span>
      </td>
      <td>
        <span>{endDay}</span>
        <span>{endDayMonth}</span>
        <span>{endMonth}</span>
        <span>{endYear}</span>
      </td>
      <td>{time}</td>
    </>
  )
}

export default ItemHistory
