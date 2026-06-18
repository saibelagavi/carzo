import React, { useState } from 'react';
import axios from 'axios';

const CarListing = () => {
 const [carImage, setCarImage] = useState('');
 const [price, setPrice] = useState('');
 const [model, setModel] = useState('');
 const [capacity, setCapacity] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('carImage', carImage);
    formData.append('price', price);
    formData.append('model', model);
    formData.append('capacity', capacity);

    try {
      const response = await axios.post('/api/cars', formData);
      console.log(response.data);
      
      setCarImage('');
      setPrice('');
      setModel('');
      setCapacity('');
    } catch (error) {
      console.error('Error adding car listing:', error);
    }
 };

 return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-gray-700 font-semibold mb-4">Add Car Listing</div>
          <div className="relative">
            <input className="w-full mt-2 mb-6 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500" type="file" id="carImage" onChange={(e) => setCarImage(e.target.files[0])} style={{ display: 'none' }} />
            <label htmlFor="carImage" className="w-full px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer">Choose File</label>
          </div>
          <input className="w-full mt-2 mb-6 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input className="w-full mt-2 mb-6 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500" type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
          <input className="w-full mt-2 mb-6 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500" type="number" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Add Car Listing</button>
        </div>
      </div>
    </form>
 );
};

export default CarListing;
