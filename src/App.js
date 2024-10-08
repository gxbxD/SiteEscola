import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Metodo from './pages/Metodo';

function App() {
  const location = useLocation();

  const noHeaderFooterRoutes = ['/login'];

  return (
    <>
    <header>Educando com amor desde 2014!</header>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/metodo' element={<Metodo />} />
      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;