import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Weather App",
      description: "Comprehensive restaurant management platform with gallery features, admin dashboard, and nested forms for efficient content management.",
      techStack: ["Ruby on Rails", "PostgreSQL", "JWT", "Cocoon gem", "Active Storage"],
      features: [
        "Live weather scene",
        "Image gallery with Active Storage",
        "JWT authentication system",
        "Admin dashboard with role-based access",
        "Nested forms for complex data entry"
      ],
      githubUrl: "https://github.com/ravi-harinath/weather_app",
      liveUrl: "#"
    },
    {
      title: "Online Payment",
      description: "Secure payment processing system with subscription management, invoice generation, and comprehensive admin features.",
      techStack: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "Stripe API", "PayPal API"],
      features: [
        "Multiple payment gateway integration",
        "Subscription plan management",
        "Automated invoice generation",
        "PDF report downloads",
        "Role-based access control"
      ],
      githubUrl: "https://github.com/ravi-harinath/challenges-api",
      liveUrl: "#"
    },
    {
      title: "Portfolio App",
      description: "Full-stack application featuring Rails API backend with React frontend for photo gallery management and user authentication.",
      techStack: ["Rails API", "React.js", "PostgreSQL", "JWT", "Active Storage"],
      features: [
        "User authentication and authorization",
        "Photo upload and management",
        "Gallery creation and organization",
        "RESTful API design",
        "Responsive React frontend"
      ],
      githubUrl: "https://github.com/ravi-harinath/my-portfolio",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="flex items-center mb-2">
                  <Code className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;