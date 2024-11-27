import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className=' border-b-[2px] py-[2rem]'>
        <div className='container mx-auto px-[5rem] flex items-center justify-between'>
    <div className="logo ">
        <img src="src/assets/LOGO.png" alt="" />
    </div>
    <div className="group hidden sm:flex">
        <ul className='flex items-center gap-[3rem] text-[14px] text-[#70737C] font-[500] '>
            <li className='ml-[3rem]'>
                <NavLink to={"/"} >ALL PRODUCTS</NavLink>
            </li>
            <li className='border-x-[2px] px-[30px]'>
                <NavLink to={"About"}>ABOUT SEEDRA</NavLink>
            </li>
            <li className='mr-[1rem]'>
                <NavLink to={"Blog"}>OUR BLOG</NavLink>
            </li>
            <li className='border-l-[2px] px-[7px]'>
                <NavLink to={"Contact"}>CONTACTS</NavLink>
            </li> 
        </ul>
    </div>
    <div className="search flex items-center gap-[2rem] ">
        <div className="icon flex items-center gap-[10px] hidden sm:flex">
            <FaInstagram className='text-[#70737C] text-[1.6rem]'/>
            <FaFacebook className='text-[#70737C] text-[1.6rem]'/>
        </div> 
        <div className='flex items-center hidden sm:flex '>
        <FaSearch className='absolute left-[73.5rem] text-[#70737C]'/>
        <input className='border-[2px] rounded-[20px] px-[3rem] py-[7px]' type="text"  placeholder='Search ' />
        </div>
        
        <div className="icon flex items-center gap-[10px]">
            <CiHeart className='text-[1.6rem] text-[#359740]'/>
            <PiShoppingCartLight className='text-[1.6rem] text-[#359740]'/>
            <CiMenuBurger className='inline-block md:hidden'/>
        </div>
    </div>
    </div>
    </nav>
    
  )
}

export default Navbar