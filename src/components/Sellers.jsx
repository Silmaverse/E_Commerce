import React, { useEffect, useState } from "react";
import CommonHead from "./commoncomponent/CommonHead";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import axios from "axios";
import CommonProductCard from "./commoncomponent/CommonProductCard";

const Sellers = () => {
  const [allProduct, setallProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setallProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <>
      <section id="seller" className="mt-[176px] exploring">
        <div className="container px-6 lg:px-[50px]">
          <CommonHead
            commonContent1={"Best Sellers. "}
            commonContent2={"Best selling of the month"}
          />

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
  );
};

export default Sellers;
