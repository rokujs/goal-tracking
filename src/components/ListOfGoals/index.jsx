import React, { useState, useEffect } from 'react'

import Goal from '../Goal'
import getGoals from '@/services/getGoals'
import remaining, { TimeDiff } from '@/utils/Date'
import Loading from '../Loading'

function ListOfGoals () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [goals, setGoals] = useState([])

  const Delete = goalId => {
    setGoals(goals => {
      const index = goals.findIndex(goal => goal._id === goalId)
      if (index > -1) goals.splice(index, 1)

      return [...goals]
    })
  }

  const Done = goalId => {
    console.log('Done')
    // fetch
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todayDone: true })
    }

    fetch(`http://localhost:8080/goal/${goalId}`, requestOptions)
      .then(data => {
        console.log('data: ', data)
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
          ({ _id, name, description, timeEnd, tries, todayDone, start }) => {
            const now = new Date()
            const time = remaining(timeEnd)
            const dayWithoutFail = TimeDiff(start, now)
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
                dayWithoutFail={dayWithoutFail}
                start={start}
                url={url}
                onClick={Done}
                onDrop={Drop}
              />
            )
          }
        )}
    </>
  )
}

export default ListOfGoals
