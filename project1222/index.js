import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Zap, 
  Layout, 
  Palette, 
  Smartphone, 
  Moon, 
  GitFork, 
  Terminal, 
  Send, 
  Github, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';

// ====================================================================
// Helper Components (Simplified for brevity, but structurally complete)
// ====================================================================

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all group">
    <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Step = ({ number, title, desc, icon }) => (
  <div className="flex gap-6 items-start relative z-10">
    <div className="w-10 h-10 rounded-full bg-slate-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
      {icon}
    </div>
    <div className="pb-4">
      <h4 className="text-lg font-bold text-slate-200 mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const TechBadge = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium">
    {icon}
    <span>{label}</span>
  </div>
);

// ====================================================================
// Main Application Component
// ====================================================================

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar (Glass Morphism on scroll)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation - Uses Backdrop Blur (Glass Morphism) on scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              DevSprint
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Challenge', 'Improve', 'How It Works'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="#" 
              className="px-5 py-2 bg-white text-slate-950 font-semibold rounded-full hover:bg-indigo-50 transition-transform active:scale-95 flex items-center gap-2 text-sm"
            >
              <Github size={16} />
              Fork Repository
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
              {['Challenge', 'Improve', 'How It Works'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-left text-lg font-medium text-slate-400 hover:text-white"
              >
                {item}
              </button>
            ))}
            <a href="#" className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold">
              <Github size={18} /> Fork Repo
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="challenge">
        {/* Background Gradients (for visual depth) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            Hackathon Mode On
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            REDESIGN. 
            {/* The AMAZING TEXT EFFECT is applied here using inline styles */}
            <span 
              style={{
                backgroundImage: "url('/your-image-url.jpg')", // Use your image path here
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: 'cover',
                display: 'inline-block', // Necessary for Webkit properties to work
                transition: 'all 0.5s ease-out', // Added for extra "stunning" flair
              }}
              className="mx-3 hover:scale-105 inline-block transition-transform duration-300"
            >
              STUNNING.
            </span> 
            <br className="hidden md:block" /> 
            MAKE IT YOURS.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to the Landing Page Redesign Sprint. Take a basic Next.js + Tailwind template and transform it into a masterpiece. No limits. Pure creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollToSection('how-it-works')} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-indigo-500/40 flex items-center justify-center gap-2 group">
              Start Contributing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
              <Github size={18} />
              View Source
            </button>
          </div>

          {/* Tech Stack Mini-bar */}
          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <TechBadge icon={<Cpu size={20} />} label="Next.js App Router" />
              <TechBadge icon={<Palette size={20} />} label="Tailwind CSS" />
              <TechBadge icon={<Code size={20} />} label="TypeScript" />
          </div>
        </div>
      </section>

      {/* What You Can Improve Section */}
      <section id="improve" className="py-20 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unleash Your Creativity</h2>
            <p className="text-slate-400">
              You have total freedom. Enhance UX, add animations, or completely overhaul the design. Here are a few areas to focus on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Layout className="text-blue-400" />}
              title="Layout Redesign"
              description="Break the grid. Experiment with bento grids, asymmetry, or distinct hero sections."
            />
            <FeatureCard 
              icon={<Zap className="text-yellow-400" />}
              title="Animations & Transitions"
              description="Add Framer Motion or CSS transitions to bring the static page to life."
            />
            <FeatureCard 
              icon={<Smartphone className="text-pink-400" />}
              title="Responsive Polish"
              description="Ensure it looks perfect on everything from a 4k monitor to a fold phone."
            />
            <FeatureCard 
              icon={<Palette className="text-purple-400" />}
              title="Modern UI Kits"
              description="Integrate ShadcnUI, Radix, or build your own component library."
            />
            <FeatureCard 
              icon={<Moon className="text-indigo-400" />}
              title="Theming"
              description="Implement a robust dark/light mode toggle with system preference detection."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="text-teal-400" />}
              title="Accessibility & SEO"
              description="Improve semantic HTML, aria-labels, and meta tags for better performance."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-900/30 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Contribution Pipeline</h2>
              <p className="text-slate-400 mb-8">
                Follow these simple steps to get started. We are evaluating design creativity, code cleanliness, and usage of Tailwind utility classes.
              </p>
              
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-slate-800">
                <Step 
                  number="01" 
                  title="Fork & Clone" 
                  desc="Fork the repository to your GitHub account and clone it locally." 
                  icon={<GitFork size={20} />}
                />
                <Step 
                  number="02" 
                  title="Install & Run" 
                  desc="Run 'npm install' then 'npm run dev' to fire up the local server." 
                  icon={<Terminal size={20} />}
                />
                <Step 
                  number="03" 
                  title="Create Magic" 
                  desc="Code your redesign. Add components, fix styles, and make it pop." 
                  icon={<Code size={20} />}
                />
                <Step 
                  number="04" 
                  title="Deploy & Submit" 
                  desc="Deploy (Vercel/Netlify) and submit your PR link." 
                  icon={<Send size={20} />}
                />
              </div>
            </div>

            {/* Terminal Mockup - Clean and Modern UI element */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2 shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono ml-2">terminal — zsh</div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="text-slate-400 mb-2"># Clone the repository</div>
                  <div className="flex gap-2 mb-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-200">git clone https://github.com/sprint/landing-page.git</span>
                  </div>

                  <div className="text-slate-400 mb-2"># Install dependencies</div>
                  <div className="flex gap-2 mb-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~/landing-page</span>
                    <span className="text-slate-200">npm install</span>
                  </div>

                  <div className="text-slate-400 mb-2"># Start the development server</div>
                  <div className="flex gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~/landing-page</span>
                    <span className="text-slate-200">npm run dev</span>
                  </div>
                  <div className="mt-4 text-indigo-400">
                    ready - started server on 0.0.0.0:3000, url: http://localhost:3000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to show off your skills?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            The repository is waiting. The challenge is set. Build the best version of this page and share it with the community.
          </p>
          <button className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-indigo-500/10">
            Get The Repository
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-500 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
              <Code size={14} className="text-white" />
            </div>
            <span className="font-semibold text-slate-300">DevSprint</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">License</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Code of Conduct</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contributors</a>
          </div>

          <div className="flex gap-4">
              <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;