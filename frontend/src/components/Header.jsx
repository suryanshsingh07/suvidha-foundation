import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, Phone, Mail,
  ShieldCheck, LogIn, UserPlus,
  Bot, Heart, MapPin
} from 'lucide-react';
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const isActive = (path) => {
  if (path === "/") return location.pathname === "/";
  return location.pathname.startsWith(path);
  };

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Donors", path: "/our-donors" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "About Us", path: "/about-us" },
];

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenuOpen(true);
    }
  };
  if (mobileMenuOpen) {
    document.addEventListener('click', handleClickOutside);
  }
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [mobileMenuOpen]);
useEffect(() => {
  if (!mobileMenuOpen) return;
  const handleScroll = () => {
    setMobileMenuOpen(false);
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar for Contact Info and Socials - Only visible on tablets and laptops/desktops */}
      <div className="bg-slate-900 text-slate-300 py-2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-[11px] lg:text-xs font-medium">
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
            <a 
              href="https://wa.me/917620086320?text=Hello!%20I%20am%20interested%20in%20knowing%20about%20Suvidha%20Foundation" target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >              
              <Phone size={14} />
              <span>+91 76200 86320</span>
            </a>
            <a href="mailto:info@suvidhafoundationedutech.org" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} />
              <span>info@suvidhafoundationedutech.org</span>
            </a>
            <div className="flex flex-hidden items-center gap-1.5 hover:text-white transition-colors cursor-pointer lg:flex">
              <MapPin size={14} />
              <a href="https://maps.app.goo.gl/CuHoZPSDEKxcCGqo8" target="_blank" rel="noopener noreferrer">Nagpur, Maharashtra</a>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            <span className="mr-1 text-slate-500 hidden xl:inline">Follow us:</span>
            <a href="https://www.facebook.com/suvidhamahilamandal/" rel="noopener noreferrer" target='_blank' className="hover:text-primary-400 transition-colors"><FaFacebook size={15} /></a>
            <a href="https://www.instagram.com/suvidha_mahila_mandal/" className="hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer"><FaInstagram size={15} /></a>
            <a href="https://www.linkedin.com/company/suvidha-foundation/?originalSubdomain=in" className="hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin size={15} /></a>
            <a href="https://suvidhafoundationedutech.org/" className="hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer"><FaGlobe size={15} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3 shadow-sm' : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div ref={menuRef} className="container mx-auto px-4 md:px-6"> 
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 mr-1">
              <div className= "text-white p-1.5 sm:p-2 rounded-lg">
                <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' className="w-12 h-12 sm:w-8 sm:h-8 object-contain"></img>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-yellow-400 text-[15px] sm:text-lg lg:text-xl font-bold font-poppins tracking-tight">
                  Suvidha Foundation
                </span>
                <span className="hidden sm:block text-xs sm:text-sm text-gray-600 justify-center">
                  Suvidha Mahila Mandal, Since 1995
                </span>
              </div>
            </div>

            {/* LARGE DESKTOP (xl) Navigation -> 1280px and up */}
            <nav className="hidden 2xl:flex items-center gap-6 flex-1 justify-center border-l pl-4 ml-2 relative">
              {navLinks.map((link) => (
                <Link to={link.path}
                  key={link.name}
                  className={`relative text-[14px] font-medium transition-colors hover:text-primary-600 ${
                  isActive(link.path) ? 'text-primary-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      initial={false}
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary-600 rounded-full pointer-events-none"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Highlighted Yellow Buttons */}
              <div className="flex items-center gap-3 border-l pl-4 ml-2">
                <a
                  href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#FFD100] hover:bg-[#FFC000] text-slate-900 text-[13px] font-bold py-2 px-4 rounded-full transition-transform hover:-translate-y-0.5 shadow-sm"
                >
                  <Heart size={16} className="text-slate-800" />
                  <span>Support Us</span>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#FFD100] hover:bg-[#FFC000] text-slate-900 text-[13px] font-bold py-2 px-4 rounded-full transition-transform hover:-translate-y-0.5 shadow-sm"
                >
                  <Bot size={16} className="text-slate-800" />
                  <span>Apply for AI Program</span>
                </a>
              </div>
            </nav>

            {/* RIGHT CONTEXT ACTIONS (Desktop & Hybrid Tablet/Laptop) */}
            <div className="hidden md:flex 2xl:flex shrink-0 items-center gap-2 lg:gap-3 ml-auto xl:ml-4">
              {/* Verify Badge - visible on tablets and up */}
              <a
                href="https://suvidhafoundationedutech.org/verify.php" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs lg:text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-1.5 px-3 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <ShieldCheck size={16} className="text-emerald-600" />
                <span className="hidden lg:inline">Verify Certificates</span>
                <span className="lg:hidden">Verify</span>
              </a>

              {/* Login Buttons */}
              <div className="flex items-center">
                <a href='/login'
                className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white text-xs lg:text-sm font-medium py-1.5 lg:py-2 px-3 lg:px-4 rounded-full transition-all shadow hover:shadow-md hover:-translate-y-0.5">
                  <LogIn size={14} />
                  <span>Login</span>
                </a>
              </div>

              {/* Hamburger for Tablet/Laptop Hybrid Mode (< 1280px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="2xl:hidden ml-1 text-slate-900 focus:outline-none p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* MOBILE ONLY TOGGLE (< 768px) */}
            <div className="md:hidden flex items-center gap-1.5 sm:gap-3 shrink-0">
              <a
                href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer"
                className="text-[11px] sm:text-xs bg-[#FFD100] text-slate-900 font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 shadow-sm min-w-0"
              >
                <Heart size={14} className="shrink-0" />
                <span className="hidden min-[360px]:inline whitespace-nowrap">Help Us</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
          </div>
        </div>

        {/* Hamburger Drawer Navigation (< 1280px) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="2xl:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 py-6 flex flex-col md:px-8 max-w-lg mx-auto">

                {/* Prominent Action Buttons */}
                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-[#FFD100] text-slate-900 font-bold py-3 px-4 rounded-xl shadow-sm text-center"
                  >
                    <Heart size={20} />
                    <span>Support Us / Donate</span>
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-[#FFD100] text-slate-900 font-bold py-3 px-4 rounded-xl shadow-sm text-center"
                  >
                    <Bot size={20} />
                    <span>Apply for AI Program</span>
                  </a>
                </div>

                {/* Nav Links */}
                <div className="space-y-1 text-center flex flex-col items-center">
                  {navLinks.map((link) => (
                    <Link
                      to={link.path}
                      key={link.name}
                      onClick={() => 
                        setMobileMenuOpen(false)
                      }
                      className={`block w-full text-base font-medium py-3 border-b border-slate-50 last:border-none ${
                        isActive(link.path) ? 'text-primary-600 bg-primary-50/50' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 pb-2 text-center md:hidden">
                  <a
                    href="https://suvidhafoundationedutech.org/verify.php" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 text-base font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 py-3 rounded-xl transition-all shadow-sm w-full"
                  >
                    <ShieldCheck size={20} className="text-emerald-600" />
                    <span>Verify Certificates</span>
                  </a>
                  <div className="pt-6 flex flex-col gap-3">
                    <a href='/login'
                     className="w-full flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-xl transition-all shadow-md">
                      <LogIn size={18} /> Login to your Account
                    </a>
                  </div>
                </div>

                {/* Socials & Contact */}
                <div className="pt-6 border-t border-slate-100 flex flex-col gap-3 md:hidden">
                  <a href="https://wa.me/917620086320?text=Hello!%20I%20am%20interested%20in%20knowing%20about%20Suvidha%20Foundation" target="_blank" 
                    rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-600 justify-center">
                    <Phone size={16} /> <span>+91 76200 86320</span>
                  </a>
                  <a href="mailto:info@suvidhafoundationedutech.org" className="flex items-center gap-3 text-sm text-slate-600 justify-center">
                    <Mail size={16} /> <span>info@suvidhafoundationedutech.org</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-600 justify-center">
                    <MapPin size={16} /> <span>Nagpur, Maharashtra</span>
                  </div>
                  <div className="flex gap-4 pt-4 text-slate-400 items-center justify-center">
                    <FaFacebook size={24} className="hover:text-primary-500 cursor-pointer" />
                    <FaInstagram size={24} className="hover:text-primary-500 cursor-pointer" />
                    <FaLinkedin size={24} className="hover:text-primary-500 cursor-pointer" />
                    <FaGlobe size={24} className="hover:text-primary-500 cursor-pointer" />

                  </div>
                </div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
