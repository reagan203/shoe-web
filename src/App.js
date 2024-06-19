// src/App.js
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ShippingPolicy from './pages/ShippingPolicy';
import CoverPage from './pages/CoverPage';
import CustomerPolicy from './pages/CustomerPolicy';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/customer-policy" element={<CustomerPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
