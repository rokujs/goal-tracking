/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'

import Register from '@/services/register'
import userContext from '@/context/userContext'

import Loading from '@/components/Loading'
import Button from '@/components/Button'

import { container, input, btn } from './styles'

function FormRegister () {
  const { handleSubmit, register } = useForm()
  const [isLoading, setIsLoading] = useState(true)
  const { setJwt, setUser } = useContext(userContext)
  const [, setLocation] = useLocation()

  useEffect(() => setIsLoading(false), [])

  const onSubmit = data => {
    console.log('submit')
    console.log(data)
    if (data.password !== data.confirmPassword) {
      return alert('Las contraseñas deben coincidir')
    }

    Register({
      username: data.username,
      password: data.password,
      email: data.email
    })
      .then(res => {
        setJwt(res.id)
        setUser(res.username)
        window.localStorage.setItem('jwt', res.token)
        window.localStorage.setItem('user', res.username)
        setLocation('/')
      })
      .catch(err => console.error(err))
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
              {...register('confirmPassword')}
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
