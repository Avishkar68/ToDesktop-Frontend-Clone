import React from 'react'
import { useState, useEffect } from "react";
import { asset0, asset1 } from '../assets';

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const handleClick = () => {
    setNavShow(!navShow);
  };

  return (
    <>
      {/* Navbar */}
      {isMobile ? (
        <div className="z-10 md:hidden">
          {navShow ? (
            <>
              <nav className="p-3 flex bg-white justify-between items-center">
                <a href="#" id="brand" className="flex gap-2 items-center">
                  <img
                    className="object-cover max-w-12 max-h-12"
                    src={asset0}
                  />
                  <span className="text-lg font-medium font-display">
                    ToDesktop
                  </span>
                </a>

                <button className="p-2 " onClick={handleClick}>
                  <i className="fa-solid fa-xmark text-gray-500"></i>
                </button>
              </nav>
              <div id="nav-menu" className=" w-full flex flex-col  gap-4 p-10 ">
                <a
                  href="#"
                  className="px-10 py-2 font-medium  hover:text-primary hover:bg-blue-100 rounded"
                  
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="px-10 py-2 font-medium  hover:text-primary hover:bg-blue-100 rounded"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="px-10 py-2 font-medium  hover:text-primary hover:bg-blue-100 rounded"
                >
                  Changelog
                </a>
                <a
                  href="#"
                  className="px-10 py-2 font-medium  hover:text-primary hover:bg-blue-100 rounded"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="px-10 py-2 font-medium  hover:text-primary hover:bg-blue-100 rounded"
                >
                  Login
                </a>
              </div>
              <div className="h-[1px] bg-gray-300"></div>
              <button className="w-full mt-6 flex gap-3 items-center  px-6 py-2 rounded-lg hover:bg-gray-50 ">
                <img src={asset1} />
                <span>Electron Developers</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </>
          ) : (
            <>
              <nav className="p-3 flex bg-white justify-between items-center">
                <a href="#" id="brand" className="flex gap-2 items-center">
                  <img
                    className="object-cover max-w-12 max-h-12"
                    src={asset0}                  />
                  <span className="text-lg font-medium font-display">
                    ToDesktop
                  </span>
                </a>

                <button className="p-2 " onClick={handleClick}>
                  <i className="fa-solid fa-bars text-gray-500"></i>
                </button>
              </nav>
            </>
          )}
        </div>
      ) : (
        <nav className="p-3 flex bg-white justify-between items-center">
          <a href="#" id="brand" className="flex gap-2 items-center flex-1">
            <img
              className="object-cover max-w-12 max-h-12"
              src={asset0}
            />
            <span className="text-lg font-medium font-display">ToDesktop</span>
          </a>

          <div id="nav-menu" className="hidden md:flex gap-12">
            <a href="#" className="font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Docs
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Changelog
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Blog
            </a>
            <a href="#" className="font-medium hover:text-primary">
              Login
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end'>

          <button className=" flex gap-3 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 ">
            <img src={asset1} />
            <span>Electron Developers</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          </div>
          <button className="p-2 md:hidden" onClick={handleClick}>
            <i className="fa-solid fa-bars text-gray-500"></i>
          </button>
        </nav>
        
      )}
      
    </>
  );
}

export default Navbar
