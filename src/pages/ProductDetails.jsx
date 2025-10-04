import React, { useEffect, useState } from 'react'
import axios from "axios";
import { TiStar } from "react-icons/ti";
import { IoBagHandleOutline } from "react-icons/io5";
import Recommendation from '../components/Recommendation';
import { useParams } from 'react-router';


const ProductDetails = () => {

  const [singleData , setsingleData] = useState("");
  const [images , setmyImages] =useState([]);
  const [count , setCount] =useState(1);
  
  const paramsDetails = useParams();
  
  
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${paramsDetails.productId}`)
    .then((res)=>{ setsingleData(res.data) ,setmyImages(res.data.images?.[0])  } )
    .catch((err)=>{console.log(err)})
    
    
  }, [] )


   console.log(singleData)
 

  const disPrice = singleData.price - (singleData.price * singleData.discountPercentage/100);

 


  
 

  return (
    <>
      <section id='ProductDetails'>

        <div className="container lg:px-[50px]">
           {/* --product row */}
          <div className="productRow flex justify-between">

            {/* product images with loader*/}
            {
              singleData?   
          <div className="producImages flex gap-6">
            
               <div className="flex flex-col gap-4">
              {
                
                singleData.images?.map((item ,id)=>(
                   <button key={id} className='w-[140px] h-[158px] rounded-2xl bg-gray-200 overflow-hidden' onClick={()=>setmyImages(item)} >
                    <img className='w-full rounded-2xl' src={item} alt='error' />
                  </button>
                ))
              }
          </div>

              <div className="w-[640px] h-[678px] rounded-2xl bg-gray-200 ">
                <img className='w-full rounded-2xl'  src={images} alt='error' />
              </div>

            </div>:
              <div className="bg-white p-6">
                <div className="flex gap-6">
                  <div className="flex flex-col gap-4">
                    <button className='w-[140px] h-[158px] rounded-2xl bg-gray-200 animate-pulse'></button>
                    <button className='w-[140px] h-[158px] rounded-2xl bg-gray-200 animate-pulse'></button>
                    <button className='w-[140px] h-[158px] rounded-2xl bg-gray-200 animate-pulse'></button>
                  </div>
                  <div className="w-[640px] h-[678px] rounded-2xl bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            }
         

            {/* product option */}

            <div className="w-[460px] h-fit rounded-2xl p-[33px] border border-[#E5E7EB] ">

              <div className="flex justify-between ">


                <div className="flex gap-[6px] items-start">
                  <TiStar className='text-base text-[#FBBF24]'/>
                  <p className='text-[12px] lg:text-[16px] font-popins font-medium text-[#4B5563] '> {singleData.rating} . {singleData ?.reviews?.length || 0}  reviews  </p>
              
                </div>
                <div className="">
                  <h2 className=' w-[143px] truncate font-popins font-semibold text-[24px] text-primary'>${disPrice}</h2>
                  <h2 className='font-popins font-medium text-[14px] line-through text-secondary'>${singleData.price}</h2>
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
                  <button onClick={()=>{count>1?setCount(count-1):setCount(1)}} className='w-[24px] h-[24px] rounded-full bg-[#ffff]'>-</button>
                  <h2>{count}</h2>
                  <button onClick={()=>setCount(count+1)} className='w-[24px] h-[24px] rounded-full bg-[#ffff]'>+</button>
              </div>
              {/* add to cart */}
              <button className='w-[178px] h-[52px] flex items-center justify-center gap-2 rounded-[9999px] font-popins font-medium text-base text-[#ffff] bg-primary'><IoBagHandleOutline /> Add to cart</button>
            </div>


           {/* quantity with price */}
            <div className="flex justify-between items-center mt-8 mb-4">
                  <div >

                      <h2 className='font-popins text-base font-normal'>${disPrice} x <span>{count}</span></h2>
                      <h2 className='font-popins text-base font-normal'>Tax estimate</h2>
                  </div>

                  <div >

                      <h2 className='w-[100px] truncate  font-popins text-base font-normal'>${disPrice * count} </h2>
                      <h2 className='font-popins text-base font-normal'>$0</h2>
                  </div>

            </div>


             {/* total price */}
            <div className="border-t border-[#E5E7EB] pt-4 flex justify-between items-center">
                <h2   className='font-popins font-semibold text-base'>Total</h2>
                <h2  className='w-[100px] truncate font-popins font-semibold text-base'>${disPrice * count}</h2>
                
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