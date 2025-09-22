import React, { useEffect, useState } from 'react'
import CommonHead from './commoncomponent/CommonHead'
import axios from 'axios'
import CommonProductCard from './commoncomponent/CommonProductCard'

const Sellers = () => {
  const[allProduct ,setallProduct] =useState([])


  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=> setallProduct(res.data.products))
    .catch((err)=>console.log(err))
  },[])

  console.log(allProduct)

  return (
    <>

    <section id='seller' className='mt-[176px] exploring'>
        <div className="container px-6">
            <CommonHead commonContent1={"Best Sellers. "}  commonContent2={"Best selling of the month"}/>

            <div className='flex justify-between gap-5 flex-wrap mt-[40px]'>
                {
                    allProduct.slice(0,4).map((item)=>{
                      return <CommonProductCard
                         key={item.id}
                                   productImage={item.thumbnail}
                                   productTitle={item.title}
                                   productPrice={item.price}
                                   productCategory={item.category}
                                   productDisCountPrice={item.discountPercentage}
                                   productRating={item.rating}
                                   productStock={item.stock}
                                 /> 
                    })
                }
            </div>
        </div>

    </section>
    </>
  )
}

export default Sellers