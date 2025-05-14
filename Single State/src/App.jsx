import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    gender: "",
    isMarried: false
  });


  function handlechange(e) {
    const {name, value, type, checked } = e.target;
    setFormData(old => ({
      ...old,
      [name]: type === "checkbox" ? checked : value
    }));
  }


  function handlesubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Type Your Name' name='name' value={formData.name} onChange={handlechange} />
        <br /><br />
        <input type="email" placeholder='Type Your Email' name='email'value={formData.email}  onChange={handlechange} />
        <br /><br />
        <input type="password" placeholder='Set Password' name='password' value={formData.password} onChange={handlechange} />
        <br /><br />


        <select name='city' value={formData.city} onChange={handlechange}>
          <option value="" >Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Gandhinagar">Gandhinagar</option>
        </select>
        <br /><br />

        <input type="radio" name='gender' value='male' checked={formData.gender === "male"} onChange={handlechange} />Male
        <input type="radio" name='gender' value='female' checked={formData.gender === "female"} onChange={handlechange} />Female
        <br /><br />

        <input type="checkbox" name='isMarried' onChange={handlechange} checked={formData.isMarried}/>Is_married
        <br /><br />

        <input type="submit" />

      </form>
    </>
  )
}

export default App
