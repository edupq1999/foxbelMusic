import './App.css'
import Home from './pages/Home'
import PlayBar from './components/General/PlayBar'
import NavBar from './components/General/NavBar'
import Header from './components/General/Header'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [text, setText] = useState('adele')
  return (
    <div className="App">
      <Header />
      <NavBar text = {text}/>
      <div className='App_container'> 
        <Routes>
          <Route path='/' element={<Home setText = {setText}/>} />
        </Routes>
      </div>
      <PlayBar/> 
    </div>
  )
}

export default App
