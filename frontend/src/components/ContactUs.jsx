import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  Clock,
  Sparkles
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const MAX_CHARS = 1000;
  // Field validation
  const isEmailValid = formData.email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid = formData.name.trim() && isEmailValid && formData.email && formData.subject.trim() && formData.message.trim() && formData.message.length <= MAX_CHARS;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1500);
  };

  // Framer Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter overflow-hidden relative">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-900 rounded-b-2rem sm:rounded-b-[4rem] shadow-2xl z-10 mx-2 sm:mx-0">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' alt='S' className="w-7 h-7 fill-blue-400 text-blue-400" />
              Suvidha Foundation
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Let's Get In Touch
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
               We are here to answer your queries, listen to your ideas and work together for a better tomorrow
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white rounded-2rem shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10 relative overflow-hidden">
              {/* Form Glassmorphism Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2 relative z-10">Send a Message</h2>
              <p className="text-slate-500 mb-8 relative z-10">Fill out the form below and our team will get back to you within 24 hours.</p>

              <div className="relative z-10 w-full mb-8">
                 <AnimatePresence>
                   {isSuccess ? (
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.9, y: 10 }}
                       animate={{ opacity: 1, scale: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0.9, y: -10 }}
                       className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 shadow-sm"
                     >
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
                          className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-emerald-800 mb-1">Message Sent!</h3>
                          <p className="text-emerald-600 font-medium">Thank you for reaching out. We appreciate your connection.</p>
                        </div>
                     </motion.div>
                   ) : (
                     <motion.form 
                       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                       onSubmit={handleSubmit} 
                       className="space-y-6"
                       noValidate
                     >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           {/* Name Input */}
                           <div className="relative">
                              <input 
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                autoComplete="off"
                                onFocus={() => setFocusedField('firstName')}
                                onBlur={() => setFocusedField(null)}
                                className="peer w-full bg-slate-50 border-2 border-slate-200 text-slate-900 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                                placeholder=" "
                                required
                              />
                              <label 
                                htmlFor="firstName"
                                className={`absolute left-4 top-5 text-slate-400 text-sm transition-all duration-200
                                  ${(focusedField === 'firstName' || formData.firstName)
                                    ? '-translate-y-3 text-xs font-bold text-blue-600'
                                    : ''}`}
                              >
                                First Name
                              </label>
                            </div>
                            <div className="relative">
                              <input 
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                autoComplete="off"
                                onFocus={() => setFocusedField('lastName')}
                                onBlur={() => setFocusedField(null)}
                                className="peer w-full bg-slate-50 border-2 border-slate-200 text-slate-900 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                                placeholder=" "
                                required
                              />
                              <label 
                                htmlFor="lastName"
                                className={`absolute left-4 top-5 text-slate-400 text-sm transition-all duration-200
                                  ${(focusedField === 'lastName' || formData.lastName)
                                    ? '-translate-y-3 text-xs font-bold text-blue-600'
                                    : ''}`}
                              >
                                Last Name
                              </label>
                            </div>                          
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                          <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            autoComplete="off"
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`peer w-full bg-slate-50 border-2 text-slate-900 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:bg-white transition-all
                              ${!isEmailValid 
                                ? 'border-rose-300 focus:border-rose-500 bg-rose-50/30' 
                                : 'border-slate-200 focus:border-blue-500'}`}
                            placeholder=" "
                            required
                          />
                          <label 
                            htmlFor="email" 
                            className={`absolute left-4 top-5 text-slate-400 text-sm transition-all duration-200
                              ${(focusedField === 'email' || formData.email)
                                ? '-translate-y-3 text-xs font-bold text-blue-600'
                                : ''}
                              ${!isEmailValid ? 'text-rose-500' : ''}`}
                          >
                            Email Address {!isEmailValid && '- Invalid'}
                          </label>
                        </div>

                        {/* Message Input */}
                        <div className="relative">
                          <textarea 
                            id="message"
                            name="message"
                            rows="5"
                            maxLength={MAX_CHARS}
                            value={formData.message}
                            onChange={handleInputChange}
                            autoComplete="off"
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            className="peer w-full bg-slate-50 border-2 border-r-2 border-slate-200 text-slate-900 rounded-xl px-4 pt-6 pb-6 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none overflow-y-auto custom-scrollbar"
                            placeholder=" "
                            required
                          ></textarea>
                          <label 
                            htmlFor="message" 
                            className={`absolute left-6 top-6 text-slate-400 bg-slate text-sm transition-all duration-200
                              ${(focusedField === 'message' || formData.message)
                                ? '-translate-y-3 text-xs font-bold text-blue-600'
                                : ''}`}
                          >
                            Write your message here *
                          </label>
                        </div>
                        <div className="absolute bottom-8 right-3 text-xs text-gray-500">
                          {formData.message.length}/{MAX_CHARS} characters 
                        </div>
                       

                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                          whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                          disabled={!isFormValid || isSubmitting}
                          type="submit"
                          className={`w-full rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg
                            ${isFormValid 
                              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30' 
                              : 'bg-yellow-300 text-slate-400 cursor-not-allowed shadow-none'}`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-20 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending . . .
                            </div>
                          ) : (
                            <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
                              Send Message
                            </button>
                          )}
                        </motion.button>
                     </motion.form>
                   )}
                 </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT DETAILS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/5 flex flex-col gap-6"
          >
            {/* Headquarters Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
               <div className="flex items-center gap-3  rounded-xl px-4 py-3 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' alt='S' className="w-10 h-10" />
                  <span className="font-bold text-2xl sm:text-3xl text-yellow-300">
                    Suvidha Foundation
                  </span>
                </div>
               <h3 className="text-xl font-extrabold text-slate-800 mb-3">Nagpur Headquarters</h3>
               <a href="https://maps.app.goo.gl/CuHoZPSDEKxcCGqo8" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-600 mb-4 font-medium">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p>Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner, Nagpur, Maharashtra 441102</p>
               </a>
               <div className="flex flex-col gap-3">
                  <a href="https://wa.me/917620086320?text=Hello!%20I%20am%20interested%20in%20knowing%20about%20Suvidha%20Foundation" target="_blank" 
                    rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors font-medium w-fit">
                    <Phone className="w-4 h-4 text-slate-400" />
                    +91 70200 44091
                  </a>
                  <a href="mailto:info@suvidhafoundationedutech.org" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors font-medium w-fit break-all">
                    <Mail className="w-4 h-4 text-slate-400" />
                    info@suvidhafoundationedutech.org
                  </a>
               </div>
            </motion.div>

            {/* Hyderabad Office Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
               <div className="flex items-center gap-3  rounded-xl px-4 py-3 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <img src='https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png' alt='S' className="w-10 h-10" />
                  <span className="font-bold text-2xl sm:text-3xl text-yellow-300">
                    Suvidha Foundation
                  </span>
                </div>
               <h3 className="text-xl font-extrabold text-slate-800 mb-3">Hyderabad Office</h3>
               <div className="flex items-start gap-3 text-slate-600 font-medium">
                  <Building2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <a href='https://maps.app.goo.gl/em2kUxnt4xRyoukg6' target='_blank' rel="noopener noreferrer">Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</a>
               </div>
            </motion.div>

            {/* Additional Info Box */}
            <motion.div 
              variants={itemVariants}
              className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden"
            >
               <Sparkles className="absolute top-4 right-4 w-24 h-24 text-white/5 opacity-50 pointer-events-none" />
               <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">Office Hours</h3>
               </div>
               <div className="space-y-2 text-slate-300 font-medium">
                  <p className="flex justify-between"><span>Monday - Friday:</span> <span className="text-white font-bold">10:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday:</span> <span className="text-white font-bold">10:00 AM - 2:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday:</span> <span className="text-yellow-400 font-bold tracking-wide uppercase text-sm self-center">Closed</span></p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
