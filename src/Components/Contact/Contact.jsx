import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+20 123 456 7890",
      description: "Available 9AM - 6PM",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@amni.com",
      description: "We reply within 24 hours",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Cairo, Egypt",
      description: "Visit our headquarters",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Live Chat",
      value: "Start Chat",
      description: "Available 24/7",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div
      className="min-h-screen py-12 flex justify-center relative bg-cover bg-center"
      style={{  backgroundImage:
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574')",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-6xl  rounded-xl shadow-xl md:px-8 px-4 py-3 mt-10 mx-2"
      >
        <h2 className="text-5xl font-serif font-bold text-center text-blue-700">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mt-2 mb-3 text-xl">
          Get in touch with our team
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact Form Side */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Send us Your Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    required />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Please describe your inquiry in detail..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                    required ></textarea>
                </div>

                <button type="submit" className="w-64 py-2 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-red-400 to-red-700  hover:from-blue-500 hover:to-blue-700  transition-all duration-300 mt-4 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Side */}
          <div className="space-y-5">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index}
                  className={`${info.bgColor} p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${info.bgColor}`}>
                      <div className={info.color}>{info.icon}</div>
                    </div>
                    <span className="font-semibold text-gray-800"> {info.title} </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">{info.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                </div>
              ))}
            </div>
            
            {/* Follow Us Section */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-center text-gray-700 font-medium mb-3">
                Follow us on social media
              </p>
              <div className="flex justify-center gap-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
                  <button key={index}
                    className="px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition">
                    <span className="text-sm font-medium text-gray-700"> {platform} </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}   