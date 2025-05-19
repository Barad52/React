import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactCard from './Components/ContactCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactCard/>
    </>
  )
}

export default App
