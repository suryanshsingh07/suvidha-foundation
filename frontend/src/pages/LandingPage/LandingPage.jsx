import React from 'react'
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Analytics from '../../components/Analytics';
import Events from '../../components/Events';
import Gallery from '../../components/Gallery';
import OurDonors from '../../components/OurDonors';
import AboutUs from '../../components/AboutUs'
import ContactUs from "../../components/ContactUs"

const LandingPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Hero/>
      <Features/>
      <Analytics/>
      <Events/>
      <Gallery/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}

export default LandingPage;