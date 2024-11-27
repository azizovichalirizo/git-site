import React from 'react'
import Navbar from '../componets/Navbar'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import Footer from '../componets/Footer';
const Contact = () => {
  return (
    <>
    <Navbar/>
    {/* Bu Contact start */}
    <div className="Contact container mx-auto px-[5rem] flex mt-[4rem]">
        <div className="End w-[1400px] h-[620px] bg-[#EAF1EB] rounded-[20px] px-[30px] flex">
        <div className="pt-[3rem] pl-[3rem] flex items-center justify-between">
            <div>
            <h1 className='text-[48px] leading-[54px] font-[600] '>Contact us</h1>
            <p className='text-[#1F2533] leading-[28px] '>Send for us your request and we <br /> will get in touch with you as <br /> soon as possible</p>

            <h1 className='font-[700] text-[20px] flex items-center gap-[1rem] mt-[10rem]'> <BsFillTelephoneFill className='text-[#359740] bg-[white] rounded-[10px] p-[5px] text-[40px]'/> +380 98 782 82 23</h1>
            <h1 className='font-[700] text-[20px] flex items-center gap-[1rem] mt-[1rem]'><IoMail className='text-[#359740] bg-[white] rounded-[10px] p-[5px] text-[40px]'/>mailmail@gmail.com</h1>
            </div>
            <div className="ml-[23rem] mb-[3rem] card w-[636px] h-[520px] bg-[White] px-[30px] rounded-[20px] pt-[1rem]">
             <h1 className='text-[#70737C]'>Name</h1>
             <input className='border-[2px] w-[590px] h-[83px]  rounded-[20px] pl-[2rem] my-[10px]' type="text"  placeholder='Your name'/>
             <h1 className='text-[#70737C]'>E-mail</h1>
             <input className='border-[2px] w-[590px] h-[83px]  rounded-[20px] pl-[2rem] my-[10px]' type="text"  placeholder='Your name'/>
             <h1 className='text-[#70737C]'>Massage</h1>
             <input className='border-[2px] w-[590px] h-[133px]  rounded-[20px] pl-[2rem] my-[10px]' type="text"  placeholder='Your name'/>
       <div className='flex items-center gap-[1rem]'>
       <button className='bg-[#359740] text-[white] w-[160px] h-[51px] rounded-[10px]'>Send request </button>
       <h1 className='text-[#70737C]'>By sending request you agree to <br /> out Pivacy&Policy</h1>
       </div>
        </div>
        </div>
        </div>
        
    </div>
    {/* Bu Contact end */}
    <Footer/>
     </>
  )
}

export default Contact