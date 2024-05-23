import React from "react";

interface Props{
    title: string;
    year: string;
    para: string;
}


const SkillsItem = ({ title,year,para } : Props) => {
  return (
  <div className="mb-[4rem] md:mb-[8rem]">
    <span className="px-[2rem] text-[#d8b339] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#f3eec1]">
        {year}
    </span>
    <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
        {title}
    </h1>
    <p className="text-[#aaaaaa] font-normal text-justify w-[80%] text-[17px] opacity-80">
       {para}
    </p>
  </div>
  );
};

export default SkillsItem;