import React from 'react'
import { Link } from 'react-router'
import banner from '../assets/images/banner.png'
import { CiSearch } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
  
    };

    
    

  return (
    <>
     
     <div className="slider-container  banner_slider hidden lg:block">
      <Slider {...settings}>
        <div>
          <Link to={'/'}>
            <img  className='w-full' src={banner}  alt='banner'/>
          </Link>
        </div>

         <div>
          <Link to={'/'}>
            <img  className='w-full' src={banner}  alt='banner'/>
          </Link>
        </div>

           <div>
          <Link to={'/'}>
            <img  className='w-full' src={banner}  alt='banner'/>
          </Link>
        </div>

           <div>
          <Link to={'/'}>
            <img  className='w-full' src={banner}  alt='banner'/>
          </Link>
        </div>


      
 
      </Slider>
    </div>

    {/* ---phone banner */}
    <div className="pt-[163px]  pb-[199px] bg-[#E5E7EB] block lg:hidden resBanner">

      <div className="container px-6  navBanner">

         <Slider {...settings}>
        
          <div>

          <h2 className='text-[14px] text-[#4B5563] font-popins font-medium'>Starting from: $49.99</h2>
          <p className='w-[3px] mt-2 text-[30px] font-popins font-semibold text-[#111827] '>Exclusive collection
            for everyone</p>

            <button className='mt-[52px] flex justify-center gap-2 items-center text-[14px] py-3 px-6 rounded-[9999px] bg-primary font-popins font-medium text-[#FFFFFF] '>
              Explore now <CiSearch className='text-[#fff]'/>
            </button>
          </div>

            <div>

          <h2 className='text-[14px] text-[#4B5563] font-popins font-medium'>Starting from: $49.99</h2>
          <p className='w-[3px] mt-2 text-[30px] font-popins font-semibold text-[#111827] '>Exclusive collection
            for everyone</p>

            <button className='mt-[52px] flex justify-center gap-2 items-center text-[14px] py-3 px-6 rounded-[9999px] bg-primary font-popins font-medium text-[#FFFFFF] '>
              Explore now <CiSearch className='text-[#fff]'/>
            </button>
          </div>
        
    </Slider>
       </div>
       
       
      


    </div>



    

    </>
  )
}

export default Banner