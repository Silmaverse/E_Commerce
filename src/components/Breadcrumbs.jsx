import React from 'react'
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router'


const Breadcrumbs = ({pageName , pageLink , subpageName ,}) => {





  return (
    <>

    <div className='flex gap-2 items-center'>
        <Link to={"/"} className='text-xl font-normal font-popins text-secondary' > <CiHome />
        </Link>
        <span className='text-lg font-normal font-popins text-secondary'>/</span>
        <Link to={pageLink}  className={`text-xl font-normal font-popins 
             ${subpageName?'text-secondary':'text-red-400'}`} >{pageName}
        </Link>
        <span className='text-lg font-normal font-popins text-secondary'>/</span>
        {
            subpageName &&

            <Link to={"#"}  className='text-xl font-normal font-popins  text-red-400' >{subpageName}
            </Link>
        }

        
    </div>
    
   
    </>
  )
}

export default Breadcrumbs