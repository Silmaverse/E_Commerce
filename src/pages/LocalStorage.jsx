import axios from 'axios'
import React from 'react'

const LocalStorage = () => {

  const handleClick =()=>{

   
   localStorage.setItem('index' ,"saving")
   
  }

    const myData = axios.get("https://dummyjson.com/products?limit=15&skip=15&select=title,price")
  .then((res)=>{console.log(res)})
  .catch((err)=>console.log(err))

   console.log(myData)



  return (
    <>
       <div className="container lg:px-[50px]">

     <button onClick={handleClick} className='w-[100px] h-[50px] bg-red-500'>Click me</button>
       </div>
    </>
  )
}

export default LocalStorage