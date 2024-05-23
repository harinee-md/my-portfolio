import React from "react";
import Image from "next/image";
const Project = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
        <h1 className="heading">
            Cert<span className="text-yellow-400">ifications</span>
        </h1>
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
   
     <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-
        [100%] h-[200px] md:h-[300px]">
         <Image 
         src="/images/I1.jpg" 
         alt="portfolio" 
         layout="fill" 
         className="object-contain"
         />
        </div>
     </div>

     <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-
        [100%] h-[200px] md:h-[300px]">
         <Image 
         src="/images/I2.jpg" 
         alt="portfolio" 
         layout="fill" 
         className="object-contain"
         />
        </div>
     </div>

     <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-
        [100%] h-[200px] md:h-[300px]">
         <Image 
         src="/images/I3.jpg" 
         alt="portfolio" 
         layout="fill" 
         className="object-contain"
         />
        </div>
     </div>


     <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-
        [100%] h-[200px] md:h-[300px]">
         <Image 
         src="/images/I4.jpg" 
         alt="portfolio" 
         layout="fill" 
         className="object-contain"
         />
        </div>
     </div>



     <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-
        [100%] h-[200px] md:h-[300px]">
         <Image 
         src="/images/I5.jpg" 
         alt="portfolio" 
         layout="fill" 
         className="object-contain"
         />
        </div>

        
        
     
     

     </div>
      
     <div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-
        [100%] h-[200px] md:h-[300px]">
         <Image 
         src="/images/I6.jpg" 
         alt="portfolio" 
         layout="fill" 
         className="object-contain"
         />
        </div>
     </div>

    </div>
 </div>
  );
};

export default Project;