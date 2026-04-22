import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, Mail, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 text-center rounded-b-[3rem] shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ShieldCheck className="mx-auto mb-4 w-12 h-12 text-emerald-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal information.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* Intro */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            Overview
          </h2>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
            We at Suvidha Mahila Mandal respect your concerns about privacy and value the relationship we have with you. We are committed to the ethical collection, retention and use of information that you provide to us about yourself (“Personal Information”) on our website.          
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
            This policy describes the types of personal information we collect, how we may use that information and with whom we may share it when you visit our site or use our services (collectively the “Services”).          
          </p>
          <p className="text-slate-600 leading-relaxed">
          Our Privacy Policy also describes the measures we take to protect the security of the information.          
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
          In addition, we describe the choices you can make about how we use the information you provide to us. We also tell you how you can reach us to update your contact information, remove your name from our mailing lists, or answer any questions you may have about our privacy practices.         
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
          We maintain full confidentiality of all donors and contributors on our mailing and email lists, which will neither be sold to nor exchanged with any other organization or commercial enterprise, and we honour donors' opt-out choices in our mail, email, phone and other solicitations.
          </p>
        </motion.div>

        {/* Usage */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            How We Use Your Information ?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Suvidha Mahila Mandal uses personally identifiable information you provide about yourself:
          </p>
          <br></br>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>To process your donation</li>
            <li>To send you a receipt for your donation</li>
            <li>To send you a thank you note for your donation or volunteering</li>
            <li>To respond to your questions or comments about Suvidha Mahila Mandal</li>
            <li>To send you additional information about Suvidha Mahila Mandal Projects</li>
            <li>To send you invitations for upcoming events that may interest you</li>
          </ul>
        </motion.div>

        {/* Email */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Email Communication
          </h2>
          <p className="text-slate-600 leading-relaxed">
            When you ask us to send you email such as a free email newsletter, you may provide us with certain information such as your email address so we can fulfil your request. You may choose to provide additional information as well, such as your postal address and phone number.  
          </p>
        </motion.div>

        {/* Donations */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Donations & Payments
          </h2>
          <p className="text-slate-600 leading-relaxed">
            When you make a donation through our Site, we may ask you to submit certain personal information (such as credit card information) so we can process your donation. We also maintain your contact information in our records so we can contact you to provide ChildFund India's program information and information on additional giving opportunities.
          </p>
        </motion.div>

        {/* Is Donation Secure? */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-500" />
            Is Donation Secure ?
          </h2>
          <p className="text-slate-600 leading-relaxed">
           Absolutely. The security and confidentiality of your information is our highest priority. We use industry-standard SSL (secure socket layer) technology to protect your information and provide a safe and secure environment for online donations.
          </p>
        </motion.div>

         {/* Credit / Debit Card Security */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-500" />
            Credit / Debit Card Security
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Suvidha Mahila Mandal is grateful for the donations that help us continue our valuable work. When you donate to Suvidha Mahila Mandal online, your card information is secured; your credit card number is used only for that particular transaction and is not stored. If you allow us to store your credit card or bank information for future use such as recurring donation, such information will be stored by the payment services financial institution. Suvidha Mahila Mandal only uses financial institution that adheres to the industry standards for storing such information.     
          </p>
        </motion.div>

        {/* Disclosure */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Disclosure of Data
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Suvidha Mahila Mandal may disclose your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <br></br>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>To comply with legal obligations</li>
            <li>To protect and defend the rights or property of Suvidha Mahila Mandal</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>
        </motion.div>

        {/*Security Of Data */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-500" />
            Security Of Data
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Suvidha Mahila Mandal has the necessary security mechanisms in place and only designated employees have access to your personal information.
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
            We maintain administrative, technical and physical safeguards to protect against unauthorized disclosure, use, alteration or destruction of the personal information in our possession.
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
            All online transactions are done on a secure server.
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
            When you provide credit card information to make a donation, we use the industry standard for Internet security ― Secure Socket Layer (SSL) technology ― to help protect the information you provide.
          </p>
          <br></br>
          <p className="text-slate-600 leading-relaxed">
            This Internet encryption standard scrambles data as it travels from your computer to our server. Please note, however, that perfect security does not exist on the Internet. You'll know that you're in a secure area of our Site when a “lock” icon appears on your screen and the “http” portion of our URL address changes to “https.” The “s” stands for “secure.”
          </p>
        </motion.div>

         {/* Updates to This Privacy Policy */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Updates to This Privacy Policy
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We may change or update portions of this Privacy Policy at any time and without prior notice to you. Please check back from time to time so you are aware of any changes or updates to the Policy. You may reach out to us if you have any queries about any changes made to our practices.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;