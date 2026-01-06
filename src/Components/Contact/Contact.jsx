import React from 'react'
import style from"./Contact.module.css"
 import { Heart, Shield, Activity, MapPin, AlertCircle, Phone, Mail, Menu, X, ChevronDown, User, LogOut, Edit, TrendingUp, Filter, Bell, ShoppingCart, Settings } from 'lucide-react';






export default function Contact() {
  return <>
    
   <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              <textarea placeholder="Message" rows="5" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">Send Message</button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-red-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">+20 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-red-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">contact@amni.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  
}
