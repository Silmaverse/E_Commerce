import React, { useState } from "react";
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import favicon  from "../assets/images/favicon.png"
import Cart from './Cart';

const ResNav = () => {
 
    const [showNav ,setShowNav] = useState(false);
     const[showCart ,setShowCart] = useState(false);

  return (
    <>
      <nav className="py-[14px] lg:hidden">
        <div className="container px-4">
            <div className="flex items-center justify-between">

                <Link to="{/}"  className="w-6 inline-block">
                <img className="w-full" src={favicon} alt="logo" />
                </Link>
                <form className="w-[200px] h-[36px] bg-[#F8F8F8] rounded-[9999px] flex items-center pl-[16px] gap-[13px]">
                    <CiSearch className="text-[14px] text-secondary" />
                    <input className="text-[12px] text-secondary font-popins font-normal border-none outline-none"  
                    type="text"  placeholder="Search in products..."/>
                </form>
                <button onClick={()=>setShowNav(!showNav)}>
                <IoIosMenu className="text-secondary text-[32px]" />
                </button>


            </div>
              {
                showNav &&
                <div className="w-full py-4 bg-white flex justify-center gap-2 ">
                    <button><RiUserLine/></button>
                    <button className="relative" onClick={()=>setShowCart(true)}  ><PiShoppingCartSimpleLight/></button>


                 </div>
              }
        </div>
      </nav>
       <Cart isOpen={showCart}  closeCart={()=>setShowCart(false)}/>
    </>
  );
};

export default ResNav;
