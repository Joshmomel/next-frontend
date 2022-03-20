import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Picker from '../features/form/Picker'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Counter</h1>
        <Counter />

        <h1>Picker</h1>
        <Picker />
      </header>
    </div>
  )
}

export default IndexPage
