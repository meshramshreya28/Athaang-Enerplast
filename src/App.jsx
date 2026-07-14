import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import IndustriesPage from './pages/IndustriesPage';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
