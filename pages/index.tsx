import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Navbar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Finances</title>
      </Head>
      <Navbar />

      <main></main>
    </div>
  )
}

export default Home
