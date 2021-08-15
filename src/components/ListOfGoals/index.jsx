import React, { useState, useEffect } from 'react'

import Goal from '../Goal'
import getGoals from '@/services/getGoals'
import remaining from '@/utils/Date'

function ListOfGoals () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [goals, setGoals] = useState([])

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
    return <p>Loading...</p>
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

            return <Goal
              key={_id}
              title={name}
              description={description}
              timeEnd={time}
              tries={tries}
              todayDone={todayDone}
              url={url}
            />
          }
        )}
    </>
  )
}

export default ListOfGoals
