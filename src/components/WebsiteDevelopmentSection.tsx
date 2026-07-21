import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Code, 
  Settings, 
  Cpu, 
  Server, 
  Layers, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

interface VerticalContent {
  id: string;
  label: string;
  icon: React.ReactNode;
  subheading: string;
  heading: string;
  paragraph1: string;
  paragraph2: string;
  features: {
    title: string;
    desc: string;
  }[];
}

export default function WebsiteDevelopmentSection() {
  const verticals: VerticalContent[] = [
    {
      id: 'website-design',
      label: 'Website Design',
      icon: <Monitor className="h-4 w-4 shrink-0" />,
      subheading: 'AESTHETICS & BRANDING IN FOCUS',
      heading: 'Website Design',
      paragraph1: 'We believe a great website starts with an unforgettable visual identity. Our designer-led approach blends modern typography, high-impact imagery, and intuitive layouts that instantly communicate your company\'s core values.',
      paragraph2: 'From wireframes to final pixel-perfect mockups, we design with user engagement and brand storytelling at the forefront, creating a premium digital experience.',
      features: [
        { title: 'Custom UI/UX', desc: 'Tailored journeys for high user retention' },
        { title: 'Visual Identity', desc: 'Bespoke color palettes & asset design' }
      ]
    },
    {
      id: 'web-app',
      label: 'Web Application Development',
      icon: <Code className="h-4 w-4 shrink-0" />,
      subheading: 'SCALABLE ARCHITECTURE & APIs',
      heading: 'Web Application Development',
      paragraph1: 'Powering complex enterprise business processes through high-performance web applications. We architect robust backend services, secure databases, and clean frontend architectures designed to grow with your user base.',
      paragraph2: 'Our development methodologies ensure high test coverage, strict compliance with web security guidelines, and seamless API integrations with existing enterprise systems.',
      features: [
        { title: 'API-First Design', desc: 'RESTful & GraphQL secure endpoints' },
        { title: 'Enterprise Scale', desc: 'Built to handle thousands of concurrent transactions' }
      ]
    },
    {
      id: 'wordpress',
      label: 'WordPress Development',
      icon: <Settings className="h-4 w-4 shrink-0" />,
      subheading: 'FLEXIBLE & USER-FRIENDLY CMS',
      heading: 'WordPress Development',
      paragraph1: 'Empower your marketing and content teams with headless or traditional WordPress implementations that are blazing fast, fully secure, and easy to update without developer bottlenecking.',
      paragraph2: 'We build custom Gutenberg block themes and secure custom plugins, avoiding slow page builders and heavy template bloating to keep Core Web Vitals in the green.',
      features: [
        { title: 'High Performance', desc: 'Optimized themes with green PageSpeed scores' },
        { title: 'Complete Autonomy', desc: 'Easy block editing & custom field controls' }
      ]
    },
    {
      id: 'node-js',
      label: 'Node JS Development',
      icon: <Cpu className="h-4 w-4 shrink-0" />,
      subheading: 'TECHNOLOGY LEADER IN WEB SOLUTIONS',
      heading: 'Website Development',
      paragraph1: 'We craft digital landscapes, propelling businesses forward! Embracing the philosophy that one size doesn\'t fit all in web development, we tailor each website with a personalized touch to meet distinct business requirements. Our seasoned web designers and full-stack developers adeptly transform your vision into a bespoke reality.',
      paragraph2: 'Positioned as a distinguished web development company in India, we stay at the forefront of technological advancements. Navigating through LAMP to exploring MEAN, we seamlessly traverse the spectrum from business websites to custom applications.',
      features: [
        { title: 'Full-Stack Capability', desc: 'Robust Node js, PHP & Framework setups' },
        { title: 'Responsive & Adaptive', desc: 'Fully optimized mobile or desktop viewing' }
      ]
    },
    {
      id: 'php',
      label: 'PHP Development',
      icon: <Server className="h-4 w-4 shrink-0" />,
      subheading: 'TIME-TESTED SECURE RUNTIMES',
      heading: 'PHP & Laravel Solutions',
      paragraph1: 'Build modern, secure web products using Laravel and PHP. We leverage robust frameworks to deliver high-quality web applications rapidly, with out-of-the-box user authentication, mailing queues, and caching.',
      paragraph2: 'From refactoring legacy PHP systems to launching brand new custom portals, our certified PHP engineering ensures your application remains fast, secure, and easily maintainable.',
      features: [
        { title: 'Laravel Ecosystem', desc: 'Utilizing modern queueing & caching' },
        { title: 'High Security', desc: 'Protected against OWASP Top 10 vulnerabilities' }
      ]
    },
    {
      id: 'angular',
      label: 'Angular Development',
      icon: <Layers className="h-4 w-4 shrink-0" />,
      subheading: 'ENTERPRISE FRONTEND SYSTEMS',
      heading: 'Angular Applications',
      paragraph1: 'Create structured, robust single-page applications with Angular. Perfect for institutional dashboards, healthcare portals, and complex B2B systems that demand strict modularity and strict TypeScript typings.',
      paragraph2: 'We leverage Angular\'s dependency injection, state management engines, and responsive reactive forms to deliver fluid, real-time client-side experiences.',
      features: [
        { title: 'Strict Type Safety', desc: 'Highly maintainable & scalable codebases' },
        { title: 'Reactive Architecture', desc: 'Using RxJS for instant real-time data flows' }
      ]
    }
  ];

  const [activeVertical, setActiveVertical] = useState<string>('node-js');

  const currentContent = verticals.find(v => v.id === activeVertical) || verticals[3];

  return (
    <section id="website-development-section" className="py-10 bg-[#fff7ed] border-b border-[#e5dfd3] relative">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0284c7]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="flex justify-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest text-[#0284c7] bg-[#e0f2fe] border border-[#bae6fd] uppercase shadow-sm">
              EMPOWERING DIGITAL EXCELLENCE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1c2421] tracking-tight">
            Professional <span className="text-[#0284c7] underline decoration-[#0284c7]/30 decoration-wavy">Website Development</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            We build state-of-the-art websites and customized web applications tailored uniquely to support your domestic & global business expansion.
          </p>
        </div>

        {/* Dynamic Interactive Bento Card Container */}
        <div className="bg-white rounded-[2.5rem] border border-[#e5dfd3] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[580px]">
          
          {/* Left Column (Dark Sidebar for Verticals) */}
          <div className="w-full md:w-[40%] bg-[#0a0a0a] p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden">
            {/* Soft Ambient Light inside dark panel */}
            <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#0284c7]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-[#0284c7] animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase">
                  EXPLORE SPECIALIZED VERTICALS
                </span>
              </div>

              {/* Vertical Menu Items */}
              <div className="space-y-3">
                {verticals.map((v) => {
                  const isActive = v.id === activeVertical;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setActiveVertical(v.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 text-left border ${
                        isActive 
                          ? 'bg-[#121212] border-[#0284c7] text-[#0284c7] shadow-[0_0_15px_rgba(2,132,199,0.15)]' 
                          : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-xl transition-colors ${
                          isActive ? 'bg-[#0284c7]/10 text-[#0284c7]' : 'bg-[#1a1a1a] text-gray-400'
                        }`}>
                          {v.icon}
                        </div>
                        <span className="text-sm font-sans font-bold tracking-wide">
                          {v.label}
                        </span>
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${
                        isActive ? 'translate-x-1 text-[#0284c7]' : 'text-gray-600'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between mt-8 md:mt-0">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full">
                  100% CUSTOM STACK
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Light Content Display Box) */}
          <div className="w-full md:w-[60%] p-6 sm:p-10 md:p-12 flex flex-col justify-start text-left relative bg-[#fff7ed]">
            
            {/* Content Switch Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Meta Subtitle */}
                <div className="space-y-0.5">
                  <span className="text-xs font-mono font-bold text-[#0284c7] tracking-widest uppercase">
                    {currentContent.subheading}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#1c2421] tracking-tight font-medium">
                    {currentContent.heading}
                  </h3>
                </div>

                {/* Description Paragraphs */}
                <div className="space-y-1.5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>{currentContent.paragraph1}</p>
                  <p>{currentContent.paragraph2}</p>
                </div>

                {/* Bottom Check Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#e5dfd3]">
                  {currentContent.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-3">
                      <div className="p-1 rounded-full bg-sky-50 text-[#0284c7] shrink-0 mt-0.5 border border-sky-100">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-sans font-bold text-[#1c2421]">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-normal">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
