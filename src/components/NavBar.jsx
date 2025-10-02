import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router'
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Cart from './Cart';


const NavBar = () => {

  const[showCart ,setShowCart] = useState(false);

   

  return (
    <>
    <nav id='navbar' className='py-[27px] z-[1] hidden lg:block'>
          <div className="container lg:px-[50px] ">

            <div className="flex justify-between items-center">

                <Link to={'/'} className="navLogo">
                    <img src={logo} alt='logo'/>
                </Link>

                <div className="w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] px-6 flex items-center gap-[10px]">
                    <CiSearch className='text-[#4B5563] w-5 h-5'/>

                    <input className='border-none outline-none font-popins font-normal text-[14px] text-[#4B5563]' type='text' placeholder='Search in products...' />
                </div>

                <div className="flex items-center gap-[22px]">
                    <Link to={'/'}>
                        <RiUserLine className='text-3xl text-[#4B5563]'/>
                    </Link>
                    <button onClick={()=>setShowCart(true)} className='relative '>
                        <PiShoppingCartSimpleLight  className='text-3xl text-[#4B5563] '/>
                        <div className="text-[12px] text-[#FFFFFF] w-[20px] h-[20px]
                         bg-[#0EA5E9] rounded-full font-popins font-medium flex justify-center items-center absolute top-[-6px] right-[-4px]">3</div>
                    </button>

                </div>

            </div>
             

          </div>
          {
          
              <Cart isOpen={showCart}  closeCart={()=>setShowCart(false)}/>
          }

         

    </nav>
    </>
  )
}

export default NavBar