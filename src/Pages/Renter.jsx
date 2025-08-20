import React from "react";
import { useState } from "react";
import car from "../assets/Carstreetpic.png"


function Rentarpage(){
    const [value, setValue] = useState({ fname: '', lname: '', email: '', phone: '', carbrand: '', model: '', message: '' })
    const [error,setError]=useState({})
    const handlechange = (e) => {
       
       let {name,value}=e.target
        setValue((prev) => ({ ...prev, [name]: value }))
        setError((prev)=>({...prev,[name]:''}))
        
    }

    const handlesubmit = (e) => {                               // here name is key and value is the input i give here
        e.preventDefault()
        const newerror = {}
        if (value.fname.length < 3)
        {
         newerror.fname='First name must be in 3 words.'
        }
         if (value.lname.length < 3) {
             newerror.lname = 'Last name must be in 3 words.'
        }
        if (!value.email.includes('@'))
        {
            newerror.email = "Please enter valied email"
            
        }
        if (!/^\d+$/.test(value.phone))
        {
            newerror.phone="Phone number must contain number."
        }
        if (value.phone.length < 10)
        {
           newerror.phone='Enter valied phone number'
        }
        if (value.carbrand.length < 3)
        {
            newerror.carbrand="Enter car brand name."
        }
        if (value.model.length < 3)
        {
            newerror.model='Enter model name'
        }
           
        if (value.message.trim().length===0)
        { newerror.message = 'Enter something' }
        setError(newerror)
        if (Object.keys(newerror).length=== 0)
        {
            alert('Your car uploded ')
        }
        else {
            alert('Try again!')
        }
      setValue({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        carbrand: '',
        model: '',
        message: '',
      })

    }


    return (
      <>
        <div>
          <div
            className='w-full justify-center h-150 items-center  bg-center bg-no-repeat bg-cover bg-black/40 bg-blend-darken py-66'
            style={{ backgroundImage: `url(${car})` }}
          >
            <h1 className='text-blue-700 text-[44px] text-center font-semibold font-Poppins  py-'>
              Become a renter
            </h1>
            <p className='text-blue-600 text-[20px] font-semibold'>
              Apply to become a renter. Give valid information and become a
              renter.
            </p>
          </div>
          <div className='py-30 w-[620px] m-auto mt-7    px-3 rounded-[4px] pt-7 mb-3'>
            <h1 className='text-center text-[27px] font-[300]'>
              Give your information
            </h1>

            <div className='flex flex-col gap-10 flex-wrap justify-center text-[14px] align-center py-7 '>
              <div className='flex justify-center gap-7'>
                <input
                  name='fname'
                  value={value.fname}
                  onChange={handlechange}
                  placeholder='First name*'
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.fname ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
                <input
                  placeholder='Last name*'
                  name='lname'
                  value={value.lname}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px]  w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.lname ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>
              <div className='flex justify-center gap-7'>
                <input
                  placeholder='Email*'
                  name='email'
                  value={value.email}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.email ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                />
                <input
                  placeholder='Phone*'
                  name='phone'
                  value={value.phone}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.phone ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>
              <div className='flex justify-center gap-7'>
                <select
                  placeholder='Car brand name*'
                  name='carbrand'
                  value={value.carbrand}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.carbrand ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}></select>
                
                <input
                  placeholder='Model*'
                  name='model'
                  value={value.model}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.model ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>

              <input
                placeholder=' Message *'
                name='message'
                value={value.message}
                onChange={handlechange}
                className={`w-[590px] ml-1 border-[1px] rounded-[4px] h-[150px]  border-solid border-[#f0f0f0] pb-20 px-4  placeholder:text-[16px] text-gray-700 ${
                  error.message ? 'border-red-500' : 'border-[#f0f0f0]'
                }`}
              />
            </div>
            <div className='h-[40px] w-[110px] bg-[#1f4e3d] ml-2 font-roboto  px-6 py-2 rounded-[5px]  '>
              <button
                className='tracking-[2px] text-white font-[600]'
                onClick={handlesubmit}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </>
    )
}
export default Rentarpage
// bg - [url('/src/assets/Bagroundcar.jpg')] 