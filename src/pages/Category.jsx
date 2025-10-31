import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router';
import CommonProductCard from '../components/commoncomponent/CommonProductCard';

const Category = () => {

   const [products ,setProducts] =useState([]);

   const params =useParams()

   axios.get(`https://dummyjson.com/products/category/${params.name}`)
   .then((res)=>{setProducts(res.data.products)})
   .catch((err)=>{console.log(err)})


   console.log(products)

  return (


    <>


     <section>
        <div className="container lg:px-[50px]">
           
            <div className="flex flex-wrap gap-5 mt-10">
            {
              products.map((item)=>(

                <CommonProductCard key={item.id}  
                
                productImage={item.thumbnail} 
                productTitle={item.title} productPrice={item.price}
                productDisCountPrice={item.discountPercentage} productRating={item.rating} 
                productStock={item.stock} productCategory={item.category}  />
              ))
            }
            </div>

           


        </div>

     </section>

          
    </>
  )
}

export default Category