import './App.css'
import Home from './pages/Home'
import PlayBar from './components/General/PlayBar'
import NavBar from './components/General/NavBar'
import Header from './components/General/Header'
import { useState } from 'react'

function App() {

  const [text, setText] = useState('adele')
  const [songs, setSongs] = useState()
  const [currentSong, setCurrentSong] = useState()

  return (
    <div className="App">
      <Header />
      <div className='App_container'>
      <NavBar 
        setText = {setText}
        text = {text}
      />
      <Home 
        songs = {songs}
        setSongs = {setSongs}
        setCurrentSong = {setCurrentSong}
        text = {text}
      />
      </div>
        <PlayBar currentSong = {currentSong}/> 
    </div>
  )
}

export default App
