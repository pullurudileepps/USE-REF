import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Focus from './Components/focus'
import Timer from './Components/Timer'
import Stopwatch from './Components/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Focus /> */}
      <br />
      {/* <Timer /> */}
      <br />
      <Stopwatch />
    </>
  )
}

export default App
