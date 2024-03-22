import React from "react";
import hero from "../../assets/hero.png";
import whitehero from "../../assets/whitehero.png";
import "aos/dist/aos.css";


//start
const Hero =({theme})=>{

    
    return (
    <div className="dark:bg-black 
    dark:text-white duration-300 relative -z-20">
  <div className="container min-h-[620px] flex">
    <div className="grid
    place-items-center grid-cols-1
    sm:grid-cols-2">
        <div  className="order-2  sm:order-1 space-y-5 sm:pr-32 ">
<p  data-aos="fade-up"
data-aos-delay="600"
className="text-primary text-3xl font-serif">Hastle Free</p>
<h1 className="text-5xl lg:text-7xl font-semi-bold font-Roboto">Car rental made easy</h1>
<p data-aos="zoom-in"
data-aos-delay="650">Find and Rent best Cars in seconds around the world!!</p>
        <button  className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">Get Started</button>

        </div >
        <div data-aos="zoom-in"
        data-aos-duration="1500"
        className="order-1
        sm:order-2 ">
            <img src={theme ==="dark" ?
        hero: hero} 
             alt="" className="relative -z-10 max-h-[600px] sm:scale-125 
           drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"/>
        </div>
    </div>
  
  </div>
</div>
    );
};

export default Hero;