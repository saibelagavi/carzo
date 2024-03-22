import React from "react";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
const NavLinks =[
    {
        id:"1",
        name:"Home",
        link:"/#"
    },
    {
        id:"2",
        name:"Cars",
        link:"/#"
    },
    {
        id:"3",
        name:"About",
        link:"/#"
    },
    {
        id:"4",
        name:"Book Now",
        link:"/#"
    }
]

const Navbar =({theme,setTheme}) =>{
  
   return(
    <nav  className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
   
        <div className="container">
        <div className="flex justify-between items-center ">
            <div>
                <span className="text-3xl font-bold">CARZO</span>
            </div>
            <div className="hidden md:block">
<ul className="flex items-center gap-8 ml-auto">
  {
    NavLinks.map((data)=>(
        <li key={data.id} className="py-4">
        <a className=" py-2 hover:border-b-2 
        hover:text-primary
        hover:border-primary
        transition-colors duration-500
        text-lg font-medium"
         href={data.link}>
            {data.name}
            </a>
        </li>
    ))
}
    
</ul>
            </div>
            <div>
                {
                    theme === "dark" ?( 
                         <BiSolidSun 
                         onClick={ () => setTheme
                            ("light")}
                         className="text-2xl"/>
                         ):(
                            <BiSolidMoon 
                            onClick={   ()=> setTheme
                                ("dark")}
                            className="text-2xl"/>
                         )
                }
              
            </div>
        </div>
    </div>

   </nav>);
   
};

export default Navbar;