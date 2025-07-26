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
        <div className='Companies' class='text-center font-[Poppins]'>
          <div className='text-center'>
            <h3 class='font-[Poppins] text-[14px]  font-medium px-5 py-3 border-none  bg-[#ECF5FF] text-[#1572D3] w-[150px] m-auto whitespace-nowrap'>
              HOW IT WORK
            </h3>
            <h1 class='text-[48px] font-[Poppins] font-medium  mt-6'>
              Rent with following 3 working steps
            </h1>
          </div>
          <div className='flex justify-center gap-45 ml-18 mt-26 '>
            {steps.map((steps, index) => (
              <div
                key={index}
                class='flex flex-col justify-center items-center'
              >
                <div class='h-[112px] w-[112px] bg-[#ECF5FF] px-7.5 py-7.5 rounded-[15px]'>
                  <img src={steps.img} class='h-[48px] w-[48px] ' />
                </div>
                <h2 class='text-[20px] font-medium'>{steps.text}</h2>
                <p class='w-[249px] text-[#6D6D6D] text-[14px] mt-4'>{steps.description}</p>
              </div>
            ))}
          </div>
          <div className='images' class='flex gap-[120px] mt-40'>
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

