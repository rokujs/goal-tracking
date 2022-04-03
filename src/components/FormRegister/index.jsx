/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Loading from '@/components/Loading'
import Button from '@/components/Button'

import { container, input, btn } from './styles'

function FormRegister () {
  const { handleSubmit, register } = useForm()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => setIsLoading(false), [])

  const onSubmit = (data) => {
    console.log('submit')
    console.log(data)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div css={container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={input}>
          <label>
            Email
            <input
              type='text'
              placeholder='email'
              {...register('email')}
              required
            />
          </label>
        </div>
      <div css={input}>
          <label>
            UserName
            <input
              type='text'
              placeholder='username'
              {...register('username')}
              required
            />
          </label>
        </div>
        <div css={input}>
          <label>
            Password
            <input
              type='password'
              placeholder='Password'
              {...register('password')}
              required
            />
          </label>
        </div>
        <div css={input}>
          <label>
            Confirm password
            <input
              type='password'
              placeholder='Confirm password'
              {...register('TwoPassword')}
              required
            />
          </label>
        </div>
        <div css={btn}>
          <Button outline>CREATE ACCOUNT</Button>
        </div>
      </form>
    </div>
  )
}

export default FormRegister
