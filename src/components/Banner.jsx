import React from 'react'
import { Link } from 'react-router'
import banner from '../assets/images/banner.png'
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
     
     <div className="slider-container  banner_slider">
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


    

    </>
  )
}

export default Banner