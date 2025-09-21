import React from 'react'
import Slider from "react-slick";
import CommonProductCard from './commoncomponent/CommonProductCard'
import CommonHead from './commoncomponent/CommonHead';

const Recommendation = () => {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
    };
  return (
    <>
    <section className='exploring mt-[176px]'>
      
        <div className="container">
            <CommonHead commonContent1={"Recommendations. "} commonContent2={"Best matching products for you"} />
             <div className="mt-10">

                    <Slider {...settings}>
                                
                                
                  <CommonProductCard/>
                 <CommonProductCard/>
                 <CommonProductCard/>
                <CommonProductCard/>
                  <CommonProductCard/>
                                
                        
                    </Slider> 
              </div>

                  
            </div>
        
    </section>
    </>
  )
}

export default Recommendation