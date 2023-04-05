import React, { useState } from 'react'
import NavBar from './NavBar'
import './styles/results.css'
import FirstSong from './FirstSong'
import Songs from './Songs'

const Results = () => {
    

  return (
    <section className='results'>
        <NavBar></NavBar>
        <FirstSong></FirstSong>
        <Songs></Songs>
    </section>
  )
}

export default Results