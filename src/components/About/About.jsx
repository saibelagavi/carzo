import React from "react";
import carPng from "../../assets/cars/car_1.png";
const About = () => {
    return (
        
            <div className="  dark:bg-black dark:text-white  bg-slate-100 duration-300 sm:min-h-[600px] sm:place-items-center">
                <div className="container " >
                <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div data-aos="slide-right"
                     data-aos-duration="800"
                     data-aos-once="false"
                    >
                            <img src={carPng} alt="" className="sm:scale-105
                            sm:-translate-x-11 max-h-[300px] drop-shadow-[]"/>
                    </div>
                    <div className="space-y-5 sm:p-16 pb-6">
                        <h1 className="text-3xl sm:text-4xl front-bold font-serif">About Us</h1>
                        <p data-aos="fade-up"><b>We Provide you the fastest renting services in the world!!</b> Accusantium odit 
                            libero mollitia dolorem quam at, labore, inventore minima
                        </p>
                        <p  data-aos="fade-up" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eum odit, ab quia laudantium doloribus cum assumenda neque reprehenderit voluptatibus nisi quaerat est quasi nihil ipsam. Error dignissimos beatae sequi.</p>
                        <button  data-aos="fade-up" className="button-outline">Get Started</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;