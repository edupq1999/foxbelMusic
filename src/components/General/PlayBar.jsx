import React from 'react'
import { useState } from 'react';
import './styles/playBar.css'
import { useEffect } from 'react';

const PlayBar = ({currentSong}) => {

    const [volume, setVolume] = useState(100)
    const [playButton, setPlayButton] = useState(false)
    const [show, setShow] = useState(100)

    const mute = () => {
        const audio = document.getElementById('Audio')
        const volumeBar = document.getElementById('volume')
        if (volume != 0) {
            setVolume(0)
            audio.volume = 0
            volumeBar.value = 0
        } else {
            setVolume(100)
            volumeBar.value = 100
            audio.volume = 1
        }        
    }

    const play = e => {
        const audio = document.getElementById('Audio')
        if (playButton){
            setPlayButton(false)
            e.target.classList.toggle('fa-pause')
            e.target.classList.toggle('fa-play')
            audio.pause()
        }else {
            setPlayButton(true)
            e.target.classList.toggle('fa-play')
            e.target.classList.toggle('fa-pause')
            audio.play();
        }
    }
    const changeVolume = e => {
        const audio = document.getElementById('Audio')
        audio.volume = e.target.value /100
        setVolume(e.target.value /100)
    }

    useEffect(() => {
        const audio = document.getElementById('Audio')
        const buttonPLay = document.getElementById('button_play')
      if (currentSong) {
        setShow(0)
        setPlayButton(true)
        buttonPLay.classList.toggle('fa-play')
        buttonPLay.classList.toggle('fa-pause')
        audio.play();
      } else {
        setShow(100)
        setPlayButton(false)
        buttonPLay.classList.toggle('fa-pause')
        buttonPLay.classList.toggle('fa-play')
        audio.pause()
      }
    }, [currentSong])
    
  return (
    <div className='playBar' style={{translate: `0 -${show}vh`}}>
        
        <div className='playBar_info'>
            <img className='playBar_img' src={currentSong?.album.cover_big} alt="Song Picture" />
            <div className='playBar_info_container'>
                <h1 className='playBar_info_title'>{currentSong?.title}</h1>
                <p className='playBar_info_description'>{currentSong?.artist.name} - {currentSong?.album.title}</p>
            </div>
        </div>
        <div className='playBar_controls'>
            <audio id='Audio' src={currentSong?.preview}></audio>
            <div className='playBar_controls_buttons'>
                <button className='button_back'>
                    <i className="fa-solid fa-backward-step fa-lg"></i>
                </button>
                <div className='button_play_background'>
                    <button onClick={play}  className='button_play'>
                        <i className="fa-solid fa-play fa-lg" id='button_play'></i>
                    </button>
                </div>
                <button className='button_next'>
                    <i className="fa-solid fa-forward-step fa-lg"></i>
                </button>
            </div>
            <div className='playBar_controls_Volume'>
                <input onChange={changeVolume} className='playBar_controls_volumeBar' id='volume' type="range" max={100}/>
                <button className='button_volume' onClick={mute} >
                    {
                        volume == 0
                        ?
                        <i onClick={mute} className="fa-solid fa-volume-xmark"></i>
                        :
                        <i onClick={mute} className="fa-solid fa-volume-high"></i>
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlayBar