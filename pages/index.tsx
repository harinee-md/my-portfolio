import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import React, { useState } from "react";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Project from "@/Components/Project";
import Testimonial from "@/Components/Testimonial";
import Papers from "@/Components/Papers";
import Footer from "@/Components/Footer";


const HomePage = () => {
  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
    

  return ( 
  <div className="overflow-x-hidden">
    <div>
     
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      
      <Hero />
      <div className="relative z-[30]"> 
      <About/>
      <Services />
      <Skills/>
      <Project/>
      <Testimonial/>
      <Papers/>
      <Footer/>
      </div>
    </div>
  </div>
  );
};

export default HomePage;