import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='container mx-auto px-[5rem] mt-[4rem] mb-[5rem]'>
        <div className="Group ">
        <ul className='flex items-center gap-[3rem] text-[20px] text-[#70737C] font-[500]'>
            <li className='ml-[3rem]'>
                <NavLink>ALL PRODUCTS</NavLink>
            </li>
            <li className='border-x-[2px] px-[30px]'>
                <NavLink>ABOUT SEEDRA</NavLink>
            </li>
            <li className='mr-[1rem]'>
                <NavLink>OUR BLOG</NavLink>
            </li>
            <li className='mr-[1rem]'>
                <img src="src/assets/LOGO.png" alt="" />
            </li>
            <li className='border-l-[2px] px-[7px]'>
                <NavLink>Terms&Conditions</NavLink>
            </li> 
            <li className='border-l-[2px] px-[7px]'>
                <NavLink>Privacy Policy</NavLink>
            </li> 
        </ul>
        </div>
        <div className='w-[1250px] h-[2px] bg-[#359740] mt-[2rem]'></div> 
        <div className="icon flex items-center justify-between mt-[1rem]">
    <div className='flex items-center gap-[4px]'>
        <FaInstagram className='text-[#359740] text-[20px]'/>
        <FaFacebook className='text-[#359740] text-[20px]'/>
    </div>
    <h1 className='text-[#70737C] mr-[6.9rem]'>All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer