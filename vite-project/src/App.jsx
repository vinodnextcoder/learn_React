import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function cntfn(){
    setCount(count+1)
  }

  return (
    <>
      <button onClick={cntfn}> counter {count}</button>
    </>
  )
}

export default App
