import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Target, 
  Lightbulb, 
  Globe2, 
  TreePine, 
  Users, 
  GraduationCap, 
  CheckCircle2,
  Sparkles,
  BookOpen,
  Sprout,
  Cpu,
  Flower2
} from 'lucide-react';

// Static Data
const stats = [
  { id: 1, label: 'Countries Served', value: 15, suffix: '+', icon: Globe2, color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 2, label: 'Total Volunteers', value: 300000, suffix: '+', icon: Users, color: 'text-purple-500', bg: 'bg-purple-100', format: true },
  { id: 3, label: 'Trees Planted', value: 5400000, suffix: '+', icon: TreePine, color: 'text-emerald-500', bg: 'bg-emerald-100', format: true },
  { id: 4, label: 'Internship Goal', value: 10000000, suffix: '', icon: Target, color: 'text-rose-500', bg: 'bg-rose-100', format: true },
];

const initiatives = [
  { id: 1, title: 'Quality Education', icon: BookOpen, color: 'bg-blue-50 text-blue-600', description: 'Providing fundamental education, advanced literacy skills and digital empowerment to underprivileged children globally.' },
  { id: 2, title: 'Environmental Sustainability', icon: Sprout, color: 'bg-emerald-50 text-emerald-600', description: 'Driving massive afforestation, waste management programs and promoting sustainable, eco-friendly urban habits.' },
  { id: 3, title: 'AI & Innovation', icon: Cpu, color: 'bg-indigo-50 text-indigo-600', description: 'Bridging the technological divide by delivering free technical bootcamps and artificial intelligence awareness.' },
  { id: 4, title: 'Women Empowerment', icon: Flower2, color: 'bg-pink-50 text-pink-600', description: 'Fostering independence through extensive self-defense training, sanitary programs and vocational skill workshops.' },
];

const timeline = [
  { year: '1995', title: 'Foundation Established', desc: 'Officially registered on September 8th, beginning our journey in Nagpur.' },
  { year: '2010', title: 'Expanding Operations', desc: 'Secured 80G and 12A certifications, successfully stepping heavily into rural areas.' },
  { year: '2020', title: 'Global Recognition', desc: 'Achieved immense reach crossing 15+ countries and mobilizing thousands digitally.' },
  { year: '2025', title: 'Millions Impacted', desc: 'Surpassed 54 L+ trees planted and radically expanded youth internship ecosystems.' }
];

const formatIndianValue = (val) => {
  if (val >= 10000000) return (val / 10000000).toFixed(0) + ' Cr';
  if (val >= 100000) return (val / 100000).toFixed(0) + ' L';
  if (val >= 1000) return (val / 1000).toFixed(0) + 'k';
  return val.toLocaleString('en-IN');
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
};


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-inter overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-20 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem] shadow-xl z-10">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-blue-900/80" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center text-white pt-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
               <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' alt='S' className="w-8 h-8" />
               <span className="font-bold text-xl sm:text-xl text-yellow-300">
                  Suvidha Foundation
               </span>
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
              Serving Society <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                Since 1995
              </span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-10">
               Operating globally with an unwavering commitment to quality education, scientific research, environmental sustainability and women empowerment
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
               <a href='#history'
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors shadow-lg">
                  Learn Our History
               </a>
               <a href='/contact-us'
                  className="px-8 py-3.5 rounded-full bg-white/10 text-white font-bold backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                  Join The Movement
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. ABOUT, MISSION, VISION (TEXT & VISUALS) --- */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* About Block */}
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-blue-500 before:rounded-full">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><HeartHandshake className="w-5 h-5" /></div>
                  <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Who We Are</h2>
               </div>
               <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  Suvidha Mahila Mandal is an ISO-certified, internationally recognized non-governmental organization pushing boundaries to uplift marginalized strata worldwide. We deeply engage local communities inside student empowerment paradigms, bridging theoretical and practical divides.
               </p>
            </div>

            {/* Mission Block */}
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-emerald-500 before:rounded-full">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Target className="w-5 h-5" /></div>
                  <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Our Mission</h2>
               </div>
               <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  To ignite a generation of change-makers by imparting next-gen education, incubating grassroots technological research and instilling absolute gender equality across developing communities globally.
               </p>
            </div>

            {/* Vision Block */}
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-purple-500 before:rounded-full">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Lightbulb className="w-5 h-5" /></div>
                  <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Our Vision</h2>
               </div>
               <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  We foresee a transparent, unified world where geography does not determine destiny. A world powered exclusively by sustainable urban-forestry and equal opportunities regardless of systemic socioeconomic obstacles.
               </p>
            </div>
          </motion.div>

          {/* Right Image/Timeline Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10" />
                <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/collaboration.avif' alt="Team Collaboration" className="w-full h-500px object-cover transition-transform duration-700 hover:scale-105" />
             </div>
             
             {/* Floating Achievement Card */}
             <div className="absolute -bottom-10 -left-6 sm:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 max-w-280px">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                   <Target className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Impact Span</p>
                   <p className="text-2xl font-extrabold text-slate-800">30+ Years</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. IMPACT & ACHIEVEMENTS (STATS) --- */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Unprecedented Scale</h2>
             <p className="text-slate-400 font-medium mt-4 max-w-2xl mx-auto">Tracking our definitive, tangible success metrics as we radically accelerate global sustainability and welfare coverage.</p>
           </div>
           
           <motion.div 
             variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
           >
              {stats.map((stat) => {
                 const Icon = stat.icon;
                 return (
                    <motion.div key={stat.id} variants={itemVariants} className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                       <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6`}>
                          <Icon strokeWidth={2} className="w-7 h-7" />
                       </div>
                       <h3 className="text-4xl font-extrabold text-white mb-2 flex items-baseline">
                         <motion.span
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6 }}
                           viewport={{ once: true }}
                        >
                           {stat.format ? formatIndianValue(stat.value) : stat.value.toLocaleString()}
                        </motion.span>
                         <span className={`${stat.color} ml-1`}>{stat.suffix}</span>
                       </h3>
                       <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                    </motion.div>
                 );
              })}
           </motion.div>
        </div>
      </section>

      {/* --- 4. FEATURED INITIATIVES --- */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Pillars</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Core Initiatives</h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">Operating across distinct primary verticals to ensure holistic, multi-dimensional communal growth.</p>
        </div>

        <motion.div 
           className="grid grid-cols-1 md:grid-cols-2 gap-8"
           variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        >
           {initiatives.map(initiative => {
             const Icon = initiative.icon;
             return (
               <motion.div key={initiative.id} variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex gap-6">
                 <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${initiative.color}`}>
                   <Icon className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-3">{initiative.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">{initiative.description}</p>
                 </div>
               </motion.div>
             );
           })}
        </motion.div>
      </section>

      {/* --- 5. HISTORY TIMELINE --- */}
      <section id='history' className="py-20 bg-slate-100 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Our Legacy Journey</h2>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
               {timeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                        key={item.year} 
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                     >
                        {/* Center Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                        
                        {/* Timeline Content */}
                        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-lg transition-shadow`}>
                           <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                              <span className="text-blue-600 font-extrabold">{item.year}</span>
                           </div>
                           <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </motion.div>
                  )
               })}
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutUs;
