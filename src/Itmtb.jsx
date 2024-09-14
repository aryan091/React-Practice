import "./styles.css";

import { useState, useCallback } from "react";

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

export default function App() {
  const [query, setQuery] = useState("");
  const [filteredCar, setFilteredCar] = useState([]);
  const ids = [];
  const inFilter = filteredCar.map((carItem) => ids.push(carItem.id));

  const filterCars = (sQuery) => {
    console.log("Function Called");
    if (sQuery) {
      const filtered = MERGED_LIST.filter(
        (carItem) =>
          // Create a search box, search cars by make, model, price

          carItem.make.toLowerCase().includes(sQuery.toLowerCase()) ||
          carItem.model.toLowerCase().includes(sQuery.toLowerCase()) ||
          carItem.price.toString().includes(sQuery)
      );
      setFilteredCar(filtered);
    } else {
      setFilteredCar([]);
    }
  };

  const debouncedFiltering = useCallback(debounce(filterCars, 1000), []);

  const handleChange = (e) => {
    const newQuery = e.target.value;

    debouncedFiltering(newQuery);
    setQuery(newQuery);
  };


  return (
    <div className="App" style={{ marginTop: 20 }}>
      {/* create search box */}
      <input
        placeholder="Enter Query"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      {/* render row format */}
      {MERGED_LIST.map((car) => (
        // const inFilteredList = ids.includes(car.id)
        <div
          style={{
            fontSize: 20,
            color: "black",
            backgroundColor: ids.includes(car.id) ? "yellow" : "",
          }}
        >
          <span style={{ marginRight: 20 }}>Id : {car.id}</span>
          <span style={{ marginRight: 20 }}>Make : {car.make}</span>
          <span style={{ marginRight: 20 }}>Model: {car.model}</span>
          <span style={{ marginRight: 20 }}>Type: {car.type}</span>
          <span style={{ marginRight: 20 }}>Price: {car.price}</span>
        </div>
      ))}
    </div>
  );
}

// RENDER THE COLUMNS: make, model, type, price
// Create a search box, search cars by make, model, price

export const CAR_LIST = [
  {
    id: 1,
    make: "Mitsubishi",
    model: "Lancer",
    type: "Used",
  },
  { id: 2, make: "Honda", model: "Vezel", type: "New" },
  { id: 3, make: "Honda", model: "Civic", type: "Used" },
  { id: 4, make: "Audi", model: "A3", type: "New" },
  { id: 5, make: "Audi", model: "A4", type: "Used" },
  { id: 6, make: "Audi", model: "A7", type: "New" },
  { id: 7, make: "BMW", model: "i8", type: "Used" },
];

export const PRICE_LIST = [
  { car_id: 1, price: 1000 },
  { car_id: 2, price: 2000 },
  { car_id: 3, price: 3000 },
  { car_id: 4, price: 4000 },
  { car_id: 5, price: 5000 },
  { car_id: 6, price: 6000 },
  { car_id: 7, price: 7000 },
];

const MERGED_LIST = CAR_LIST.map((car) => {
  const price = PRICE_LIST.find((price) => car.id === price.car_id);
  return { ...car, ...price };
});

// console.log(MERGED_LIST)
