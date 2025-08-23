import React from "react";
import { useState } from "react";
import car from "../assets/Carstreetpic.png"


function Rentarpage(){
    const [value, setValue] = useState({ fname: '', lname: '', email: '', phone: '', carbrand: '', model: '',img:[], carnumber:'',passengerseat:'', transmission:'',aircool:'' ,doors:'',   message: '' })
    const [error,setError]=useState({})
    const handlechange = (e) => {
       
       let {name,value, files}=e.target
      if (name === 'img') {
        setValue((prev) => ({ ...prev, img:[...prev.img, ...Array.from(files)] }))
        setError((prev) => ({ ...prev, img: '' }))
      }  
       else {
    setValue((prev) => ({ ...prev, [name]: value }))
    setError((prev) => ({ ...prev, [name]: '' }))
  }
        
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
        if (value.model.length < 2)
        {
            newerror.model='Select model'
        }
           
      if (value.img.length===0)
      {
        newerror.img='Give car images'
      }
      if (value.carnumber.trim().length === 0)
      {
        newerror.carnumber='Enter your car number.'
      }
      if (value.passengerseat.trim().length === 0)
      {newerror.passengerseat='Please select passenger seat number'

      }
       if (value.transmission.trim().length === 0) {
         newerror.transmission = 'Please select transmission system'
       }
if (value.aircool.trim().length === 0) {
         newerror.air = 'Please select a mode'
       }
if (value.doors.trim().length === 0) {
  newerror.doors = 'Please select door number'
}

        if (value.message.trim().length===0)
        { newerror.message = 'Enter something' }
        setError(newerror)
        if (Object.keys(newerror).length=== 0)
        {
          const submissionJSON = {
            fname: value.fname,
            lname: value.lname,
            email:value.email,
        phone:value.phone,
        carbrand:value.carbrand,
        model:value.model,
        img:value.img.map((file)=>file.name),
            carnumber: value.carnumber,
        passengerseat:value.passengerseat,
            transmission: value.transmission,
            aircool: value.aircool,
            doors:value.doors,
            message: value.message,
        submittedAt: new Date().toISOString()
          }
            console.log('Submitted JSON:',submissionJSON)
          alert('Your car uploded ')
            setValue({
              fname: '',
              lname: '',
              email: '',
              phone: '',
              carbrand: '',
              model: '',
              img: [],
              carnumber: '',
              passengerseat: '',
              aircool: '',
              doors:'',
              message: '',
            })
          
        }
        else {
            alert('Try again!')
        }
    

    }


    return (
      <>
        <div>
          <div
            className='w-full justify-center h-150 items-center  bg-center bg-no-repeat   sm:bg-cover bg-black/40 bg-blend-darken py-66'
            style={{ backgroundImage: `url(${car})` }}
          >
            <h1 className='text-blue-100 text-[44px] text-center font-semibold font-Poppins  py-'>
              Become a renter
            </h1>
            <p className='text-blue-100 text-[20px] font-semibold'>
              Apply to become a renter. Give valid information and become a
              renter.
            </p>
          </div>
          <div className='py-30 w-[620px] m-auto mt-7    px-3 rounded-[4px] pt-7 mb-3'>
            <h1 className='text-center text-[27px] font-[300]'>
              Give your information
            </h1>

            <div className='flex flex-col gap-10 flex-wrap justify-center text-[14px] align-center py-10 '>
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
                  }`}
                >
                  <option value='' disabled>
                    Select Car Brand *
                  </option>
                  <option value='Toyota'>Toyota</option>
                  <option value='Honda'>Honda</option>
                  <option value='BMW'>BMW</option>
                  <option value='Tesla'>Tesla</option>
                  {/* <option value='Ford'>Ford</option>
                  <option value='Mercedes'>Mercedes</option> */}
                  <option value='Hyundai'>Hyundai</option>
                </select>

                <select
                  placeholder='Model*'
                  name='model'
                  value={value.model}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px] w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700 ${
                    error.model ? 'border-red-500 ' : 'border-[#f0f0f0]'
                  }`}
                >
                  <option value=''>Select model</option>
                  {value.carbrand === 'Toyota' && (
                    <>
                      <option value='Corolla'>Corolla</option>
                      <option value='Camry'>Camry</option>
                      <option value='Hybrid'>Hybrid</option>
                      <option vlaue='Supra'>Supra</option>
                      <option vlaue='Supra'>Supra</option>
                      <option vlaue='Frotuner'>Frotuner</option>
                    </>
                  )}
                  {value.carbrand === 'Honda' && (
                    <>
                      <option value='Civic'>Civic</option>
                      <option value='Accord'>Accord</option>
                      <option value='CR-V'>CR-V</option>
                      <option value='City'>City</option>
                    </>
                  )}

                  {value.carbrand === 'BMW' && (
                    <>
                      <option value='X5'>X5</option>
                      <option value='X7'>X7</option>
                      <option value='M3'>M3</option>
                      <option value='M5'>M5</option>
                    </>
                  )}
                  {value.carbrand === 'Tesla' && (
                    <>
                      <option value='Model S'>Model S</option>
                      <option value='Model 3'>Model 3</option>
                      <option value='Model X'>Model X</option>
                      <option value='Model Y'>Model Y</option>
                    </>
                  )}
                  {value.carbrand === 'Hyundai' && (
                    <>
                      <option value='Elantra'>Elantra</option>
                      <option value='Sonata'>Sonata</option>
                      <option value='Tucson'>Tucson</option>
                      <option value='Santa Fe'>Santa Fe</option>
                      <option value='Creta'>Creta</option>
                      <option value='i20'>i20</option>
                    </>
                  )}
                </select>
              </div>
              <div className='flex justify-center gap-7'>
                <div className='flex flex-col justify-center '>
                  {' '}
                  <input
                    type='file'
                    accept='image/*'
                    name='img'
                    multiple
                    // value={value.img}
                    onChange={handlechange}
                    placeholder='Give Images of your car*'
                    className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                      error.img ? 'border-red-500' : 'border-[#f0f0f0]'
                    }`}
                  />
                  {value.img.length > 0 && (
                    <div className='flex gap-1 flex-wrap mt-1 '>
                      {value.img.map((file, index) => (
                        <div key={index} className='relative '>
                          {/* Image Preview */}
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`preview ${index + 1}`}
                            className='w-[120px] h-[100px] object-cover rounded shadow'
                          />

                          {/* Remove Button */}
                          <button
                            type='button'
                            onClick={() => {
                              const updatedImgs = value.img.filter(
                                (_, i) => i !== index
                              )
                              setValue({ ...value, img: updatedImgs })
                            }}
                            className='absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded'
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}{' '}
                </div>
                <input
                  placeholder='Car number*'
                  name='carnumber'
                  value={value.carnumber}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px]  w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.carnumber ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                />
              </div>
              <div className='flex justify-center gap-7'>
                <select
                  name='passengerseat'
                  value={value.passengerseat}
                  onChange={handlechange}
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.passengerseat ? 'border-red-500' : 'border-[#f0f0f0]'
                  }`}
                ><option value='' disabled>Select seat</option>
                  <option value='2 Passangers'>2 Passangers</option>
                  <option value='4 Passangers'>4 Passangers</option>
                  <option value='6 Passangers'>6 Passangers</option>
                </select>

                <select
                  name='transmission'
                  value={value.transmission}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px]  w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.transmission ? 'border-red-500' : 'border-[#f0f0f0]'
                    }`}>
                  <option value='' disabled>Select transmission</option>
                  <option value='automatic-transmission'>Auto</option>
                  <option value='manual-transmission'>Manual</option>
          </select>
                
              </div>
              <div className='flex justify-center gap-7'>
                <select
                  name='aircool'
                  value={value.aircool}
                  onChange={handlechange}
                  className={`border-[1px] border-solid border-[#f0f0f0]  h-[48px] w-[280px] px-5 placeholder:text-[16px] rounded-[4px] text-gray-700  ${
                    error.aircool ? 'border-red-500' : 'border-[#f0f0f0]'
                    }`}>
                  <option value='' disabled>Select car cooling system</option>
                  <option value='AC' >Air Conditioning </option>
                  <option value='Motorfan' >Blower Motor/Fan</option>

                  </select>
                
                <select
                  name='doors'
                  value={value.doors}
                  onChange={handlechange}
                  className={`border-[1px] h-[48px]  w-[280px] border-solid border-[#f0f0f0] px-5 placeholder:text-[16px] rounded-[4px]  text-gray-700 ${
                    error.doors ? 'border-red-500' : 'border-[#f0f0f0]'
                    }`}>
                  <option value='' disabled>Select door</option>
                  <option value='2 Doors' >2 Doors</option>
                  <option value='4 Doors' >4 Doors</option>

                  </select>
              </div>

              <input
                placeholder='Give more details of your car*'
                name='message'
                value={value.message}
                onChange={handlechange}
                className={`w-[590px] ml-1 border-[1px] rounded-[4px] h-[150px]  border-solid border-[#f0f0f0] pb-20 px-4   placeholder:text-[16px] text-gray-700 ${
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