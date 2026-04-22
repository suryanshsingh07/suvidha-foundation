import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe, TreePine, BookOpen, GraduationCap } from 'lucide-react';

const AnimatedCounter = ({ endValue, suffix, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (easeOutExpo)
      const easeOut = progress === duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);
      const percentage = Math.min(easeOut, 1);
      
      setCount(Math.floor(endValue * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col p-5 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 bg-primary-50 rounded-lg text-primary-600">
          <Icon size={20} />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-slate-900 group">
        {count}<span className="text-primary-600">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-slate-600 font-medium mt-1">{label}</div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-slate-50">
      {/* Background Gradients & Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6  relative z-10 -mt-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-poppins">
              Empowering Communities
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-indigo-600 mt-2">
                Since 1995
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed font-inter"
            >
              An internationally recognized NGO devoted to building a sustainable future. We drive impactful initiatives in <strong>education, AI innovation, environmental sustainability and women empowerment</strong> across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a 
                href="/contact-us"
                className="w-full sm:w-auto bg-linear-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgb(37,99,235,0.25)] hover:shadow-[0_10px_25px_rgb(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Heart size={20} className="text-rose-500" />
                Donate Now
              </a>
            </motion.div>
          </div>

          {/* Right Column: Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-8px border-white/50 backdrop-blur-sm aspect-4/3 group">
              <div className="absolute inset-0 bg-linear-to-tr from-primary-600/20 to-transparent mix-blend-overlay z-10"></div>
              {/* Using a high-quality relevant Unsplash image representing community/education */}
              <img 
                src="https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/hero-img.avif" 
                alt="Community volunteers helping hands" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 z-20"
            >
              <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Focus</p>
                <p className="text-sm font-bold text-slate-900">Education for All</p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
          <AnimatedCounter endValue={15} suffix="+" label="Countries" icon={Globe} />
          <AnimatedCounter endValue={3} suffix="L+" label="Volunteers" icon={Users} />
          <AnimatedCounter endValue={1} suffix="Cr+" label="Internship Goal" icon={BookOpen} />
          <AnimatedCounter endValue={54} suffix="L+" label="Trees Planted" icon={TreePine} />
        </div>

      </div>
    </section>
  );
};

export default Hero;
