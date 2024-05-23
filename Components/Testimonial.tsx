import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] ">
        <h1 className="heading">
            Pro<span className="text-yellow-400">jects</span>
        </h1>
        <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
          <TestimonialSlider/>  
        </div>
    </div>
  );
};

export default Testimonial;