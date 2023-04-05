import React, { useState } from 'react'
import NavBar from './NavBar'
import './styles/results.css'
import FirstSong from './FirstSong'

const Results = () => {
    

  return (
    <section className='results'>
        <NavBar></NavBar>
        <FirstSong></FirstSong>
    </section>
  )
}

export default Results