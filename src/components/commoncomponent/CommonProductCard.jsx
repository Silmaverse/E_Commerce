import React from 'react'
import { TiStar } from "react-icons/ti";


const CommonProductCard = () => {
  
  return (
    <>
      <div className="w-[309px] h-[448px]">
          {/* -----single card */}
          <div className="w-full h-[347px]  bg-gray-400 rounded-[16px]  overflow-hidden mb-5">
            
          </div>
            <div className="flex items-center justify-between">
               <h2 className='font-popins font-semibold text-base text-primary'>Black Automatic Watch</h2>
               <h2 className='font-popins font-semibold text-base text-primary'>$169.99</h2>
            </div>

              <div className="flex items-center justify-between mb-[15px]">
               <p className='font-popins font-normal text-[14px] text-[#4B5563]'>Accessories</p>
               <p className='font-popins font-normal text-[14px] text-[#4B5563] line-through'>$169.99</p>
            </div>

            <div className="flex gap-1 items-center">
               <TiStar className='text-xl text-[#FBBF24]'/>
               <p className='text-[14px] font-popins font-normal text-[#4B5563] '>4.9 (98)</p>

            </div>


            
      </div>
    </>
  )
}

export default CommonProductCard