import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayBar from './components/PlayBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PlayBar></PlayBar>
    </div>
  )
}

export default App
