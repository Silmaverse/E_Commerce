import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link } from 'react-router'
import { IoIosClose } from "react-icons/io";
import CommonCartProduct from './commoncomponent/CommonCartProduct';
import axios from 'axios';


const Cart = ({isOpen ,closeCart}) => {
  
    const [products,setProducts]=useState([]);
    const userid = Cookies.get('userId');
    console.log(userid)

    useEffect(()=>{
    if(!userid) return
       axios.get(`https://dummyjson.com/carts/${userid}`)
       .then((res)=>( console.log(res),
        setProducts(res.data)))
       .catch((err)=>console.log(err))
    },[userid])


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
             {
                products.products?.map((item)=>(

                    <CommonCartProduct key={item.id}
                    cartImg={item.thumbnail} cartTitle={item.title} cartPrice={item.price} />
                ))
             }

            {/* ------ checkout btn and product sum */}
            <div className="flex justify-between my-4">
                <p className='text-[14px] font-normal font-popins'  >SubTotal</p>
                <p className='text-[14px] font-medium font-popins' >${products.total}</p>
            </div>

           <Link onClick={closeCart} to={'/checkout'} className='inline-block w-[270px] lg:w-full py-[14px] bg-[#111827] rounded-[9999px] 
            text-[#FFFFFF] text-base font-popins font-medium text-center active:scale-[1.1]  duration-150'>CheckOut</Link>

        </div>

    </section>

    </>
  )
}

export default Cart