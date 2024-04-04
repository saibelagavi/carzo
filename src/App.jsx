import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos"; 
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./Footer/Footer";
import Register from "./components/Register/Register";
import Login from './components/Login/Login';
const App = ()=>

//for dark mode
{ const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")?
    localStorage.getItem("theme"):"light"
    );

    const element = document.documentElement;
    useEffect(()=>{
        if(theme ==="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
    
    else
    {
        element.classList.remove("dark");
        localStorage.setItem("theme","light");
    }
},[theme]);

//aos initialization(animate on scroll)

React.useEffect(()=>{
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
AOS.refresh();
},[]);
return(
    <div>
<Navbar theme={theme}setTheme={setTheme}/>
<Hero theme={theme} />
<About />
<Services />
<Footer  />
{/* <Register />
<Login/> */}
    </div>
);
};

export default App;