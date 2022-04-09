import React, { useState, useEffect, useContext } from 'react'

import Loading from '../Loading'
import GoalsHistory from '../GoalsHistory'

import getGoalHistory from '@/services/getGoalHistory'
import userContext from '@/context/userContext'

function TableHistory ({ id }) {
  const [goalList, setGoalList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { jwt } = useContext(userContext)

  useEffect(() => {
    getGoalHistory({ id, token: jwt })
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
      title={goalList.name}
      description={goalList.description}
      list={goalList.tries}
    />
  )
}

export default TableHistory
