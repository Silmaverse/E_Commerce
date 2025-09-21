import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiRecycleLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";





const Services = () => {
  return (
    <>

     <section id='services'>
        <div className="container">
            <div className="border border-[#E5E7EB] py-6 px-10 rounded-2xl mt-[52px] flex justify-between">
                {/* ------single services ---- */}
                <div className="w-[303px] border-r border-[#E5E7EB]  h-[50px] flex gap-[16px] items-center">
                   <LiaShippingFastSolid className='text-3xl text-primary' />
                   <div className="">

                    <h2 className='font-popins text-[18px] font-semibold text-primary'>Free shipping</h2>
                    <p className='font-popins text-[14px] font-normal text-primary'>On orders over $50.00</p>

                   </div>

                </div>

                  {/* ------single services ---- */}
                <div className="w-[303px] border-r border-[#E5E7EB]  h-[50px] flex gap-[16px] items-center">
                   <PiRecycleLight  className='text-3xl text-primary' />
                   <div className="">

                    <h2 className='font-popins text-[18px] font-semibold text-primary'>Free shipping</h2>
                    <p className='font-popins text-[14px] font-normal text-primary'>On orders over $50.00</p>

                   </div>

                </div>


                  {/* ------single services ---- */}
                <div className="w-[303px] border-r border-[#E5E7EB]  h-[50px] flex gap-[16px] items-center">
                   <TbWorld  className='text-3xl text-primary' />
                   <div className="">

                    <h2 className='font-popins text-[18px] font-semibold text-primary'>Free shipping</h2>
                    <p className='font-popins text-[14px] font-normal text-primary'>On orders over $50.00</p>

                   </div>

                </div>


                  {/* ------single services ---- */}
                <div className="w-[303px]  h-[50px] flex gap-[16px] items-center">
                   <HiOutlineCurrencyDollar  className='text-3xl text-primary' />
                   <div className="">

                    <h2 className='font-popins text-[18px] font-semibold text-primary'>Free shipping</h2>
                    <p className='font-popins text-[14px] font-normal text-primary'>On orders over $50.00</p>

                   </div>

                </div>


            </div>
        </div>
     </section>

    </>
  )
}

export default Services