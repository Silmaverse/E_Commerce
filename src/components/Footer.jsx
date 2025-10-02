import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import visa from "../assets/images/visa.png";
import paypal from "../assets/images/paypal.png";
import stripe from "../assets/images/stripe.png";
import erisign from "../assets/images/verisign.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="mt-[52px] border-t border-t-[#E5E7EB] ">
        <div className="container px-6 lg:px-0">
          {/* ---top section */}
          <div className="lg:px-[120px] lg:py-[60px] mt-[48px] lg:mt-0">
            <div className="lg:flex items-center gap-[198px]">
              {/* ----firts col */}
              <div className="nxton">
                {/*---logo  */}

                <div className=" w-[119px] mb-5">
                  <img src={logo} alt="logo" />
                </div>

                {/* facebook */}
                <Link className="flex gap-2 items-center mb-3">
                  <FaFacebook className="text-[#4676ED] text-xl" />
                  <p className="text-base font-popins font-normal text-[#4B5563]">
                    Facebook
                  </p>
                </Link>

                {/* Youtube */}
                <Link className="flex gap-2 items-center mb-3">
                  <GrYoutube className="text-[#DA0000] text-xl" />
                  <p className="text-base font-popins font-normal text-[#4B5563]">
                    Youtube
                  </p>
                </Link>

                {/* telegarm */}
                <Link className="flex gap-2 items-center mb-3">
                  <FaTelegram className="text-[#1D93D2] text-xl" />
                  <p className="text-base font-popins font-normal text-[#4B5563]">
                    Telegram
                  </p>
                </Link>

                {/* twiter */}
                <Link className="flex gap-2 items-center mb-3">
                  <AiFillTwitterCircle className="text-[#5A99EC] text-xl" />
                  <p className="text-base font-popins font-normal text-[#4B5563]">
                    Twitter
                  </p>
                </Link>
              </div>

              {/* ---second col */}
              <div className="start mt-[50px] lg:mt-0">
                <h2 className="text-base text-primary font-popins font-semibold mb-5">
                  Getting started
                </h2>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Release Notes
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Upgrade Guide
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Browser Support
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Dark Mode
                </p>
              </div>

              {/* ---third col */}
              <div className="start  mt-[50px] lg:mt-0">
                <h2 className="text-base text-primary font-popins font-semibold mb-5">
                  Explore
                </h2>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Prototyping
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Design systems
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Pricing
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Security
                </p>
              </div>

              {/* ---fourth col */}
              <div className="start mt-[50px] lg:mt-0">
                <h2 className="text-base text-primary font-popins font-semibold mb-5">
                  Community
                </h2>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Discussion Forums
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Code of Conduct
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  Contributing
                </p>
                <p className="text-base text-[#4B5563] font-popins font-semibold mb-5">
                  API Reference
                </p>
              </div>
            </div>
          </div>

          {/* -----bottom section */}
          <div className="lg:px-[120px] lg:py-[36px] border-t  border-t-[#E5E7EB] flex flex-col lg:flex-row justify-between items-center">
            <p className="text-sm lg:text-base font-popins font-normal text-[#4B5563] mb-3 lg:mb-0 mt-5 lg:mt-[20px]">
              Nexton eCommerce. © 2024
            </p>

            <div className="flex gap-1 items-center">
              <Link to={"/"} className="w-[40px] lg:w-[56px] h-[32px] ">
                <img src={visa} alt="visa" />
              </Link>
              <Link to={"/"} className="w-[40px] lg:w-[56px] h-[32px] ">
                <img src={paypal} alt="paypal" />
              </Link>
              <Link to={"/"} className="w-[40px] lg:w-[56px] h-[32px] ">
                <img src={stripe} alt="stripe" />
              </Link>
              <Link to={"/"} className="w-[40px] lg:w-[56px] h-[32px] ">
                <img src={erisign} alt="erisign" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
