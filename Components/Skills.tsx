import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">Education</h1>
        
    <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center" >
    <div>
    <SkillsItem title="HSC & SSLC" year="2019-2021" para="Velammal Matriculation Higher Secondary School - Madurai SSLC : 91.8%  HSC : 93.8%"/>
     <SkillsItem  title="BTECH" year="2021-2025" para="Sri Krishna College of Engineering and Technology - Coimbatore CGPA : 9.31 "/>
    </div>
</div>

    <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
    <h1 className="heading">
      <span className="text-yellow-400">Experience</span></h1>
        
      <div>
        <SkillsItem title="SYSTEMTRON" year="APRIL - MAY" para="AI/ML - In this machine learning intern, I acquired practical expertise in developing, testing, and implementing intelligent systems and predictive algorithms, contributing to projects that yielded actionable insights and enhanced decision-making capabilities."/>
        <SkillsItem  title="CODSOFT" year="MAY - JUNE" para="WEB DEVELOPMENT - In web development intern, I gained hands-on experience designing, developing, and deploying dynamic web applications and websites, by collaborating with simple projects to deliver high-quality solutions."/>
       </div>
   </div>
   


    <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-center">
       <h1 className="heading">
      SKILLS
        </h1>
        <div>
        <SkillsLanguage 
        skill1="html" 
        skill2="css" 
        skill3="javascript" 
        level1="w-91%" 
        level2="w-91%" 
        level3="w-91%"
        />
        <SkillsLanguage 
        skill1="react js" 
        skill2="Tailwind css" 
        skill3="bootstrap" 
        level1="w-91%" 
        level2="w-91%" 
        level3="w-91%"
        />

<SkillsLanguage 
        skill1="C C++" 
        skill2="Core java" 
        skill3="DSA" 
        level1="w-91%" 
        level2="w-91%" 
        level3="w-91%"
        />
        </div>
     </div>
</div>

  );
};

export default Skills;