import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, ChevronRight, 
  ShieldCheck, FileCheck, FileText, Award, Heart
} from 'lucide-react';
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaGlobe 
} from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const certificates = [
    { name: '80G Certificate', icon: <FileCheck size={16}/>, open: "/src/assets/certificates/80G_APROVAL.pdf" },
    { name: '12A Certificate', icon: <FileCheck size={16}/>, open: "/src/assets/certificates/12A_APPROVAL.pdf" },
    { name: 'CSR Registration', icon: <Award size={16} />, open: "/src/assets/certificates/CSR.pdf"},
    { name: 'Suvidha Darpan', icon: <ShieldCheck size={16} />, open: "/src/assets/certificates/suvidha_darpan_portal_registration.pdf"},
    { name: 'PAN Details', icon: <FileText size={16} />, open: "/src/assets/certificates/suvidha_pan_card.pdf"},
  ];

  const usefulLinks = [
    { name: 'Verify Certificate', href: 'https://suvidhafoundationedutech.org/verify.php', target: '_blank', rel: "noopener noreferrer",},
    { name: 'Free Kids Coding Bootcamp', href: 'https://kidcoder.netlify.app/', target: '_blank', rel: "noopener noreferrer",},
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/suvidhamahilamandal/', label: 'Facebook' },
    { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/suvidha_mahila_mandal/', label: 'Instagram' },
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/company/suvidha-foundation/', label: 'LinkedIn' },
    { icon: <FaGlobe size={18} />, href: 'https://suvidhafoundationedutech.org/', label: 'Website' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-6 overflow-hidden">
      
      {/* Decorative Gradient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80"
        >
          
          {/* Organization Info - Takes up 4 cols on large screens */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/5">
                <img src="https://raw.githubusercontent.com/suryanshsingh07/Suvidha-foundation/main/frontend/src/assets/logo.png" className="w-10 h-10 object-contain drop-shadow-md" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                {/* Fallback icon in case logo is not resolved locally during dev */}
                <div style={{display: 'none'}} className="w-10 h-10 flex items-center justify-center font-bold text-xl text-yellow-400">S</div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold font-poppins text-white tracking-tight leading-tight">
                  Suvidha Foundation
                </h3>
                <span className="text-xs text-primary-400 font-medium tracking-wide">
                  (Suvidha Mahila Mandal)
                </span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              An NGO dedicated to providing education, empowering youth, and creating opportunities for the underprivileged since 1995.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 group">
                <MapPin className="text-yellow-500 mt-1 shrink-0 group-hover:text-yellow-400 transition-colors" size={18} />
                <div className="text-sm">
                  <p className="font-semibold text-slate-200 mb-1">Nagpur Headquarter:</p>
                  <a href='https://maps.app.goo.gl/LcqnzU9ioA6z9XtD9' target='_blank' rel="noopener noreferrer"
                   className="text-slate-400 leading-relaxed hover:text-slate-300 transition-colors cursor-pointer">
                    Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner, Nagpur, Maharashtra 441102
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="text-yellow-500 mt-1 shrink-0 group-hover:text-yellow-400 transition-colors" size={18} />
                <div className="text-sm">
                  <p className="font-semibold text-slate-200 mb-1">Hyderabad Office:</p>
                  <a href='https://maps.app.goo.gl/em2kUxnt4xRyoukg6' target='_blank' rel="noopener noreferrer"
                  className="text-slate-400 leading-relaxed hover:text-slate-300 transition-colors cursor-pointer">
                    Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Useful Links - Takes up 3 cols */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:ml-8">
            <h4 className="text-white font-semibold font-poppins text-lg mb-6 flex items-center gap-2">
              Useful Links
              <div className="h-1 w-8 bg-yellow-500 rounded-full ml-1"></div>
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} target={link.target || "_self"} rel={link.rel || ""}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="text-primary-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certificates - Takes up 3 cols */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-semibold font-poppins text-lg mb-6 flex items-center gap-2">
              Certificates
              <div className="h-1 w-8 bg-primary-500 rounded-full ml-1"></div>
            </h4>
            <ul className="space-y-3">
              {certificates.map((cert) => (
                <li key={cert.name}>
                  <a href={cert.open} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer p-1 -ml-1 rounded-md">
                    <span className="text-emerald-500 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </span>
                    <span
                     className="font-medium">{cert.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Donate - Takes up 2 cols */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-semibold font-poppins text-lg mb-6">Connect with Us</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-slate-800 hover:bg-primary-600 text-slate-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-primary-500/30 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a 
               href="https://pages.razorpay.com/pl_PNztFxhixjKywz/view" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center w-full gap-2 bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-yellow-500/25 hover:-translate-y-1 group"
            >
              <Heart size={18} className="group-hover:scale-110 transition-transform" />
              <span>Help Us</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar Container */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500"
        >
          <div className="flex items-center">
            <p>
              &copy; {new Date().getFullYear()} <a href='https://suvidhafoundationedutech.org/' target='_blank' rel="noopener noreferrer"
              className="text-slate-300 font-medium hover:text-white transition-colors cursor-pointer">Suvidha Foundation (Suvidha Mahila Mandal)</a> • All Rights Reserved
            </p>
          </div>
          <a href='https://suryanshsingh.vercel.app' target='_blank' rel="noopener noreferrer"
          className=" truncate md:whitespace-nowrap flex items-center gap-1.5 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <span>Made by</span>
            <span className="text-[#f97316] font-semibold">
              Suryansh Singh
            </span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;