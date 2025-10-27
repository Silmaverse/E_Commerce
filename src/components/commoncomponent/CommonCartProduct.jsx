import React from 'react'

const CommonCartProduct = ({cartImg  , cartTitle , cartPrice}) => {
  return (
    <>

        <div className="flex items-center gap-5 mt-5">
                <div className="w-15 h-15 bg-gray-100 rounded-[5px]">
                  <img src= {cartImg}  alt='err'/>
                </div>

                <div className="">
                    <h2 className='text-lg font-medium text-black font-popins'>{cartTitle}</h2>
                    <p className='text-[12px] font-medium text-black font-popins'>{cartPrice}</p>
                </div>
            </div>
    </>
  )
}

export default CommonCartProduct