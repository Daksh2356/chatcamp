import React from 'react'
import Image from "next/image";
import background from "../../assets/background.png";

const Hero = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 h-[800px] w-full">
        <div className='absolute top-[90px] right-[100px]'>
        <Image src={background} height={450} width={550} alt='HeroImage' />
        </div>
        <h1 className="w-72 font-ourFont font-black relative top-8 left-10 text-3xl">
            ChatCamp.
        </h1>
        <div className="mx-10 relative top-[250px] left-[50px] w-[40%]">
            <h1 className=" font-ourFont font-black text-[70px] ">ChatCamp</h1>
            <h2 className="font-ourFont font-black text-[25px] ml-2">
              Empower learning at <span className=" text-[#936aca]">Chat</span>
              <span className=" text-white">Camp</span>, where knowledge
              meets collaboration!
            </h2>
        </div>
        <div className="absolute top-8 right-10">
          <ul className='flex'>
            <li className="mx-5">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Home
                </span>
              </a>
            </li>
            <li className="mx-5">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  About
                </span>
              </a>
            </li>
            <li className="mx-5">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Courses
                </span>
              </a>
            </li>
            <li className="mx-5">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Contact
                </span>
              </a>
            </li>
            <li className="mx-5">
              <a
                className="group text-black transition-all duration-300 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out font-ourFont font-black text-lg mb-5">
                  Login
                </span>
              </a>
            </li>
          </ul>
        </div>
    </div>
     
    </>
  )
}

export default Hero
