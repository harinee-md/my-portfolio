import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[25px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
                    ABOUT ME
                </h1>
                <h2 className="text-[15px] md:text-[25px] lg:text-[45px] md:leading-[4rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                Unleashing the power of technology to drive change
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                  <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                  <p className="text-[19px] text-justify text-slate-300 w-[80%]">
                  As a technical professional, I leverage my 
                  expertise in technical skills
                   to craft innovative solutions that meet
                the needs of both users and stakeholders.

                      Enthusiastic Student with superior skills in working in both team-based
 and independent capacities. Bringing strong work ethic and excellent organizational skills to any setting. Highly
motivated employee with desire to take on new challenges. Strong worth ethic, adaptability and exceptional
 interpersonal skills.
                  </p>
                </div>
            </div>
            <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
              <Image
               src="/images/about.jpg" 
               alt="user" 
               layout="fill" 
               objectFit="contain" 
               className="relative z-[11] w-[100%] h-[100%] object-contain" 
               />
              <div className="absolute w-[100%] h-[100%] z-[10]  top-[-2rem] right-[-2rem] bg-transparent">

              </div>
            </div>
        </div>
    </div>
  );
};

export default About;