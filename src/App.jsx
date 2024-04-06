import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./Footer/Footer";
import CarListing from './components/adminPanel/CarListing'; 
import BookingList from './components/adminPanel/BookingList'; 

const App = () => {
 // For dark mode
 const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?
      localStorage.getItem("theme") : "light"
 );

 const element = document.documentElement;
 useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
 }, [theme]);

 // AOS initialization (animate on scroll)
 useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
 }, []);

 // State to toggle the admin panel view
 const [showadminPanel, setShowadminPanel] = useState(false);

 return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Footer />
      

      {/* Button to toggle the admin panel view */}
      <button onClick={() => setShowadminPanel(!showadminPanel)}> Admin Panel</button>

      {/* Conditionally render the admin panel components */}
      {showadminPanel && (
        <>
          <CarListing />
          <BookingList />
        </>
      )}
    </div>
 );
};

export default App;
