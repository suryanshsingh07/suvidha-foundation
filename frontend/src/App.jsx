import React, { useState, useEffect } from 'react';
import { useLocation, Navigate } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Loader from './components/Loader';
import Login from "./pages/Auth/Login"
import Register from './pages/Auth/Register';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import ForgetPassword from './pages/Auth/ForgetPassword'
import Events from './components/Events';
import Gallery from './components/Gallery';
import OurDonors from './components/OurDonors';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const hideFooter =
  location.pathname === "/login" ||
  location.pathname === "/register" ||
  location.pathname === "/forget-password";

  useEffect(() => {
    // simulate loading (replace with API/auth check)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen font-inter">
      
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/forget-password' element={<ForgetPassword/>}/>
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-donors" element={<OurDonors />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Protected Routes */}

          {/* catch all route */}
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
        {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
