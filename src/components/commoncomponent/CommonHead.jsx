import React from 'react'

const CommonHead = ({commonContent1 ,commonContent2}) => {
  return (
    <>
     <h2 className='text-2xl lg:text-[36px] font-popins font-semibold text-[#111827]'>{commonContent1}
        <span className='text-[#4B5563] hidden lg:inline-block'>{commonContent2}</span></h2>
    </>
  )
}

export default CommonHead