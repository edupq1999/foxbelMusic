import './App.css'
import Home from './pages/Home'
import PlayBar from './components/General/PlayBar'
import NavBar from './components/General/NavBar'
import Header from './components/General/Header'
import { useState } from 'react'

function App() {

  const [text, setText] = useState('adele')

  return (
    <div className="App">
      <Header />
      <NavBar setText = {setText}/>
      <Home 
        text = {text}
      />
      <PlayBar/> 
    </div>
  )
}

export default App
