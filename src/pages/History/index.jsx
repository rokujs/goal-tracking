/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import TableHistory from '@/components/History'
import Header from '@/components/Header'

import { container } from './styles'

function History ({ params }) {
  return (
    <>
      <Header />
      <main css={container}>
        <TableHistory id={params.id} />
      </main>
    </>
  )
}

export default History
