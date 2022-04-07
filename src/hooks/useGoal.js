import { useState, useEffect, useContext } from 'react'

import getGoals from '@/services/getGoals'
import userContext from '@/context/userContext'

const URL = 'http://localhost:8080/api'

export const useGoal = () => {
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { jwt } = useContext(userContext)

  useEffect(() => {
    if (jwt) {
      getGoals(jwt)
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
    } else {
      setGoals([])
      setLoading(false)
      setError(false)
    }
  }, [])

  const RemoveGoal = goalId => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    }

    fetch(`${URL}/goal/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(() => {
        setGoals(goals => {
          const index = goals.findIndex(goal => goal.id === goalId)
          if (index > -1) goals.splice(index, 1)

          return [...goals]
        })
      })
      .catch(err => console.error(err))
  }

  const ResumeGoal = ({ goalId, dateEnd }) => {
    const dataDate = {
      newStart: Date.now(),
      newEnd: dateEnd
    }

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify(dataDate)
    }

    fetch(`${URL}/goal/resume/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(() => {
        setGoals(goals => {
          const goalDone = goals.findIndex(goal => goal.id === goalId)
          goals[goalDone].end = false
          goals[goalDone].todayDone = false

          return [...goals]
        })
      })
      .catch(err => console.error(err))
  }

  const Done = goalId => {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({ todayDone: true })
    }

    fetch(`${URL}/goal/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(() => {
        setGoals(goals => {
          const goalDone = goals.findIndex(goal => goal.id === goalId)
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
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify(dataGoalAbandon)
    }

    fetch(`${URL}/goal/${goalId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setGoals(goals => {
          const goalDone = goals.findIndex(goal => goal.id === goalId)
          goals[goalDone].tries = data.tries
          goals[goalDone].end = true

          return [...goals]
        })
      })
      .catch(err => console.error(err))
  }

  return {
    RemoveGoal,
    ResumeGoal,
    Done,
    Drop,
    goals,
    loading,
    error
  }
}
