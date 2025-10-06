import React, { useEffect, useState } from "react";
import axios from "axios";
import { TiStar } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { redirect, useNavigate, useParams } from "react-router";
import CommonProductCard from "../components/commoncomponent/CommonProductCard";
import CommonHead from "../components/commoncomponent/CommonHead";

const ProductDetails = () => {

  // slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  //navigation

  const navigate = useNavigate()


  // useState data
  const [singleData, setsingleData] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [images, setmyImages] = useState([]);
  const [count, setCount] = useState(1);

  const paramsDetails = useParams();

  useEffect(() => {

     window.scrollTo(0,0)

    axios
      .get(`https://dummyjson.com/products/${paramsDetails.productId}`)
      .then((res) => {
        setsingleData(res.data), setmyImages(res.data.images?.[0]);
      })
      .catch((err) => {
        console.log(err);
      }),
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setAllProducts(res.data.products))
        .catch((err) => console.log(err));
  }, []);


  const sameCategory = allProducts.filter(
    (item) => item.category == singleData.category
  );

  const disPrice =singleData.price - (singleData.price * singleData.discountPercentage) / 100;

  console.log(singleData)

  const detailsClick =(productId)=>{

    navigate(`/productdetails/${productId}`)

      window.scrollTo({top: 0 ,behavior:"smooth"})
    

  }

  return (
    <>
      <section id="ProductDetails">
        <div className="container lg:px-[50px]">
          {/* --product row */}
          <div className="productRow flex justify-between ">
            {/* product images with loader*/}
            {singleData ? (
              <div className="producImages flex gap-6 border-b border-[#E5E7EB] pb-[64px]">
                <div className="flex flex-col gap-4">
                  {singleData.images?.map((item, id) => (
                    <button
                      key={id}
                      className="w-[140px] h-[158px] rounded-2xl bg-gray-200 overflow-hidden"
                      onClick={() => setmyImages(item)}
                    >
                      <img
                        className="w-full rounded-2xl"
                        src={item}
                        alt="error"
                      />
                    </button>
                  ))}
                </div>

                <div className="w-[640px] h-[678px] rounded-2xl bg-gray-200 ">
                  <img
                    className="w-full rounded-2xl"
                    src={images}
                    alt="error"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white p-6">
                <div className="flex gap-6">
                  <div className="flex flex-col gap-4">
                    <button className="w-[140px] h-[158px] rounded-2xl bg-gray-200 animate-pulse"></button>
                    <button className="w-[140px] h-[158px] rounded-2xl bg-gray-200 animate-pulse"></button>
                    <button className="w-[140px] h-[158px] rounded-2xl bg-gray-200 animate-pulse"></button>
                  </div>
                  <div className="w-[640px] h-[678px] rounded-2xl bg-gray-200 animate-pulse"></div>
                </div>
              </div>
            )}

            {/* product option */}

            <div className="w-[460px] h-fit rounded-2xl p-[33px] border border-[#E5E7EB] ">
              <div className="flex justify-between ">
                <div className="flex gap-[6px] items-start">
                  <TiStar className="text-base text-[#FBBF24]" />
                  <p className="text-[12px] lg:text-[16px] font-popins font-medium text-[#4B5563] ">
                    {" "}
                    {singleData.rating} . {singleData?.reviews?.length || 0}{" "}
                    reviews{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className=" w-[143px] truncate font-popins font-semibold text-[24px] text-primary">
                    ${disPrice}
                  </h2>
                  <h2 className="font-popins font-medium text-[14px] line-through text-secondary">
                    ${singleData.price}
                  </h2>
                </div>
              </div>
              {/* product size */}
              <h2 className="font-popins font-semibold text-base text-primary">
                Size: S
              </h2>
              <div className="flex gap-[8.5px] items-center mt-3 mb-8">
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]">
                  S
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]">
                  M
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]">
                  L
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl  hover:bg-[#0EA5E9]">
                  XL
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] rounded-xl   hover:bg-[#0EA5E9]">
                  2XL
                </button>
              </div>

              {/* product quantity */}
              <div className="flex justify-between items-center">
                {/* qty button */}
                <div className="w-[110px] h-[40px] rounded-[9999px] bg-[#F8F8F8] flex justify-center items-center gap-4">
                  <button
                    onClick={() => {
                      count > 1 ? setCount(count - 1) : setCount(1);
                    }}
                    className="w-[24px] h-[24px] rounded-full bg-[#ffff]"
                  >
                    -
                  </button>
                  <h2>{count}</h2>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="w-[24px] h-[24px] rounded-full bg-[#ffff]"
                  >
                    +
                  </button>
                </div>
                {/* add to cart */}
                <button className="w-[178px] h-[52px] flex items-center justify-center gap-2 rounded-[9999px] font-popins font-medium text-base text-[#ffff] bg-primary">
                  <IoBagHandleOutline /> Add to cart
                </button>
              </div>

              {/* quantity with price */}
              <div className="flex justify-between items-center mt-8 mb-4">
                <div>
                  <h2 className="font-popins text-base font-normal">
                    ${disPrice} x <span>{count}</span>
                  </h2>
                  <h2 className="font-popins text-base font-normal">
                    Tax estimate
                  </h2>
                </div>

                <div>
                  <h2 className="w-[100px] truncate  font-popins text-base font-normal">
                    ${disPrice * count}{" "}
                  </h2>
                  <h2 className="font-popins text-base font-normal">$0</h2>
                </div>
              </div>

              {/* total price */}
              <div className="border-t border-[#E5E7EB] pt-4 flex justify-between items-center">
                <h2 className="font-popins font-semibold text-base">Total</h2>
                <h2 className="w-[100px] truncate font-popins font-semibold text-base">
                  ${disPrice * count}
                </h2>
              </div>
            </div>
          </div>

          {/* product info */}

          <div className="productdeatils mb-[96px]">
            {/* product details and title */}
            <h2 className="font-popins font-semibold text-[36px] text-primary mt-[52px] mb-2">
              {singleData.title}
            </h2>
            <p className="w-[735px] font-popins font-normal text-[16px] text-secondary mb-15">
              {singleData.description}
            </p>

            {/* category and variant */}
            <h2 className="font-popins font-semibold text-[24px] text-primary mb-2">
              {singleData.brand}
            </h2>
            <p className="font-popins font-normal text-[16px]">
              {singleData.brand}
            </p>
            <p className="font-popins font-normal text-[16px]">
              Color: Various
            </p>

            {/* sales and performanc */}
            <h2 className="font-popins font-semibold text-[24px] text-primary mt-[60px] ">
              {singleData.availabilityStatus}
            </h2>
            <p className="font-popins font-normal text-[16px]">
              Sales:{singleData.minimumOrderQuantity}
            </p>
            <p className="font-popins font-normal text-[16px]">
              Review Count:{singleData?.reviews?.length}
            </p>
            <p className="font-popins font-normal text-[16px]">
              Review Average: {singleData?.reviews?.length}
            </p>

            {/* keywords */}
            <h2 className="font-popins font-semibold text-[24px] text-primary mt-[60px] mb-4">
              Keywords
            </h2>
            <div className="flex gap-2 items-center">
              <div
                className="px-[14px] py-2 border border-[#E5E7EB] rounded-[9999px]
              text-secondary font-popins font-normal text-[12px] flex gap-1 justify-center
              items-center"
              >
                <BsStars />
                {singleData.shippingInformation}
              </div>

              <div
                className="px-[14px] py-2 border border-[#E5E7EB] rounded-[9999px]
              text-secondary font-popins font-normal text-[12px] flex gap-1 justify-center
              items-center"
              >
                <BsStars />
                {singleData.returnPolicy}
              </div>

              <div
                className="px-[14px] py-2 border border-[#E5E7EB] rounded-[9999px]
              text-secondary font-popins font-normal text-[12px] flex gap-1 justify-center
              items-center"
              >
                <BsStars />
                {singleData.warrantyInformation}
              </div>

              <div
                className="px-[14px] py-2 border border-[#E5E7EB] rounded-[9999px]
              text-secondary font-popins font-normal text-[12px] flex gap-1 justify-center
              items-center"
              >
                <BsStars />
                {singleData.weight}
              </div>
            </div>
          </div>
          <CommonHead commonContent1={"Recommended products"} />
          <div className="slider-container exploring mt-10">
            <Slider {...settings}>
              {sameCategory.map((item) => (
                <div>
                  <CommonProductCard
                    productImage={item.thumbnail}
                    productTitle={item.title}
                    productCategory={item.category}
                    productPrice={item.discountPercentage}
                    productDisCountPrice={item.price}
                    productRating={item.rating}
                    productStock={item.stock}
                    detailsClick={()=>{detailsClick(item.id) ,setsingleData(item) , setmyImages(item.images?.[0]), window.scrollTo(0,0)}}


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

export default ProductDetails;
