import React from 'react'
import style from"./Logout.module.css"






export default function Logout() {
  return <>
    
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Patient Registration</h1>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage('patient-dashboard'); }}>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">Register</button>
          </form>
          <p className="text-center mt-6 text-gray-600">
            Already have an account? <button onClick={() => setCurrentPage('login')} className="text-red-500 hover:underline">Login</button>
          </p>
        </div>
      </div>
    </div>
    
    </>
  
}
