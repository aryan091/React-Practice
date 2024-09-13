import React, { useState } from 'react';

// Debounce function
const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const Itmtb = () => {
  const carList = [
    { id: 1, car: 'toyota' },
    { id: 2, car: 'zen' },
    { id: 3, car: 'honda' },
    { id: 4, car: 'bmw' },
    { id: 5, car: 'audi' },
    { id: 6, car: 'ford' },
    { id: 7, car: 'chevrolet' },
    { id: 8, car: 'nissan' },
    { id: 9, car: 'mercedes' },
    { id: 10, car: 'tesla' }
  ];

  const priceList = [
    { id: 1, price: '2000' },
    { id: 2, price: '4000' },
    { id: 3, price: '5000' },
    { id: 4, price: '10000' },
    { id: 5, price: '12000' },
    { id: 6, price: '6000' },
    { id: 7, price: '5500' },
    { id: 8, price: '7000' },
    { id: 9, price: '15000' },
    { id: 10, price: '30000' }
  ];

  const mergedList = carList.map(car => {

    const price = priceList.find(price => price.id === car.id);

    return { ...car, ...price };
  });

  const [query, setQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  // Function to filter cars
  const filterCars = (searchQuery) => {
    if (searchQuery) {
      const filtered = mergedList.filter(item =>
        item.car.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars([]);
    }
  };

  // Debounced filter function
  const debouncedFilterCars = debounce(filterCars, 300);

  // Handle input change
  const handleSearch = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedFilterCars(newQuery); // Use debounced function
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ITMTB</h1>

      <h2 className="text-xl mb-2">Search Bar</h2>

      <input
        type="text"
        className="border border-red-500 p-2 m-2 w-full"
        placeholder="Search Query"
        value={query}
        onChange={handleSearch}
      />

      {query && (
        <div className="border border-gray-300 rounded-md bg-white shadow-md max-h-60 overflow-auto mt-2">
          {filteredCars.length ? (
            filteredCars.map((item) => (
              <div
                key={item.id}
                className="p-2 hover:bg-gray-100 text-gray-500 font-bold cursor-pointer"
              >
                {item.car}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}

      <h2 className="text-xl mt-6">Car List</h2>

      <div className="flex flex-row gap-8 m-4 flex-wrap">
        {mergedList.map((item) => (
          <div
            key={item.id}
            className="item border border-red-500 flex justify-between p-4 w-60 bg-yellow-300 rounded-md shadow-sm  text-gray-500 font-bold hover: translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <p>{item.car}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itmtb;
