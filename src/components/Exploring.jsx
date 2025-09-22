import React from "react";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import CommonHead from "./commoncomponent/CommonHead";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Exploring = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section id="commonhaed" className="exploring mt-[120px] ">
        <div className="container ">
          <CommonHead
            commonContent1={"Start exploring. "}
            commonContent2={"Good things are waiting for you"}
          />

          <div className="slider-container">
            <Slider {...settings}>
         
                {/* ------single card */}
                <div>
                  <div className="w-[418px]  h-[132px] p-10 border border-[#E5E7EB] rounded-[16px] flex  justify-between items-center mt-6">
                    <div className="">
                      <h2 className="text-[24px] text-[#111827] font-popins font-semibold">
                        For Men's
                      </h2>
                      <p className="text-[14px] font-popins font-normal">
                        Starting at $24
                      </p>
                    </div>

                    <Link
                      to={"/"}
                      className="text-[14px] font-popins font-medium border-l-3 border-[#E5E7EB] 
                      text-[#4B5563] pl-3 flex items-center gap-2"
                      >
                      Shop Now{" "}
                      <IoIosArrowRoundForward className="text-base text-[#4B5563]" />
                    </Link>
                  </div>
                </div>
                

                {/* ------single card */}
                <div>
                  <div className="w-[418px]  h-[132px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-6">
                    <div className="">
                      <h2 className="text-[24px] text-[#111827] font-popins font-semibold">
                        For Men's
                      </h2>
                      <p className="text-[14px] font-popins font-normal">
                        Starting at $24
                      </p>
                    </div>

                    <Link
                      to={"/"}
                      className="text-[14px] font-popins font-medium border-l-3 border-[#E5E7EB] 
                        text-[#4B5563] pl-3 flex items-center gap-2"
                    >
                      Shop Now{" "}
                      <IoIosArrowRoundForward className="text-base text-[#4B5563]" />
                    </Link>
                  </div>
                </div>
          
                {/* ------single card */}
                <div>
                  <div className="w-[418px]  h-[132px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-6">
                    <div className="">
                      <h2 className="text-[24px] text-[#111827] font-popins font-semibold">
                        For Men's
                      </h2>
                      <p className="text-[14px] font-popins font-normal">
                        Starting at $24
                      </p>
                    </div>

                    <Link
                      to={"/"}
                      className="text-[14px] font-popins font-medium border-l-3 border-[#E5E7EB] 
                        text-[#4B5563] pl-3 flex items-center gap-2"
                    >
                      Shop Now{" "}
                      <IoIosArrowRoundForward className="text-base text-[#4B5563]" />
                    </Link>
                  </div>
                </div>
               

                {/* ------single card */}
                <div>
                  <div className="w-[418px]  h-[132px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-6">
                    <div className="">
                      <h2 className="text-[24px] text-[#111827] font-popins font-semibold">
                        For Men's
                      </h2>
                      <p className="text-[14px] font-popins font-normal">
                        Starting at $24
                      </p>
                    </div>

                    <Link
                      to={"/"}
                      className="text-[14px] font-popins font-medium border-l-3 border-[#E5E7EB] 
                        text-[#4B5563] pl-3 flex items-center gap-2"
                    >
                      Shop Now{" "}
                      <IoIosArrowRoundForward className="text-base text-[#4B5563]" />
                    </Link>
                  </div>
                </div>
               
                {/* ------single card */}
                <div>
                  <div className="w-[418px]  h-[132px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-6">
                    <div className="">
                      <h2 className="text-[24px] text-[#111827] font-popins font-semibold">
                        For Men's
                      </h2>
                      <p className="text-[14px] font-popins font-normal">
                        Starting at $24
                      </p>
                    </div>

                    <Link
                      to={"/"}
                      className="text-[14px] font-popins font-medium border-l-3 border-[#E5E7EB] 
                        text-[#4B5563] pl-3 flex items-center gap-2"
                    >
                      Shop Now{" "}
                      <IoIosArrowRoundForward className="text-base text-[#4B5563]" />
                    </Link>
                  </div>
                </div>
             
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exploring;
