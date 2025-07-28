import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import leftcomma from '../assets/“.png'
import rightcomma from '../assets/rightcomma.png'
import charlie from '../assets/Charlie.png'
import jenny from '../assets/Jenny.png'
import stars from '../assets/5img.svg'
// import { Autoplay, Grid } from "swiper/modules";
const reviews = [
  {
    img: charlie,
    rate: ['5.0', 'stars'],
    img1: stars,
    response:
      "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    name: 'Charlie Johnson',
    location: 'From New York, US',
  },
  {
    img: jenny,
    rate: ['5.0', 'stars'],
    img1: stars,
    response:
      '“I have been using your services for 3 years. Your service is great, I will continue to use your service.”',
    name: 'Jenny Wilson',
    location: 'From New York, US',
  },
  {
    img: charlie,
    rate: ['5.0', 'stars'],
    img1: stars,
    response:
      "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
    name: 'Charlie Johnson',
    location: 'From New York, US',
  },
]

export function Testimonial() {
    return (
      <>
        <div className='mt-34  h-[864px] w-full bg-[#edf0f5] font-Poppins '>
          <div className='flex gap-30 items-center  w-full justify-center '>
            <img src={leftcomma} className='relative top-30' />
            <div className='px-3'>
              <h3 className='m-auto h-[42px] w-[161px] py-2.5 text-[14px] bg-[#c0daf5] font-medium tracking-[1px]  text-[#1572D3]'>
                TESTIMONIALS
              </h3>
              <h1 className='2xl:text-[38px] xl:text-[38px] lg:text-[30px] font-medium'>
                What people say about us?
              </h1>
            </div>
            <img src={rightcomma} className='relative bottom-10' />
          </div>
          <div className='2xl:h-[660px] xl:h-[500px] py-10 '>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={-160}
              slidesPerView={2}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={3000}
              grabCursor={true}
              freeMode={true}
              loop={true}
              breakpoints={{
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 260,
                },
                1450: {
                  slidesPerView: 2,
                  spaceBetween: -160,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {reviews.map((rec, index) => (
                <SwiperSlide key={index}>
                  <div class='flex  2xl:gap-6 xl:gap-6 lg:gap-3 bg-white shadow-[0_12px_39px_rgb(15,30,104,0.2)] h-[420px] 2xl:w-[794px] xl:w-[700px] lg:w-[650px] rounded-[24px] relative mt-12  z-34'>
                    <img class='  h-[438px] w-[397px]' src={rec.img} />
                    <div className='flex flex-col text-start'>
                      <h2 className='text-[64px] px-1 font-medium'>
                        {rec?.rate?.[0]}
                        <span className='text-[34px] ml-3'>
                          {rec?.rate?.[1]}
                        </span>
                      </h2>
                      <img src={rec.img1} className='h-[20px] w-[108px] px-2' />
                      <p className='text-[18px] pl-2 pr-12'>{rec.response}</p>
                      <h3 className='text-[24px] mt-13 font-medium'>
                        {rec.name}
                      </h3>
                      <h4 className='text-[14px]'>{rec.location}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    )
}
