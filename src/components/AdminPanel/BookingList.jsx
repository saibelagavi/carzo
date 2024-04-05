import React, { useState } from 'react';


const Card = ({ title, items, showAll, handleShowAll }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const visibleItems = showAll ? items : items.slice(0, 5);

  const filteredItems = visibleItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        {showAll && (
          <input
            type="text"
            placeholder="Search..."
            className="mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}/>
        )}
        <ul className="mt-4 space-y-2 overflow-auto max-h-20">
          {filteredItems.map((item, index) => (
            <li key={index} className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.replace(new RegExp(searchTerm, 'gi'), match => `<mark>${match}</mark>`) }} />
          ))}
        </ul>
        {!showAll && items.length > 5 && (
          <button onClick={handleShowAll} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">More</button>
        )}
      </div>
    </div>
  );
};

const BookingList = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  // dummy data later db
  const listedCars = ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5', 'Model 6'];
  const listedUsers = ['aa', 'bb', 'cc', 'dd', 'ee'];
  const bookingConfirmations = [
    'aa booked Model 1 on 2024-01-01',
    'bb booked Model 2 on 2024-01-02',
    'cc booked Model 3 on 2024-01-03',
    'dd booked Model 4 on 2024-01-04',
    'ee booked Model 5 on 2024-01-05'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Card title="Listed Cars" items={listedCars} showAll={showAll} handleShowAll={handleShowAll} />
      <Card title="Listed Users" items={listedUsers} showAll={showAll} handleShowAll={handleShowAll} />
      <Card title="Booking Confirmations" items={bookingConfirmations} showAll={showAll} handleShowAll={handleShowAll} />
    </div>
  );
};

export default BookingList;
