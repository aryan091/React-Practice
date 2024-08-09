import { useState } from 'react'
import './App.css'
import ApiTest from './ApiText';
import InfiniteScrolling from './InfiniteScrolling';
import Parent from './Parent';
import Posts from './Posts';
function App() {
 
  const users = [
    { id: 1, firstName: "Akshay", lastName: "Saini", age: 26 },
    { id: 2, firstName: "Donald", lastName: "Trump", age: 75 },
    { id: 3, firstName: "Elon", lastName: "Musk", age: 50 },
    { id: 4, firstName: "Deepika", lastName: "Padukone", age: 26 },
  ];
  

  return (
    <div>
    <h1>Namaste JavaScript 🙏</h1>
    <Posts/>
  </div>
  )
}

export default App
