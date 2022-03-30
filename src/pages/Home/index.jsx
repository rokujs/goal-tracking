/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import { carousel, container } from './style'
import ListOfGoals from '@/components/ListOfGoals'
import Header from '@/components/Header'

function Home () {
  return (
    <div css={container}>
      <Header/>
      <div css={carousel}>
        <ListOfGoals />
      </div>
    </div>
  )
}

export default Home
