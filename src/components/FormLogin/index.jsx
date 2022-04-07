/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'

import loginServices from '@/services/login'
import userContext from '@/context/userContext'

import Loading from '@/components/Loading'
import Button from '@/components/Button'

import { container, input, btn } from './styles'

function FormLogin () {
  const { handleSubmit, register } = useForm()
  const [isLoading, setIsLoading] = useState(true)
  const { setJwt, setUser } = useContext(userContext)
  const [, setLocation] = useLocation()

  useEffect(() => setIsLoading(false), [])

  const onSubmit = data => {
    loginServices(data)
      .then(res => {
        const json = {
          jwt: res.token,
          user: res.username
        }
        setJwt(res.token)
        setUser(res.username)
        window.localStorage.setItem('user', JSON.stringify(json))
        setLocation('/')
      })
      .catch(err => {
        console.error(err)
        alert('Invalid username or password')
      })
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
              placeholder='Username'
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
        <div css={btn}>
          <Button outline>LOGIN</Button>
        </div>
      </form>
    </div>
  )
}

export default FormLogin
