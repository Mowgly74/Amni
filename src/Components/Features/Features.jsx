import React from 'react'
import style from"./Features.module.css"
 import { Heart, Shield, Activity, MapPin, AlertCircle, Phone, Mail, Menu, X, ChevronDown, User, LogOut, Edit, TrendingUp, Filter, Bell, ShoppingCart, Settings } from 'lucide-react';






export default function Features() {
  return <>
    
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">Features</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Smart Medical Profile</h3>
            <p className="text-gray-700">Comprehensive digital medical file with all your health information, accessible anytime, anywhere</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Activity className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">AI Medical Analysis</h3>
            <p className="text-gray-700">Advanced artificial intelligence analyzes your medical data and generates emergency-ready summaries</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Emergency QR Access</h3>
            <p className="text-gray-700">Instant access to critical medical information through QR code scanning</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Bell className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Smart Wristband</h3>
            <p className="text-gray-700">Wearable device with emergency alert button for immediate assistance</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Emergency Reports</h3>
            <p className="text-gray-700">AI-generated critical summaries designed for emergency medical situations</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <MapPin className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Location Sharing</h3>
            <p className="text-gray-700">Share your current location instantly with emergency contacts via WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  
}
