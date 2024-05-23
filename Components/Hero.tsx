import React from "react";
import Particle from "./Particles";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return ( 
  <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
    
    <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols2-2 gap-[3rem] h-[100%] items-center">
      
        <div>
       <div>
        <h1>
    <button className="mt-[1.5rem] text-[45px] text-[rgb(0,0,0)] bg-gray-100 bg-opacity-45 w-18 md:w-35 lg:w-50 font-bold">

            <span className="text-[#081726]">HARINEE M D</span>
           
        </button>
        </h1> 
        </div>
        <div>
        <TextEffect/>
        </div>
        <div>
        < button className="mt-[1.5rem] text-[25px] text-[rgb(0,0,0)] bg-gray-100 bg-opacity-45 w-18 md:w-35 lg:w-50 font-bold">
            A fusion of Technology and Creativity...
        </button>
        </div>
        
      
     <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">

     </div>
        </div>
   
   
   </div>
    </div>

  
  );
};

export default Hero;