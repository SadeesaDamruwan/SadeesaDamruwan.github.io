import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-lg border-b border-[#5e5e5e]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#');
              }}
              className="text-xl font-bold text-[#fbfbfb]"
            >
              Sadeesa<span className="text-[#d71c21]">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-[#ebebeb]/70 hover:text-[#d71c21] transition-colors link-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#ebebeb] hover:text-[#d71c21] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050505]/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-3xl font-bold text-[#fbfbfb] hover:text-[#d71c21] transition-colors"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
