import React, { useState, useEffect } from 'react'

import Goal from '../Goal'
import getGoals from '@/services/getGoals'
import remaining from '@/utils/Date'
import Loading from '../Loading'

function ListOfGoals () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [goals, setGoals] = useState([])

  const Done = goalId => {
    console.log('Done')
    // fetch
    setGoals(goals => {
      const goalDone = goals.findIndex(goal => goal._id === goalId)
      goals[goalDone].todayDone = true

      return [...goals]
    })
  }

  const Drop = goalId => {
    setGoals(goals => {
      const index = goals.findIndex(goal => goal._id === goalId)
      if (index > -1) goals.splice(index, 1)

      return [...goals]
    })
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
            createAt,
            updateAt
          }) => {
            const time = remaining(timeEnd)
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
