import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
const Navbar = () => {
  return (
    <nav className='mt-[2rem]'>
        <div className='container mx-auto px-[5rem] flex items-center justify-between'>
    <div className="logo">
        <img src="src/assets/LOGO.png" alt="" />
    </div>
    <div className="group">
        <ul className='flex items-center gap-[3rem] text-[14px] text-[#70737C] font-[500]'>
            <li className='ml-[3rem]'>
                <NavLink>ALL PRODUCTS</NavLink>
            </li>
            <li className='border-x-[2px] px-[30px]'>
                <NavLink>ABOUT SEEDRA</NavLink>
            </li>
            <li className='mr-[1rem]'>
                <NavLink>OUR BLOG</NavLink>
            </li>
            <li className='border-l-[2px] px-[7px]'>
                <NavLink>CONTACTS</NavLink>
            </li> 
        </ul>
    </div>
    <div className="search flex items-center gap-[2rem] ">
        <div className="icon flex items-center gap-[10px]">
            <FaInstagram className=''/>
            <FaFacebook/>
        </div>
        <div className='flex items-center '>
        <FaSearch/>
        <input className='border-[2px] rounded-[10px] px-[1.5rem]' type="text"  placeholder='Search ' />
        </div>
        
        <div className="icon flex items-center gap-[10px]">
            <CiHeart/>
            <PiShoppingCartLight/>
        </div>
    </div>
    </div>
    </nav>
    
  )
}

export default Navbar