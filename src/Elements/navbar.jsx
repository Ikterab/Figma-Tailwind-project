import React from "react";
import Logo from '../assets/Frame 993.svg'
import Frame from '../assets/Frame.png'
import './navbar.css'

export function Navbar() {
    return (
      <>
        <div
          className='Navbar'
          class='flex justify-between w-[100%] font-Poppins text-[#484848]  font-[500] text-[16px] z-10  bg-transparent 2xl:py-3 2xl:px-20 xl:py-3 xl:px-20   lg:py-4 lg:px-3 whitespace-nowrap'
        >
          <div className='logocontainer' class='items-start  '>
            <img
              src={Logo}
              class='2xl:h-[25.25px] 2xl:w-[116px] xl:h-[25.25px] xl:w-[116px] lg:h-[25.25px] lg:w-[116px]'
            />
          </div>
          <div class='flex 2xl:gap-10 xl:gap-10 lg:gap-5'>
            <ul class='flex 2xl:gap-20 xl:gap-20 lg:gap-10 list-none'>
              <li>Become a renter</li>
              <li>Rental deals</li>
              <li>How it work</li>
              <li>Why choose us</li>
            </ul>
            <ul class='flex gap-[55px]'>
              <li>Sign in</li>
              <li class='h-[43px] w-[125px] relative bottom-2 px-[32px] py-[9px] bg-[#1572D3] rounded-[8px]'>
                Sign up
              </li>
            </ul>
          </div>
        </div>
      </>
    )   
    
}