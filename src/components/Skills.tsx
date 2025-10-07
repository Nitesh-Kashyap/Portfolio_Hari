import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Ruby', category: 'language', proficiency: 90 },
    { name: 'JavaScript', category: 'language', proficiency: 85 },
    { name: 'Ruby on Rails', category: 'framework', proficiency: 95 },
    { name: 'RSpec', category: 'framework', proficiency: 85 },
    { name: 'Sidekiq', category: 'framework', proficiency: 80 },
    { name: 'PostgreSQL', category: 'database', proficiency: 85 },
    { name: 'MySQL', category: 'database', proficiency: 80 },
    { name: 'Git', category: 'tool', proficiency: 90 },
    { name: 'Postman', category: 'tool', proficiency: 85 },
  ];

  const skillCategories = {
    language: { title: 'Languages', color: 'text-green-600 dark:text-green-400' },
    framework: { title: 'Frameworks & Tools', color: 'text-blue-600 dark:text-blue-400' },
    database: { title: 'Databases', color: 'text-purple-600 dark:text-purple-400' },
    tool: { title: 'Tools', color: 'text-orange-600 dark:text-orange-400' },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className={`text-xl font-semibold ${skillCategories[category as keyof typeof skillCategories].color}`}>
                {skillCategories[category as keyof typeof skillCategories].title}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practices Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Development Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Agile', 'TDD', 'RESTful API Design', 'CI/CD', 'Clean Code', 'Code Reviews'].map((practice, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;