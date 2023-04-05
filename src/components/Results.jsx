import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import './styles/results.css'
import FirstSong from './FirstSong'
import Songs from './Songs'
import axios from 'axios'

const Results = () => {
    
  useEffect(() => {
    const URL = `https://api.deezer.com/search?q=eminem`
    axios.get(URL, {
      headers: {
        
      },
      responseType: "json"
    })
      .then(res => console.log(res.data.results))
      .catch(err => console.log(err))
  }, [])
    

  return (
    <section className='results'>
        <NavBar></NavBar>
        <FirstSong></FirstSong>
        <Songs></Songs>
    </section>
  )
}

export default Results