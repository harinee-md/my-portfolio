import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <p className="heading">
        My <span className="text-yellow-400">Services</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-
        [4rem] text-white">
    <div>
        <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]">
                <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                    Frontend
                </h1>
                <p className="text-[15px] text-justify text-[#d3d2d2] font-normal">
                I bridge the gap between design and functionality,
                crafting responsive and interactive web 
                experiences. Proficient in HTML, CSS, and 
                JavaScript, I leverage frameworks like React js
                to build fast, scalable, and user-friendly 
                interfaces with a solid grasp of web development 
                principles and a passion for staying up-to-date with
                industry trends.
                </p>
            </div>
          </div>

          <div>
            <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]">
                <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                    Developer
                </h1>
                <p className="text-[15px] text-justify text-[#d3d2d2] font-normal">
                I am a curious and driven individual with a 
                passion for coding and problem-solving. 
                With a strong foundation in programming 
                fundamentals, I am proficient in languages like 
                C++,Python, Java, and JavaScript. I am always looking 
                to expand my skillset with industry 
                trends, from machine learning and data science to web 
                development and cloud computing. 
                </p>
            </div>
           </div>

           <div>
            <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]">
                <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                    Designer
                </h1>
                <p className="text-[15px] text-justify text-[#d3d2d2] font-normal">
                I bring creativity and passion to every project
                I take on. With a keen eye for detail and a solid
                understanding of design principles, I craft 
                visually stunning and user-friendly experiences.
                Whether its creating logos, branding, or 
                digital products, I am dedicated to delivering 
                high-quality designs that meet and exceed 
                expectations. 
                     
                </p>
            </div>
           </div>


</div>
</div>
    
          
    
  );
};

export default Services;