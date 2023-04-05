import React, { useEffect, useState } from 'react'
import './styles/home.css'
import axios from 'axios'
import Results from '../components/Home/Results'
import Loader from '../components/General/Loader'

const Home = ({text}) => {
  const [songs, setSongs] = useState()
  
  useEffect(() => {
    const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${text}`
    axios.get(URL)
      .then(res => setSongs(res.data.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <section className='home'>
        {
          songs
          ?
          <Results songs = {songs}/>
          :
          <Loader />
        }
    </section>
  )
}

export default Home