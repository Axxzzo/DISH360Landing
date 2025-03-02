import { Brain, Eye, Star } from 'lucide-react';
import React from 'react';

function Features() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-orange-600" />,
      title: "AI Powered 3D Conversion",
      description: "Transform regular food photos into immersive 3D experiences with our cutting-edge AI technology"
    },
    {
      icon: <Star className="w-12 h-12 text-orange-600" />,
      title: "Authentic Reviews",
      description: "Real reviews from verified diners, complete with 3D visual experiences of their meals"
    },
    {
      icon: <Eye className="w-12 h-12 text-orange-600" />,
      title: "Real Time Previews",
      description: "See your dish in stunning 3D detail before you order, ensuring the perfect dining choice"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our App Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* App Preview Section */}
        <div className="mt-20 text-center">
          <div className="mb-8">
            <img 
              src="/coming soon.jpg" 
              alt="DISH360 App Preview" 
              className="mx-auto max-w-2xl w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Coming Soon Text */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get ready to experience dining in a whole new dimension. Download DISH360 soon on iOS and Android.
            </p>
          </div>

          {/* Custom Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* App Store Button */}
            <button 
              className="group relative flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 w-64"
              onClick={(e) => e.preventDefault()}
            >
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </button>

            {/* Play Store Button */}
            <button 
              className="group relative flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 w-64"
              onClick={(e) => e.preventDefault()}
            >
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;