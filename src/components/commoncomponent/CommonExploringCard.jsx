import React from 'react'
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";

const CommonExploringCard = () => {
  return (
    <>
      <div>
                  <div className="w-[312px] lg:w-[418px]  h-[132px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-6">
                    <div className="">
                      <h2 className="text-[20px] lg:text-[24px] text-[#111827] font-popins font-semibold">
                        For Men's
                      </h2>
                      <p className="text-[12px] lg:text-[14px] font-popins font-normal text-[#4B5563]">
                        Starting at $24
                      </p>
                    </div>

                    <Link
                      to={"/"}
                      className="text-[12px] lg:text-[14px] font-popins font-medium border-l-3 border-[#E5E7EB] 
                      text-[#4B5563] pl-3 flex items-center gap-2"
                      >
                      Shop Now{" "}
                      <IoIosArrowRoundForward className="text-base text-[#4B5563]" />
                    </Link>
                  </div>
      </div>
    </>
  )
}

export default CommonExploringCard