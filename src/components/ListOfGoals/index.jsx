import React, { useState, useEffect } from 'react'

import Goal from '../Goal'
import Loading from '../Loading'
import getGoals from '@/services/getGoals'
import remaining, { TimeDiff } from '@/utils/Date'

function ListOfGoals () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [goals, setGoals] = useState([])
  const NOW = new Date()

  // const RemoveGoal = goalId => {
  //   setGoals(goals => {
  //     const index = goals.findIndex(goal => goal._id === goalId)
  //     if (index > -1) goals.splice(index, 1)

  //     return [...goals]
  //   })
  // }

  const ResumeGoal = ({ goalId, dateEnd }) => {
    // fetch
    const dataDate = {
      newStart: Date.now(),
      newEnd: dateEnd
    }

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataDate)
    }

    fetch(`http://localhost:8080/goal/resume/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(() => {
        setGoals(goals => {
          const goalDone = goals.findIndex(goal => goal._id === goalId)
          goals[goalDone].end = false
          goals[goalDone].todayDone = false

          return [...goals]
        })
      })
      .catch(err => console.error(err))
  }

  const Done = goalId => {
    // fetch
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todayDone: true })
    }

    fetch(`http://localhost:8080/goal/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setGoals(goals => {
          const goalDone = goals.findIndex(goal => goal._id === goalId)
          goals[goalDone].todayDone = true

          return [...goals]
        })
      })
      .catch(err => console.error(err))
  }

  const Drop = ({ goalId, start }) => {
    const dataGoalAbandon = {
      end: true,
      newTries: {
        start,
        end: new Date()
      }
    }
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataGoalAbandon)
    }

    fetch(`http://localhost:8080/goal/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setGoals(goals => {
          const goalDone = goals.findIndex(goal => goal._id === goalId)
          goals[goalDone].tries = data.tries
          goals[goalDone].end = true

          return [...goals]
        })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getGoals()
      .then(data => {
        setLoading(false)
        setError(false)
        setGoals(data)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
        setError(true)
      })
  }, [])

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
