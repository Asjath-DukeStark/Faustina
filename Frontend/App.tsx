
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import GrowthSection from './components/GrowthSection';
import Showreel from './components/Showreel';
import Gallery from './components/Gallery';
import Closing from './components/Closing';

const App: React.FC = () => {
  return (
    <main className="relative selection:bg-muted-brown selection:text-white">
      {/* Dynamic Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none">
        <div className="pointer-events-auto">
          <a href="#" className="font-serif text-xl tracking-tighter text-cream mix-blend-difference">FM</a>
        </div>
        <div className="hidden md:flex gap-10 pointer-events-auto">
          {['About', 'Works', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-cream mix-blend-difference hover:opacity-50 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="pointer-events-auto">
          <a
            href="#contact"
            className="text-[10px] uppercase tracking-[0.3em] bg-deep-black text-cream px-6 py-3 rounded-full hover:bg-muted-brown transition-colors inline-block"
          >
            Book a Strategy Call
          </a>
        </div>
      </nav>

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <Skills />
      <section id="works"><WorkExperience /></section>
      <GrowthSection />
      <section id="services"><Showreel /></section>
      <Gallery />
      <section id="contact"><Closing /></section>
    </main>
  );
};

export default App;
