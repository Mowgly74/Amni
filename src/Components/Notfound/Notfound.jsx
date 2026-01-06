import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from "../../assets/error.svg"; 

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[30vh] p-4">
      <h1 className="text-3xl md:text-5xl text-red-500 font-bold text-center w-full pt-4 pb-6 hover:text-green-600 transition-colors duration-300">
        Oops! Page Not Found!
      </h1>
      
      <img 
        src={errorImage} 
        alt="Not Found" 
        className="w-full max-w-2xl pb-8 md:pb-16" 
      />

    
      <Link 
        to="/" 
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}