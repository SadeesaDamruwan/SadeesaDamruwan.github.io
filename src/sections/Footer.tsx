import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5e5e5e]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#fbfbfb] mb-4">
              Sadeesa<span className="text-[#d71c21]">.</span>
            </h3>
            <p className="text-[#5e5e5e] text-sm leading-relaxed mb-6">
              Software Engineering student specializing in Mobile & AI Engineering.
              Building the future, one line of code at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/SadeesaDamruwan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-[#5e5e5e] hover:text-[#d71c21] hover:border-[#d71c21]/30 border border-transparent transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sadeesa-damruwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center text-[#5e5e5e] hover:text-[#d71c21] hover:border-[#d71c21]/30 border border-transparent transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#ebebeb] font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5e5e5e] hover:text-[#d71c21] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#ebebeb] font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-[#5e5e5e]">
                <span className="text-[#ebebeb]">Location:</span> Sri Lanka
              </p>
              <p className="text-[#5e5e5e]">
                <span className="text-[#ebebeb]">University:</span> NSBM Green University
              </p>
              <p className="text-[#5e5e5e]">
                <span className="text-[#ebebeb]">Degree:</span> BSc (Hons) Software Engineering
              </p>
              <p className="text-[#5e5e5e]">
                <span className="text-[#ebebeb]">Affiliation:</span> Plymouth University
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#5e5e5e]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5e5e5e] text-sm flex items-center gap-1">
            © {currentYear} Sadeesa Damruwan • Made with{' '}
            <Heart className="w-4 h-4 text-[#d71c21] fill-[#d71c21]" /> • End of Line
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#5e5e5e] hover:text-[#d71c21] transition-colors text-sm group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
