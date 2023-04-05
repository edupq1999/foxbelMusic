import './App.css'
import Home from './pages/Home'
import PlayBar from './components/General/PlayBar'
import NavBar from './components/General/NavBar'
import Header from './components/General/Header'
import { useState } from 'react'

function App() {

  const [text, setText] = useState('adele')
  const [songs, setSongs] = useState()

  return (
    <div className="App">
      <Header />
      <NavBar setText = {setText}/>
      <Home 
        songs = {songs}
        setSongs = {setSongs}
        text = {text}
      />
      <PlayBar/> 
    </div>
  )
}

export default App
