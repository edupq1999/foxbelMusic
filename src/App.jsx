import './App.css'
import Home from './pages/Home'
import Album from './pages/Album'
import PlayBar from './components/General/PlayBar'
import NavBar from './components/General/NavBar'
import Header from './components/General/Header'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className='App_container'> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Album' element={<Album/>} />
        </Routes>
      </div>
      <PlayBar/> 
    </div>
  )
}

export default App
