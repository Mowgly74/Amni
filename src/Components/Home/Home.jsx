import {React , useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Activity, User } from 'lucide-react';
import Subscription from '../Subscription/Subscription';



export default function Home() {
  const navigate = useNavigate();
  const words = ["Protected", "Safe", "Secure", "Alive"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full hero">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center">
        {/* Video Container */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            {/* Video element - replace src with your video */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="public\Bg_vid.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/30" />
          </div>
        </div>

        {/* Hero Content - Aligned to Left */}
        <div className="relative z-10 w-full  mx-auto px-2 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Life. <span
      key={words[index]}
      className="inline-block text-red-600 animate-fade"
    >
      {words[index]}
    </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Smart medical emergency system powered by AI
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-gray-100">
              Amni helps you maintain a smart emergency medical profile that can be accessed 
              instantly using a QR code, ensuring fast and accurate emergency care even when 
              you cannot communicate.
            </p>

            <div className="flex justify-center flex-row gap-4">
              <button
                onClick={() => navigate('/register')}
                className="bg-white text-red-600 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/features')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 md:mb-12">
            How Amni Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                1. Create Your Profile
              </h3>
              <p className="text-gray-600 leading-relaxed ">
                Register and build your comprehensive medical profile with all critical health information
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                2. AI Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI analyzes your medical data and generates emergency-ready summaries
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                3. Instant Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Emergency responders scan your QR code for immediate access to critical medical information
              </p>
            </div>
          </div>
          
        </div>
      </section>
      <Subscription/>
    </div>
  );
}