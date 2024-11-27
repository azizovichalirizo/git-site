import React from 'react'
import Navbar from '../componets/Navbar'
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import Footer from '../componets/Footer';
const AboutSeedra = () => {
  return (
    <>
  <Navbar/>
  {/* Bu Welcome start */}
  <div className="Welcome container mx-auto px-[5rem] mt-[3rem]">
    <div className='w-[1100xp] h-[251px] bg-[#EAF1EB] rounded-[20px] flex justify-between '>
      <div className="img">
        <img src="src/assets/Barg1.png" alt="" />
        <img className='absolute bottom-[25rem] left-[10rem]' src="src/assets/xirabarg.png" alt="" />
      </div>
      <div className="title text-center mt-[3.5rem]">
       <h1 className='text-[48px] font-[500] leading-[54px]'>Welcome to our blog</h1>
       <p className='text-[#1F2533] text-[16px] leading-[28px] mt-[1rem]'>Here you can find a lot of interesting and useful information that you <br /> need in gardening and creating a beautiful garden</p>
      </div>
      <div className="img">
        <img src="src/assets/KattaBarg.png" alt="" />
      </div>
    </div>
    <div className="mt-[2rem]">
      <div className='flex items-center gap-[2rem]'>
        <FaSearch className='absolute text-[#70737C] text-[20px] left-[175px] '/>
        <input className='text-[20px] w-[965px] h-[64px] pl-[3rem] py-[1rem] border-[2px] rounded-[20px] ' type="text" placeholder='Search' />
        <div className='flex items-center w-[378px] h-[63px] border-[2px] rounded-[20px] px-[30px] justify-between'>
         <div className=' '>
         <p className='text-[#70737C]'>Sort by</p>
         <h1 className='text-[18px] font-[500]'>Recently</h1>
         </div>
          <div>
        <MdKeyboardArrowDown className='text-[#70737C] text-[28px]'/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bu welcome end */}

  {/* Bu Fruits start */}
  <div className="Fruits container mx-auto px-[5rem]">
    <div className="first">
      <div className="Cards_1 flex items-center gap-[2rem] justify-between">
        <div>
        <div className='flex card_1 w-[830px] h-[370px] bg-[#EAF1EB] px-[40px] rounded-[20px] mt-[3rem] pt-[3rem]'>
  <div>
  <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] '>How to plant spinach correctly <br /> in winter</h1>
      <p className='text-[16px] text-[#70737C] leading-[24.95px] my-[1rem]'>In most areas, successive sowing can be done from early <br /> spring until early winter, but more often during hotter <br /> months...</p>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button></div>
     <div>
     <img className='mt-[1.3rem] ' src="src/assets/image 2 (1).png" alt="" />
     </div>
        </div>
          <div className="strow flex gap-[2rem] mt-[2rem]">
         <div className='w-[400px] h-[370px] bg-[#EFF2F8] rounded-[20px] px-[20px] pt-[3rem]'>
         <div className='title'>
      <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] my-[2rem] '>How to plant spinach correctly  in winter</h1>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
   </div>
   <div>
    <img className='ml-[11.5rem]' src="src/assets/Graned.png" alt="" />
   </div>
         </div>
         <div className='w-[400px] h-[370px] bg-[#EFF2F8] rounded-[20px] px-[20px] pt-[3rem]'>
         <div className='title'>
      <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] my-[2rem] '>How to plant spinach correctly  in winter</h1>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
   </div>
   <div>
    <img className='ml-[11.5rem]' src="src/assets/Qulupnay.png" alt="" />
   </div>
         </div>
          </div>
        </div>
        <div className='w-[450px] h-[772px]  bg-[#EFF2F8] px-[20px] rounded-[20px] pt-[2rem] mt-[2.9rem]'>
         <div>
         <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] '>How to plant spinach <br /> correctly  in winter</h1>
      <p className='text-[16px] text-[#70737C] leading-[24.95px] my-[1rem]'>In most areas, successive sowing can be <br /> done from early  spring until early winter, but <br /> more often during hotter  months...</p>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
         </div>
         <div className=''>
          <img className='mt-[5.3rem] ml-[7rem]' src="src/assets/Opacha.png" alt="" />
         </div>
        </div>
      </div>
      <div className="Cards_2 flex items-center gap-[2rem] justify-between ">
      <div className='flex card_1 w-[830px] h-[370px] bg-[#EAF1EB] px-[40px] rounded-[20px] mt-[3rem] pt-[3rem]'>
  <div>
  <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] '>How to plant spinach correctly <br /> in winter</h1>
      <p className='text-[16px] text-[#70737C] leading-[24.95px] my-[1rem]'>In most areas, successive sowing can be done from early <br /> spring until early winter, but more often during hotter <br /> months...</p>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button></div>
     <div>
     <img className='mt-[1.3rem] ' src="src/assets/Qulupnay1.png" alt="" />
     </div>
        </div>
        <div className='w-[450px] h-[370px] bg-[#EFF2F8] rounded-[20px] px-[20px] pt-[3rem] mt-[3rem]'>
         <div className='title'>
      <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] my-[2rem] '>How to plant spinach <br /> correctly  in winter</h1>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
   </div>
   <div>
    <img className='ml-[14.5rem]' src="src/assets/Kocha.png" alt="" />
   </div>
         </div>
      </div>
      <div className="Cards_3 flex items-center justify-between ">
      <div className='w-[450px] h-[772px]  bg-[#EFF2F8] px-[20px] rounded-[20px] pt-[2rem] mt-[2.9rem]'>
         <div>
         <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] '>How to plant spinach <br /> correctly  in winter</h1>
      <p className='text-[16px] text-[#70737C] leading-[24.95px] my-[1rem]'>In most areas, successive sowing can be <br /> done from early  spring until early winter, but <br /> more often during hotter  months...</p>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
         </div>
         <div className=''>
          <img className='mt-[3.0rem] ml-[7rem]' src="src/assets/Arab.png" alt="" />
         </div>
        </div>
        <div className='w-[450px] h-[772px]  bg-[#EFF2F8] px-[20px] rounded-[20px] pt-[2rem] mt-[2.9rem]'>
         <div>
         <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] '>How to plant spinach <br /> correctly  in winter</h1>
      <p className='text-[16px] text-[#70737C] leading-[24.95px] my-[1rem]'>In most areas, successive sowing can be <br /> done from early  spring until early winter, but <br /> more often during hotter  months...</p>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
         </div>
         <div className=''>
          <img className='mt-[7.0rem] ml-[9.5rem]' src="src/assets/graneda.png" alt="" />
         </div>
        </div>
        <div className='w-[450px] h-[772px]  bg-[#EFF2F8] px-[20px] rounded-[20px] pt-[2rem] mt-[2.9rem]'>
         <div>
         <p className='flex items-center gap-[6px] text-[#70737C] text-[16px] '> <IoTime className='text-[20px]'/> 12.09.2021 </p> 
      <h1 className='text-[29px] leading-[31px] font-[600] mt-[1rem] '>How to plant spinach <br /> correctly  in winter</h1>
      <p className='text-[16px] text-[#70737C] leading-[24.95px] my-[1rem]'>In most areas, successive sowing can be <br /> done from early  spring until early winter, but <br /> more often during hotter  months...</p>
      <button className='w-[106px] h-[51px] bg-[#FFFFFF] rounded-[10px] text-[#359740] px-[10px]'>Read</button>
         </div>
         <div className=''>
          <img className='mt-[3.0rem] ml-[7rem]' src="src/assets/Woman.png" alt="" />
         </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bu Fruits end */}
  <Footer />
    </>
  )
}

export default AboutSeedra