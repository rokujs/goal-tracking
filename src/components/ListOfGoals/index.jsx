import React, { useState, useEffect } from 'react'

import { useGoal } from '@/hooks/useGoal'

import Goal from '../Goal'
import Loading from '../Loading'
import remaining, { TimeDiff } from '@/utils/Date'

function ListOfGoals () {
  const { ResumeGoal, Done, Drop, goals, loading, error } = useGoal()

  const NOW = new Date()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Error...</p>
  }

  return (
    <>
      {goals &&
        goals.map(
          ({
            _id,
            name,
            description,
            timeEnd,
            tries,
            todayDone,
            start,
            end
          }) => {
            const time = remaining(timeEnd)
            const dayWithoutFail = TimeDiff(start, NOW)
            const url = `/goal/${_id}`

            return (
              <Goal
                key={_id}
                id={_id}
                title={name}
                description={description}
                timeEnd={time}
                tries={tries}
                todayDone={todayDone}
                days={dayWithoutFail}
                start={start}
                end={end}
                url={url}
                onClick={Done}
                onDrop={Drop}
                resume={ResumeGoal}
              />
            )
          }
        )}
    </>
  )
}

export default ListOfGoals
