import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { 
  Globe, 
  Users, 
  Target, 
  TreePine, 
  Calendar, 
  HeartHandshake 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  AreaChart, Area,
  PieChart, Pie, Cell
} from 'recharts';

const formatIndianValue = (val) => {
  if (val >= 10000000) return (val / 10000000).toFixed(0) + ' Cr';
  if (val >= 100000) return (val / 100000).toFixed(0) + 'L';
  if (val >= 1000) return (val / 1000).toFixed(0) + 'k';
  return val.toLocaleString('en-IN');
};

const statsData = [
  { id: 1, label: 'Countries Served', value: 15, suffix: '+', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-100', format: false },
  { id: 2, label: 'Total Volunteers', value: 300000, suffix: '+', icon: Users, color: 'text-purple-500', bg: 'bg-purple-100', format: true },
  { id: 3, label: 'Internship Goal', value: 10000000, suffix: '', icon: Target, color: 'text-rose-500', bg: 'bg-rose-100', format: true },
  { id: 4, label: 'Trees Planted', value: 5400000, suffix: '+', icon: TreePine, color: 'text-emerald-500', bg: 'bg-emerald-100', format: true },
  { id: 5, label: 'Events Conducted', value: 5000, suffix: '+', icon: Calendar, color: 'text-orange-500', bg: 'bg-orange-100', format: false },
  { id: 6, label: 'Beneficiaries Impacted', value: 10000000, suffix: '+', icon: HeartHandshake, color: 'text-cyan-500', bg: 'bg-cyan-100', format: true },
];

const areaData = [
  { name: '2019', volunteers: 10000, trees: 50000 },
  { name: '2020', volunteers: 25000, trees: 120000 },
  { name: '2021', volunteers: 60000, trees: 400000 },
  { name: '2022', volunteers: 120000, trees: 1500000 },
  { name: '2023', volunteers: 200000, trees: 3500000 },
  { name: '2024', volunteers: 300000, trees: 5400000 },
];

const pieData = [
  { name: 'Education', value: 40 },
  { name: 'Environment', value: 30 },
  { name: 'Women Empowerment', value: 20 },
  { name: 'Health', value: 10 },
];
const COLORS = ['#3B82F6', '#10B981', '#F43F5E', '#F59E0B'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-xl border border-slate-100 truncate"
      >
        <p className="text-slate-800 font-bold mb-2 sm:mb-3">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-1 last:mb-0">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full shadow-sm" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-500 font-medium capitalize">{entry.name}:</span>
            <span className="text-slate-900 font-bold">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </motion.div>
    );
  }
  return null;
};

// Container variation for staggered children on mobile or desktop
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
};

const Analytics = () => {
  const [filter, setFilter] = useState('All-Time');

  return (
    <section className="min-h-screen bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14 px-2">
          <h2 className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Impact</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Transforming lives globally
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Discover our real-time growth metrics and see how we are building a sustainable future.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center mb-10 sm:mb-12 w-full"
        >
          {/* Scrollable on very small mobile screens to prevent squishing */}
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-slate-200 overflow-x-auto scrollbar-hide max-w-full">
            {['Monthly', 'Yearly', 'All-Time'].map((tab) => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tab)}
                className={`relative px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 whitespace-nowrap ${
                  filter === tab 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
              >
                {/* Background decorative blob */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-[2.5] ${stat.bg}`} />
                
                <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
                  <motion.div 
                    initial={{ rotate: -10 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ type: 'spring' }}
                    className={`p-3 sm:p-4 rounded-2xl ${stat.bg} ${stat.color} shrink-0 ring-4 ring-white shadow-sm`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
                  </motion.div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 mb-1 sm:mb-2 flex items-baseline">
                    <span>
                        {stat.format
                            ? formatIndianValue(stat.value)
                            : stat.value.toLocaleString()}
                    </span>
                    <span className="text-blue-600 ml-1">{stat.suffix}</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          
          {/* Volunteer Growth Area Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: 'spring' }}
            whileHover={{ y: -4 }}
            className="bg-white p-5 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-800 flex items-center">
                Volunteer Growth
              </h3>
              <div className="p-2 sm:p-3 rounded-full bg-purple-50 text-purple-600">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <div className="h-64 sm:h-80 w-full ml-20px sm:ml-0">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVolunteers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(val) => `${val / 1000}k`} />
                  <RechartsTooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <Area type="monotone" dataKey="volunteers" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorVolunteers)" activeDot={{ r: 6, strokeWidth: 0, fill: '#8B5CF6' }}/>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Trees Planted Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white p-5 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-800 flex items-center">
                Tree Plantation Progress
              </h3>
              <div className="p-2 sm:p-3 rounded-full bg-emerald-50 text-emerald-600">
                <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <div className="h-64 sm:h-80 w-full ml-20px sm:ml-0">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={areaData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(val) => `${val / 1000000}M`} />
                  <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                  <Bar dataKey="trees" fill="#10B981" radius={[6, 6, 0, 0]} maxBarSize={45}>
                    {areaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === areaData.length - 1 ? '#059669' : '#10B981'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Programs Distribution Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
            className="bg-white p-5 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 lg:col-span-2 flex flex-col md:flex-row items-center gap-8"
          >
            {/* Pie Chart Legend & Text */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-full bg-rose-50 text-rose-500 mr-3 sm:mr-4">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  Program Distribution
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 font-medium leading-relaxed">
                A breakdown of our community-driven initiatives and their overall impact areas. We are continuously expanding across multiple sectors to maximize our footprint.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {pieData.map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mr-3 sm:mr-4 shadow-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <span className="text-slate-700 font-bold text-sm sm:text-base">{item.name}</span>
                    </div>
                    <span className="text-slate-900 font-extrabold text-base sm:text-lg">{item.value}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Interactive Pie Chart */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 relative flex items-center justify-center order-1 md:order-2">
               <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                >
                  <span className="text-slate-400 font-bold text-xs sm:text-sm uppercase tracking-widest">Total</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-800">100%</span>
               </motion.div>
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile() ? 70 : 90}
                    outerRadius={isMobile() ? 100 : 130}
                    paddingAngle={6}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={8}
                  >
                    {pieData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        className="hover:opacity-80 transition-opacity cursor-pointer outline-none" 
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Helper for dynamic pie sizing on mobile vs desktop without hook overhead
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export default Analytics;