import React from 'react'
import './styles/firstSong.css'

const FirstSong = () => {
  return (
    <div className='firstSong'>
        <div className='firstSong_container'>
            <img className='firstSong_img' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singer-shakira-attends-the-screening-of-elvis-during-the-news-photo-1673516621.jpg?crop=0.66667xw:1xh;center,top&resize=1200:*" alt="song_img" />
            <i className="fa-solid fa-play fa-xl play_icon"></i>
            <i className="fa-solid fa-plus fa-xl follow_icon"></i>
        </div>
        <div className='firstSong_background'>
            <div className='firstSong_info'>
                <h1 className='firstSong_title'>Rammstein</h1>
                <p className='firstSong_followers'>Lo mejor de  <span className='firstSong_followers_number'> 1500245 </span></p>
                <p className='firstSong_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta eum obcaecati quibusdam dolores aliquam totam odio eveniet. Rerum vel atque animi quis rem nihil nam commodi veniam at doloribus.</p>
            </div>
        </div>
        <div className='firstSong_buttons'>
            <button className='firstSong_button_play'>Reproducir</button>
            <button className='firstSong_button_follow'>Seguir</button>
            <span className='firstSong_button_more'>...</span>
        </div>
    </div>
  )
}

export default FirstSong