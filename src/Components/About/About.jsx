import React from 'react'
import style from"./About.module.css"






export default function About() {
  return <>
    
  <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">About Amni</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">Amni is designed to save lives by providing instant access to critical medical information during emergencies. We believe that every person deserves immediate, accurate medical care, especially when they cannot communicate their medical history.</p>
          
          <h2 className="text-3xl font-bold mb-4 mt-8">The Problem We Solve</h2>
          <p className="text-lg text-gray-700 mb-6">In emergency situations, patients are often unable to communicate their medical history, chronic conditions, allergies, or current medications. This puts them at risk of receiving incorrect treatment or delays in care. Elderly people, children, and individuals with chronic conditions are especially vulnerable.</p>
          
          <h2 className="text-3xl font-bold mb-4 mt-8">Our Solution</h2>
          <p className="text-lg text-gray-700 mb-6">Amni creates a smart digital medical file that can be accessed instantly through a QR code. Our AI-powered system analyzes patient data and generates clear, emergency-focused summaries that help doctors, paramedics, and emergency responders make informed decisions quickly.</p>
          
          <h2 className="text-3xl font-bold mb-4 mt-8">Who We Help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Patients</h3>
              <p className="text-gray-700">Maintain a comprehensive medical profile accessible in emergencies</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Doctors</h3>
              <p className="text-gray-700">Access complete medical history instantly to make informed treatment decisions</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Paramedics</h3>
              <p className="text-gray-700">Determine patient needs and required medical equipment on-site</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Emergency Responders</h3>
              <p className="text-gray-700">Choose the most suitable hospital based on patient conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  
}
