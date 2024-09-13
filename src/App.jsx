import { useState } from 'react'
import './App.css'
import ApiTest from './ApiText';
import InfiniteScrolling from './InfiniteScrolling';
import Parent from './Parent';
import Posts from './Posts';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Itmtb from './Itmtb';
function App() {
 
  const users = [
    { id: 1, firstName: "Akshay", lastName: "Saini", age: 26 },
    { id: 2, firstName: "Donald", lastName: "Trump", age: 75 },
    { id: 3, firstName: "Elon", lastName: "Musk", age: 50 },
    { id: 4, firstName: "Deepika", lastName: "Padukone", age: 26 },
  ];
  

  return (
    <Router>  
  <div>
    <h1>Namaste JavaScript 🙏</h1>
    <Routes>

      <Route path="/api" element={<ApiTest />} />
      <Route path="/infy" element={<InfiniteScrolling />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/login" element={<Login />} />

      <Route path="/itmtb" element={<Itmtb />} />

    </Routes>
    
  </div>
  </Router>

  )
}

export default App
