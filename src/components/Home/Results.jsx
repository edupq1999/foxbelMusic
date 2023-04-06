import React from 'react'
import './styles/results.css'
import Songs from '../General/Songs'
import FirstSong from './FirstSong'

const Results = ({songs, setCurrentSong}) => {

  return (
    <section className='results'>
        <FirstSong
          song = {songs[0]}
          setCurrentSong = {setCurrentSong}  
        />
        <Songs
          songs = {songs}
          setCurrentSong = {setCurrentSong}
        />
    </section>
  )
}

export default Results