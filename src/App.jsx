import { useState } from 'react'
import Header from './Header/header'
import Main from './Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header/>
      <Main/>
      
    </>
  )
}

export default App
