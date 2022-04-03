/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'

import userContext from '@/context/userContext'
import { CreateGoal } from '@/services/createGoal'

import Button from '@/components/Button'
import Loading from '../Loading'

import { form, input, date, textarea } from './styles'

function FormCreateGoal () {
  const { handleSubmit, register } = useForm()
  const [, setLocation] = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const { jwt } = useContext(userContext)

  useEffect(() => setIsLoading(false), [])

  const onSubmit = data => {
    setIsLoading(true)

    data.start = Date()

    if (data.description === '') {
      data.description = 'No description'
    }

    CreateGoal({ data, token: jwt })
      .then(() => setLocation('/'))
      .catch(err => console.error(err))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <form css={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          css={input}
          type='text'
          placeholder='Title'
          {...register('name')}
          required
        />
      </div>
      <div>
        <textarea
          css={textarea}
          type='text'
          placeholder='description'
          {...register('description')}
        ></textarea>
      </div>
      <div css={date}>
        <label>Time end</label>
        <input type='date' {...register('timeEnd')} required />
      </div>
      <Button>Save</Button>
    </form>
  )
}

export default FormCreateGoal
