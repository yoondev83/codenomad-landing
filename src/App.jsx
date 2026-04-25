import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { useScrollReveal } from './hooks/useScrollReveal';
import portfolioData from './data/portfolio.json';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  
  // Initialize scroll animations
  useScrollReveal();

  return (
    <>
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      <main>
        <Hero data={portfolioData.hero} language={language} />
        <Experience experiences={portfolioData.experiences} language={language} />
        <Projects projects={portfolioData.projects} language={language} />
        <Contact settings={portfolioData.settings} language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}

export default App;
