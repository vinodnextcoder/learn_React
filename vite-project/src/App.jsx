import { useState } from 'react'
import './App.css'
import Header from './componets/Header';
function App() {
  const [count, setCount] = useState(0)

  function cntfn(){
    setCount(count+1)
  }

  return (
    <>
    <div>
      <Header />
      </div>
      <button onClick={cntfn}> counter {count}</button>
    </>
  )
}

export default App
