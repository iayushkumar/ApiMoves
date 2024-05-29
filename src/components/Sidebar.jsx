import React, { useState, useEffect } from "react";
import { FaTruck } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsBlockquoteRight } from "react-icons/bs";
const Sidebar = () => {
  const components = [
    {
      Image: "Github",
      url: "https://github.com/iayushkumar",
    },
  ];

  return (
    <div className={`h-screen bg-white sm:block lg:block`}>
      <div className="relative pt-2 flex flex-col justify-center items-center">
        <div className="mt-4">
          <p className="text-lg mt-4 hover:cursor-pointer sm:hidden md:flex items-center border-l-4 border-orange-600">
            <FaTruck className="mr-2 mt-2 ml-2" />
            My Movies
          </p>

          <p className="text-lg mt-4 hover:cursor-pointer  sm:hidden md:flex">
            <CgProfile className="mr-2 mt-2 ml-2" /> 
            My Profile
          </p>
          <p className="text-lg mt-4 hover:cursor-pointer  sm:hidden md:flex">
            <BsBlockquoteRight className="mr-2 mt-2 ml-2" />
             GET QUTOS
          </p>
          <p className="text-lg mt-4 hover:cursor-pointer sm:hidden md:flex">
            <RiLogoutCircleRFill className="mr-2 mt-2 ml-2" />
            LOGOUT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
