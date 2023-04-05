import { useEffect, useState } from 'react'
import './App.css'
import PlayBar from './components/PlayBar'
import Home from './pages/Home'
import Results from './components/Results'

function App() {
  const [count, setCount] = useState("260726535184-ei84ertso7robqunavm181atrd6orlam.apps.googleusercontent.com")

  // useEffect(() => {
  //   const start = () => {
  //     gapi.auth2.init({
  //       clientId: count,
  //     })
  //   }
  //   gapi.load("client:auth2", start)
  // }, [])
  
  const onSuccess = (response) => {
    console.log(response)
  }

  const onFailure = (response) => {
    console.log("Algo salio mal")
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <Home></Home>
      <PlayBar></PlayBar> 
    </div>
  )
}

export default App
