import React, { useState, useEffect } from 'react'

import Loading from '../Loading'
import GoalsHistory from '../GoalsHistory'

import getGoalHistory from '@/services/getGoalHistory'

function TableHistory ({ id }) {
  const [goalList, setGoalList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGoalHistory({ id })
      .then(data => {
        setGoalList(data)
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <GoalsHistory
      title={goalList.title}
      description={goalList.description}
      list={goalList.tries}
    />
  )
}

export default TableHistory
