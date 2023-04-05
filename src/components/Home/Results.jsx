import React from 'react'
import './styles/results.css'
import Songs from '../General/Songs'
import FirstSong from './FirstSong'

const Results = ({songs}) => {

  return (
    <section className='results'>
        <FirstSong
          song = {songs[0]}  
        />
        <Songs
          songs = {songs}
        />
    </section>
  )
}

export default Results