import React from 'react'
import './styles/songCard.css'

const SongCard = () => {
  return (
    <div className='songCard'>
        <div className='songCard_img_container'>
            <img className='songCard_img' src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/82/a5/6282a515-c95c-9e5e-3eef-4ef7b75639ca/191404113868.png/1200x1200bf-60.jpg" alt="song_img" />
            <i className="fa-solid fa-play fa-xl play_icon_card"></i>
            <span className='more_icon_card'>...</span>
        </div>
        <div className='songCard_info'>
            <h1 className='songCard_title'>21</h1>
            <span className='songCard_artist'>Adele</span>
        </div>
    </div>
  )
}

export default SongCard