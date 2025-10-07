import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      description: "Expert in Ruby on Rails with microservices architecture"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "PostgreSQL optimization and efficient query design"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "API Development",
      description: "RESTful APIs with secure authentication and RBAC"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Background processing with Sidekiq and optimization"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Experienced Software Developer with 3+ years of expertise in designing and building 
              scalable web applications. Skilled in Ruby on Rails, RESTful API development, backend 
              optimization, and third-party integrations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Strong background in relational databases, agile workflows, and DevOps. Passionate 
              about clean code, test-driven development, and building robust, maintainable solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">nitesh.krjs@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;