import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Picture */}
          <div className="lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/ravi_use.jpeg"
                    alt="Harinath Ravi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">HR</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 text-center lg:text-left lg:pr-12">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="block">Hi, I'm</span>
                  <span className="block text-blue-600 dark:text-blue-400">Harinath Ravi</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Software Developer
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                  I build scalable web applications with Ruby on Rails
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleContact}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail size={20} className="mr-2" />
                  Get In Touch
                </button>
                
                <button
                  onClick={() => window.open('/harinath_ravi.pdf', '_blank')}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-200 transform hover:-translate-y-1"
                  >
                  <Download size={20} className="mr-2" />
                  Download CV
                </button>


              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <span className="font-semibold">4+</span>
                  <span className="ml-1">Years Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">10+</span>
                  <span className="ml-1">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={handleScrollToAbout}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
    );
};

export default Hero;
