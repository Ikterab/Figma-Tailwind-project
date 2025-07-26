import React from "react";
import Logo from '../assets/Frame 993.svg'
import Frame from '../assets/Frame.png'
import './navbar.css'

export function Navbar() {
    return (
      <>
        <div
          className='Navbar'
          class='flex    justify-between w-[100%] font-Poppins text-[#484848]  font-[500] text-[16px] z-10  bg-transparent py-3 px-20   '
        >
          <div className='logocontainer' class='items-start  '>
            <img src={Logo} class='h-[25.25px] w-[116px]' />
          </div>
          <div class='flex gap-10 '>
            <ul class='flex gap-20 list-none'>
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