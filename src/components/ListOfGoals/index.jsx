import React from 'react'

import { useGoal } from '@/hooks/useGoal'

import Goal from '../Goal'
import Loading from '../Loading'
import remaining, { TimeDiff } from '@/utils/Date'

function ListOfGoals () {
  const { goals, loading, error, ResumeGoal, Done, Drop, RemoveGoal } = useGoal()

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
            id,
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
            const url = `/goal/${id}`

            return (
              <Goal
                key={id}
                id={id}
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
                onRemove={RemoveGoal}
              />
            )
          }
        )}
    </>
  )
}

export default ListOfGoals
