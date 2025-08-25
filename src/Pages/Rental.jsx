import React from "react";
import { useState } from "react";
// import background from '../assets/2022-12-toyota-corolla-sedan-ascent-sport-hybrid-hero-16x9-1.jpg'
import Calander from '../assets/calendar.svg'
import Location from '../assets/location.svg'
import call from '../assets/call.svg'
import sms from '../assets/sms.svg'
import facebook from '../assets/facebook.svg'
import instra from '../assets/instagram.svg'
import { rental } from "../Elements/rentaldeal";

function RentalPage() {
     const [selection,setSelection]=useState({brand:null, model:[]})
  
  
  // const carbrand=['Toyota', 'Honda' , 'BMW', 'Tesla', 'Hyundai']
  const cardata = {
    Toyota: ['Corolla', 'Camry', 'RAV4'],
    Honda: ['Civic', 'Accord', 'CR-V'],
    BMW: ['X5', 'X3', 'M3'],
    Tesla: ['Model S', 'Model 3', 'Model X'],
    Hyundai: ['Elantra', 'Sonata', 'Tucson'],
  }

 
  const carbrand = Object.keys(cardata)
  const brandchange = (value) => {
    setSelection({
      brand: setSelection.brand === value ? null : value,
      model:[]
})    
  }
  const getCarsToDisplay = () => {
    if (!selection.brand) return rental
    if (!selection.model) { return Object.values(cardata[selection.brand].flat()) }
 
  return cardata[selection.brand][selection.model]
 
  }
  
  

const modelChange = (modelItem) => {
  setSelection((prev) => ({
    ...prev,
    model: prev.model.includes(modelItem)
      ? prev.model.filter((m) => m !== modelItem) // remove if selected
      : [...prev.model, modelItem], // add if not selected
  }))
}
  
  
  const fliter = [
          {
            img: Location,
            type: 'Location',
            description: 'Search your location',
          },
          {
            img: Calander,
            type: 'Pickup date',
            description: 'Tue 15 Feb, 09:00',
          },
          {
            img: Calander,
            type: 'Return date',
            description: 'Thu 16 Feb, 11:00',
          },
        ]
    return (
      <div>
        <div className="h-[800px] w-full flex flex-col justify-start items-start  bg-[url('/src/assets/carsimg/8_s.jpg')]  bg-center bg-cover bg-no-repeat overflow-hidden py-10  ">
          <div className='px-40'>
            <h1 className='text-[#eaf3f3ea] font-semibold text-[50px] font-Poppins text-start flex justify-start  '>
              Find, book and rent a car easily
              {/* <span className='px-4 text-blue-400'>Easily</span> */}
            </h1>
            <p className='flex justify-start text-[20px] text-start  text-[#eaf3f3ea]'>
              Find a wide selection of cars according to your needs.<br></br>
              Book your car anytime you want.<br></br> For more details you can
              conatct with us.
            </p>
            <div className='flex gap-7 py-6'>
              <img
                src={call}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
              <img
                src={sms}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
              <img
                src={facebook}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
              <img
                src={instra}
                className=' w-[60px] px-[10px] py-[4px] rounded-[50%] bg-black'
              />
            </div>
          </div>
        </div>
        <div className=' flex justify-center items-center mt-3 '>
          <div
            className='flex m-auto text-center justify-center  2xl:gap-10.5 2xl:w-[1180px] 2xl:py-4 2xl:px-11 border-none shadow-[1px_2px_12px_rgb(19,24,172,0.3)] bg-white    
            xl:gap-6.5  xl:w-[900px] xl:py-4 xl:px-11   lg:gap-6.5  lg:w-[900px] lg:py-4 lg:px-11  md:gap-6.5  md:w-[700px] md:py-4 md:px-3  sm:w-[620px] sm:gap-1 sm:py-3 sm:px-3  sm:flex-nowrap sm:m-0
           flex-wrap w-[100%]  gap-10 py-4 px-4
            '
          >
            {fliter.map((point, index) => (
              <div
                key={index}
                className='Filter'
                class={`flex w-[150px] 2xl:gap-10.5 2xl:flex-nowrap 2xl:h-[50px] 2xl:w-[300px]  xl:flex-nowrap xl:h-[50px] xl:gap-10.5 xl:w-[200px] lg:flex-nowrap lg:h-[50px]  lg:gap-10.5 lg:w-[250px] md:flex-nowrap md:h-[40px]  md:gap-10.5 md:w-[160px] sm:flex-nowrap  sm:h-[50px]  sm:gap-0  sm:w-[160px] sm:border-2 px-0 sm:border-y-0  sm:border-r-0 ${
                  index === 0
                    ? 'sm:border-x-0'
                    : 'border-[#ACACAC] 2xl:px-[39.5px] xl:px-[39.5px] lg:px-[39.5px] md:px-[25.5px] '
                }  
                  xl:w-[200px] xl:gap-10 lg:gap-3`}
              >
                <img src={point.img} className='' />
                <div class='relative  m-auto  2xl:right-10 2xl:w-[200px] xl:w-[100px] lg:w-[100px] md:w-[80px] sm:w-[70px] xl:right-8 md:right-9 sm:right-5'>
                  <h3
                    class={` 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[13px] font-medium text-[#3E3E3E] relative  whitespace-nowrap ${
                      index === 0
                        ? 'relative  2xl:right-7 xl:right-4 lg:right-4 md:right-3 sm:right-2'
                        : 'relative 2xl:right-1 xl:right-1 lg:right-1 md:right-1 sm:right-0'
                    }`}
                  >
                    {point.type}
                  </h3>
                  <p class='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] font-normal text-[#B6B6B6]   whitespace-nowrap'>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
            <button className='bg-[#1572D3] 2xl:px-12 xl:px-10 lg:px-8 md:px-7 sm:px-6   px-9 py-3 m-auto rounded-[8px] text-[#FFFFFF] font-[Poppins] cursor-pointer '>
              Search
            </button>
          </div>
        </div>
        <div className="flex">
          <div className='flex flex-col gap-5 '>
            {' '}
            <div className=' w-[140px] bg-white shadow-[1px_2px_12px_rgb(0,0,0,0.3)] flex flex-col justify-center gap-3 items-start  mt-6 ml-4  px-5 py-5 rounded-sm '>
              <h className='text-[15px] font-semibold'>Car brands</h>

              {carbrand.map((Brand, index) => (
                <label key={index} className='flex gap-2'>
                  <input
                    type='checkbox'
                    checked={selection.brand === Brand}
                    onClick={() => brandchange(Brand)}
                  />
                  <span>{Brand}</span>
                </label>
              ))}
            </div>
            {selection.brand && (
              <div className='flex flex-col gap-3 w-[140px]  bg-white  shadow-[1px_2px_12px_rgb(0,0,0,0.3)] items-start ml-4 px-4 py-5 rounded-sm'>
                <h2 className='text-[15px] font-semibold'>
                  {selection.brand} Models:
                </h2>
                {cardata[selection?.brand].map((models, index) => (
                  <label key={index} className='flex gap-2'>
                    <input
                      type='checkbox'
                      checked={selection.model.includes(models)}
                      onClick={() => modelChange(models)}
                    />
                    <span>{models}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div>


            
          </div>
        </div>
      </div>
    )
}
export default RentalPage




//  <label className='flex gap-2'>
//             <input type='checkbox' value='Toyota' />
//             <span>Toyota</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='Honda' />
//             <span>Honda</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='BMW' />
//             <span>BMW</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='Tesla' />
//             <span>Tesla</span>
//           </label>
//           <label className='flex gap-2'>
//             <input type='checkbox' value='Hyundai' />
//             <span>Hyundai</span>
//           </label>