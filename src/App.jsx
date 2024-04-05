import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./Footer/Footer";
import Register from "./components/Register/Register";
import Login from './components/Login/Login';
import CarListing from './components/AdminPanel/CarListing'; // Adjusted import path
import BookingList from './components/AdminPanel/BookingList'; // Adjusted import path

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
 const [showAdminPanel, setShowAdminPanel] = useState(false);

 return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Footer />
      <Register />
      <Login />

      {/* Button to toggle the admin panel view */}
      <button onClick={() => setShowAdminPanel(!showAdminPanel)}>Toggle Admin Panel</button>

      {/* Conditionally render the admin panel components */}
      {showAdminPanel && (
        <>
          <CarListing />
          <BookingList />
        </>
      )}
    </div>
 );
};

export default App;
