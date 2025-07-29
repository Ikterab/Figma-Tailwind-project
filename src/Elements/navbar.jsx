import React, { useState } from "react";
import hamburger from '../assets/menu-burger-horizontal-svgrepo-com.svg' 
import Logo from '../assets/Frame 993.svg'
import close from '../assets/closeicon.svg' 
import Frame from '../assets/Frame.png'
import './navbar.css'

export function Navbar() {
    const [open , setOpen ]= useState(false)
  return (
    <>
      <div
        className='Navbar'
        class='flex justify-between w-[100%]  font-Poppins text-[#484848]  font-[500] text-[16px] z-10  bg-transparent  2xl:px-20  xl:px-20    lg:px-3 md: whitespace-nowrap'
      >
        <ul
          className={`  flex flex-col gap-7 items-start w-[300px] fixed z-100 h-[100%] bg-[#c6dcf1] px-7 py-9 transition-all duration-300 ${
            open === true ? 'left-0' : '-left-[300px]'
          }`}
        >
          <li className='flex justify-center gap-12 px-'>
            <img src={Logo} />
            <img
              src={close}
              className='cursor-pointer'
              onClick={() => setOpen(false)}
            />
          </li>
          <li className='sideitem'>Become a renter</li>
          <li className='sideitem'>Rental deals</li>
          <li className='sideitem'>How it work</li>
          <li className='sideitem'>Why choose us</li>
        </ul>
        {open && (
          <div
            className='colordrop'
            onClick={() => {
              setOpen(false)
            }}
          ></div>
        )}
        <div className='flex justify-between w-[100%] 2xl:py-5 xl:py-3 lg:py-3 md:py-5 md:px-5 sm:px-5 sm:py-5'>
          {' '}
          <div className='logocontainer' class='items-start flex gap-2  '>
            <img
              src={hamburger}
              className='2xl:block xl:block lg:hidden md:w-[20px] sm:w-[20px] cursor-pointer'
              onClick={() => setOpen(true)}
            />
            <img
              src={Logo}
              class='2xl:h-[25.25px] 2xl:w-[116px]  xl:h-[25.25px] xl:w-[116px] lg:h-[25.25px] lg:w-[116px]'
            />
          </div>
          <div class='flex 2xl:gap-10 xl:gap-10 lg:gap-5'>
            <ul class='2xl:flex xl:flex lg:flex  2xl:gap-20 xl:gap-20 lg:gap-10 md:hidden sm:hidden list-none '>
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
      </div>
    </>
  )   
    
}