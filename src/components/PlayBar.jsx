import React from 'react'
import { useState } from 'react';

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
        <input type="range" value={0} max={100}/>
        <div className='playBar_info'>
            <img className='playBar_img' src="" alt="Song Picture" />
            <h1 className='playBar_info_title'>Canción</h1>
            <p className='playBar_info_description'>Artista - Album</p>
        </div>
        <div className='playBar_controls'>
            <div className='playBar_controls_buttons'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className='playBar_controls_Volume'>
                <input id='volume' type="range" max={100} value={volume}/>
                <button onClick={mute} >mute</button>
            </div>
        </div>
    </div>
  )
}

export default PlayBar