import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: 'EcoPulse',
    description: 'Experience the Kinetic Ether. A high-performance smart energy command center integrating real-time telemetry and the Cerberus AI neural core for advanced, voice-activated grid management.',
    tech: ['Flutter', 'Dart', 'Cerebras AI', 'speech_to_text'],
    category: 'Mobile // AI',
    image: '/project-clothing.jpg',
    github: 'https://github.com/SadeesaDamruwan/EcoPulse',
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: 2,
    name: 'Clothing AI',
    description: 'Gesture-based vision system for fashion classification using deep learning. Built with Flutter for cross-platform mobile deployment.',
    tech: ['Flutter', 'Swift', 'Kotlin', 'Firebase'],
    category: 'Mobile // AI Vision',
    image: '/project-clothing.jpg',
    github: 'https://github.com/SadeesaDamruwan/Cloathing_Ai',
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: 3,
    name: 'BlindMatchPAS',
    description: 'A secure, unbiased ASP.NET Core MVC web application designed to facilitate the matching of academic research projects between students and university supervisors with anonymous evaluation.',
    tech: ['ASP.Net Core', 'C#', 'SQL Server', 'HTML', 'CSS'],
    category: 'Web // Academic',
    image: '/project-blindmatch.jpg',
    github: 'https://github.com/SadeesaDamruwan/BlindMatchPAS',
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: 4,
    name: 'Hotel Management System',
    description: 'Full-stack platform with automated booking and guest analytics. Enterprise-grade hotel management solution built with Java.',
    tech: ['Java', 'JavaFX', 'MongoDB'],
    category: 'Enterprise // Java',
    image: '/project-hotel.jpg',
    github: 'https://github.com/SadeesaDamruwan/Hotel-management-system',
    stars: 1,
    forks: 4,
    featured: true,
  },
  {
    id: 5,
    name: 'CatchTheBox',
    description: '2D physics-based game developed in Unity focusing on collision logic and engaging gameplay mechanics.',
    tech: ['C#', 'Unity'],
    category: 'Logic // Unity',
    image: '/project-game.jpg',
    github: 'https://github.com/SadeesaDamruwan/CatchTheBox',
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: 6,
    name: 'Student Management',
    description: 'First year Group project - Academic management system for student records and course management.',
    tech: ['C#', '.NET'],
    category: 'Academic // Group',
    image: '/project-blindmatch.jpg',
    github: 'https://github.com/SadeesaDamruwan/Student_Management',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 7,
    name: 'Simple To-Do List',
    description: 'Task management application with clean UI built in Python for efficient daily planning.',
    tech: ['Python'],
    category: 'Utility // Python',
    image: '/project-hotel.jpg',
    github: 'https://github.com/SadeesaDamruwan/Simple-To_Do_List',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 8,
    name: 'Clipboard for Mac',
    description: 'Chat GPT program that runs using your Chat GPT API code. macOS utility for AI-powered clipboard management.',
    tech: ['Python', 'OpenAI API'],
    category: 'Utility // macOS',
    image: '/project-clothing.jpg',
    github: 'https://github.com/SadeesaDamruwan/Clipbord_For_Mac',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 9,
    name: 'Hotel Management System v2',
    description: 'Enhanced version of the hotel management system with improved features and performance.',
    tech: ['Java', 'JavaFX'],
    category: 'Enterprise // Java',
    image: '/project-hotel.jpg',
    github: 'https://github.com/SadeesaDamruwan/Hotel-management-system_02',
    stars: 0,
    forks: 1,
    featured: false,
  },
  {
    id: 10,
    name: 'Simple Guess Game',
    description: 'Interactive number guessing game built with Python.',
    tech: ['Python'],
    category: 'Game // Logic',
    image: '/project-game.jpg',
    github: 'https://github.com/SadeesaDamruwan/SimpleGuessGame',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 11,
    name: 'Dark-Light Mode Clock',
    description: 'A sleek, responsive analog clock featuring a dark/light mode toggle button with a moving moon and sun icon.',
    tech: ['CSS', 'JavaScript', 'HTML'],
    category: 'UI // Component',
    image: '/project-clothing.jpg',
    github: 'https://github.com/SadeesaDamruwan/Dark-Light-Mode-Clock-with-Icon-Toggle',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 12,
    name: 'ShowTimez',
    description: 'Entertainment platform for tracking and discovering shows and movies.',
    tech: ['Hack'],
    category: 'Web // Entertainment',
    image: '/project-game.jpg',
    github: 'https://github.com/SadeesaDamruwan/ShowTimez',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 13,
    name: 'Tools Activity',
    description: 'Collection of utility tools and scripts for development workflow automation.',
    tech: ['JavaScript'],
    category: 'Tools // Automation',
    image: '/project-blindmatch.jpg',
    github: 'https://github.com/SadeesaDamruwan/Tools-Activity',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 14,
    name: 'Loop',
    description: 'Programming concepts and algorithm implementations.',
    tech: ['Multi-language'],
    category: 'Learning // Algorithms',
    image: '/project-hotel.jpg',
    github: 'https://github.com/SadeesaDamruwan/loop',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 15,
    name: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web // Portfolio',
    image: '/project-clothing.jpg',
    github: 'https://github.com/SadeesaDamruwan/SadeesaDamruwan.github.io',
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    id: 16,
    name: 'Profile README',
    description: 'GitHub profile README with dynamic stats and project showcases.',
    tech: ['Markdown'],
    category: 'Docs // GitHub',
    image: '/project-blindmatch.jpg',
    github: 'https://github.com/SadeesaDamruwan/SadeesaDamruwan',
    stars: 0,
    forks: 0,
    featured: false,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Heading animation
      const headingTrigger = ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current?.querySelectorAll('.reveal-item') || [],
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(headingTrigger);

      // Featured projects animation
      const featuredTrigger = ScrollTrigger.create({
        trigger: featuredRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            featuredRef.current?.querySelectorAll('.featured-card') || [],
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(featuredTrigger);

      // Grid projects animation
      const gridTrigger = ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            gridRef.current?.querySelectorAll('.grid-card') || [],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(gridTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#d71c21]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#5e5e5e]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16">
          <p className="reveal-item text-[#d71c21] font-semibold tracking-widest text-sm uppercase mb-4">
            Archive
          </p>
          <h2 className="reveal-item heading-display text-5xl md:text-6xl lg:text-7xl text-[#fbfbfb]">
            Projects.
          </h2>
          <p className="reveal-item text-[#5e5e5e] text-lg mt-4 max-w-2xl">
            A collection of {projects.length} repositories showcasing my journey in software
            engineering, from mobile apps to AI integrations and game development.
          </p>
        </div>

        {/* Featured Projects */}
        <div ref={featuredRef} className="mb-20">
          <h3 className="text-xl font-semibold text-[#ebebeb] mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#d71c21] rounded-full" />
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="featured-card group relative glass rounded-2xl overflow-hidden hover:border-[#d71c21]/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full">
                    <span className="text-xs font-medium text-[#ebebeb]">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-[#fbfbfb] group-hover:text-[#d71c21] transition-colors">
                      {project.name}
                    </h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#5e5e5e] hover:text-[#d71c21] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-[#ebebeb]/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-[#d71c21]/10 text-[#d71c21]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-[#5e5e5e] text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div ref={gridRef}>
          <h3 className="text-xl font-semibold text-[#ebebeb] mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#5e5e5e] rounded-full" />
            More Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="grid-card group glass rounded-xl p-5 hover:border-[#d71c21]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-[#5e5e5e] mb-1">{project.category}</p>
                    <h4 className="text-lg font-semibold text-[#fbfbfb] group-hover:text-[#d71c21] transition-colors">
                      {project.name}
                    </h4>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5e5e5e] hover:text-[#d71c21] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-[#ebebeb]/50 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded bg-[#5e5e5e]/10 text-[#5e5e5e]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded bg-[#5e5e5e]/10 text-[#5e5e5e]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/SadeesaDamruwan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d71c21] hover:text-[#ff2d33] transition-colors font-semibold"
          >
            <Github className="w-5 h-5" />
            View All Repositories on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
