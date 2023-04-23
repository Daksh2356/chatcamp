import React from "react";
import { FaBeer, FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="w-full h-auto mx-auto my-0 relative bg-[#0A1535]">
      <div className="relative my-0 mx-auto flex justify-center">
        <div className="w-2/3 h-auto bg-gradient-to-l to-[#783EC8] from-[#37A1F8] absolute rounded-md p-5 shadow-xl top-[-55px]">
          <div className="w-full flex justify-between items-center  p-5">
            <div className="">
              <div className="text-4xl font-bold">
                <span className="">C</span>
                <span className="text-slate-900">h</span>
                <span className="text-slate-800">a</span>
                <span className="text-slate-700">t</span>
                <span className="text-slate-600">C</span>
                <span className="text-slate-600">a</span>
                <span className="text-slate-700">m</span>
                <span className="text-slate-900">p</span>
              </div>
              <div className="text-white text-sm   font-semibold">
                Sign Up to get our free newsletter
              </div>
            </div>
            <div className="flex">
              <input
                type="email"
                className="backdrop-filter focus:bg-white focus:border-white  bg-blue-900  backdrop-blur-sm border-black bg-opacity-10 text-black rounded-md outline-none p-2 border"
              ></input>
              <button
                type="button"
                className="w-full bg-[#1e025a]  before:content-[''] before:rounded-md text-white rounded-md before:top-0 before:z-10 z-10   before:left-0 hover:text-white relative before:bg-black before:absolute before:w-0 before:h-full before:transition-all before:duration-500 hover:before:w-full p-3 active:bg-black active:text-white"
              >
                <span className="z-20 relative hover:z-40 hover:text-white rounded-md">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center  p-28 text-3xl">
        <div className="text-4xl font-bold">
          <span className="text-slate-500">C</span>
          <span className="text-slate-100">h</span>
          <span className="text-slate-200">a</span>
          <span className="text-slate-300">t</span>
          <span className="text-slate-400">C</span>
          <span className="text-slate-300">a</span>
          <span className="text-slate-200">m</span>
          <span className="text-slate-100">p</span>
        </div>
         <div className="text-white flex gap-2 justify-items-center">
          <FaLinkedinIn/>
          <FaFacebook/>
          <FaInstagram/>
          <FaDiscord/>
      </div>
      </div>
      <div className="w-full h-[0.5px] bg-white"></div>
      <div className="text-sm text-center text-white">@Copywrite Chatcamp</div>
    </div>
  );
};

export default Footer;
