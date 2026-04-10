import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, GitCommit, GitBranch, Users, Star, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: GitCommit, label: 'Contributions', value: '127+', sublabel: 'in the last year', color: '#d71c21' },
  { icon: GitBranch, label: 'Repositories', value: '16', sublabel: 'Public projects', color: '#5e5e5e' },
  { icon: Users, label: 'Followers', value: '5', sublabel: 'GitHub followers', color: '#d71c21' },
  { icon: Star, label: 'Stars', value: '1+', sublabel: 'Total stars earned', color: '#5e5e5e' },
];

const languages = [
  { name: 'Objective-C', percentage: 77.4, color: '#438eff' },
  { name: 'HTML', percentage: 68.5, color: '#e34c26' },
  { name: 'C#', percentage: 45, color: '#178600' },
  { name: 'Java', percentage: 35, color: '#b07219' },
  { name: 'Python', percentage: 30, color: '#3572A5' },
  { name: 'JavaScript', percentage: 20, color: '#f1e05a' },
  { name: 'Dart', percentage: 17, color: '#00B4AB' },
  { name: 'CSS', percentage: 15, color: '#563d7c' },
];

const GitHubStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Stats animation
      const statsTrigger = ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            statsRef.current?.querySelectorAll('.stat-item') || [],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(statsTrigger);

      // Languages animation
      const languagesTrigger = ScrollTrigger.create({
        trigger: languagesRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            languagesRef.current?.querySelectorAll('.lang-item') || [],
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
          );

          // Animate progress bars
          gsap.fromTo(
            languagesRef.current?.querySelectorAll('.progress-bar') || [],
            { width: 0 },
            { width: '100%', duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
      triggers.push(languagesTrigger);

      // Graph animation
      const graphTrigger = ScrollTrigger.create({
        trigger: graphRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            graphRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(graphTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  // Generate contribution graph data
  const weeks = 26;
  const days = 7;
  const contributions = Array.from({ length: weeks }, () =>
    Array.from({ length: days }, () => Math.floor(Math.random() * 5))
  );

  const getContributionColor = (level: number) => {
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    return colors[level] || colors[0];
  };

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d71c21]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-[#d71c21] font-semibold tracking-widest text-sm uppercase mb-4">
            Analytics
          </p>
          <h2 className="heading-display text-5xl md:text-6xl text-[#fbfbfb] mb-4">
            GitHub Stats
          </h2>
          <p className="text-[#5e5e5e] text-lg max-w-2xl mx-auto">
            My development activity and coding statistics across all repositories.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item glass rounded-xl p-6 text-center group hover:border-[#d71c21]/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <h3 className="text-4xl font-bold text-[#fbfbfb] mb-1">{stat.value}</h3>
              <p className="text-[#ebebeb] font-medium mb-1">{stat.label}</p>
              <p className="text-[#5e5e5e] text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Languages */}
          <div ref={languagesRef} className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#d71c21]/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-[#d71c21]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#fbfbfb]">Top Languages</h3>
                <p className="text-[#5e5e5e] text-sm">Most used across repositories</p>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="lang-item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#ebebeb] font-medium">{lang.name}</span>
                    <span className="text-[#5e5e5e] text-sm">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-[#161b22] rounded-full overflow-hidden">
                    <div
                      className="progress-bar h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution Graph */}
          <div ref={graphRef} className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#5e5e5e]/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-[#5e5e5e]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#fbfbfb]">Contribution Graph</h3>
                <p className="text-[#5e5e5e] text-sm">Last 6 months of activity</p>
              </div>
            </div>

            {/* Graph */}
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="w-3 h-3 rounded-sm transition-all duration-300 hover:scale-125"
                        style={{ backgroundColor: getContributionColor(day) }}
                        title={`${day} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#5e5e5e]/20">
              <span className="text-[#5e5e5e] text-sm">Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: getContributionColor(level) }}
                  />
                ))}
              </div>
              <span className="text-[#5e5e5e] text-sm">More</span>
            </div>

            {/* Monthly Activity */}
            <div className="mt-6 pt-6 border-t border-[#5e5e5e]/20">
              <h4 className="text-sm font-semibold text-[#ebebeb] mb-4">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5e5e5e]">April 2026</span>
                  <span className="text-[#39d353] font-medium">11 commits</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5e5e5e]">March 2026</span>
                  <span className="text-[#26a641] font-medium">8 commits</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5e5e5e]">February 2026</span>
                  <span className="text-[#006d32] font-medium">5 commits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
