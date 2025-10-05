import React from 'react'
import { Link } from 'react-router'
import { TiStar } from "react-icons/ti";
import { FaOpencart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";



const CommonProductCard = ({productTitle, productImage , productPrice , productCategory , 
   productDisCountPrice , productRating , productStock , detailsClick}) => {
  
  return (
    <>
      <div className="w-[312px] lg:w-[309px] h-[448px] relative group overflow-hidden">

        <div className="absolute top-4 right-[-40px] flex flex-col gap-3 group-hover:right-4 duration-[.4s]">
          <button className='bg-white p-2 rounded-full active:scale-[1.1]
           hover:bg-black hover:text-white duration-100'><FaOpencart className='text-2xl hover:text-3xl '/></button>

           <button onClick={detailsClick} className='bg-white p-2 rounded-full active:scale-[1.1]
           hover:bg-black hover:text-white duration-100'><BiCommentDetail className='text-2xl hover:text-3xl '/></button>

        </div>
          {/* -----single card */}
          <div className="w-full h-[347px]  bg-[#F8FAFC] rounded-[16px]  overflow-hidden mb-5">
            <img src={productImage} alt='product'/>
          </div>
            <div className="flex items-center justify-between">
               <h2 className='w-[200px] truncate text-over font-popins font-semibold text-sm lg:text-base text-primary'>{productTitle}</h2>
               <h2 className='font-popins font-semibold text-sm lg:text-base text-primary'>${productPrice}</h2>
            </div>

              <div className="flex items-center justify-between mb-[15px]">
               <p className='font-popins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>{productCategory}</p>
               <p className='font-popins font-normal text-[12px] lg:text-[14px] text-[#4B5563] line-through'>${productDisCountPrice}</p>
            </div>

            <div className="flex gap-1 items-center">
               <TiStar className='text-xl text-[#FBBF24]'/>
               <p className='text-[12px] lg:text-[14px] font-popins font-normal text-[#4B5563] '> {productRating} ({productStock})</p>

            </div>


            
      </div>
    </>
  )
}

export default CommonProductCard