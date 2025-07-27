import React from "react";
import App from '../assets/Frame 2.svg'
import Car from '../assets/wholecar.png'
// import Frame from '../assets/Frame.png'
import Location from '../assets/location.svg'
import Calander from '../assets/calendar.svg'
export function Advertisement() {
   
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
      <>
        <div
          className='Advertisement'
          class='flex flex-col justify-center align-middle w-full'
        >
          <div
            className='container1'
            class='flex  justify-between align-middle  '
          >
            <div
              className='subcontainer1 '
              class='w-[250px] h-[103px] flex flex-col gap-[20px] 2xl:mt-30 xl:mt-30 lg:mt-10 ml-18  '
            >
              <h1 class=' whitespace-nowrap text-[48px] text-[#242424] font-[Poppins] break-none font-semibold [word-spacing:3px]'>
                Find, book and<br></br>rent a car{' '}
                <span class='text-[#1572D3] font-semibold'>Easily</span>
              </h1>
              <p class='text-[18px] text-[#272727] w-[345px] h-[103px] font-[500] '>
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
              <img class='relative top-6' src={App} />
            </div>
            <div className='subcontainer2' class=' relative w-[100%]'>
              {/* <img class='w-[803px] h-[866px] overflow-hidden relative bottom-18 right-[-300px]' src={ Frame} />
                        <img class='overflow-hidden  w-[1048px] h-[537px] relative bottom-170 left-75'src={Car} /> */}
              <img
                className='2xl:relative 2xl:bottom-[98px] 2xl:h-[866px] 2xl:w-[800px] 2xl:-right-195 xl:w-[600px] xl:h-[600px] lg:w-[450px] lg:h-[500px]          
                xl:relative xl:-right-85 xl:bottom-[98px] lg:relative lg:-right-60 lg:bottom-[74px]
                '
                src={Car}
              />
            </div>
          </div>
          <div
            className='container2'
            class='flex 2xl:gap-10.5 2xl:w-[1180px] 2xl:py-4 2xl:px-11 border-none shadow-[0_6px_12px_rgb(19,24,172,0.2)] bg-white  relative 2xl:bottom-50 z-10 2xl:left-80 
            xl:gap-6.5  xl:w-[900px] xl:py-4 xl:px-11 xl:bottom-30  xl:left-30  lg:gap-6.5  lg:w-[900px] lg:py-4 lg:px-11 lg:bottom-18 lg:left-20
            '
          >
            {fliter.map((point, index) => (
              <div
                key={index}
                className='Filter'
                class={`flex gap-10.5  2xl:h-[50px] 2xl:w-[300px] xl:w-[300px] lg:w-[250px] border-2 px-0 border-y-0 border-r-0 ${
                  index === 0 ? 'border-x-0' : 'border-[#ACACAC] px-[39.5px]'
                }  
                  xl:w-[200px] xl:gap-10 lg:gap-3`}
              >
                <img src={point.img} />
                <div class='relative 2xl:right-10 2xl:w-[200px] xl:w-[100px] lg:w-[100px] xl:right-8'>
                  <h3
                    class={`text-[16px] font-medium text-[#3E3E3E] relative  whitespace-nowrap ${
                      index === 0 ? 'relative  2xl:right-6 xl:right-4 lg:right-4' : 'relative right-1'
                    }`}
                  >
                    {point.type}
                  </h3>
                  <p class='text-[14px] font-normal text-[#B6B6B6]   whitespace-nowrap'>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
            <button className='bg-[#1572D3] 2xl:px-12 xl:px-10 lg:px-8 rounded-[8px] text-[#FFFFFF] font-[Poppins] cursor-pointer '>
              Search
            </button>
          </div>
        </div>
      </>
    )
}