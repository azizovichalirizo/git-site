import React from 'react'
import Navbar from '../componets/Navbar'
import { GiCelebrationFire } from "react-icons/gi";
import { IoIosLeaf } from "react-icons/io";
import { PiBreadLight } from "react-icons/pi";
import { GiLindenLeaf } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { TbShovelPitchforks } from "react-icons/tb";
import { GiButterflyFlower } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
const AllProduct = () => {
  // Bu home yani All product page
  return (
    <>
    <Navbar/>
    {/* Bu Header start */}
    <header className='container mx-auto px-[5rem] mt-[5rem]'>
      <div className='w-[1400px] h-[500px] bg-[#EAF1EB] rounded-[20px] conatiner mx-auto  px-[8rem] flex items-center justify-between'>
        <div className="title">
          <h1 className='text-[48px] text-[#1F2533] font-[500] leading-[54px]'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h1>
          <p className='text-[16px] leading-[28px] mt-[1rem]'>Be sure of our quality - the freshest batches of this season. Non-GMO, <br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</p>

          <div className="icons flex gap-[1rem] items-center my-[2rem] ">
            <GiCelebrationFire className='text-[#E55C5C] text-[42px]'/>
            <h1 className='text-[42px] font-bold '>$12.56</h1>
            <h1 className='text-[#70737C] text-[22px]'>$15.56</h1>
          </div>
          <div className="btn flex gap-[1rem]">
            <button className='w-[153px] h-[51px] bg-[#359740] text-[18px] text-[white] rounded-[20px] '>Add to card</button>
            <button className='w-[153px] h-[51px] bg-[white] text-[18px] text-[#359740] rounded-[20px]'>Discover</button>
          </div>
        </div>
        <div className="img">
        <img className='absolute bottom-[3rem] right-[3.5rem]' src="src/assets/MYata.png" alt="" />
          <img className='absolute bottom-[3rem] left-[60rem] w-[400px]' src="src/assets/NArkotik.png" alt="" />
         
          <img src="src/assets/OK.png" className='absolute right-[28rem] bottom-[20rem]' alt="" />
          
      </div>
      </div>
      <div className='w-[1400px] h-[104px] bg-[#FFE62E] rounded-[20px] conatiner mx-auto  px-[8rem] flex items-center justify-between mt-[2rem]'>
        <div>
          <img className='absolute bottom-[-5.3rem]' src="src/assets/Lemon.png" alt="" />
          <img className='absolute left-[16rem] bottom-[-3rem]' src="src/assets/Barg2.png" alt="" />
          <img className='absolute bottom-[-2rem] left-[10rem]'  src="src/assets/Barg.png" alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-[24px] font-[600]'>We sell seeds </h1>
          <p className='text-[#70737C] '>that always sprout and gardening supplies which never break</p>
        </div>
        <div>
          <img className='absolute bottom-[-5.3rem]' src="src/assets/Barg2.png" alt="" />
          <img className='absolute right-[11rem] bottom-[-4rem]' src="src/assets/Barg.png " alt="" />
          <img className='absolute bottom-[-2rem]' src="src/assets/Donak.png" alt="" />
        </div>
      </div>
    </header>
    {/* Bu Header end */}

    {/* Bu Product start */}
    <div className="Product container mx-auto px-[5rem] mt-[4rem] ">
    <div className="title flex items-center justify-between">
      <h1 className='text-[36px] font-[500] '>Our products.</h1>
      <button className='text-[#359740] border-[2px] rounded-[5px] p-[4px] w-[155px] h-[51px]'>View all (12)</button>
    </div>
    <div className="Group">
      <ul className='flex justify-between mt-[2rem]'>
        <li className='flex items-center gap-[7px] border-[2px] p-[14px] justify-center'>
      <IoIosLeaf className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>All</p>
        </li>
        <li className='flex items-center gap-[7px] border-[2px]  p-[14px]'>
      <PiBreadLight className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>BUNDLES</p>
        </li>
        <li className='flex items-center gap-[7px] border-[2px]  p-[14px]'>
      <GiLindenLeaf className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>HERBS</p>
        </li>
        <li className='flex items-center gap-[7px] border-[2px]  p-[14px]'>
      <GiTomato className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>VEGETABLES</p>
        </li>
        <li className='flex items-center gap-[7px] border-[2px]  p-[14px]'>
      <GiStrawberry className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>FRUITS</p>
        </li>
        <li className='flex items-center gap-[7px] border-[2px]  p-[14px]'>
      <TbShovelPitchforks className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>SUPPLIES</p>
        </li>
        <li className='flex items-center gap-[7px] border-[2px]  p-[14px]'>
      <GiButterflyFlower className='text-[#359740] text-[21px] '/>
      <p className='text-[21px] '>FLOWERS</p>
        </li>
      </ul>
    </div>
    <div className="Products ">
      <div className="Card flex items-center justify-between mt-[4rem]">
        <div className=' w-[350px] h-[512px] rounded-[20px] border-[2px] py-[20px] px-[30px]'>
          <GoHeart className='border-[2px] text-[30px] p-[5px] rounded-[50%] text-[#FFCF55]'/>
          <img src="src/assets/CIL.png" alt="" />
        <div className='star flex items-center gap-[8px] mt-[.5rem] '>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStarHalf className='text-[#FFCF55] '/>
          <p>(123)</p>
        </div>
        <h1 className='text-[18px] font-[500] my-[1rem]'>Seedra Cilantro Seeds for Planting <br /> Indoor and Outdoor</h1>
        <div className='flex gap-[9rem]'>
          <h1 className='text-[35px] font-[500]'>$12.56</h1>
          <PiShoppingCartLight className='text-[#359740] border-[2px] p-[5px] text-[50px] rounded-[10px] '/>
        </div>
        </div>
        <div className='w-[350px] h-[512px] rounded-[20px] border-[2px] py-[20px] px-[30px]'>
          <GoHeart className='border-[2px] text-[30px] p-[5px] rounded-[50%] text-[#FFCF55]'/>
          <img src="src/assets/CIL.png" alt="" />
        <div className='star flex items-center gap-[8px] mt-[.5rem] '>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStarHalf className='text-[#FFCF55] '/>
          <p>(123)</p>
        </div>
        <h1 className='text-[18px] font-[500] my-[1rem]'>Seedra Cilantro Seeds for Planting <br /> Indoor and Outdoor</h1>
        <div className='flex gap-[9rem]'>
        <div className="icons flex gap-[1rem] items-center ">
            <GiCelebrationFire className='text-[#E55C5C] text-[30px]'/>
            <h1 className='text-[35px] font-bold '>$12.56</h1>
            <h1 className='text-[#70737C] text-[16px]'>$15.56</h1>
          </div>
         
        </div>
        </div><div className='w-[350px] h-[512px] rounded-[20px] border-[2px] py-[20px] px-[30px]'>
          <GoHeart className='border-[2px] text-[30px] p-[5px] rounded-[50%] text-[#FFCF55]'/>
          <img src="src/assets/CIL.png" alt="" />
        <div className='star flex items-center gap-[8px] mt-[.5rem] '>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStar className='text-[#FFCF55] '/>
          <MdOutlineStarHalf className='text-[#FFCF55] '/>
          <p>(123)</p>
        </div>
        <h1 className='text-[18px] font-[500] my-[1rem]'>Seedra Cilantro Seeds for Planting <br /> Indoor and Outdoor</h1>
        <div className='flex gap-[9rem]'>
          <h1 className='text-[35px] font-[500]'>$12.56</h1>
          <PiShoppingCartLight className='text-[#359740] border-[2px] p-[5px] text-[50px] rounded-[10px] '/>
        </div>
        </div>
    </div>
  </div>
</div>
    {/* Bu Product end */}
    
    {/* Bu Blog start */}
    <div className="Blog container mx-auto px-[5rem]">
      <div className="title flex items-center justify-between mt-[3rem]">
      <h1 className='text-[36px] font-[500] '>Our Blog.</h1>
        <button className='text-[#359740] border-[2px] rounded-[5px] p-[4px] w-[155px] h-[51px]'>Go to our blog</button>
      </div>
      <div className="cards ml-[2rem] mt-[3rem] ">
        <div className='flex gap-[2rem]'>
          <div>
          <img className='w-[830px] h-[370px]' src="src/assets/Far.png" alt="" />
          <div className='flex gap-[1.9rem] mt-[2rem]'>
        <img className='w-[400px] h-[370px]' src="src/assets/Far1.png" alt="" />
        <img className='w-[400px] h-[370px]' src="src/assets/Far1.png" alt="" />
          </div>
          </div>
          
          <img className='w-[450px] h-[772px]' src="src/assets/Far2.png" alt="" />
        </div>
      </div>

    </div>
    {/* Bu Blog end */}

    {/* Bu Client start */}
    <div className="Client mt-[2rem]  ">
      <div className="title">
        <h1 className='text-[36px] font-[500] text-center'>What our client say</h1>
      </div>
      <div className="Cards flex justify-between mt-[2rem]">
        <div className='border-[2px] rounded-[10px] w-[480px] h-[347px] mt-[2rem] '>
          <div className="name flex items-center gap-[1rem] mt-[3rem]">
            <img src="src/assets/Jugi.png" alt="" />
            <div>
              <h1 className='text-[20px] font-[500]'>Carla Samantoes-Diego</h1>
              <p>12.09.2021</p>
            </div>
          </div>
          <div className="star flex gap-[5px] mt-[1rem]">
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStarHalf className='text-[#FFCF55] text-[18px]'/>
          </div>
          <div className="text">
            <p className='text-[#1F2533] leading-[28px] text-[18px] mt-[1rem]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and  professional instructions created by PhD Helga George 
            Be sure of our quality - the freshest batches of this season.  Non-GMO, Heirloom - our seeds were tested and have the  best germination ratings. </p>
          </div>
        </div>
        <div className='border-[2px] rounded-[10px] w-[540px] h-[347px] px-[60px]'>
          <div className="name flex items-center gap-[1rem] mt-[3rem]">
            <img src="src/assets/Jugi.png" alt="" />
            <div>
              <h1 className='text-[20px] font-[500]'>Carla Samantoes-Diego</h1>
              <p>12.09.2021</p>
            </div>
          </div>
          <div className="star flex gap-[5px] mt-[1rem]">
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStarHalf className='text-[#FFCF55] text-[18px]'/>
          </div>
          <div className="text">
            <p className='text-[#1F2533] leading-[28px] text-[18px] mt-[1rem]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and  professional instructions created by PhD Helga George 
            Be sure of our quality - the freshest batches of this season.  Non-GMO, Heirloom - our seeds were tested and have the  best germination ratings. </p>
          </div>
        </div>
        <div className='border-[2px] rounded-[10px] w-[480px] h-[347px] mt-[2rem] '>
          <div className="name flex items-center gap-[1rem] mt-[3rem]">
            <img src="src/assets/Jugi.png" alt="" />
            <div>
              <h1 className='text-[20px] font-[500]'>Carla Samantoes-Diego</h1>
              <p>12.09.2021</p>
            </div>
          </div>
          <div className="star flex gap-[5px] mt-[1rem]">
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStar className='text-[#FFCF55] text-[18px]'/>
            <MdOutlineStarHalf className='text-[#FFCF55] text-[18px]'/>
          </div>
          <div className="text">
            <p className='text-[#1F2533] leading-[28px] text-[18px] mt-[1rem]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and  professional instructions created by PhD Helga George 
            Be sure of our quality - the freshest batches of this season.  Non-GMO, Heirloom - our seeds were tested and have the  best germination ratings. </p>
          </div>
        </div>

      </div>
    </div>
    {/* Bu Client end */}
    
    {/* Bu Seedra start */}
    <div className="Seedra container mx-auto px-[5rem] mt-[3rem]">
      <div className="title">
     <h1 className='text-[36px] font-[500]'>Seedra helps to grow fast and <br /> efficiant</h1>
     <p className='text-[18px] text-[#1F2533] mt-[1rem]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
     <br />
     <br />
      Be sure of our quality - the freshest batches of this season. Non- <br /> GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. <br />
      <br /> Your easy growing experience is our guarantee <br /> Spinach commom culinary uses: salads, soups, smoothies, lasagne, <br /> pizza, pies, risotto, and more <br />
      
      <br /> Proudly sourced in the USA - our garden seeds are grown, <br /> harvested, and packaged in the USA. We support local farmers and <br /> are happy to produce this American-made product</p>
      </div>
      <div className="img">

      </div>
    </div>
    </>
  )
}

export default AllProduct