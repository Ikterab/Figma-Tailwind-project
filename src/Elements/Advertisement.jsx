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
          class='flex flex-col justify-center align-middle w-full font-Poppins'
        >
          <div
            className='container1'
            class='flex  justify-between align-middle  '
          >
            <div
              className='subcontainer1 '
              class='w-[250px] h-[103px] flex flex-col gap-[10px] 2xl:mt-30 xl:mt-30 lg:mt-10 2xl:ml-18 xl:ml-18 lg:ml-18 md:ml-12'
            >
              <h1 class=' whitespace-nowrap 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[30px] text-[#242424] font-[Poppins] break-none font-semibold [word-spacing:3px]'>
                Find, book and<br></br>rent a car{' '}
                <span class='text-[#1572D3] font-semibold'>Easily</span>
              </h1>
              <p class='text-[18px] text-[#272727] 2xl:w-[345px] xl:w-[345px] lg:w-[345px] md:w-[340px] 2xl:h-[103px] xl:h-[103px] lg:h-[103px] md:h-[99px] 2xl:px-0   font-[500] '>
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
              <img
                class='relative 2xl:top-6 xl:top-6 lg:top-6 md:top-5'
                src={App}
              />
            </div>
            <div className='subcontainer2' class=' relative w-[100%]'>
              {/* <img class='w-[803px] h-[866px] overflow-hidden relative bottom-18 right-[-300px]' src={ Frame} />
                        <img class='overflow-hidden  w-[1048px] h-[537px] relative bottom-170 left-75'src={Car} /> */}
              <img
                className='z-60 2xl:relative 2xl:bottom-[98px] 2xl:h-[866px] 2xl:w-[800px] 2xl:-right-195 xl:w-[600px] xl:h-[600px] lg:w-[450px] lg:h-[500px]          
                xl:relative xl:-right-85 xl:bottom-[98px] lg:relative lg:-right-60 lg:bottom-[74px] md:w-[400px] md:relative md:-right-18 md:bottom-[80px]
                '
                src={Car}
              />
            </div>
          </div>
          <div
            className='container2'
            class='flex 2xl:gap-10.5 2xl:w-[1180px] 2xl:py-4 2xl:px-11 border-none shadow-[0_6px_12px_rgb(19,24,172,0.2)] bg-white  relative 2xl:bottom-50 z-10 2xl:left-80 
            xl:gap-6.5  xl:w-[900px] xl:py-4 xl:px-11 xl:bottom-30  xl:left-30  lg:gap-6.5  lg:w-[900px] lg:py-4 lg:px-11 lg:bottom-18 lg:left-20 md:gap-6.5  md:w-[700px] md:py-4 md:px-3 md:bottom-18 md:left-10
            '
          >
            {fliter.map((point, index) => (
              <div
                key={index}
                className='Filter'
                class={`flex gap-10.5  2xl:h-[50px] 2xl:w-[300px] xl:w-[300px] lg:w-[250px] md:w-[160px] border-2 px-0 border-y-0 border-r-0 ${
                  index === 0
                    ? 'border-x-0'
                    : 'border-[#ACACAC] 2xl:px-[39.5px] xl:px-[39.5px] lg:px-[39.5px] md:px-[25.5px]'
                }  
                  xl:w-[200px] xl:gap-10 lg:gap-3`}
              >
                <img src={point.img} />
                <div class='relative 2xl:right-10 2xl:w-[200px] xl:w-[100px] lg:w-[100px] md:w-[80px] xl:right-8 md:right-9'>
                  <h3
                    class={` 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] font-medium text-[#3E3E3E] relative  whitespace-nowrap ${
                      index === 0
                        ? 'relative  2xl:right-6 xl:right-4 lg:right-4 md:right-3'
                        : 'relative right-1'
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
            <button className='bg-[#1572D3] 2xl:px-12 xl:px-10 lg:px-8 md:px-7 rounded-[8px] text-[#FFFFFF] font-[Poppins] cursor-pointer '>
              Search
            </button>
          </div>
        </div>
      </>
    )
}