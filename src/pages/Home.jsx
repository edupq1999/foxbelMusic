import React from 'react'
import Header from '../components/Header'
import Results from '../components/Results'
import './styles/home.css'

const Home = () => {
  return (
    <section className='home'>
        <Header></Header>
        <Results></Results>
    </section>
  )
}

export default Home