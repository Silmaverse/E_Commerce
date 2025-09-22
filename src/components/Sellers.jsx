import React, { useEffect, useState } from 'react'
import CommonHead from './commoncomponent/CommonHead'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import axios from 'axios'
import CommonProductCard from './commoncomponent/CommonProductCard'

const Sellers = () => {
  const[allProduct ,setallProduct] =useState([])


  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=> setallProduct(res.data.products))
    .catch((err)=>console.log(err))
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
  };


  return (
    <>

    <section id='seller' className='mt-[176px] exploring'>
        <div className="container ">
            <CommonHead commonContent1={"Best Sellers. "}  commonContent2={"Best selling of the month"}/>

            <div className="mt-10">
            <Slider {...settings}>
              {allProduct.map((item) => (
                <div>
                  <CommonProductCard
                    key={item.id}
                    productImage={item.thumbnail}
                    productTitle={item.title}
                    productPrice={item.price}
                    productCategory={item.category}
                    productDisCountPrice={item.discountPercentage}
                    productRating={item.rating}
                    productStock={item.stock}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

    </section>
    </>
  )
}

export default Sellers