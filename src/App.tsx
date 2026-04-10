import { useEffect } from 'react';
import { Toaster } from 'sonner';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import GitHubStats from './sections/GitHubStats';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';

    // Preload critical resources
    const preloadImages = ['/profile.jpg'];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ebebeb]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0a0a0a',
            border: '1px solid #5e5e5e30',
            color: '#ebebeb',
          },
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
