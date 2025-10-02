import React from 'react'
import fashion from '../assets/images/fashion.png'

const Original = () => {
  return (
    <>
    <section id='original' className='mt-35 hidden lg:block'>
         <div className="container lg:px-[50px]  relative flex flex-wrap lg:block">
            <div className="w-full bg-[#F5F5F5] py-[94px] pl-30 rounded-3xl">
                <p className='text-xl font-popins font-medium text-[#4B5563]'>100% Original Products</p>
                <h2 className='w-[362px] text-4xl font-popins font-semibold text-primary mt-[14px]'>The All New Fashion
Collection Items</h2>
               <p className='text-xl font-popins font-medium text-[#4B5563] mt-6'>Starting from: $59.99</p>

               <button className='mt-6 bg-primary text-[#FFFFFF] px-[32px] py-[14px] rounded-[9999px] 
               text-base font-popins font-medium text-center'>Shop now</button>

               <div className="absolute top-0 right-[89px]">
                 <img src={fashion} alt=''/>
               </div>

            </div>

         </div>
    </section>
    </>
  )
}

export default Original