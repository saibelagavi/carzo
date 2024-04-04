import React, { useState } from 'react';
import { motion } from 'framer-motion';
import icon from "../../assets/icon.png";
import styles from './Register.module.css'; // Import the CSS module

const Register = () => {
    const [formData, setFormData] = useState({
       name: '',
       email: '',
       password: '',
       confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
       setErrors({ ...errors, [e.target.name]: '' }); // Clear previous error
    };

    const validateForm = () => {
       let isValid = true;
       let newErrors = {};

       // Password validation
       if (formData.password.length < 8) {
          isValid = false;
          newErrors.password = 'Password must be at least 8 characters long.';
       }

       // Email validation
       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
       if (!emailRegex.test(formData.email)) {
          isValid = false;
          newErrors.email = 'Please enter a valid email address.';
       }

       // Confirm Password validation
       if (formData.password !== formData.confirmPassword) {
          isValid = false;
          newErrors.confirmPassword = 'Passwords do not match.';
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
       <motion.div
         className={`flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${styles.registerPage}`}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
           <form onSubmit={handleSubmit} className="space-y-6">
             {/* Image of avatar */}
             <div className="flex justify-center mb-4">
               <img src={icon} alt="Avatar" className="w-30 h-30 rounded-full" />
             </div>
             {/* Name */}
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                 Name
               </label>
               <motion.input
                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-green-500'}`}
                 id="name"
                 type="text"
                 placeholder="Your Name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                 animate={{ scale: 1.02 }}
                 transition={{ duration: 0.3 }}
               />
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
             {/* Confirm Password */}
             <div>
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                 Confirm Password
               </label>
               <motion.input
                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : 'border-green-500'}`}
                 id="confirmPassword"
                 type="password"
                 placeholder="Confirm Your Password"
                 name="confirmPassword"
                 value={formData.confirmPassword}
                 onChange={handleChange}
                 required
                 animate={{ scale: 1.02 }}
                 transition={{ duration: 0.3 }}
               />
               {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
             </div>
             <div className="flex items-center justify-between">
               <button
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                 type="submit"
                 animate={{ scale: 1.02 }}
                 transition={{ duration: 0.3 }}
               >
                 Register
               </button>
             </div>
           </form>
         </div>
       </motion.div>
    );
};

export default Register;
