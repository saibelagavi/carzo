import React, { useState } from 'react';
import { motion } from 'framer-motion';
import icon2 from "../../assets/icon2.png";
import Particles from 'react-tsparticles';

const Login = () => {
    const [formData, setFormData] = useState({
       email: '',
       password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
       setErrors({ ...errors, [e.target.name]: '' }); 
    };

    const validateForm = () => {
       let isValid = true;
       let newErrors = {};

       // Email validation
       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
       if (!emailRegex.test(formData.email)) {
          isValid = false;
          newErrors.email = 'Please enter a valid email address.';
       }

       // Password validation
       if (formData.password.length < 8) {
          isValid = false;
          newErrors.password = 'Password must be at least 8 characters long.';
       }

       setErrors(newErrors);
       return isValid;
    };

    const handleSubmit = (e) => {
       e.preventDefault();
       if (validateForm()) {
          // Backend submission
          console.log(formData);
       }
    };

    return (
       <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
         <Particles
           params={{
             particles: {
               number: {
                 value: 50,
               },
               size: {
                 value: 3,
               },
               color: {
                 value: "#ffffff",
               },
             },
             interactivity: {
               events: {
                 onhover: {
                   enable: true,
                   mode: "repulse"
                 }
               }
             }
           }}
           style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%"
           }}
         />
         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
           <form onSubmit={handleSubmit} className="space-y-6">
             {/* Avatar Image */}
             <div className="flex justify-center mb-4">
               <img src={icon2} alt="Avatar" className="w-30 h-30 rounded-full" />
             </div>
             {/* Email */}
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                 Email
               </label>
               <motion.input
                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-green-500'}`}
                 id="email"
                 type="email"
                 placeholder="Your Email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 animate={{ scale: 1.02 }}
                 transition={{ duration: 0.3 }}
               />
               {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
             </div>
             {/* Password */}
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                 Password
               </label>
               <motion.input
                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-green-500'}`}
                 id="password"
                 type="password"
                 placeholder="Your Password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 required
                 animate={{ scale: 1.02 }}
                 transition={{ duration: 0.3 }}
               />
               {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
             </div>
             <div className="flex items-center justify-between">
               <button
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                 type="submit"
                 animate={{ scale: 1.02 }}
                 transition={{ duration: 0.3 }}
               >
                 Login
               </button>
             </div>
           </form>
         </div>
       </div>
    );
};

export default Login;
