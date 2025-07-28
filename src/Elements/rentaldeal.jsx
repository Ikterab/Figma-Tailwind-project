import React from "react";
import jaguar from '../assets/Jaguarcar.svg'
import Audi from '../assets/Audigari.svg'
import BMW from '../assets/BMW M3.svg'
import lamborgini from '../assets/Lamborginicar.svg'
import star from '../assets/Star 1.svg'
import snow from '../assets/snow.svg'
import auto from '../assets/Auto.svg'
import door from '../assets/Door.svg'
import user from '../assets/user.svg'
import whitearrow from '../assets/whitearrow.svg'
import blackarrow from '../assets/black-arrow.svg'

const rental = [
  {
    img0: jaguar,
    brand: 'Jaguar XE L P250',
    img1: star,
    rate: 4.8,
    review: '(2436 reviews)',
    specification: {
      img2: [user, '4 Passangers'],
      img3: [auto, 'Auto'],
      img4: [snow, 'Air Conditioning'],
      img5: [door, '4 Doors'],
    },
    price: '$1800',
    day: '/day',
  },
  {
    img0: Audi,
    brand: 'Audi R8',
    img1: star,
    rate: 4.6,
    review: '(1936 reviews)',
    specification: {
      img2: [user, '2 Passangers'],
      img3: [auto, 'Auto'],
      img4: [snow, 'Air Conditioning'],
      img5: [door, '2 Doors'],
    },
    price: '$2100',
    day: '/day',
  },
  {
    img0: BMW,
    brand: 'BMW M3',
    img1: star,
    rate: 4.5,
    review: '(2036 reviews)',
    specification: {
      img2: [user, '4 Passangers'],
      img3: [auto, 'Auto'],
      img4: [snow, 'Air Conditioning'],
      img5: [door, '4 Doors'],
    },
    price: '$1600',
    day: '/day',
  },
  {
    img0: lamborgini,
    brand: 'Lamborghini Huracan',
    img1: star,
    rate: 4.3,
    review: '(2236 reviews)',
    specification: {
      img2: [user, '2 Passangers'],
      img3: [auto, 'Auto'],
      img4: [snow, 'Air Conditioning'],
      img5: [door, '2 Doors'],
    },
    price: '$2300',
    day: '/day',
  },
]
export function Rentals() {
    return (
      <>
        <div className='flex flex-col items-center font-[Poppins] w-full mt-10'>
          <h3 class='text[14px] text-[#1572D3] bg-[#d8e7f9] w-[226px] h-[42px] py-2 rounded-[8px]'>
            POPULAR RENTAL DEALS
          </h3>
          <h1 class='text-[38px] font-medium '>
            Most popular cars rental deals
          </h1>
          <div
            className='card'
            class=' flex flex-wrap justify-center items-center 2xl:gap-15 xl:gap-15 lg:gap-33 2xl:mt-40 xl:mt-20 lg:mt-10 text-start'
          >
            {rental.map((cars, index) => (
              <div
                key={index}
                class=' h-[405px] w-[256px] flex flex-col gap-1 bg-white rounded-[9px] shadow-[0_12px_24px_rgb(19,24,104,0.2)]'
              >
                <img
                  src={cars.img0}
                  class={`px-6 py-4 ${index % 2 !== 0 ? 'py-5.5' : ''}`}
                />
                <h3 className='whitespace-nowrap ml-6 text-[18px] font-medium'>
                  {cars.brand}
                </h3>
                <div class='flex gap-3 px-5 py-1'>
                  <img src={cars.img1} />
                  <div class='flex gap-1'>
                    <h3 class='text-[13px] font-medium'>{cars.rate}</h3>
                    <h3 class='whitespace-nowrap text-[#959595] text-[12px]'>
                      {cars.review}
                    </h3>
                  </div>
                </div>

                <div class='flex flex-wrap justify-between px-5 py-1 '>
                  <div class='flex gap-1 py-1'>
                    <img src={cars?.specification?.img2?.[0]} />
                    <p class='text-[12px] text-[#959595] font-normal whitespace-nowrap'>
                      {cars?.specification?.img2?.[1]}
                    </p>
                  </div>
                  <div class='flex gap-1 py-1'>
                    <img src={cars?.specification?.img3?.[0]} />
                    <p class='text-[12px] text-[#959595] font-normal whitespace-nowrap '>
                      {cars?.specification?.img3?.[1]}
                    </p>
                  </div>
                  <div class='flex whitespace-nowrap gap-1 py-1'>
                    <img src={cars?.specification?.img4?.[0]} />
                    <p class='text-[12px] text-[#959595] font-normal whitespace-nowrap'>
                      {cars?.specification?.img4?.[1]}
                    </p>
                  </div>
                  <div class='flex gap-1 py-1'>
                    <img src={cars?.specification?.img5?.[0]} />
                    <p class='text-[12px] text-[#959595] font-normal whitespace-nowrap  '>
                      {cars?.specification?.img5?.[1]}
                    </p>
                  </div>
                </div>
                <div class='flex justify-between px-1 mt-2 py-4 border-1 border-b-0 border-x-0 w-[208px] ml-6 border-[#E0E0E0]'>
                  <h3 class='text-[14px] text-[#595959] font-[300]'>Price</h3>
                  <div class='flex text-[14px]'>
                    <h3 class='text-[16px] font-medium'>{cars.price}</h3>
                    <h3 class='text-[#595959] text-[14px]'>{cars.day}</h3>
                  </div>
                </div>
                <button class='flex gap-1 ml-5  px-14 bg-[#1572D3] items-center w-[208px] h-[40px] rounded-[8px] text-[14px] text-white cursor-pointer'>
                  Rent now <img src={whitearrow} />
                </button>
              </div>
            ))}
          </div>
          <button class='flex gap-1 2xl:mt-20 xl:mt-10 lg:mt-10 bg-white w-[210px] h-[48px] rounded-[8px] text-[14px] font-medium text-[#959595] border-[#E0E0E0] hover:bg-[#E0E0E0] border-1  py-3 px-8 cursor-pointer '>
            Show all vehicles <img class='' src={blackarrow} />
          </button>
        </div>
      </>
    )
}






