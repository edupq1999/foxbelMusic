import React from 'react'
import { useState } from 'react';
import './styles/playBar.css'

const PlayBar = () => {

    const [volume, setVolume] = useState(100)
    const [previousVolume, setPreviousVolume] = useState(0)

    const mute = () => {
        if (volume != 0) {
            setPreviousVolume(volume)
            setVolume(0)        
        } else {
            setVolume(previousVolume)
            setPreviousVolume(0)
        }        
    }

  return (
    <div className='playBar'>
        <input className='playBar_song' type="range" max={100}/>
        <audio src=""></audio>
        <div className='playBar_info'>
            <img className='playBar_img' src="https://static.dw.com/image/49947376_303.jpg" alt="Song Picture" />
            <div className='playBar_info_container'>
                <h1 className='playBar_info_title'>Canción</h1>
                <p className='playBar_info_description'>Artista - Album</p>
            </div>
        </div>
        <div className='playBar_controls'>
            <div className='playBar_controls_buttons'>
                <button className='button_back'>
                    <i className="fa-solid fa-backward-step fa-lg"></i>
                </button>
                <div className='button_play_background'>
                    <button className='button_play'>
                        <i className="fa-solid fa-play fa-lg"></i>
                    </button>
                </div>
                <button className='button_next'>
                    <i className="fa-solid fa-forward-step fa-lg"></i>
                </button>
            </div>
            <div className='playBar_controls_Volume'>
                <input className='playBar_controls_volumeBar' id='volume' type="range" max={100}/>
                <button className='button_volume' onClick={mute} >
                    {
                        volume == 0
                        ?
                        <i className="fa-solid fa-volume-xmark"></i>
                        :
                        <i className="fa-solid fa-volume-high"></i>
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlayBar