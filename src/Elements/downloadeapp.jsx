import React from "react";
import iphon from '../assets/iPhone 14 Pro Space Black Mockup.png'
// import App from '../assets/Frame 2.svg'
import Appleapp from '../assets/AppleAPPstore.svg'
import Googleplay from '../assets/Google Play.png' 
import frame from '../assets/UP.svg'
export function DownloadeApp() {
    return (
      <>
        <div className='flex justify-between w-full  whitespace-none font-[Poppins]'>
          <div className='relative'>
            <img src={frame} />
          </div>
          <div className='absolute mt-35 2xl:ml-30 xl:ml-30 lg:ml-5'>
            <h3 className='text-[15px] font-medium h-[42px] w-[146px] ml-7 text-[#1572D3]  bg-[#cde2f9] rounded-[8px] py-2.5'>
              DOWNLOAD
            </h3>
            <div className='leading-15'>
              <h1 className='2xl:text-[48px] 2xl:font-[610] 2xl:text-[#282828]  2xl:px-5  xl:text-[48px] xl:font-[610] xl:text-[#282828]  xl:px-5 lg:text-[48px] lg:font-[600] lg:text-[#282828]  lg:px-5'>
                Download Rentcars{' '}
              </h1>
              <h1 className='2xl:mr-40 2xl:text-[48px] 2xl:font-[610] 2xl:text-[#282828]  xl:mr-40 xl:text-[48px] xl:font-[610] xl:text-[#282828] lg:mr-37 lg:text-[48px] lg:font-[610] lg:text-[#282828]'>
                App for <span className='text-[#1572D3]'>FREE</span>
              </h1>
            </div>

            <p className='text-[17px] font-normal mr-25 mt-9 pt-4'>
              For faster,easir booking and exclusive deals.
            </p>
            <div className='flex gap-5 ml-3.5 2xl:mt-10 xl:mt-10 lg:mt-5'>
              <img src={Googleplay} />
              <img src={Appleapp} />
            </div>
          </div>
          <div>
            <img src={iphon} className='2xl:mt-18 xl:mt-18 lg:mt-24' />
          </div>
        </div>
      </>
    )
}