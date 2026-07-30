import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Github, Download, ChevronDown,
  GraduationCap, Briefcase, Heart,
  MessageCircle, Calendar, Check,
  Code, Server, Database, Layers, Monitor, Zap
} from 'lucide-react';

const categories = [
  {
    title: 'Skill Exchange',
    icon: <GraduationCap className="w-6 h-6 text-[#22C55E]" />,
    examples: ['Teach Flutter ↔ Learn React', 'Teach Guitar ↔ Learn Singing', 'Teach Calculus ↔ Learn UI/UX']
  },
  {
    title: 'Work & Earn',
    icon: <Briefcase className="w-6 h-6 text-[#22C55E]" />,
    examples: ['Assignment Writing', 'Poster Design', 'Coding Help', 'Video Editing', 'Resume Reviews']
  },
  {
    title: 'Volunteer',
    icon: <Heart className="w-6 h-6 text-[#22C55E]" />,
    examples: ['Interview Mentoring', 'Resume Reviews', 'Programming Help', 'Helping Juniors', 'College Events']
  }
];

const seasonalEvents = [
  'Hackathon Team Formation', 'Placement Preparation', 'Internship Season',
  'Exam Discussions', 'College Fest Volunteers', 'Fresher Guidance'
];

const plannedFeatures = [
  'Student Profiles', 'Ratings', 'Reviews', 'University Verification',
  'AI Recommendations', 'Notifications', 'Saved Posts', 'Moderation',
  'Admin Dashboard', 'Search', 'Filters', 'Tags', 'Reputation System'
];

export default function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0B0F14]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(38,48,61,0.3)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">JustAsk</span>
          <span className="hidden md:inline text-xs font-medium text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full">beta</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#categories" className="hover:text-white transition-colors">Categories</a>
          <a href="https://github.com/sugaredcookie/justAsk" className="hover:text-white transition-colors">GitHub</a>
          <a href="#download" className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-[#22C55E]/20">Download</a>
        </div>
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-[#0B0F14]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-xl"
          >
            <a href="#features" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">Features</a>
            <a href="#categories" onClick={() => setIsNavOpen(false)} className="hover:text-[#22C55E] transition-colors">Categories</a>
            <a href="#download" onClick={() => setIsNavOpen(false)} className="bg-[#22C55E] hover:bg-[#16A34A] px-8 py-3 rounded-full transition-colors">Download</a>
          </motion.div>
        )}z
      </AnimatePresence>

      {/* Hero */}
      <section className="pt-32 md:pt-44 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Students helping <br className="hidden md:block" />
              <span className="text-[#22C55E]">Students.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#94A3B8] max-w-lg leading-relaxed">
              One platform for everything students can ask from one another. Learn, earn, help, and connect.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#download" className="bg-[#26303D] text-[#94A3B8] px-10 py-5 rounded-full font-medium flex items-center gap-2 cursor-not-allowed opacity-60">
                <Download size={20} /> Download Android APK <br /> (Coming soon, stay tuned)
              </a>
              <a href="https://github.com/sugaredcookie/justAsk" className="border border-[#26303D] hover:border-[#94A3B8] px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-colors">
                <Github size={20} /> View GitHub
              </a>
            </div>
          </motion.div>

          {/* Product preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#151B23] rounded-2xl border border-[#26303D] p-5 shadow-2xl w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="flex items-center gap-3 border-b border-[#26303D] pb-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
              <span className="text-sm font-medium text-[#94A3B8]">Feed · JustAsk</span>
              <span className="ml-auto text-xs text-[#94A3B8]">● live</span>
            </div>
            <div className="space-y-4">
              {[
                { icon: <GraduationCap size={18} />, title: 'Skill Exchange', desc: 'Teach Flutter ↔ Learn React' },
                { icon: <Briefcase size={18} />, title: 'Work & Earn', desc: 'Poster Design · ₹200 bid' },
                { icon: <Heart size={18} />, title: 'Volunteer', desc: 'Interview Mentoring · 3 spots' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0B0F14]/80 rounded-xl p-4 border border-[#26303D]/60 flex items-start gap-3 hover:border-[#22C55E]/40 transition-colors">
                  <div className="bg-[#22C55E]/10 p-2 rounded-lg text-[#22C55E] flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-medium text-[#F8FAFC]">{item.title}</div>
                    <div className="text-sm text-[#94A3B8]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-[#94A3B8] flex items-center gap-4 border-t border-[#26303D] pt-3">
              <span>✨ 12 requests</span>
              <span>💬 8 chats</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-24 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Built for university students,<br />beyond academics.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            JustAsk connects students to learn, earn, and grow together. A trusted community where every student can help and be helped.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-6 md:px-12 max-w-6xl mx-auto mt-28">
        <h3 className="text-3xl font-bold mb-12 tracking-tight">Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#151B23] rounded-2xl p-8 border border-[#26303D] card-hover"
            >
              <div className="bg-[#22C55E]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">{cat.icon}</div>
              <h4 className="text-2xl font-semibold text-[#F8FAFC]">{cat.title}</h4>
              <ul className="mt-4 space-y-2 text-[#94A3B8] text-sm">
                {cat.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#22C55E]">•</span> {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonal Events */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-28">
        <h3 className="text-3xl font-bold mb-6 tracking-tight">Seasonal Events</h3>
        <p className="text-[#94A3B8] mb-8">Appear during relevant periods — hackathons, placement prep, and more.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {seasonalEvents.map((ev, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className="bg-[#151B23] border border-[#26303D] rounded-xl px-5 py-4 flex items-center gap-3 hover:border-[#22C55E]/30 transition-colors"
            >
              <Calendar size={18} className="text-[#22C55E] flex-shrink-0" />
              <span className="font-medium text-[#F8FAFC]">{ev}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Messaging */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="bg-[#151B23] rounded-2xl border border-[#26303D] p-5 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#26303D] pb-3">
              <div className="bg-[#22C55E]/20 p-1.5 rounded-full">
                <MessageCircle size={18} className="text-[#22C55E]" />
              </div>
              <span className="font-medium text-[#F8FAFC]">Direct Message</span>
              <span className="ml-auto text-xs bg-[#22C55E]/10 text-[#22C55E] px-2 py-0.5 rounded-full">negotiation</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="bg-[#0B0F14] rounded-xl p-3 border border-[#26303D]/50">
                <span className="text-sm text-[#F8FAFC]">Sanidhya: “I can help with Flutter, looking for React mentor.”</span>
              </div>
              <div className="bg-[#0B0F14] rounded-xl p-3 border border-[#26303D]/50 ml-6">
                <span className="text-sm text-[#F8FAFC]">Piyush: “Let's trade! I need Flutter, I know React.”</span>
              </div>
              <div className="bg-[#22C55E]/10 rounded-xl p-3 border border-[#22C55E]/20">
                <span className="text-sm text-[#22C55E]">✅ Collaboration started</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold text-[#F8FAFC]">Private conversations, <br />real outcomes.</h3>
          <p className="mt-4 text-[#94A3B8] text-lg leading-relaxed">
            Negotiate, collaborate, and continue conversations privately. From skill swaps to paid work, everything starts with a message.
          </p>
        </motion.div>
      </section>

      {/* Planned Features */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mt-28">
        <h3 className="text-3xl font-bold mb-8 tracking-tight">Planned Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {plannedFeatures.map((f, i) => (
            <div key={i} className="bg-[#151B23] border border-[#26303D] rounded-xl px-4 py-3 flex items-center gap-2 text-sm hover:border-[#22C55E]/30 transition-colors">
              <Check size={14} className="text-[#22C55E] flex-shrink-0" />
              <span className="text-[#F8FAFC]">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-32 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            A trusted community where <br />every student can <span className="text-[#22C55E]">learn, earn, help</span> and grow together.
          </h2>
        </motion.div>
      </section>

      {/* Download */}
      <section id="download" className="px-6 md:px-12 max-w-4xl mx-auto mt-32 mb-20">
        <div className="bg-[#151B23] border border-[#26303D] rounded-3xl p-12 text-center shadow-2xl">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-1.5 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
              </span>
              Under Development
            </div>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-[#F8FAFC]">Something great is coming</h3>
          <p className="text-[#94A3B8] mt-4 max-w-lg mx-auto">
            We're building the ultimate student collaboration platform. Stay tuned for the launch!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
              disabled
              className="bg-[#26303D] text-[#94A3B8] px-10 py-5 rounded-full font-medium flex items-center gap-2 cursor-not-allowed opacity-60"
            >
              <Download size={22} /> Download APK (Coming Soon)
            </button>
            <a href="https://github.com/sugaredcookie/justAsk" className="border border-[#26303D] hover:border-[#94A3B8] px-10 py-5 rounded-full font-medium flex items-center gap-2 transition-colors">
              <Github size={22} /> View on GitHub
            </a>
          </div>
          <p className="text-xs text-[#94A3B8] mt-6">
            ⚡ We'll notify you when the APK is ready. Join the waitlist by starring us on GitHub.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#26303D] px-6 md:px-12 py-10 text-[#94A3B8] text-sm flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">JustAsk</span>
          <span>·</span>
          <span>Made with ❤️ by the JustAsk Team</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/sugaredcookie/justAsk" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}