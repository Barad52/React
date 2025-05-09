import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [value, setValue] = useState([])
  const [count,setCount] = useState (1)

  function fetchApi() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`)
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchApi();
  }, [count])


  return (
    <>
      {value.map((el) =>
        <div style={{border: '1px solid black', marginBottom: '8px'}}>
          <h1>{el.id}</h1>
          <h4>{el.title}</h4>
          <p>{el.body}</p>
        </div>
      )}
      <button onClick={()=>setCount(count-1)}>PREV</button>
      {count}
      <button onClick={()=>setCount(count+1)}>NEXT</button>
    </>
  )
}

export default App
