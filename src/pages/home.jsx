import Card from "../components/Card";
import React from "react";
import Image from "next/image";
import halfBg from "../assets/halfBg.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  return (
    <>
      <div className="main flex items-center justify-center">
        <div className="absolute top-[350px] cursor-pointer bg-black h-[50px] w-[50px] flex items-center justify-center z-10 rounded-full hover:translate-y-2">
          <AiOutlineArrowDown className="text-3xl text-white" />
        </div>
        <div className="bg-[#fafafa] h-screen w-[50%]">
          <h1 className=" font-ourFont font-black relative top-8 left-10 text-3xl">
            ChatCamp.
          </h1>
          <div className="mx-10 relative top-[250px] left-[50px]">
            <h1 className=" font-ourFont font-black text-[70px] ">ChatCamp</h1>
            <h2 className="font-ourFont font-black text-[25px] ml-2">
              Empower learning at <span className=" text-[#B766CD]">Chat</span>
              <span className=" text-[#C4ACDE]">Camp</span>, where knowledge
              meets collaboration!
            </h2>
          </div>
        </div>
        <div className="bg-[#dedede] h-screen w-[50%]">
          <Image
            src={halfBg}
            width={690}
            quality={100}
            unoptimized
            alt="Picture"
          />
        </div>
        <div className="sidenav absolute top-8 right-10">
          <ul>
            <li className="mb-3">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  About
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Contact
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Login
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Home
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Card />
      <ContactUs />
    </>
  );
};

export default Home;
