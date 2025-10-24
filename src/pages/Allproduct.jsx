import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useLocation, useParams } from 'react-router'

const Allproduct = () => {

 const mylocation =useLocation();
 console.log(mylocation)
 let pageName= mylocation.pathname.split('/')[1].split("-")

 console.log(pageName)


pageName=pageName.map((item)=>{

    item= item.toString()
    item=item.charAt(0).toUpperCase()+item.slice(1)
    return item

 })

 pageName = pageName.join("  ")
 

  return (
    <>
     <section>
        <div className="container lg:px-[50px]">
            <Breadcrumbs pageName={pageName}  pageLink={"/all-Product"} />
        </div>
     </section>
    </>
  )
}

export default Allproduct