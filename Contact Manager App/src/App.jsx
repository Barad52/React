import { useState } from 'react'
import './App.css';
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
