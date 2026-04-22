import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ArrowUpDown,
    Award,
    HeartHandshake,
    TrendingUp,
    UserCircle2,
    Medal,
    IndianRupee,
    Star
} from 'lucide-react';

// Sample Donor Data
const initialDonors = [
    { id: 1, name: 'Aarav Sharma', amount: 50000, date: '2026-03-15', isAnonymous: false },
    { id: 2, name: 'Anonymous Philanthropist', amount: 250000, date: '2026-02-28', isAnonymous: true },
    { id: 3, name: 'Priya Patel', amount: 15000, date: '2026-04-01', isAnonymous: false },
    { id: 4, name: 'Rohan Gupta', amount: 100000, date: '2026-01-10', isAnonymous: false },
    { id: 5, name: 'Sneha Reddy', amount: 5000, date: '2026-03-20', isAnonymous: false },
    { id: 6, name: 'Vikram Singh', amount: 75000, date: '2026-02-14', isAnonymous: false },
    { id: 7, name: 'Anjali Desai', amount: 20000, date: '2026-04-05', isAnonymous: false },
    { id: 8, name: 'Anonymous', amount: 500000, date: '2025-12-25', isAnonymous: true },
    { id: 9, name: 'Karan Mehra', amount: 10000, date: '2026-03-30', isAnonymous: false },
    { id: 10, name: 'Neha Joshi', amount: 30000, date: '2026-02-05', isAnonymous: false },
    { id: 11, name: 'Amitabh Kumar', amount: 150000, date: '2026-01-20', isAnonymous: false },
    { id: 12, name: 'Rhea Kapoor', amount: 8000, date: '2026-03-12', isAnonymous: false },
    { id: 13, name: 'Sanjay Dutt', amount: 45000, date: '2026-01-05', isAnonymous: false },
    { id: 14, name: 'Anonymous', amount: 120000, date: '2026-04-02', isAnonymous: true },
    { id: 15, name: 'Pooja Hegde', amount: 60000, date: '2026-02-18', isAnonymous: false },
    { id: 16, name: 'Rahul Bose', amount: 25000, date: '2026-03-22', isAnonymous: false },
    { id: 17, name: 'Simran Kaur', amount: 12000, date: '2026-04-06', isAnonymous: false },
    { id: 18, name: 'Arjun Nair', amount: 40000, date: '2026-01-28', isAnonymous: false },
    { id: 19, name: 'Anonymous', amount: 85000, date: '2026-03-05', isAnonymous: true },
    { id: 20, name: 'Meera Rajput', amount: 55000, date: '2026-02-10', isAnonymous: false },
];
    
const OurDonars = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Amount (High to Low)');

    // Derived Stats
    const totalFunds = useMemo(() => initialDonors.reduce((acc, curr) => acc + curr.amount, 0), []);
    const topDonorAmount = useMemo(() => Math.max(...initialDonors.map(d => d.amount)), []);

    // Filtering and Sorting
    const filteredAndSortedDonors = useMemo(() => {
        let result = [...initialDonors];

        // Filter
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(donor =>
                (donor.isAnonymous ? 'anonymous' : donor.name.toLowerCase()).includes(lowerTerm) ||
                donor.amount.toString().includes(lowerTerm)
            );
        }

        // Sort
        switch (sortBy) {
            case 'Amount (High to Low)':
                result.sort((a, b) => b.amount - a.amount);
                break;
            case 'Amount (Low to High)':
                result.sort((a, b) => a.amount - b.amount);
                break;
            case 'Recent':
                result.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'Name (A-Z)':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return result;
    }, [searchTerm, sortBy]);

    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

    // Badge Logic
    const getBadge = (amount) => {
        if (amount >= 200000) return { icon: <svg className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>, label: 'Diamond', color: 'text-yellow-600', bg: 'bg-yellow-100', border: 'border-yellow-200' };
        if (amount >= 100000) return { icon: <Star className="w-4 h-4 text-slate-500 fill-slate-300" />, label: 'Platinum', color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-300' };
        if (amount >= 50000) return { icon: <Award className="w-4 h-4 text-amber-600 fill-amber-500" />, label: 'Gold', color: 'text-amber-700', bg: 'bg-amber-100', border: 'border-amber-300' };
        return null;
    };

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
    };
const [showFilters, setShowFilters] = useState(true);

    return (
        <div className="min-h-screen bg-slate-50 font-inter">

            {/* 1. HERO SECTION */}
            <section className="relative pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden bg-slate-900 rounded-b-[2.5rem] sm:rounded-b-[4rem] shadow-xl">
                <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-900/90 to-slate-800/90" />
                <div className="absolute top-0 right-0 w-40rem h-40rem bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40rem h-40rem bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
                            <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' className="w-6 h-6 fill-blue-400 text-blue-400" />
                            Suvidha Foundation
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Meet Our Donors
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
                            Every contribution brings us closer to our goals. Celebrating the amazing individuals completely transforming lives across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS SUMMARIES */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                            <TrendingUp strokeWidth={2.5} className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-1">
                            {/* <span>
                    {stat.format
                        ? formatIndianValue(stat.value)
                        : stat.value.toLocaleString()}
                </span> */}
                        </h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Funds Raised</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <UserCircle2 strokeWidth={2.5} className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-1">
                            {/* <CountUp end={initialDonors.length} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce /> */}
                        </h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Total Contributors</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                            <Medal strokeWidth={2.5} className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-1">
                            {/* <CountUp 
                  end={topDonorAmount} 
                  duration={2.5} 
                  formattingFn={(val) => `₹${(val/100000).toFixed(1)}L`} 
                  enableScrollSpy scrollSpyOnce 
               /> */}
                        </h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Highest Donation</p>
                    </motion.div>
                </div>
            </div>

            {/* 3. FILTERS & SEARCH */}
                <motion.section
                    initial={{ y: 0, opacity: 1 }}
                    animate={{
                        y: showFilters ? 0 : -100,
                        opacity: showFilters ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sticky top-4 z-30"
                >               
                 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg rounded-2xl p-3 flex flex-row items-center gap-2">
                    <div className="relative w-2/3">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search donor name or amount..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="relative w-1/3 flex items-center">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <ArrowUpDown className="h-5 w-5 text-slate-400" />
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="block w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                        >
                            <option>Amount (High to Low)</option>
                            <option>Amount (Low to High)</option>
                            <option>Recent</option>
                            <option>Name (A-Z)</option>
                        </select>
                    </div>

                </div>
            </motion.section>

            {/* 4. DONOR LIST */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 min-h-[50vh]">
                {/* Desktop Table Headers */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100/50 rounded-t-2xl border-b border-slate-200">
                    <div className="col-span-5">Donor Name</div>
                    <div className="col-span-4 text-center">Date Contributed</div>
                    <div className="col-span-3 text-right">Amount</div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-4 md:gap-0 bg-transparent md:bg-white md:rounded-b-2xl md:shadow-sm md:border md:border-t-0 md:border-slate-100"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredAndSortedDonors.length > 0 ? (
                            filteredAndSortedDonors.map((donor, index) => {
                                const isEven = index % 2 === 0;
                                const badge = getBadge(donor.amount);

                                return (
                                    <motion.div
                                        key={donor.id}
                                        layout
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.01, backgroundColor: 'var(--tw-bg-slate-50)' }}
                                        className={`
                              bg-white md:bg-transparent p-5 md:px-6 md:py-4 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-slate-100 md:border-none
                              ${!isEven ? 'md:bg-slate-50/50' : ''} 
                              md:border-b md:border-slate-50 last:border-0
                              flex flex-col md:grid md:grid-cols-12 md:items-center gap-4 transition-colors cursor-default
                           `}
                                    >
                                        {/* Mobile & Desktop: Name & Avatar */}
                                        <div className="col-span-5 flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-sm ${donor.isAnonymous ? 'bg-slate-200 text-slate-500' : 'bg-linear-to-br from-blue-100 to-blue-200 text-blue-700'}`}>
                                                {donor.isAnonymous ? 'A' : donor.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-800 text-base md:text-lg tracking-tight">
                                                    {donor.isAnonymous ? 'Anonymous Donor' : donor.name}
                                                </span>
                                                {badge && (
                                                    <div className={`mt-1 flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md border ${badge.border} ${badge.bg} ${badge.color} w-max`}>
                                                        {badge.icon}
                                                        {badge.label}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Mobile & Desktop: Date */}
                                        <div className="col-span-4 flex items-center justify-between md:justify-center text-sm font-medium text-slate-500">
                                            <span className="md:hidden font-bold text-slate-400 uppercase text-xs">Date</span>
                                            {new Date(donor.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </div>

                                        {/* Mobile & Desktop: Amount */}
                                        <div className="col-span-3 flex items-center justify-between md:justify-end">
                                            <span className="md:hidden font-bold text-slate-400 uppercase text-xs">Amount</span>
                                            <div className={`font-extrabold text-lg md:text-xl flex items-center ${donor.amount >= 100000 ? 'text-emerald-600' : 'text-slate-800'}`}>
                                                {formatCurrency(donor.amount)}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="py-16 text-center text-slate-500 col-span-12"
                            >
                                <UserCircle2 className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                                <p className="text-xl font-bold text-slate-700">No Donors Found</p>
                                <p>Try adjusting your search filters.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* 5. CALL TO ACTION */}
            <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Be the reason someone smiles today
                        </h2>
                        <p className="text-blue-100 text-lg sm:text-xl font-medium mb-10 max-w-2xl mx-auto">
                            Join this incredible list of change-makers. Your donation helps us provide education, food, and empowerment to those who need it most.
                        </p>
                        <a href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
                        >
                            <HeartHandshake className="w-5 h-5" />
                            Donate Now
                        </motion.button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurDonars;
