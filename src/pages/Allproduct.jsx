import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useLocation, useParams } from 'react-router'
import { Pagination } from 'antd';
import CommonProductCard from '../components/commoncomponent/CommonProductCard';
import axios from 'axios';

const Allproduct = () => {

const [product ,setProduct]=useState([]);
const [skipandLimit ,setskipandLimit] =useState({limit:12 ,skip:0});

const mylocation =useLocation();

let pageName= mylocation.pathname.split('/')[1].split("-")

pageName=pageName.map((item)=>{

    item= item.toString()
    item=item.charAt(0).toUpperCase()+item.slice(1)
    return item

 })

pageName = pageName.join("  ")

const showCurrentSize = (current, pageSize) => {
    console.log(current, pageSize);
    const skip= (current -1) * pageSize;
    setskipandLimit({limit:pageSize,skip:skip});
};


  useEffect(()=>{
     axios.get(`https://dummyjson.com/products?limit=${skipandLimit.limit}&skip=${skipandLimit.skip}&select=title,price,category,price,discountPercentage,rating,stock,thumbnail`)
     .then((res)=> setProduct(res.data))
     .catch((err)=>console.log(err))
     
  },[skipandLimit])

  console.log(product)
 

  return (
    <>
     <section>
        <div className="container lg:px-[50px]">
            <Breadcrumbs pageName={pageName}  pageLink={"/all-Product"}  />
            <div className="flex flex-wrap gap-5 mt-10">
            {
              product.products?.map((item)=>(

                <CommonProductCard key={item.id}  
                
                productImage={item.thumbnail} 
                productTitle={item.title} productPrice={item.price}
                productDisCountPrice={item.discountPercentage} productRating={item.rating} 
                productStock={item.stock} productCategory={item.category}  />
              ))
            }
            </div>

            <div className="mt-10">

              <Pagination 
              showSizeChanger
              onChange={showCurrentSize}
              defaultCurrent={1}
              defaultPageSize={12}
              total={product.total} align='end'
              pageSizeOptions	={[12, 24,36 ,48 ]}
              />

            </div>


        </div>

     </section>
    </>
  )
}

export default Allproduct