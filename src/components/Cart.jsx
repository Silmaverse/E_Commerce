import React from 'react'
import { Link } from 'react-router'
import { IoIosClose } from "react-icons/io";


const Cart = ({isOpen ,closCart}) => {
  return (
    <>
    <section className ={`absolute top-0 right-0 ${isOpen? "w-full h-screen ":"w-0 h-0"} duration-[1s] `}>

        <div  onClick={closCart} className= {` bg-[#0000001c] ${isOpen ? "w-full h-screen":""} duration-[2s]`}></div>

        <div className={` bg-[#fff] overflow-y-scroll not-last:not-[]:bg-[#ffff] absolute top-0 right-0 
           ${isOpen ? "w-[400px] h-[700px] scale-100": "scale-0" } duration-[.4s]  p-5`}>

            <div className="flex justify-between items-center">

              <h2 className='text-xl text-[#000] font-popins font-medium'>Cart</h2>
              <IoIosClose className='text-3xl text-[#4B5563]' onClick={closCart}/>
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

           <Link onClick={closCart} to={'/checkout'} className='inline-block w-full py-[14px] bg-[#111827] rounded-[9999px] 
            text-[#FFFFFF] text-base font-popins font-medium text-center active:scale-[1.1]  duration-150'>CheckOut</Link>

        </div>

    </section>

    </>
  )
}

export default Cart