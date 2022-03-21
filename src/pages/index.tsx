import type { NextPage } from 'next'
import Head from 'next/head'

import styled from 'styled-components'

import Counter from '../features/counter/Counter'

const Home = styled.div`
  height: 100vh;

  display: grid;
  justify-content: center;
  align-content: center;
`

const IndexPage: NextPage = () => {
  return (
    <Home>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon"/>
      </Head>
      <Counter />
    </Home>
  )
}

export default IndexPage
