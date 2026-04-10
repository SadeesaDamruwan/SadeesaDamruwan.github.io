import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(imageRef.current, { opacity: 0, scale: 0.8, rotateX: 90 });
      gsap.set(titleRef.current, { opacity: 0, y: 50 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
      gsap.set(ctaRef.current, { opacity: 0, scale: 0 });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: 'power4.out',
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=1'
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(215,28,33,0.3) 0%, transparent 70%)',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(94,94,94,0.4) 0%, transparent 70%)',
            transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* Scanline Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 50%)',
            backgroundSize: '100% 4px',
            opacity: 0.1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-4 overflow-hidden">
              <p className="text-[#d71c21] font-semibold tracking-widest text-sm uppercase animate-slide-in-left">
                SADEESA.
              </p>
            </div>

            {/* Location */}
            <p className="text-[#5e5e5e] text-sm mb-6">
              Based in Sri Lanka • NSBM Green University
            </p>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="heading-display text-5xl md:text-6xl lg:text-7xl text-[#fbfbfb] mb-6"
            >
              Sadeesa
              <br />
              <span className="gradient-text">Damruwan</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-[#ebebeb]/80 max-w-xl mb-8 leading-relaxed"
            >
              Software Engineering student specializing in{' '}
              <span className="text-[#d71c21] font-semibold">Mobile & AI Engineering</span>.
              Focused on bridging Machine Learning with intuitive design.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                View Archive
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <div className="flex gap-3 justify-center">
                <a
                  href="https://github.com/SadeesaDamruwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#5e5e5e] rounded-lg hover:border-[#d71c21] hover:text-[#d71c21] transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sadeesa-damruwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#5e5e5e] rounded-lg hover:border-[#d71c21] hover:text-[#d71c21] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              ref={imageRef}
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.1}deg) rotateX(${-mousePos.y * 0.1}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              {/* Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#d71c21]/30 to-[#5e5e5e]/30 blur-xl animate-pulse-glow" />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#d71c21]/30 holo-border">
                <img
                  src="/profile.jpg"
                  alt="Sadeesa Damruwan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-float">
                <span className="text-[#d71c21] font-semibold text-sm">2nd Year</span>
              </div>

              <div
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full animate-float"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-[#5e5e5e] font-semibold text-sm">BSc SE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Hero;
