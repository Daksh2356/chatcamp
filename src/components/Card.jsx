import React from "react";
import Image from "next/image";
import pic from "../assets/pic.jpg";

const Card = () => {
  return (
    <div className="grid gap-0 sm:grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white h-[500px] overflow-hidden mb-4 w-full rounded-2xl transition duration-500 ease-in-out sm:shadow-lg md:shadow-md hover:drop-shadow-xl">
        <div className="w-full relative  ">
          <div className="w-full h-full ">
            <Image
              src={pic}
              alt="Picture"
              width={100}
              height={100}
              quality={100}
              unoptimized
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-full relative">
            <div className=" h-[300px] p-3 mb-2 transition duration-300 ease-in rounded-lg text-center bg-lilac hover:-translate-y-24">
              <p>COURSE 1</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit.</p>
              <button className=" text-white rounded-md text-2xl">
                Click here !!!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[500px] overflow-hidden mb-4 w-full rounded-2xl transition duration-500 ease-in-out sm:shadow-lg md:shadow-md hover:drop-shadow-xl">
        <div className="w-full relative  ">
          <div className="w-full h-full ">
            <Image
              src={pic}
              alt="Picture"
              width={100}
              height={100}
              quality={100}
              unoptimized
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-full relative">
            <div className=" h-[300px] p-3 mb-2 transition duration-300 ease-in rounded-lg text-center bg-lilac hover:-translate-y-24">
              <p>COURSE 2</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit.</p>
              <button className=" text-white rounded-md text-2xl">
                Click here !!!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[500px] overflow-hidden mb-4 w-full rounded-2xl transition duration-500 ease-in-out sm:shadow-lg md:shadow-md hover:drop-shadow-xl">
        <div className="w-full relative  ">
          <div className="w-full h-full ">
            <Image
              src={pic}
              alt="Picture"
              width={100}
              height={100}
              quality={100}
              unoptimized
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-full relative">
            <div className=" h-[300px] p-3 mb-2 transition duration-300 ease-in rounded-lg text-center bg-lilac hover:-translate-y-24">
              <p>COURSE 3</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit.</p>
              <button className=" text-white rounded-md text-2xl">
                Click here !!!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
