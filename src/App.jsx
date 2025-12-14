import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';


function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen text-zinc-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* Premium Intro Animation */}
      {!introComplete && <IntroOverlay onComplete={() => setIntroComplete(true)} />}

      {/* === UNIFIED PREMIUM BACKGROUND === */}
      <div className="fixed inset-0 -z-50 bg-zinc-950">
        {/* Subtle Noise Texture (handled in CSS) */}

        {/* Ambient Gradient Orbs - Fixed Position */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        {/* Top Fade */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

