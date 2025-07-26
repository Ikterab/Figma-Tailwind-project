import React from "react";
import logo from '../assets/logoforfooter.svg'
import location from '../assets/locationforfo0oter.svg'
import call from '../assets/call.svg'
import sms from '../assets/sms.svg'
import facebook from '../assets/facebook.svg'
import instra from '../assets/instagram.svg'
import youtubr from '../assets/youtube.svg'

export function Footer() {
    const pdesign = 'mt-2 font-normal text-[14px] text-[#D6D6D6] '
    return (
      <>
        <div className='flex flex-col w-full  bg-[#051C34] text-white gap-10 items-start '>
          <div className='flex justify-self-start  gap-50 mt-15 ml-60  w-[1440px] h-[250px] border-w- border-1 border-x-0 border-t-0  border-[#575757]'>
            <div className='flex flex-col gap-2'>
              <img src={logo} class='h-[32px] w-[116px]' />
              <div className='flex gap-1'>
                <img src={location} />
                <p className={pdesign}>
                  25566 Hc 1, Glenallen, Alaska, 99588, USA
                </p>
              </div>
              <div className='flex gap-1'>
                <img src={call} />
                <p className={pdesign}>+603 4784 273 12</p>
              </div>
              <div className='flex gap-1'>
                <img src={sms} />
                <p className={pdesign}>rentcars@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-40'>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>Our products</h3>
                <p className={pdesign}>Career</p>
                <p className={pdesign}>Car</p>
                <p className={pdesign}>Packages</p>
                <p className={pdesign}>Features</p>
                <p className={pdesign}>Priceline</p>
              </div>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>Resources</h3>
                {/* <div class='flex flex-col items-start'> */}
                <p className={pdesign}>Download</p>
                <p className={pdesign}>Help Center</p>
                <p className={pdesign}>Guides</p>
                <p className={pdesign}>Partner Network</p>
                <p className={pdesign}>Cruises</p>
                <p className={pdesign}>Developer</p>
                {/* </div> */}
              </div>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>About Rentcars</h3>
                {/* <div> */} <p className={pdesign}>Why choose us?</p>
                <p className={pdesign}>Our Story</p>
                <p className={pdesign}>Press center</p>
                <p className={pdesign}>Advertise</p>
                {/* </div> */}
              </div>
              <div className='footerparts'>
                <h3 className='footerpartHeader'>Follow Us</h3>
                <div className='flex gap-3 mt-2'>
                  <img src={facebook} />
                  <img src={instra} />
                  <img src={youtubr} />
                </div>
              </div>
            </div>
          </div>
          <div class='ml-60 mb-10'>
            <p className={pdesign}>
              Copyright 2023 ・ Rentcars, All Rights Reserved
            </p>
          </div>
        </div>
      </>
    )
}