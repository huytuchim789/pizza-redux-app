import React from 'react';
import './App.css';
import Login from './features/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './features/NotFound/NotFound';
import Home from './features/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
