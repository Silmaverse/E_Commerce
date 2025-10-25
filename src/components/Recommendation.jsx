import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import CommonProductCard from "./commoncomponent/CommonProductCard";
import CommonHead from "./commoncomponent/CommonHead";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';

const Recommendation = () => {
  const [allProducts, setAllProducts] = useState([]);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // product details handler

  const handleDetails = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  const productArray =[]

  function randomNumber(){

      let num=Math.floor(Math.random()*16)
      return num
  }

 Cookies.set('userId', randomNumber(), { expires: 7 })




  const handleClick =(productId)=>{
    

    const myObject ={
       id:productId,
       quantity:1
    }

    productArray.push(myObject)

    axios.post('https://dummyjson.com/carts/add' , 
      {
        userId:Cookies.get("userId"),
        products:productArray

      },{ headers: { 'Content-Type': 'application/json' },}
    ).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

  return (
    <>
      <section className="mt-[176px]">
        <div className="container exploring px-6 lg:px-[50px]">
          <CommonHead
            commonContent1={" Recommendations. "}
            commonContent2={"Best matching products for you"}
          />
          <div className="mt-10">
            <Slider {...settings}>
              {allProducts.map((item) => (
                <div>
                  <CommonProductCard
                    key={item.id}
                    cartClick={()=>handleClick(item.id)}
                    productImage={item.thumbnail}
                    productTitle={item.title}
                    productPrice={item.price}
                    productCategory={item.category}
                    productDisCountPrice={item.discountPercentage}
                    productRating={item.rating}
                    productStock={item.stock}
                    detailsClick={()=>handleDetails(item.id)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
