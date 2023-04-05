import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import './styles/results.css'
import FirstSong from './FirstSong'
import Songs from './Songs'
import axios from 'axios'

// fr1c9e09232fb9c493608a12f4066824
const Results = () => {
    
  const [songs, setSongs] = useState()

  useEffect(() => {
    const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=adele`
    axios.get(URL)
      .then(res => setSongs(res.data.data))
      .catch(err => console.log(err))
  }, [])
    console.log(songs)

  return (
    <section className='results'>
        <NavBar></NavBar>
        <FirstSong
          song = {songs[0]}  
        />
        <Songs
          songs = {songs}
        ></Songs>
    </section>
  )
}

export default Results