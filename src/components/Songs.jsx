import React from 'react'
import './styles/songs.css'
import SongCard from './SongCard'

const Songs = () => {
  return (
    <div className='songs_container'>
        <h1 className='songs_title'>Resultados</h1>
        <div className='songsCard_Container'>
        <SongCard></SongCard><SongCard></SongCard><SongCard></SongCard><SongCard></SongCard><SongCard></SongCard>
        </div>
    </div>
  )
}

export default Songs