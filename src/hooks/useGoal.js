import { useState, useEffect } from 'react'
import getGoals from '@/services/getGoals'

export const useGoal = () => {
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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

  const RemoveGoal = goalId => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`http://localhost:8080/api/goal/${goalId}`, requestOptions)
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataDate)
    }

    fetch(`http://localhost:8080/api/goal/resume/${goalId}`, requestOptions)
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todayDone: true })
    }

    fetch(`http://localhost:8080/api/goal/${goalId}`, requestOptions)
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataGoalAbandon)
    }

    fetch(`http://localhost:8080/api/goal/${goalId}`, requestOptions)
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
