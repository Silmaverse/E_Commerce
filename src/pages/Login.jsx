import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <>

     <div className="container lg:px-[50px] mt-10">
        <div className="w-full  flex  justify-center items-center">

         <div className="regsiter_row w-[440px]">
             <h2 className='text-[36px] font-popins font-semibold text-center'>Login</h2>
        
            <form >

                {/* email input */}

               <div className='mt-[60px]'>
                <label htmlFor='email' className='text-base 4font-popins font-semibold'>Email</label>
                <input id='email' className='w-full border border-[#E5E7EB] py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2' 
                placeholder='example@example.com' type='email'/>

               </div>

                {/* password input */}

                <div className='mt-6'>
                <label htmlFor='password' className='text-base 4font-popins font-semibold'>Password</label>
                <input id='password' className='w-full border border-[#E5E7EB] py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2' 
                placeholder='example@example.com' type='password'/>
                </div>

                
               <Link to={"#"}  className='w-full mt-6
                text-white bg-primary h-[52px] text-base font-popins font-medium 
                rounded-[9999px] flex justify-center items-center'>
               Continue
               </Link>

               <div className="w-full flex items-center mt-[32px]">
                   <div class="flex-grow border-t border-[#F3F4F6]"></div>
                  <p className='text-[14px] w-[52px] font-popins font-medium text-center  '>OR</p>
                    <div class="flex-grow border-t border-[#F3F4F6]"></div>
               </div>

            </form>

            <div className="mt-6 text-base font-popins font-normal text-center">
                <p className='text-[#4B5563] inline'>New user?  </p>
                <Link to={"/register"} className='text-[#0EA5E9]'> Create an account</Link>
            </div>
      
         </div>
    </div>

    </div>

    </>
  )
}

export default Login