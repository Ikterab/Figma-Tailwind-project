import React from "react";
import Honda from '../assets/Honda.svg'
import Jaguar from '../assets/Jaguar.svg'
import Nissan from '../assets/Nissan.svg'
import Volve from '../assets/Volve.svg'
import Audi from '../assets/Audi.svg'
import Acura from '../assets/Acura.svg'
import location1 from '../assets/location-tick.svg'
import calander from '../assets/Calendar1.svg'
import car from '../assets/car.svg'
    const steps = [
      {
        img: location1,
        text: 'Choose location',
        description: 'Choose your and find your best car',
      },
      {
        img: calander,
        text: 'Pick-up date',
        description: 'Select your pick up date and time to book your car',
      },
      {
        img: car,
        text: 'Book your car',
        description: 'Book your car and we will deliver it directly to you',
      },
    ]
export function Carbrand() {
      

    return (
      <>
        <div className='Companies' class=' w-full text-center font-[Poppins]'>
          <div className='text-center'>
            <h3 class='font-[Poppins] text-[14px]  font-medium px-5 py-3 border-none  bg-[#ECF5FF] text-[#1572D3] w-[150px] m-auto whitespace-nowrap'>
              HOW IT WORK
            </h3>
            <h1 class='text-[48px] font-[Poppins] font-medium  mt-6'>
              Rent with following 3 working steps
            </h1>
          </div>
          <div className='flex justify-center 2xl:gap-45 xl:gap-20 ml-18 mt-26 '>
            {steps.map((steps, index) => (
              <div
                key={index}
                class='flex flex-col justify-center items-center'
              >
                <div class='h-[112px] w-[112px] bg-[#ECF5FF] px-7.5 py-7.5 rounded-[15px]'>
                  <img src={steps.img} class='h-[48px] w-[48px] ' />
                </div>
                <h2 class='text-[20px] font-medium'>{steps.text}</h2>
                <p class='2xl:w-[249px] 2xl:text-[#6D6D6D] 2xl:text-[14px] 2xl:mt-4 2xl:px-auto 2xl:py-auto xl:w-[249px] xl:text-[#6D6D6D] xl:text-[14px] xl:mt-4 xl:px-auto xl:py-auto lg:w-[249px] lg:text-[#6D6D6D] lg:text-[14px] lg:mt-4 lg:px-5 lg:py-1 md:text-[#6D6D6D] md:text-[14px] md:mt-4 md:px-4 md:py-1'>
                  {steps.description}
                </p>
              </div>
            ))}
          </div>
          <div
            className='images'
            class='flex  2xl:gap-[120px] xl:gap-[60px] lg:gap-[50px] md:gap-[20px]  2xl:w-[200px] xl:w-[160px] lg:w-[120px] md:w-[100px] mt-40 xl:ml-9 lg:ml-10 md:ml-10 '
          >
            <img src={Honda} />
            <img src={Jaguar} />
            <img src={Nissan} />
            <img src={Volve} />
            <img src={Audi} />
            <img src={Acura} />
          </div>
        </div>
      </>
    )
    
} 


