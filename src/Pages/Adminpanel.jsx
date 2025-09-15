import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { LuUser } from 'react-icons/lu'
import Logo from '../assets/Frame 993.svg'
import { TbReport } from 'react-icons/tb'
import { SubmissionContext } from "../contextapiorserverapi/SubmissionContext";



export function AdminPannel() {
const { submission } =useContext(SubmissionContext)
  console.log(submission)
  const navigate = useNavigate()
  const [open, setOpen] = useState(null)
  const [owner, setOwner] = useState()
  
  useEffect(() => {
    setOwner([...submission])
  },[submission])
  
    const logout = () => {
  navigate('/Login')
}
  
  
  const handledeals = (p) => {
    setOpen((prev) =>( prev===p ? null : p))
 }
  
  return (
    <>
      <div className='flex'>
        <div className='flex h-[1000px] bg-blue-50  px-4 '>
          <ul className='flex flex-col gap-4 px-4 py-15 font-semibold font-[poppins]'>
            <li>
              <img src={Logo} className='h-[50px] w-[200px]' />
            </li>

            <li className='flex gap-2 text-[20px]'>
              <MdDashboard size={25} style={{ height: '35px' }} />
              Dahboard
            </li>
            <li
              onClick={() => handledeals('owner')}
              className='flex gap-2 text-[20px]'
            >
              <LuUser size={25} style={{ height: '35px' }} />
              Rentar Deals
            </li>
            <li
              onClick={() => handledeals('rental')}
              className='flex gap-2 text-[20px]'
            >
              <LuUser size={25} style={{ height: '35px' }} />
              Rental Deals
            </li>
            <li className='flex gap-2 text-[20px]'>
              <TbReport style={{ height: '35px' }} />
              Reports
            </li>
            <li onClick={logout} className='flex gap-2 text-[20px] '>
              <TbLogout style={{ height: '35px' }} />
              Logout
            </li>
          </ul>
        </div>

        <div>
          <h1 className='flex justify-center  text-2xl py-10'>
            Reservation List
          </h1>
          <div className='flex justify-center gap-10 ml-20 '>
            <div className='displayNumbers'>
              <h3>Pending</h3>
            </div>
            <div className='displayNumbers'>
              <h3>Total car rentars</h3>
            </div>
            <div className='displayNumbers'>
              <h3>Rent cars</h3>
            </div>
          </div>
          {open === 'rental' && (
            <div>
              <ul className='flex py-8 px-10 gap-10 text-[20px] font-'>
                <li>No.</li>
                <li>Pickup</li>
                <li>Return</li>
                <li>location</li>
                <li>Name</li>
                <li>Price</li>
              </ul>
            </div>
          )}
          {open === 'owner' && (
            <div>
              <ul className='flex py-8 px-10 gap-10 text-[20px] font-'>
                <li>No.</li>
                <li>Name</li>
                <li>Date</li>
                <li>location</li>
                <li>Brand</li>
                <li>Model</li>
                <li>Contact</li>
                <li>Email</li>
                <li>Price</li>
              </ul>
              {owner.map((renter, index) => (
                <ul
                  key={index}
                  className='flex py-8 px-10 gap-10 text-[20px] '
                >
                  <li>{index + 1}</li>
                  <li>
                    {renter?.fname}
                    {renter?.lname}
                  </li>
                  <li>{renter?.date}</li>
                  <li>{renter?.location}</li>
                  <li>{renter?.brand}</li>
                  <li>{renter?.model}</li>
                  <li>{renter.phone}</li>
                  <li>{renter?.email}</li>
                  <li>{renter?.price}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}