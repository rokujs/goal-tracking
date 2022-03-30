/** @jsx jsx */
import React from 'react'
import FormCreateGoal from '@/components/FormCreateGoal'
import { jsx } from '@emotion/react'

import Header from '@/components/Header'

import { container, title } from './styles'

function CreateGoal () {
  return (
    <div>
      <Header />
      <div css={container}>
        <h1 css={title}>There will create a goal card</h1>
        <FormCreateGoal />
      </div>
    </div>
  )
}

export default CreateGoal
