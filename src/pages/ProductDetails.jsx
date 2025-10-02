import React, { useState } from 'react'
import { TiStar } from "react-icons/ti";
import { IoBagHandleOutline } from "react-icons/io5";
import Recommendation from '../components/Recommendation';


const ProductDetails = () => {
   
    const [data ,setData] =useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BhvLE9xu4OK2gz78D7ABC8eKWF-f9ouJug&s");


    let myImages =[
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BhvLE9xu4OK2gz78D7ABC8eKWF-f9ouJug&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMe_wVbGmkhlHBEnTBzj9ZouXWpKz-5EYkw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTayqXNl2NLci0qfjHir8an3TcRbNc8-R1g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQvC-MU6ys3JUGvgQ3EOn54le_3EyY3qm0A&s',


    ]
  return (
    <>
      <section id='ProductDetails'>

        <div className="container lg:px-[50px]">

          <div className="productRow flex justify-between">
            {/* product images */}
          <div className="producImages flex gap-6">

              <div className="flex flex-col gap-4">
              {
                
                myImages.map((item)=>{
                  return <button className='w-[140px] h-[158px] rounded-2xl overflow-hidden' onClick={()=>setData(item)}>
                    <img className='w-full rounded-2xl' src={item} alt='error' />
                  </button>
                })
              }
              </div>

              <div className="w-[640px] h-[678px] rounded-2xl ">
                <img className='w-full rounded-2xl'  src={data} alt='error' />
              </div>

            </div>


            {/* product option */}

            <div className="w-[460px] h-fit rounded-2xl p-[33px] border border-[#E5E7EB] ">

              <div className="flex justify-between ">


                <div className="flex gap-[6px] items-start">
                  <TiStar className='text-base text-[#FBBF24]'/>
                  <p className='text-[12px] lg:text-[16px] font-popins font-medium text-[#4B5563] '> 4.9· 142 reviews </p>
              
                </div>
                <div className="">
                  <h2 className='font-popins font-semibold text-[24px] text-primary'>$169.99</h2>
                  <h2 className='font-popins font-medium text-[14px] line-through text-secondary'>$199.99</h2>
                </div>

              </div>
            {/* product size */}
            <h2 className='font-popins font-semibold text-base text-primary'>Size: S</h2>
            <div className="flex gap-[8.5px] items-center mt-3 mb-8">

                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]'>S</button>
                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]'>M</button>
                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]'>L</button>
                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]'>XL</button>
                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl   hover:bg-[#0EA5E9]'>2XL</button>
                </div>


        {/* product quantity */}
            <div className="flex justify-between items-center">
              {/* qty button */}
              <div className="w-[110px] h-[40px] rounded-[9999px] bg-[#F8F8F8] flex justify-center items-center gap-4">
                  <button className='w-[24px] h-[24px] rounded-full bg-[#ffff]'>-</button>
                  <h2>1</h2>
                  <button className='w-[24px] h-[24px] rounded-full bg-[#ffff]'>+</button>
              </div>
              {/* add to cart */}
              <button className='w-[178px] h-[52px] flex items-center justify-center gap-2 rounded-[9999px] font-popins font-medium text-base text-[#ffff] bg-primary'><IoBagHandleOutline /> Add to cart</button>
            </div>

            <div className="flex justify-between items-center mt-8 mb-4">
                  <div >

                      <h2 className='font-popins text-base font-normal'>$169.99 x 1</h2>
                      <h2 className='font-popins text-base font-normal'>Tax estimate</h2>
                  </div>

                  <div >

                      <h2 className='font-popins text-base font-normal'>$169.99</h2>
                      <h2 className='font-popins text-base font-normal'>$0</h2>
                  </div>

            </div>

            <div className="border-t border-[#E5E7EB] pt-4 flex justify-between items-center">
                <h2   className='font-popins font-semibold text-base'>Total</h2>
                <h2  className='font-popins font-semibold text-base'>$169.99</h2>
                
            </div>

            </div>


          </div>
        </div>

      </section>
      <Recommendation/>
    </>
  )
}

export default ProductDetails