import React from "react";
import CommonHead from "./commoncomponent/CommonHead";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CommonExploringCard from "./commoncomponent/CommonExploringCard";

const Exploring = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
   responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };

  return (
    <>
      <section id="commonhaed" className="exploring mt-[120px] ">
        <div className="container px-6 lg:px-[50px] ">
          <CommonHead
            commonContent1={"Start exploring. "}
            commonContent2={"Good things are waiting for you"}
          />

          <div className="slider-container">
            <Slider {...settings}>
         
                {/* ------single card */}
              <CommonExploringCard/>
              <CommonExploringCard/>
              <CommonExploringCard/>
              <CommonExploringCard/>
             
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exploring;
