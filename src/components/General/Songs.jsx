import React from 'react'
import './styles/songs.css'
import SongCard from './SongCard'

const Songs = ({songs, setCurrentSong}) => {
  return (
    <div className='songs_container'>
        <h1 className='songs_title'>Resultados</h1>
        <div className='songsCard_Container'>
          {
            songs?.map(song => (
              <SongCard
                key={song.id}
                song = {song}
                setCurrentSong = {setCurrentSong}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Songs