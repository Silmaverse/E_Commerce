import Password from 'antd/es/input/Password'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import { PuffLoader} from 'react-spinners'

const Register = () => {

  const [fromdata ,setfromdata] =useState({
    email: null,
    password: null,
    role: "ADMIN",
    username: null,
    confirmpassword:null,
  })



  const [allerrors ,setallerrors] = useState({
    nameerror:"border-[#E5E7EB]",
    PasswordError:"border-[#E5E7EB]",
    confrimpasswordError:"border-[#E5E7EB]",
  })

  const navigate =useNavigate();
  const[loader ,setloader] =useState(false);

  const handleRegister=(e)=>{

    console.log("cliking")
    setloader(true)
    e.preventDefault();
    if(!fromdata.email){
          setallerrors((prev)=>({...prev , nameerror:"border-red-300"}))
    }

    if(!fromdata.password){
          setallerrors((prev)=>({...prev , PasswordError:"border-red-300"}))
    }
    if(!fromdata.confirmpassword){
       setTimeout(()=>{
            setloader(false)
          },2000);
        return setallerrors((prev)=>({...prev , confrimpasswordError:"border-red-300"}))
    }
    
    setloader(true)

    if(fromdata.password!=fromdata.confirmpassword &&(fromdata.password) && (fromdata.confirmpassword)){
          
         return setallerrors((prev)=>({...prev , PasswordError:"border-red-300",confrimpasswordError:"border-red-300"}))
      }


    

    axios.post('https://api.freeapi.app/api/v1/users/register', 
      {
        email:fromdata.email,
        password:fromdata.password,
        username:fromdata.email.split("@")[0],
        role:"ADMIN",

        } )
    .then((res)=>{
      console.log(loader)
      setloader(false)
      toast.success('Register Success', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      })
      
  
         setTimeout(() => {
          navigate('/login')
         }, 2000);
     }

    )
    .catch((err)=>{
      console.log(loader)
      setloader(false)
      toast.error('Register Failed', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      })
     

    }
    
  )

 
    
  console.log(fromdata)
  }
  return (
    <>
    <div className="container lg:px-[50px] mt-10">
        <div className="w-full  flex  justify-center items-center">
           <ToastContainer />
         <div className="regsiter_row w-[440px]">
             <h2 className='text-[36px] font-popins font-semibold text-center'>Register</h2>
        
            <form onSubmit={handleRegister}>

                {/* email input */}

               <div className='mt-[60px]'>
                <label htmlFor='email' className='text-base font-popins font-semibold'>Email</label>
                <input onChange={(e)=> { 
                setfromdata((prev)=>({...prev ,email:e.target.value})), 
                setallerrors((prev)=>({...prev , nameerror:"border-[#E5E7EB]"})) 
              }}
                id='email' className={`w-full border ${allerrors.nameerror} py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2`} 
                placeholder='example@example.com' type='email'/>

               </div>

                {/* password input */}

                <div className='mt-6'>
                <label htmlFor='password' className='text-base font-popins font-semibold'>Password</label>
                <input onChange={(e)=> { 
                setfromdata((prev)=>({...prev ,password:e.target.value})) , 
                setallerrors((prev)=>({...prev , PasswordError:"border-[#E5E7EB]"})) 
            }} 
                id='password' className={`w-full border ${allerrors.PasswordError} py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2`} 
                placeholder='example@example.com' type='password'/>
                </div>

                 {/* password again input */}

                <div className='mt-6' >
                <label htmlFor='confrimpassword' className='text-base font-popins font-semibold'>Password (Again)</label>
                <input onChange={(e)=> {
                setfromdata((prev)=>({...prev ,confirmpassword:e.target.value})) , 
                setallerrors((prev)=>({...prev , confrimpasswordError:"border-[#E5E7EB]"})) 
            }} 
                id='confrimpassword' className={`w-full border ${allerrors.confrimpasswordError} py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2`}
                placeholder='example@example.com' type='password'/>

               </div>

               {
                loader?
                <div className='w-full mt-6
                text-white bg-primary h-[52px] text-base font-popins font-medium 
                rounded-[9999px] flex justify-center items-center'>
                 <PuffLoader size={50} color='#eaf1ee' />
                </div>:
                <button type='submit'  className='w-full mt-6
                  text-white bg-primary h-[52px] text-base font-popins font-medium 
                  rounded-[9999px] flex justify-center items-center'>
                Continue
               </button>
               }

               <div className="w-full flex items-center mt-[32px]">
                   <div className="flex-grow border-t border-[#F3F4F6]"></div>
                  <p className='text-[14px] w-[52px] font-popins font-medium text-center  '>OR</p>
                    <div className="flex-grow border-t border-[#F3F4F6]"></div>
               </div>

            </form>

            <div className="mt-6 text-base font-popins font-normal text-center">
                <p className='text-[#4B5563] inline'>Already a member? </p>
                <Link to={"/login"} className='text-[#0EA5E9]'>Login</Link>
            </div>
      
         </div>
    </div>

    </div>
    </>
  )
}

export default Register