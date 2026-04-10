import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Cpu, Gamepad2, GraduationCap, Smartphone, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: GraduationCap, label: '2nd', sublabel: 'BSc Software Eng', color: '#d71c21' },
  { icon: Smartphone, label: 'Mobile', sublabel: 'Development', color: '#5e5e5e' },
  { icon: Brain, label: 'AI', sublabel: 'Computer Vision', color: '#d71c21' },
  { icon: Gamepad2, label: 'Unity', sublabel: 'Game Logic', color: '#5e5e5e' },
];

const skills = [
  'Flutter', 'Dart', 'Python', 'Java', 'C#', 'JavaScript',
  'HTML/CSS', 'React', 'Node.js', 'Firebase', 'MongoDB', 'SQL',
  'Unity', 'Git', 'OpenAI API', 'Cerebras AI'
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Heading animation
      const headingTrigger = ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(headingTrigger);

      // Content animation
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current?.querySelectorAll('.reveal-text') || [],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(contentTrigger);

      // Stats animation
      const statsTrigger = ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            statsRef.current?.querySelectorAll('.stat-card') || [],
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'back.out(1.7)',
            }
          );
        },
        once: true,
      });
      triggers.push(statsTrigger);

      // Skills animation
      const skillsTrigger = ScrollTrigger.create({
        trigger: skillsRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            skillsRef.current?.querySelectorAll('.skill-tag') || [],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
          );
        },
        once: true,
      });
      triggers.push(skillsTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d71c21]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5e5e5e]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="heading-display text-6xl md:text-7xl lg:text-8xl text-[#fbfbfb] opacity-0"
          >
            Identity
          </h2>
          <p className="text-[#d71c21] text-xl font-semibold mt-2">
            Vision & Code.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div ref={contentRef} className="space-y-6">
            <p className="reveal-text text-xl md:text-2xl text-[#ebebeb] leading-relaxed">
              I am a{' '}
              <span className="text-[#d71c21] font-semibold">2nd-year Software Engineering</span>{' '}
              student at{' '}
              <span className="text-[#fbfbfb] font-semibold">NSBM Green University</span>,
              affiliated with{' '}
              <span className="text-[#fbfbfb] font-semibold">Plymouth University</span>.
            </p>

            <p className="reveal-text text-lg text-[#ebebeb]/70 leading-relaxed">
              I specialize in building mobile apps with{' '}
              <span className="text-[#d71c21]">Flutter</span> and integrating{' '}
              <span className="text-[#d71c21]">AI native modules</span>. My passion lies in
              creating innovative systems that solve real-world problems.
            </p>

            <p className="reveal-text text-lg text-[#ebebeb]/70 leading-relaxed">
              From <span className="text-[#fbfbfb]">BlindMatchPAS</span>—where anonymity ensures
              fairness in academic project allocation—to real-time classification tools like{' '}
              <span className="text-[#fbfbfb]">Clothing AI</span>, I thrive on pushing the
              boundaries of what's possible with code.
            </p>

            <p className="reveal-text text-lg text-[#ebebeb]/70 leading-relaxed">
              As a passionate <span className="text-[#d71c21]">game developer</span>, I also
              explore the world of interactive experiences through Unity, focusing on gameplay
              mechanics and collision logic.
            </p>

            {/* Quick Info */}
            <div className="reveal-text flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-[#5e5e5e]">
                <Code className="w-4 h-4" />
                <span className="text-sm">16 Repositories</span>
              </div>
              <div className="flex items-center gap-2 text-[#5e5e5e]">
                <Cpu className="w-4 h-4" />
                <span className="text-sm">127+ Contributions</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card glass p-6 rounded-xl group hover:border-[#d71c21]/50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon
                    className="w-8 h-8 mb-4 transition-colors duration-300"
                    style={{ color: stat.color }}
                  />
                  <h3 className="text-3xl font-bold text-[#fbfbfb] mb-1">{stat.label}</h3>
                  <p className="text-sm text-[#5e5e5e]">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Skills Cloud */}
            <div ref={skillsRef}>
              <h4 className="text-lg font-semibold text-[#fbfbfb] mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#d71c21]" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag px-4 py-2 text-sm font-medium rounded-full border border-[#5e5e5e]/30 text-[#ebebeb]/80 hover:border-[#d71c21] hover:text-[#d71c21] hover:shadow-[0_0_15px_rgba(215,28,33,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
