import React, { useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Nitesh Kumar - Software Developer | Ruby on Rails Expert';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nitesh Kumar - Experienced Software Developer with 3+ years in Ruby on Rails, RESTful APIs, and scalable web applications. Available for hire.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Nitesh Kumar - Experienced Software Developer with 3+ years in Ruby on Rails, RESTful APIs, and scalable web applications. Available for hire.';
      document.head.appendChild(meta);
    }

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;