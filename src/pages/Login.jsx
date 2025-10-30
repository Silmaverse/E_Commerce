import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Flip, toast, ToastContainer, Zoom } from 'react-toastify'
import { PuffLoader} from 'react-spinners'

const Login = () => {
  const[fromdata ,setfromdata] =useState({
     password:null,
     username:null
  })

  const [loader , setloader] =useState(false);

  const [allerror ,setallerrors]= useState({
     usernameerror:"border-[#E5E7EB]",
     passworderror:"border-[#E5E7EB]",
  })

  const handleinput =(e)=>{

     setfromdata((prev)=>{
        return {...prev , [e.target.name]:e.target.value}
     })
  }
 const navigate =useNavigate()

  console.log(fromdata)

  const handleLogin =(e)=>{

    setloader(true);
    e.preventDefault();
    console.log(loader)
    console.log("clinkh")
    if(!fromdata.username){
       setallerrors((prev)=> ({...prev,usernameerror:"border-red-400"}) )
    }
    if(!fromdata.password){
       setTimeout(() => {
         setloader(false)
       }, 2000);
      return setallerrors((prev)=> ({...prev,passworderror:"border-red-400"}) )
    }

    setloader(true)

    axios.post("https://api.freeapi.app/api/v1/users/login" , 
      fromdata,
    {headers:{Accept:"application/json" , "content-type":"application/json"}}
  ).then((res)=>{
      console.log(res);
       setloader(false)
       console.log(loader)
       toast.success('Login Success', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        })

        setTimeout(()=>{
           navigate('/')
        },2000)

    })
    .catch((err)=>{
      console.log(err)
      setloader(false)
      console.log(loader)
       toast.error('Login Failed', {
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

    })
    
  }


  return (
    <>

     <div className="container lg:px-[50px] mt-10">
      <ToastContainer />
        <div className="w-full  flex  justify-center items-center">
              
         <div className="regsiter_row w-[440px]">
             <h2 className='text-[36px] font-popins font-semibold text-center'>Login</h2>
        
            <form onSubmit={handleLogin} >

                {/* email input */}

               <div className='mt-[60px]'>
                <label htmlFor='username' className='text-base 4font-popins font-semibold'>Username</label>
                <input onChange={(e)=>(handleinput(e) ,
                setallerrors((prev)=>({...prev , usernameerror:"border-[#E5E7EB]" })) )} 
                id='username' name='username' className={`w-full border
                 ${allerror.usernameerror} py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2`}
                placeholder='example@example.com' type='text'/>

               </div>

                {/* password input */}

                <div className='mt-6'>
                <label htmlFor='password' className='text-base 4font-popins font-semibold'>Password</label>
                <input onChange={(e)=>{ handleinput(e) ,  setallerrors((prev)=>({...prev , passworderror:"border-[#E5E7EB]" }))  }} 
                id='password' name='password' className={`w-full border
                 ${allerror.passworderror} py-3 pl-4 text-[#4B5563]
                outline-none rounded-[12px] text-[14px] font-popins font-normal mt-2`} 
                placeholder='example@example.com' type='password'/>
                </div>

              {
                  loader?
                  <div className="w-full mt-6
                  text-white bg-primary h-[52px] text-base font-popins font-medium 
                  rounded-[9999px] flex justify-center items-center py-6">

                  <PuffLoader size={50}  color='#eaf1ee'/>
                  </div>:
                <button  type='submit' className='w-full mt-6
                  text-white bg-primary h-[52px] text-base font-popins font-medium 
                  rounded-[9999px] flex justify-center items-center'>
                Continue
                </button>
              }

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