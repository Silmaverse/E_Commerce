import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import CommonProductCard from "./commoncomponent/CommonProductCard";
import CommonHead from "./commoncomponent/CommonHead";
import axios from "axios";
import Slider from "react-slick";

const Recommendation = () => {
  const [allProducts, setAllProducts] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
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

  
  return (
    <>
      <section className="mt-[176px]">
        <div className="container exploring ">
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

export default Recommendation;
