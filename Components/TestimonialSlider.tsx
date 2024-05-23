import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Reviews from "./Reviews";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestimonialSlider = () => {
  return (
    <Carousel
  additionalTransfrom={0}
  arrows={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  centerMode={false}
  infinite
  responsive={responsive}
  itemClass="item"
>
    <Reviews 
    image="/images/pro1.jpg" 
    name="FOODIE" 
    role="FRONT END DEVELOPMENT AND DESIGNER"
    para="Developed an interactive food ordering website for a responsive
    design and a dynamic user experience with heavy frontend using Material UI, React JS, TAILWIND CSS" 
    />
    <Reviews 
    image="/images/library-img.jpg" 
    name="LEXICON" 
    role="DEVELOPER"
    para="Built a Book Search App enabling users to search for books and
    retrieve information such as title, author, and publication details,
    for library management system. Handling asynchronous requests, displaying results dynamically to
    ensure a seamless user experience using BOOTSTRAP, REACT JS, OPEN LIBRARY SEARCH API." 
    />
    <Reviews 
    image="/images/pro3.jpg" 
    name="EMPOWER+" 
    role="DEVELOPER AND DESIGNER" 
    para="Developed a comprehensive Employee Management System to
    efficiently store and update employee data, enabling seamless
    management of employee information. Implemented key steps and code to ensure a fully functional and
    dynamic CRUD application using BOOTSTRAP, REACT JS, SPRINGBOOT, MONGO DB" 
    />
    <Reviews 
    image="/images/image4.jpg" 
    name="KAIROS" 
    role="DEVELOPER" 
    para="Built a full stack ecommerce project to create a robust, responsive,
    and user-friendly online shopping platform. Seamless ecommerce experience by storing data in a database,
    integrating a shopping cart and checkout system, and incorporating
    user authentication and payment gateway for efficient ordering and
    payment processing using TAILWIND CSS ,MUI , REACT JS, SPRINGBOOT, MONGO DB" 
    />
    
</Carousel>
  );
};

export default TestimonialSlider;