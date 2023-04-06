import React from 'react'
import './styles/songCard.css'

const SongCard = ({song, setCurrentSong}) => {
  const play = () => {
    setCurrentSong(song)
  }
  return (
    <div className='songCard'>
        <div onClick={play} className='songCard_img_container'>
            <img className='songCard_img' src={song.album.cover} alt="song_img" />
            <i className="fa-solid fa-play fa-xl play_icon_card"></i>
            <span className='more_icon_card'>...</span>
        </div>
        <div className='songCard_info'>
            <h1 className='songCard_title'>{song.title}</h1>
            <span className='songCard_artist'>{song.artist.name}</span>
        </div>
    </div>
  )
}

export default SongCard