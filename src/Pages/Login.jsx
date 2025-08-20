import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import carpic from '../assets/photo-1565043666747-69f6646db940.avif'
import carpic1 from'../assets/pngtree-beautiful-background-for-car-rental-advertising-image_16188411.jpg'

function Loginpage() {
  const navigate=useNavigate()
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  })
  // const [error, setError] = useState({ name:false, email:false, password:false,})
  //  const [error, setError] = useState({ name:'', email:'', password:'',})
   const [error, setError] = useState({ })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue((prev) => ({ ...prev, [name]: value }))

    setError((prev) => ({ ...prev, [name]: '' }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (!storedUser)
    {
      alert('No accounts found')
      navigate('/Signup')
      return
    }
    // let haserror = false
    // const newError = {name:'', email:'', password:''}
    const newError={}
    if (value.name.length < 3) {
      newError.name = 'Invalied name'
      // haserror = true
    }
    if (!value.email.includes('@')) {
      newError.email = 'Please enter valied email'
      // haserror = true
    }
    if (value.password.length < 6) {
      newError.password = 'Please enter valied password'
      // haserror = true
    }

    setError(newError)



    if (Object.keys(newError).length === 0) {
      if (storedUser && storedUser.email === value.email && storedUser.password === value.password) {
             console.log('✅ Login successful!')

        alert("Login successfull!")
      }
      else {
        console.log('❌ Invalid credentials:', value)
        alert('Invalied email or password')
          navigate('/Signup')
      }
    }
    setValue({ name: '', email: '', password: '' })

  }

  return (
    <>
      <div>
        <div className='mt-15 m-auto  flex flex-col justify-center items-center gap-10  bg-[#edf2f8] px-4 py-20 w-md rounded-xl shadow-[0_1px_10px_rgba(15,30,104,0.2)]'>
          <h1 className='text-[24px]'>Log in Here </h1>
          <input
            placeholder='Name*'
            name='name'
            value={value.name}
            onChange={handleChange}
            className={`w-[350px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.name
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
          />
          {error.name && <p>{error.name}</p>}
          <input
            placeholder='Eamil*'
            name='email'
            value={value.email}
            onChange={handleChange}
            className={`w-[350px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.email
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
          />
          {error.email && <p>{error.email}</p>}
          <input
            placeholder='Password*'
            name='password'
            value={value.password}
            onChange={handleChange}
            className={`w-[350px]  h-[48px] rounded-lg border  px-2 focus:ring-0 ${
              error.password
                ? 'border-red-500'
                : 'border-[#bfb9cf]  focus:border-[#9984de] '
            } `}
          />
          {error.password && <p>{error.password}</p>}
          <button
            type="button"
            onClick={handleSubmit}
            className='w-[350px] rounded-md h-13 t-[14px] font-semibold bg-[#bfccda]'
          >
            Login
          </button>
          <p><Link to='/Signup'>I dont have any account</Link></p>
        </div>
      </div>
    </>
  )
}
export default Loginpage