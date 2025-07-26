import React from "react";
import audigari from '../assets/Audigari.png'
import wallet from '../assets/wallet.svg'
import usertick from '../assets/user-tick.svg'
import service from '../assets/24-support.png'
import support from '../assets/messages-2.svg'

const offers = [
  {
    img: wallet,
    type: 'Best price guranteed',
    description: "Find a lower price? We'll refund you 100% of the difference",
  },

  {
    img: usertick,
    type: 'Experience driver',
    description:
      'Don’t have driver? Don’t worry, we have many experienced driver for you.',
  },
  {
    img: service,
    type: '24 hour car delivery',
    description:'Book your car anytime and we will deliver it directly to you.',
  },
  {
    img: support,
    type: '24/7 technical support',
    description: "Have a question? Contact Rentcars support any time when you have problem.",
  },
]
export function Offers() {
  return (
    <>
      <div
        className='main'
        class='flex justify-center gap-40 items-center font-[Poppins]'
      >
        <img src={audigari} class='' />
        <div className='flex flex-col gap-7'>
          <h3 class='text-[15px] text-[#1572D3] bg-[#ECF5FF] h-[42px] w-[182px] pt- px-6.5 py-3 text-start  font-medium '>
            WHY CHOOSE US
          </h3>
          <h1 class='text-[38px] font-medium text-start '>
            We offer the best experience with our rental deals
          </h1>
          {offers.map((offers, index) => (
            <div key={index} className='flex gap-5'>
              <div class='h-[75px] w-[75px] bg-[#ECF5FF] py-5 px-5 rounded-[16px] '>
                <img class='w-[35px] h-[35px]' src={offers.img} />
              </div>
              <div class='text-start'>
                <h3 class='text-[20px] font-medium'>{offers.type}</h3>
                <p class='text-[17px] text-[#6D6D6D] font-[400]'> {offers.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
    
}