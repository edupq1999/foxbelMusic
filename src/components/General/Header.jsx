import React from 'react'
import logo from "../../img/foxbel-music@3x.png"
import './styles/header.css'

const Header = () => {
    const toggleLibrary = () => {
        const library = document.querySelector('.library')
        library.classList.toggle('option_show')
        console.log(library)
    }
    const togglePlaylist = () => {
        const library = document.querySelector('.playlist')
        library.classList.toggle('option_show')
        console.log(library)
    }
  return (
    <header className='header'>
        <img className='header_logo' src={logo} alt="logo" />
        <div className='header_filters'>
            <ul className="header_filter_container">
                <h2 onClick={toggleLibrary} className="header_filter_title">Mi Librería</h2>
                <div className='filter_container library'>
                    <li className="header_filter_option">Recientes</li>
                    <li className="header_filter_option">Artistas</li>
                    <li className="header_filter_option">Álbums</li>
                    <li className="header_filter_option">Canciones</li>
                    <li className="header_filter_option">Estaciones</li>
                </div>
            </ul>
            <ul className="header_filter_container">
                <h2 onClick={togglePlaylist} className="header_filter_title">Playlist</h2>
                <div className='filter_container playlist'>
                    <li className="header_filter_option">Metal</li>
                    <li className="header_filter_option">Para bailar</li>
                    <li className="header_filter_option">Rock 90s</li>
                    <li className="header_filter_option">Baladas</li>
                </div>
            </ul>
        </div>
    </header>
  )
}

export default Header