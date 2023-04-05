import { useState } from 'react'
import './App.css'
import PlayBar from './components/PlayBar'
import Home from './pages/Home'
import Results from './components/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home></Home>
      <PlayBar></PlayBar>
    </div>
  )
}

export default App
