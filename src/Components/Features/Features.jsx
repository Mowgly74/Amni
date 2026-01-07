// import React from 'react'
// import style from"./Features.module.css"
//  import { Heart, Shield, Activity, MapPin, AlertCircle, Phone, Mail, Menu, X, ChevronDown, User, LogOut, Edit, TrendingUp, Filter, Bell, ShoppingCart, Settings } from 'lucide-react';






// export default function Features() {
//   return <>
    
//     <div className="pt-24 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-5xl font-bold text-center mb-16">Features</h1>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <Heart className="w-12 h-12 text-red-500 mb-4" />
//             <h3 className="text-2xl font-bold mb-4">Smart Medical Profile</h3>
//             <p className="text-gray-700">Comprehensive digital medical file with all your health information, accessible anytime, anywhere</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <Activity className="w-12 h-12 text-red-500 mb-4" />
//             <h3 className="text-2xl font-bold mb-4">AI Medical Analysis</h3>
//             <p className="text-gray-700">Advanced artificial intelligence analyzes your medical data and generates emergency-ready summaries</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <Shield className="w-12 h-12 text-red-500 mb-4" />
//             <h3 className="text-2xl font-bold mb-4">Emergency QR Access</h3>
//             <p className="text-gray-700">Instant access to critical medical information through QR code scanning</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <Bell className="w-12 h-12 text-red-500 mb-4" />
//             <h3 className="text-2xl font-bold mb-4">Smart Wristband</h3>
//             <p className="text-gray-700">Wearable device with emergency alert button for immediate assistance</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
//             <h3 className="text-2xl font-bold mb-4">Emergency Reports</h3>
//             <p className="text-gray-700">AI-generated critical summaries designed for emergency medical situations</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <MapPin className="w-12 h-12 text-red-500 mb-4" />
//             <h3 className="text-2xl font-bold mb-4">Location Sharing</h3>
//             <p className="text-gray-700">Share your current location instantly with emergency contacts via WhatsApp</p>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     </>
  
// }






import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Zap, Users, ShieldCheck, 
  Stethoscope, Smartphone, Layout, BarChart3, ClipboardList 
} from 'lucide-react';

const features = [
  {
    title: "Digital Medical Identity",
    description: "Store and analyze medical records with AI. Generate a unique QR code linking to your file for fast access anytime.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Rapid Emergency Access",
    description: "Display vital info like blood type, allergies, and medications instantly via specialized report filters.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Family Alerts",
    description: "Send instant notifications to family members during emergencies or hospital visits automatically.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1582213726892-359fb9254060?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Privacy & Security",
    description: "Strict access permissions; only you can edit your data. We protect your records from unauthorized access.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Smart Medical Summary",
    description: "AI transforms long records into concise, easy-to-read summaries for emergency responders.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mobile Integration",
    description: "Native support for QR scanning via smartphone cameras with a seamless mobile app experience.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Modern & Intuitive UI",
    description: "Attractive visual design with full dark mode support and fast responsiveness on all devices.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Reports & Statistics",
    description: "Periodic reports on medical cases and data export capability for professional administrative use.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Patient Data Registration",
    description: "Accurate and organized registration of patient info with continuous updates to ensure data integrity.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Features() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 dark:text-red-500 font-semibold tracking-wide uppercase text-sm"
          >
            Amni Safety Suite
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl"
          >
            Key Features of Amni
          </motion.h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
            Innovative solutions designed to bridge the gap between patients and emergency responders.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-grow">
                <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-xl mb-6">
                  <feature.icon className="w-6 h-6 text-red-600 dark:text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}