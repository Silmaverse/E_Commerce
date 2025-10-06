import React from 'react'

const LocalStorage = () => {

  const handleClick =()=>{

   
   localStorage.setItem('index' ,"saving")
   
  }



  return (
    <>
       <div className="container lg:px-[50px]">

     <button onClick={handleClick} className='w-[100px] h-[50px] bg-red-500'>Click me</button>
       </div>
    </>
  )
}

export default LocalStorage