import Image from "next/image";
import React from "react";

const Papers = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
        <h1 className="heading">
            MY <span className="text-yellow-400"> Papers</span>
        </h1>
   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
 
    <div>
        <div className="w-[100%] relative h-[400px]">
            <Image 
            src="/images/blog1.jpg"
            alt="Papers"
            layout="fill"
            className="object-cover"
            />
  </div>
  <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
    <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold
    text-[17px] mx-auto">
        Kalam 22
    </div>
    <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
        <div className="flex items-center space-x-5">
            <p className="text-white">
            IOT BASED HEALTH MONITORING SYSTEM
            </p>
        </div>
    </div>
  </div>
</div>


<div>
        <div className="w-[100%] relative h-[400px]">
            <Image 
            src="/images/b2.jpg"
            alt="Papers"
            layout="fill"
            className="object-cover"
            />
  </div>
  <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
    <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold
    text-[17px] mx-auto">
        Yukta 23
    </div>
    <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
        <div className="flex items-center space-x-5">
            <p className="text-white">
            METAVERSE - Bridging the gap between physical and digitial environment
            </p>
        </div>
    </div>
  </div>
</div>


<div>
        <div className="w-[100%] relative h-[400px]">
            <Image 
            src="/images/blog3.jpg"
            alt="Papers"
            layout="fill"
            className="object-cover"
            />
  </div>
  <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
    <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold
    text-[17px] mx-auto">
        Yugam 23
    </div>
    <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
        <div className="flex items-center space-x-5">
            <p className="text-white">
            USER EXPERIENCE THROUGH USABILITY TESTING AND
 ITERATIVE DESIGN
            </p>
        </div>
    </div>
  </div>
</div>









   </div>
    </div>
  );
};

export default Papers;