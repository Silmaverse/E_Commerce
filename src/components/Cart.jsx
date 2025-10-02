import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { IoIosClose } from "react-icons/io";


const Cart = ({isOpen ,closeCart}) => {

  useEffect(()=>{
     document.body.style.overflow = isOpen?"hidden":"auto"
  },[isOpen])

  return (
    <>
    <section className ={`h-screen absolute overflow-hidden  top-0 right-0 ${isOpen? "w-full":"w-0"} duration-[1s] z-[9999]`}>

        <div  onClick={closeCart} className= {` h-screen   right-0 top-0 bg-[#f0e8e825] ${isOpen ? "w-full":" w-0"} duration-[1s]`}></div>

        <div className={`w-full lg:w-[400px] h-screen  bg-[#fff] overflow-y-scroll not-last:not-[]:bg-[#ffff] absolute top-0 right-0 
           ${isOpen ? "translate-x-0": "translate-x-full" }  transition-transform duration-[1s] ease-in-out  p-5`}>

            <div className="flex justify-between items-center">

              <h2 className='text-xl text-[#000] font-popins font-medium'>Cart</h2>
              <IoIosClose className='text-3xl text-[#4B5563]' onClick={closeCart}/>
            </div>


             {/* --cart product */}
            <div className="flex items-center gap-5 mt-5">
                <div className="w-15 h-15 bg-gray-100 rounded-[5px]"></div>

                <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>Product Name</h2>
                    <p className='text-[12px] font-medium text-black font-popins'>Product Price</p>
                </div>
            </div>

             {/* --cart product */}
            <div className="flex items-center gap-5 mt-5">
                <div className="w-15 h-15 bg-gray-100 rounded-[5px]"></div>

                <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>Product Name</h2>
                    <p className='text-[12px] font-medium text-[#4B5563] font-popins'>Product Price</p>
                </div>
            </div>


             {/* --cart product */}
            <div className="flex items-center gap-5 mt-5">
                <div className="w-15 h-15 bg-gray-100 rounded-[5px]"></div>

                <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>Product Name</h2>
                    <p className='text-[12px] font-medium text-[#4B5563] font-popins'>Product Price</p>
                </div>
            </div>


            {/* ------ checkout btn and product sum */}
            <div className="flex justify-between my-4">
                <p className='text-[14px] font-normal font-popins'  >SubTotal</p>
                <p className='text-[14px] font-medium font-popins' >$350</p>
            </div>

           <Link onClick={closeCart} to={'/checkout'} className='inline-block w-[270px] lg:w-full py-[14px] bg-[#111827] rounded-[9999px] 
            text-[#FFFFFF] text-base font-popins font-medium text-center active:scale-[1.1]  duration-150'>CheckOut</Link>

        </div>

    </section>

    </>
  )
}

export default Cart