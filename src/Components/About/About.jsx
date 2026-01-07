// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ArrowLeft, 
//   QrCodeScanner, 
//   Warning, 
//   QrCode2, 
//   Emergency, 
//   DocumentScanner, 
//   Person, 
//   Ambulance, 
//   Stethoscope, 
//   VerifiedUser, 
//   ArrowForward,
//   Shield,
//   History,
//   AccessTime  
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import style from "./About.module.css";

// export default function About() {
//   const navigate = useNavigate();
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleGetQRCode = () => {
//     // Navigate to QR code generation or registration
//     navigate('/register');
//   };

//   const features = [
//     {
//       icon: <Person className="w-6 h-6" />,
//       title: "For Patients",
//       description: "Carry your history securely. Peace of mind in your pocket.",
//       bgColor: "bg-blue-50 dark:bg-blue-900/30",
//       iconColor: "text-blue-600 dark:text-blue-400"
//     },
//     {
//       icon: <Ambulance className="w-6 h-6" />,
//       title: "For Paramedics",
//       description: "Identify critical allergies and conditions on the spot.",
//       bgColor: "bg-red-50 dark:bg-red-900/30",
//       iconColor: "text-red-600 dark:text-red-400"
//     },
//     {
//       icon: <Stethoscope className="w-6 h-6" />,
//       title: "For Doctors",
//       description: "Make faster, informed decisions with accurate data logs.",
//       bgColor: "bg-teal-50 dark:bg-teal-900/30",
//       iconColor: "text-teal-600 dark:text-teal-400"
//     }
//   ];

//   const steps = [
//     {
//       icon: <QrCode2 className="w-6 h-6" />,
//       title: "Generate QR",
//       description: "Create your secure medical profile and get your unique Amni code."
//     },
//     {
//       icon: <Emergency className="w-6 h-6" />,
//       title: "Emergency Happens",
//       description: "First responders arrive on scene. Every second matters."
//     },
//     {
//       icon: <DocumentScanner className="w-6 h-6" />,
//       title: "Instant Scan",
//       description: "Medics scan your code to verify blood type, allergies, and history instantly."
//     }
//   ];

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'} transition-colors duration-300`}>
//       {/* Fixed Header */}
//       <motion.div 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg shadow-lg' 
//             : 'bg-white dark:bg-background-dark'
//         }`}
//       >
//         <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate(-1)}
//             className="flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
//           >
//             <ArrowLeft className="w-6 h-6 text-[#111418] dark:text-white" />
//           </motion.button>
          
//           <motion.h2 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-lg font-bold text-[#111418] dark:text-white text-center flex-1"
//           >
//             About Amni
//           </motion.h2>
          
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="size-12 flex items-center justify-center"
//           >
//             <Shield className={`w-6 h-6 transition-colors ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'}`} />
//           </button>
//         </div>
//       </motion.div>

//       {/* Main Content */}
//       <div className="max-w-md mx-auto pt-20 pb-32 px-4">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-center py-8"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//             className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
//           >
//             <QrCodeScanner className="w-12 h-12 text-primary" />
//           </motion.div>
          
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-[28px] font-bold text-[#111418] dark:text-white mb-3"
//           >
//             Amni: Your Lifeline in a Scan
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-base text-[#617589] dark:text-gray-400"
//           >
//             Instant access to critical medical history when every second counts.
//           </motion.p>
//         </motion.div>

//         {/* Problem Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-8"
//         >
//           <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm overflow-hidden">
//             <div 
//               className="w-full h-48 bg-cover bg-center relative"
//               style={{
//                 backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80")'
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>
            
//             <div className="p-5">
//               <motion.div 
//                 initial={{ x: -20 }}
//                 whileInView={{ x: 0 }}
//                 className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-3"
//               >
//                 <Warning className="w-5 h-5" />
//                 The Problem
//               </motion.div>
              
//               <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">
//                 In emergencies, you can't always speak.
//               </h3>
              
//               <p className="text-base text-[#617589] dark:text-gray-400">
//                 Unconscious or in shock, your medical history remains a mystery to responders. 
//                 Amni speaks for you when you cannot.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* How It Works Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mb-10"
//         >
//           <h2 className="text-[22px] font-bold text-[#111418] dark:text-white mb-6">
//             How It Works
//           </h2>
          
//           <div className="relative pl-3">
//             {/* Timeline Line */}
//             <div className="absolute left-[35px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700" />
            
//             <AnimatePresence>
//               {steps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                   className="flex gap-4 mb-8"
//                 >
//                   <motion.div 
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="flex-shrink-0 size-14 bg-background-light dark:bg-gray-800 rounded-full border-4 border-white dark:border-background-dark flex items-center justify-center text-primary shadow-lg z-10"
//                   >
//                     {step.icon}
//                   </motion.div>
                  
//                   <div className="pt-1">
//                     <h3 className="text-lg font-bold text-[#111418] dark:text-white">
//                       {step.title}
//                     </h3>
//                     <p className="text-sm text-[#617589] dark:text-gray-400 mt-1">
//                       {step.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </motion.div>

//         {/* Ecosystem Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-gray-50 dark:bg-[#15202b] rounded-2xl p-6 mb-8"
//         >
//           <h2 className="text-[22px] font-bold text-[#111418] dark:text-white text-center mb-6">
//             Built for the Ecosystem
//           </h2>
          
//           <div className="space-y-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="flex items-center gap-4 bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
//               >
//                 <div className={`size-12 rounded-full ${feature.bgColor} flex items-center justify-center shrink-0`}>
//                   <div className={feature.iconColor}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-[#111418] dark:text-white">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-[#617589] dark:text-gray-400">
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Security Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="text-center p-6"
//         >
//           <motion.div
//             animate={{ rotate: [0, 360] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-green-50 dark:bg-green-900/20"
//           >
//             <VerifiedUser className="w-8 h-8 text-green-600 dark:text-green-400" />
//           </motion.div>
          
//           <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-2">
//             Secure & Compliant
//           </h3>
          
//           <p className="text-sm text-[#617589] dark:text-gray-400 max-w-xs mx-auto">
//             Your data is encrypted and HIPAA compliant. Only authorized personnel can access your full details.
//           </p>
//         </motion.div>
//       </div>

//       {/* Fixed Bottom Button */}
//       <motion.div 
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 z-40"
//       >
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={handleGetQRCode}
//           className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
//         >
//           <span>Get Your QR Code</span>
//           <ArrowForward className="w-5 h-5" />
//         </motion.button>
//       </motion.div>

//       {/* Floating Stats */}
//       <div className="fixed bottom-32 right-4 z-30 space-y-3">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1 }}
//           className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg flex items-center gap-2"
//         >
//           <AccessTime className="w-4 h-4 text-primary" />
//           <span className="text-xs font-bold">24/7 Access</span>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1.2 }}
//           className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg flex items-center gap-2"
//         >
//           <History className="w-4 h-4 text-primary" />
//           <span className="text-xs font-bold">Instant History</span>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import style from "./About.module.css";

export default function About() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetQRCode = () => {
    navigate('/register');
  };

  const features = [
    {
      icon: "👤",
      title: "For Patients",
      description: "Carry your history securely. Peace of mind in your pocket.",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: "🚑",
      title: "For Paramedics",
      description: "Identify critical allergies and conditions on the spot.",
      bgColor: "bg-red-50 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400"
    },
    {
      icon: "👨‍⚕️",
      title: "For Doctors",
      description: "Make faster, informed decisions with accurate data logs.",
      bgColor: "bg-teal-50 dark:bg-teal-900/30",
      iconColor: "text-teal-600 dark:text-teal-400"
    }
  ];

  const steps = [
    {
      icon: "🔳",
      title: "Generate QR",
      description: "Create your secure medical profile and get your unique Amni code."
    },
    {
      icon: "🚨",
      title: "Emergency Happens",
      description: "First responders arrive on scene. Every second matters."
    },
    {
      icon: "📱",
      title: "Instant Scan",
      description: "Medics scan your code to verify blood type, allergies, and history instantly."
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'} transition-colors duration-300`}>
      {/* Fixed Header */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg shadow-lg' 
            : 'bg-white dark:bg-background-dark'
        }`}
      >
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <span className="text-2xl">←</span>
          </motion.button>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold text-[#111418] dark:text-white text-center flex-1"
          >
            About Amni
          </motion.h2>
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="size-12 flex items-center justify-center"
          >
            <span className="text-2xl">{isDarkMode ? '🌙' : '☀️'}</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-md mx-auto pt-20 pb-32 px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
          >
            <span className="text-4xl">🏥</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[28px] font-bold text-[#111418] dark:text-white mb-3"
          >
            Amni: Your Lifeline in a Scan
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base text-[#617589] dark:text-gray-400"
          >
            Instant access to critical medical history when every second counts.
          </motion.p>
        </motion.div>

        {/* Problem Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm overflow-hidden">
            <div 
              className="w-full h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80")'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="p-5">
              <motion.div 
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-3"
              >
                <span className="text-xl">⚠️</span>
                The Problem
              </motion.div>
              
              <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">
                In emergencies, you can't always speak.
              </h3>
              
              <p className="text-base text-[#617589] dark:text-gray-400">
                Unconscious or in shock, your medical history remains a mystery to responders. 
                Amni speaks for you when you cannot.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[22px] font-bold text-[#111418] dark:text-white mb-6">
            How It Works
          </h2>
          
          <div className="relative pl-3">
            {/* Timeline Line */}
            <div className="absolute left-[35px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700" />
            
            <AnimatePresence>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 mb-8"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 size-14 bg-background-light dark:bg-gray-800 rounded-full border-4 border-white dark:border-background-dark flex items-center justify-center text-primary shadow-lg z-10"
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </motion.div>
                  
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-[#111418] dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#617589] dark:text-gray-400 mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Ecosystem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-[#15202b] rounded-2xl p-6 mb-8"
        >
          <h2 className="text-[22px] font-bold text-[#111418] dark:text-white text-center mb-6">
            Built for the Ecosystem
          </h2>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className={`size-12 rounded-full ${feature.bgColor} flex items-center justify-center shrink-0`}>
                  <div className={`text-2xl ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#111418] dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#617589] dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-green-50 dark:bg-green-900/20"
          >
            <span className="text-3xl">🔒</span>
          </motion.div>
          
          <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-2">
            Secure & Compliant
          </h3>
          
          <p className="text-sm text-[#617589] dark:text-gray-400 max-w-xs mx-auto">
            Your data is encrypted and HIPAA compliant. Only authorized personnel can access your full details.
          </p>
        </motion.div>
      </div>

      {/* Fixed Bottom Button */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGetQRCode}
          className="w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
        >
          <span>Get Your QR Code</span>
          <span className="text-xl">→</span>
        </motion.button>
      </motion.div>

      {/* Floating Stats */}
      <div className="fixed bottom-32 right-4 z-30 space-y-3">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg flex items-center gap-2"
        >
          <span className="text-lg">🕒</span>
          <span className="text-xs font-bold">24/7 Access</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg flex items-center gap-2"
        >
          <span className="text-lg">📜</span>
          <span className="text-xs font-bold">Instant History</span>
        </motion.div>
      </div>
    </div>
  );
}