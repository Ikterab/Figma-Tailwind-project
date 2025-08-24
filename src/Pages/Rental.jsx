import React from "react";
import Calander from '../assets/calendar.svg'
import Location from '../assets/location.svg'

function RentalPage() {
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
        <div className=" flex justify-center items-center ">
          <div
            className='flex m-auto text-center justify-center  2xl:gap-10.5 2xl:w-[1180px] 2xl:py-4 2xl:px-11 border-none shadow-[0_6px_12px_rgb(19,24,172,0.2)] bg-white    
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
      </>
    )
}
export default RentalPage
