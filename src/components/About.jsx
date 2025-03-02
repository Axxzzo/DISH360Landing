import { Facebook, Instagram } from 'lucide-react';
import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About DISH360
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <img 
              src="../src/public/image/Instagram post - 1.png" 
              alt="Instagram Preview" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                DISH360 is revolutionizing the restaurant dining experience by bringing dishes to life through immersive 3D visualization. Our platform combines cutting-edge AI technology with real customer reviews to help diners make informed decisions about their meals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're dining in or ordering takeout, DISH360 provides an unprecedented view of your food before it reaches your table, ensuring your dining expectations are met every time.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex flex-col items-center">
          <p className="text-xl text-gray-700 mb-6 font-semibold">
            Follow us on social media for updates
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/dish.360" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              <Instagram size={24} className="mr-2" />
              Follow on Instagram
            </a>
            <a 
              href="https://facebook.com/Dish360" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
            >
              <Facebook size={24} className="mr-2" />
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;