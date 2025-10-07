import React from 'react';
import { Calendar } from 'lucide-react';
import { WorkExperience } from '../types';

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      company: "Cloudraize IT Services",
      position: "Ruby on Rails Developer",
      duration: "Aug 2021 – Present",
      description: [
        "Built backend systems in Ruby on Rails with microservices architecture",
        "Implemented secure APIs with RBAC and JWT authentication",
        "Optimized PostgreSQL queries using ActiveRecord",
        "Collaborated with cross-functional teams for smooth deployment"
      ]
    },
    {
      company: "Rank Technologies",
      position: "Software Developer",
      duration: "March 2020 – July 2021",
      description: [
        "Developed product features using Rails and PostgreSQL",
        "Integrated third-party APIs (payment gateways, communication)",
        "Built Sidekiq background jobs for async processing",
        "Maintained high-quality code with RSpec & TDD"
      ]
    },
    {
      company: "Specvin Technologies",
      position: "Oracle App Technical Consultant",
      duration: "July 2018 – Feb 2020",
      description: [
        "Develops and customizes Oracle Applications using reports, interfaces, conversions, and extensions",
        "Collaborates with functional teams to translate business requirements into technical solutions",
        "Ensures smooth integration and optimal performance of Oracle systems",
        "Provides ongoing technical support, maintenance, and system enhancements"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600 dark:bg-blue-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;