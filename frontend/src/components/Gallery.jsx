import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, 
  HeartHandshake, CalendarDays, Navigation
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Free Education',
  'Women Empowerment',
  'Tree Plantation',
  'Food Distribution',
  'Animal Feeding',
  'Clothes Distribution',
  'Free Workshops',
  'Books Distribution',
  'Onlin e Events',
  'Women’s Day',
  'Suvidha Events'
];

const galleryData = [
  {
    id: 1,
    title: 'Rural Education Drive',
    category: 'Free Education',
    description: 'Providing basic literacy and essential school supplies to underprivileged children in remote villages.',
    more: 'https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN',
    imgUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Mega Plantation Campaign',
    category: 'Tree Plantation',
    description: 'Planting over 5,000 saplings across the city to restore urban green cover and combat climate change.',
    more: 'https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw',
    imgUrl: 'https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/gallery/TreePlantation.jpg' 
  },
  {
    id: 4,
    title: 'Sunday Food Camp',
    category: 'Food Distribution',
    description: 'Serving hot, nutritious meals to over 1,000 homeless individuals and daily wage workers.',
    more: 'https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw',
    imgUrl: 'https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/gallery/FoodDistribution.jpg'
  },
  {
    id: 5,
    title: 'Stray Animal Care',
    category: 'Animal Feeding',
    description: 'Regular feeding drives and basic medical aid for abandoned street dogs and cats.',
    more: 'https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB',
    imgUrl: 'https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/gallery/AnimalFeeding.jpg'
  },
  {
    id: 6,
    title: 'Winter Cloth Donation',
    category: 'Clothes Distribution',
    description: 'Distributing warm blankets, sweaters and essential winter wear to those living on the streets.',
    more: 'https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK',
    imgUrl: 'https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/gallery/ClothesDistribution.jpg'
  },
  {
    id: 7,
    title: 'Digital Marketing Workshop',
    category: 'Free Workshops',
    description: 'Helping youths to gain employment with intensive technology and digital marketing bootcamps.',
    location: 'Suvidha Hub',
    more: 'https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk',
    imgUrl: 'https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/gallery/workshops.jpg'
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter gallery images
  const filteredGallery = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/50 to-emerald-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' alt='S' className="w-6 h-6 fill-blue-400 text-blue-400" />
              Suvidha Foundation
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Moments of Impact <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                Capturing Our Journey
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-medium">
              Explore the smiles we've shared, the trees we've planted and the lives we've transformed through our global initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="py-12 bg-white sticky top-0 z-30 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-3 sm:flex-wrap sm:justify-center">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap outline-none ${
                  activeCategory === category 
                    ? 'text-white shadow-md' 
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="galleryTab"
                    className="absolute inset-0 bg-slate-900 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MASONRY GALLERY */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow bg-slate-200 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img 
                  src={item.imgUrl} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Default Text Overlay (Category) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Hover Reveal Overlay (Glassmorphism) */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                      <a href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                        <HeartHandshake className="w-3.5 h-3.5" />
                        Donate now
                      </a>
                      <a href={item.more} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5" />
                        view more
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                {/* Maximize Icon on Hover */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-12">
                   <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                     <Maximize2 className="w-4 h-4" />
                   </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredGallery.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-2xl font-bold text-slate-700">No moments found</h3>
            <p className="text-slate-500 mt-2">Check back later or select another category.</p>
          </div>
        )}
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 sm:left-10 z-50 p-2 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors transform hover:-translate-x-1"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 sm:right-10 z-50 p-2 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors transform hover:translate-x-1"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Active Image Container */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredGallery[lightboxIndex].imgUrl} 
                alt={filteredGallery[lightboxIndex].title}
                className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              />
              
              {/* Lightbox Caption */}
              <div className="mt-6 sm:mt-8 text-center px-4 w-full max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {filteredGallery[lightboxIndex].title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-medium mb-4">
                  {filteredGallery[lightboxIndex].description}
                </p>
                <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
                  <a href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <HeartHandshake className="w-4 h-4 text-emerald-400" />
                    Donate now   
                  </a>
                  <a href={filteredGallery[lightboxIndex].more} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Navigation className="w-4 h-4 text-blue-400" />
                    view more
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
