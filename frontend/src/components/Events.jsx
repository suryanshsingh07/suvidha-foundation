import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TreePine, 
  Coins, 
  Shirt, 
  Flower2, 
  Utensils, 
  Dog, 
  ShieldPlus, 
  GraduationCap,
  CalendarDays,
  MapPin,
  ArrowRight,
  Heart, Handshake, Users
} from 'lucide-react';

// Categories
const CATEGORIES = ['All', 'Environment', 'Health', 'Education', 'Social Welfare'];

// Events Data
const eventsData = [
  {
    id: 1,
    title: 'Tree Plantation Drive',
    category: 'Environment',
    description: 'Join our massive drive to restore green cover and promote environmental sustainability. Every sapling counts.',
    date: '15th Aug 2026',
    location: 'Nagpur & Global',
    icon: TreePine,
    color: 'emerald',
    gradient: 'from-emerald-400 to-green-600',
    bgLight: 'bg-emerald-50',
    textMain: 'text-emerald-600'
  },
  {
    id: 2,
    title: 'Fundraising Events',
    category: 'Social Welfare',
    description: 'Help us raise critical funds to support our continued relief and empowerment initiatives worldwide.',
    date: 'Ongoing',
    location: 'Online Platform',
    icon: Coins,
    color: 'amber',
    gradient: 'from-yellow-400 to-amber-600',
    bgLight: 'bg-amber-50',
    textMain: 'text-amber-600'
  },
  {
    id: 3,
    title: 'Clothes Distribution',
    category: 'Social Welfare',
    description: 'Providing warm and essential clothing to underprivileged families during the harsh winter months.',
    date: '10th Nov 2026',
    location: 'Various Urban Slums',
    icon: Shirt,
    color: 'blue',
    gradient: 'from-blue-400 to-indigo-600',
    bgLight: 'bg-blue-50',
    textMain: 'text-blue-600'
  },
  {
    id: 4,
    title: 'Women’s Day Celebration',
    category: 'Social Welfare',
    description: 'Honoring the strength of women with specialized workshops, health checks and empowerment programs.',
    date: '8th Mar 2026',
    location: 'Community Center',
    icon: Flower2,
    color: 'pink',
    gradient: 'from-pink-400 to-rose-600',
    bgLight: 'bg-pink-50',
    textMain: 'text-pink-600'
  },
  {
    id: 5,
    title: 'Food Donation',
    category: 'Health',
    description: 'Combating hunger by distributing nutritious cooked meals and dry ration kits to marginalized communities.',
    date: 'Every Sunday',
    location: 'City Shelters',
    icon: Utensils,
    color: 'orange',
    gradient: 'from-orange-400 to-red-600',
    bgLight: 'bg-orange-50',
    textMain: 'text-orange-600'
  },
  {
    id: 6,
    title: 'Animal Feeding',
    category: 'Environment',
    description: 'Caring for stray animals by organizing daily feeding routes and basic emergency medical care.',
    date: 'Daily',
    location: 'Streets of Nagpur',
    icon: Dog,
    color: 'stone',
    gradient: 'from-stone-400 to-stone-600',
    bgLight: 'bg-stone-100',
    textMain: 'text-stone-600'
  },
  {
    id: 7,
    title: 'Sanitary Pads Distribution',
    category: 'Health',
    description: 'Promoting menstrual hygiene by educating young girls and distributing high-quality sanitary kits free of cost.',
    date: '1st of every month',
    location: 'Rural Villages',
    icon: ShieldPlus,
    color: 'rose',
    gradient: 'from-rose-400 to-pink-600',
    bgLight: 'bg-rose-50',
    textMain: 'text-rose-600'
  },
  {
    id: 8,
    title: 'Free Educational Workshops',
    category: 'Education',
    description: 'Empowering children with free sessions on digital literacy, spoken English and essential life skills.',
    date: 'Tuesdays & Thursdays',
    location: 'Suvidha Learning Hub',
    icon: GraduationCap,
    color: 'indigo',
    gradient: 'from-indigo-400 to-purple-600',
    bgLight: 'bg-indigo-50',
    textMain: 'text-indigo-600'
  }
];

// Stats Data
const stats = [
  { id: 1, number: '54L+', label: 'Trees Planted', icon: TreePine },
  { id: 2, number: '3L+', label: 'Volunteers', icon: Heart },
  { id: 3, number: '5000+', label: 'Events Hosted', icon: CalendarDays }
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter events based on selected tab
  const filteredEvents = activeTab === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === activeTab);

  return (
    <div className="font-inter bg-slate-50/50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32 sm:pt-32 sm:pb-40 rounded-b-[3rem] sm:rounded-b-[5rem] shadow-2xl">
        {/* Abstract Background Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-blue-600/30 blur-[100px]" />
          <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-emerald-600/20 blur-[100px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-purple-600/30 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' alt='S' className="w-6 h-6 fill-blue-400 text-blue-400" />
              Suvidha Foundation
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
              Our Charity Events <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-teal-300 to-emerald-400">
                Celebrating Our Impact Together
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Join thousands of dedicated volunteers across the globe. Together, we are creating a sustainable, empowered and equitable future for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <React.Fragment key={stat.id}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{stat.number}</h3>
                  <p className="text-sm sm:text-base font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-20 bg-slate-200" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>

      {/* 3. MAIN EVENTS SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mb-12 sm:mb-16 w-full"
        >
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-slate-200 overflow-x-auto scrollbar-hide max-w-full">
            {CATEGORIES.map((tab) => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`relative outline-none px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="eventActiveTab"
                    className="absolute inset-0 bg-slate-900 rounded-full shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2rem border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col group relative"
                >
                  {/* Decorative Header Banner */}
                  <div className={`h-32 w-full bg-linear-to-br ${event.gradient} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                    {/* Background Icon Watermark */}
                    <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/20 transform rotate-[-15deg] group-hover:scale-125 transition-transform duration-500" />
                    <Icon className="w-12 h-12 text-white relative z-10 drop-shadow-md" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="mb-4 flex items-center gap-2">
                       <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${event.bgLight} ${event.textMain}`}>
                         {event.category}
                       </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-medium">
                      {event.description}
                    </p>

                    {/* Metadata (Date/Location) */}
                    <div className="space-y-2 mb-8">
                      <div className="flex items-center text-sm text-slate-600 font-medium">
                        <CalendarDays className="w-4 h-4 mr-2 text-slate-400" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-slate-600 font-medium">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                        {event.location}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <a href='/gallery'
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center group/btn transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      <a href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer"
                      className={`px-5 py-2 rounded-full text-xs font-bold text-white bg-linear-to-r ${event.gradient} opacity-90 hover:opacity-100 shadow-md hover:shadow-lg transform active:scale-95 transition-all`}>
                        Donate Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State (if needed in future) */}
        {filteredEvents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <Flower2 className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-700">No Events Found</h3>
            <p className="text-slate-500 mt-2">There are currently no upcoming events in this category.</p>
          </motion.div>
        )}
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                 Ready to make an impact?
               </h2>
               <p className="text-blue-100 text-lg sm:text-xl font-medium mb-10 max-w-2xl mx-auto">
                 Whether it's donating, volunteering your time or spreading the word, your contribution directly changes lives
               </p>
               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href='/contact-us'>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-8 py-4 flex items-center gap-2 not-[]:justify-center bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
                    >
                      <Users className="w-5 h-5"/>
                      Become a Volunteer
                    </motion.button>
                  </a>
                  <a href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 bg-blue-700 text-white font-bold rounded-full border border-blue-500 hover:bg-blue-800 transition-all cursor-pointer"
                    >
                      <Handshake className="w-5 h-5"/>
                      <span>Donate Now</span>
                    </motion.button>
                  </a>
               </div>
            </motion.div>
         </div>
      </section>
    </div>
    
  );
};

export default Events;
