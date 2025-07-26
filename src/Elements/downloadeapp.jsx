import React from "react";
import iphon from '../assets/iPhone 14 Pro Space Black Mockup.png'
// import App from '../assets/Frame 2.svg'
import Appleapp from '../assets/AppleAPPstore.svg'
import Googleplay from '../assets/Google Play.png' 
import frame from '../assets/UP.svg'
export function DownloadeApp() {
    return (
      <>
        <div className='flex justify-between'>
          <div className='relative'>
            <img src={frame} />
          </div>
          <div className='absolute mt-35 ml-30'>
            <h3 className='text-[15px] font-medium h-[42px] w-[146px] ml-7 text-[#1572D3]  bg-[#cde2f9] rounded-[8px] py-2.5'>
              DOWNLOAD
            </h3>
            <div className="leading-15">
              <h1 className='text-[58px] font-[610] text-[#282828]  px-5'>
                Download Rentcars{' '}
              </h1>
              <h1 className='mr-40 text-[58px] font-[610] text-[#282828] '>
                App for <span className='text-[#1572D3]'>FREE</span>
              </h1>
            </div>

            <p className='text-[17px] font-normal mr-45 mt-9 pt-4'>
              For faster,easir booking and exclusive deals.
            </p>
                    <div className="flex gap-5 ml-3.5 mt-10">
                        <img src={Googleplay} />
                        <img src={ Appleapp} />
           </div>
          </div>
          <div>
            <img src={iphon} className="mt-18"/>
          </div>
        </div>
      </>
    )
}