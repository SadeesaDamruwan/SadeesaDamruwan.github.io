import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Content animation
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current?.querySelectorAll('.reveal-item') || [],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(contentTrigger);

      // Form animation
      const formTrigger = ScrollTrigger.create({
        trigger: formRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            formRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(formTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d71c21]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#5e5e5e]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#d71c21] font-semibold tracking-widest text-sm uppercase mb-4">
            Connect
          </p>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-[#fbfbfb]">
            Initiate Contact.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item">
              <p className="text-xl text-[#ebebeb]/80 leading-relaxed">
                Have a project in mind or want to collaborate? I am always open to discussing
                new opportunities, creative ideas, or ways to bring your vision to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="reveal-item space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#d71c21]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#d71c21]" />
                </div>
                <div>
                  <p className="text-[#5e5e5e] text-sm">Location</p>
                  <p className="text-[#ebebeb] font-medium">Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#5e5e5e]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#5e5e5e]" />
                </div>
                <div>
                  <p className="text-[#5e5e5e] text-sm">Email</p>
                  <a
                    href="mailto:sadisazoome@gmail.com"
                    className="text-[#ebebeb] font-medium hover:text-[#d71c21] transition-colors"
                  >
                    sadisazoome@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal-item">
              <p className="text-[#5e5e5e] text-sm mb-4">Connect on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SadeesaDamruwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:border-[#d71c21]/50 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-[#5e5e5e] group-hover:text-[#d71c21] transition-colors" />
                  <span className="text-[#ebebeb]">GitHub</span>
                  <ExternalLink className="w-4 h-4 text-[#5e5e5e] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sadeesa-damruwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:border-[#d71c21]/50 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-[#5e5e5e] group-hover:text-[#d71c21] transition-colors" />
                  <span className="text-[#ebebeb]">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-[#5e5e5e] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="reveal-item glass rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[#d71c21]">16</p>
                  <p className="text-[#5e5e5e] text-sm">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#d71c21]">5</p>
                  <p className="text-[#5e5e5e] text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#d71c21]">127+</p>
                  <p className="text-[#5e5e5e] text-sm">Commits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-[#ebebeb] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#5e5e5e]/30 rounded-lg text-[#ebebeb] placeholder-[#5e5e5e] transition-all duration-300 focus:border-[#d71c21]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#ebebeb] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#5e5e5e]/30 rounded-lg text-[#ebebeb] placeholder-[#5e5e5e] transition-all duration-300 focus:border-[#d71c21]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#ebebeb] font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#5e5e5e]/30 rounded-lg text-[#ebebeb] placeholder-[#5e5e5e] transition-all duration-300 focus:border-[#d71c21] resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Transmit Data
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
