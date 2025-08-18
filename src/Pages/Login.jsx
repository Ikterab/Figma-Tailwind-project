import React from "react";
import { useState } from "react";

function Loginpage() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password:'',
  })
  const [error, setError] = useState({ name:false, email:false, password:false,})
  
  const handleChange = (e) => {
    const {name,value}=e.target
    setValue((prev)=>({...prev,[name]:value}))
    
    setError((prev)=>({...prev,[name]:false}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let haserror = false
    const newError={name:false,email:false,password:false}
    if (value.name.length < 3) {
      newError.name = true
      haserror=true
    }
  if(!value.email.includes('@')) {
      newError.email=true
haserror=true
    }
      if (value.password.length < 6) {
        newError.password = true
        haserror = true
    }
    setError(newError)
    if(!haserror){alert("Login successful!")}
  }

    return (
      <>
        <div>
          <div className='mt-15 m-auto  flex flex-col justify-center items-center gap-10  bg-[#edf2f8] h-[500px] w-md rounded-xl shadow-[0_1px_10px_rgba(15,30,104,0.2)]'>
            <h1 className='text-[24px]'>Log in Here </h1>
            <input
              placeholder='Name*'
              name='name'
              value={value.name}
              onChange={handleChange}
              className=' w-[350px]  h-[48px] rounded-lg border border-[#bfb9cf] px-2 focus:border-[#9984de] focus:ring-0'
            />
            <input
              placeholder='Eamil*'
              name='email'
              value={value.email}
              onChange={handleChange}
              className='  w-[350px] 
         h-[48px] 
         rounded-lg 
         border
         border-[#bfb9cf] 
         px-2
         focus:border-[#9984de]
         focus:ring-0'
            />
            <input
              placeholder='Password*'
              name='password'
              value={value.password}
              onChange={handleChange}
              className='  w-[350px] 
         h-[48px] 
         rounded-lg 
         border
         border-[#bfb9cf] 
         px-2
         focus:border-[#9984de]
         focus:ring-0'
            />
            <button
              onClick={handleSubmit}
              className='w-[350px] rounded-md h-13 t-[14px] font-semibold bg-[#bfccda]'
            >
              Login
            </button>
          </div>
        </div>
      </>
    )
}
export default Loginpage