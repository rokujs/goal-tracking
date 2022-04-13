import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'wouter'

import Loading from '@/components/Loading'
import GoalsHistory from '@/components/GoalsHistory'
import ModalHandeError from '@/components/ModalHandeError'

import getGoalHistory from '@/services/getGoalHistory'
import userContext from '@/context/userContext'

function TableHistory ({ id }) {
  const [goalList, setGoalList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [messageError, setMessageError] = useState('')
  const { jwt } = useContext(userContext)
  const [, setLocation] = useLocation()

  useEffect(() => {
    getGoalHistory({ id, token: jwt })
      .then(data => {
        setGoalList(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setMessageError(err.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (messageError !== '') {
    return (
      <ModalHandeError
        message={messageError}
        onClose={() => setLocation('/')}
      />
    )
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
