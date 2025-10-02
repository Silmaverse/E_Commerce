import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiRecycleLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container px-6 lg:px-[50px] ">
          <h2 className="font-popins font-semibold text-[16px] mt-[52px] mb-6 text-primary lg:hidden">
            Nexton® always with you
          </h2>
          <div className="lg:border lg:border-[#E5E7EB] lg:py-6 lg:px-10 rounded-2xl lg:mt-[52px] flex justify-between flex-wrap lg:flex-nowrap">
            {/* ------single services ---- */}
            <div className="w-fit lg:w-[303px] lg:border-r border-[#E5E7EB]  h-[50px] flex gap-2 lg:gap-[16px] items-center">
              <LiaShippingFastSolid className="text-base lg:text-3xl  text-[#4B5563] lg:text-primary" />
              <div className="">
                <h2 className="font-popins text-sm lg:text-[18px] font-normal lg:font-semibold text-[#4B5563] lg:text-primary">
                  Free shipping
                </h2>
                <p className="font-popins text-[14px] font-normal text-primary  hidden lg:block">
                  On orders over $50.00
                </p>
              </div>
            </div>

            {/* ------single services ---- */}
            <div className="w-fit lg:w-[303px] lg:border-r border-[#E5E7EB]  h-[50px] gap-2 flex lg:gap-[16px] items-center">
              <PiRecycleLight className="text-base lg:text-3xl  text-[#4B5563] lg:text-primary" />
              <div className="">
                <h2 className="font-popins text-sm lg:text-[18px] font-normal lg:font-semibold text-[#4B5563] lg:text-primary">
                  Very easy to return
                </h2>
                <p className="font-popins text-[14px] font-normal text-primary hidden lg:block">
                  Just phone number
                </p>
              </div>
            </div>

            {/* ------single services ---- */}
            <div className="w-fit lg:w-[303px] lg:border-r border-[#E5E7EB]  h-[50px] flex gap-2 lg:gap-[16px] items-center">
              <TbWorld className="text-base lg:text-3xl  text-[#4B5563] lg:text-primary" />
              <div className="">
                <h2 className="font-popins text-sm lg:text-[18px] font-normal lg:font-semibold text-[#4B5563] lg:text-primary">
                  Worldwide delivery
                </h2>
                <p className="font-popins text-[14px] font-normal text-primary hidden lg:block">
                  Fast delivery worldwide
                </p>
              </div>
            </div>

            {/* ------single services ---- */}
            <div className="w-[303px]  h-[50px] flex gap-2 lg:gap-[16px] items-center">
              <HiOutlineCurrencyDollar className="text-base lg:text-3xl  text-[#4B5563] lg:text-primary" />
              <div className="">
                <h2 className="font-popins text-sm lg:text-[18px] font-normal lg:font-semibold text-[#4B5563] lg:text-primary">
                  Refunds policy
                </h2>
                <p className="font-popins text-[14px] font-normal text-primary hidden lg:block">
                  60 days return for any reason
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
