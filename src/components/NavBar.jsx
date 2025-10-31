import React, { use, useState } from 'react'
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { data, Link, useNavigate } from 'react-router'
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Cart from './Cart';
import axios from 'axios';


const NavBar = () => {

  const[showCart ,setShowCart] = useState(false);
  const[showsrchResult , setshowsrchResult] =useState(false);
  const[searchresult ,setsearchresult] = useState([]);
  const [srcInput , setsrcInput] =useState('')

  const navigate =useNavigate();

  const handlesearch =()=>{

    setTimeout(()=>{
     axios.get(`https://dummyjson.com/products/search?q=${srcInput}`)
    .then((res)=> {
        console.log(res)
        setsearchresult(res.data.products);
        setshowsrchResult(true);
    })
    .catch((err)=> console.log(err))

    },500)


  }

  const handlesrc =(id)=>{

    setsrcInput('')
    setshowsrchResult(false)
    navigate(`/productdetails/${id}`)
  }

   

  return (
    <>
    <nav id='navbar' className='py-[27px] z-[1] hidden lg:block border-b border-b-[#E5E7EB]'>
          <div className="container lg:px-[50px] ">

            <div className="flex justify-between items-center">

                <Link to={'/'} className="navLogo">
                    <img src={logo} alt='logo'/>
                </Link>

                <div className="w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] px-6 flex items-center gap-[10px] relative">
                    <CiSearch  className='text-[#4B5563] w-5 h-5'/>

                    <input onChange={(e)=>{ handlesearch()  ,setsrcInput(e.target.value)}}
                     value={srcInput}
                     className='border-none outline-none 
                    font-popins font-normal text-[14px] text-[#4B5563]' type='text' placeholder='Search in products...' />
                    {
                        showsrchResult && 
                     <div className="w-[400px] max-h-[400px]  rounded-xl bg-[#F8F8F8] absolute top-[60px] 
                     overflow-y-scroll right-0 z-1 ">
                        {
                            searchresult.length ==0?
                            <p className='text-xl text-center p-3 font-medium text-secondary w-full 
                               hover:bg-white'>No Products Found</p>:

                            
                            searchresult.map((item)=>{

                                console.log(item)
                                return <button  onClick={()=>handlesrc(item.id)}  key={item.id}  
                                className='text-sm p-3 font-medium text-secondary w-full text-start
                                hover:bg-white'>{item.title}</button>
                            })
                            
                        }
                     </div>
                    }

                </div>

                <div className="flex items-center gap-[22px]">
                    <Link to={'/register'}>
                        <RiUserLine className='text-3xl text-[#4B5563]'/>
                    </Link>
                    <button onClick={()=>setShowCart(true)} className='relative '>
                        <PiShoppingCartSimpleLight  className='text-3xl text-[#4B5563] '/>
                        <div className="text-[12px] text-[#FFFFFF] w-[20px] h-[20px]
                         bg-[#0EA5E9] rounded-full font-popins font-medium flex justify-center items-center absolute top-[-6px] right-[-4px]">0</div>
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