import React from 'react';
import { motion } from 'framer-motion';
import { 
  Apple, 
  Megaphone, 
  TreePine, 
  HeartPulse, 
  BookOpen, 
  HeartHandshake 
} from 'lucide-react';

const featureData = [
  {
    id: 1,
    title: 'Healthy Food',
    description: 'Providing nutritious meals to impoverished communities to combat hunger and malnutrition effectively.',
    icon: Apple,
    color: 'text-orange-500',
    bg: 'bg-orange-100',
    borderColor: 'border-orange-200',
    shadow: 'hover:shadow-orange-100'
  },
  {
    id: 2,
    title: 'Social Awareness',
    description: 'Running campaigns to educate and empower communities regarding their rights and social responsibilities.',
    icon: Megaphone,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
    borderColor: 'border-blue-200',
    shadow: 'hover:shadow-blue-100'
  },
  {
    id: 3,
    title: 'Tree Plantation',
    description: 'Pioneering environmental sustainability through large-scale afforestation and eco-friendly programs.',
    icon: TreePine,
    color: 'text-emerald-500',
    bg: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    shadow: 'hover:shadow-emerald-100'
  },
  {
    id: 4,
    title: 'Health Care',
    description: 'Offering accessible medical checkups and fundamental healthcare support to those in need.',
    icon: HeartPulse,
    color: 'text-rose-500',
    bg: 'bg-rose-100',
    borderColor: 'border-rose-200',
    shadow: 'hover:shadow-rose-100'
  },
  {
    id: 5,
    title: 'Primary Education',
    description: 'Ensuring equitable access to quality education for underprivileged children for a brighter future.',
    icon: BookOpen,
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
    borderColor: 'border-indigo-200',
    shadow: 'hover:shadow-indigo-100'
  },
  {
    id: 6,
    title: 'Social Care',
    description: 'Fostering a supportive network for marginalized groups through counseling and rehabilitation programs.',
    icon: HeartHandshake,
    color: 'text-teal-500',
    bg: 'bg-teal-100',
    borderColor: 'border-teal-200',
    shadow: 'hover:shadow-teal-100'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const Features = () => {
  return (
    <section className="py-20 bg-white sm:py-24 lg:py-32 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              What We Do
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Causes for a Sustainable Future
            </p>
            <p className="text-lg text-slate-600">
              We focus on impactful humanitarian and environmental initiatives to create a unified, empowered and socially responsible global community.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureData.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 ease-in-out ${feature.shadow}`}
              >
                {/* Decorative background circle that scales on hover */}
                <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-[1.8] ${feature.bg}`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${feature.bg} ${feature.color} border ${feature.borderColor} shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;