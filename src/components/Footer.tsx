import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Globe2,
  Lock
} from 'lucide-react';

interface FooterProps {
  onScrollTo: (elementId: string) => void;
  setActiveView: (view: 'landing' | 'dashboard') => void;
}

export default function Footer({ onScrollTo, setActiveView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c2421] text-gray-400 font-sans border-t-8 border-[#0e4a36]">
      
      {/* Upper Certifications Bar */}
      <div className="bg-[#0e4a36] py-6 text-white text-xs border-b border-[#135d44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-[#f59e0b]" />
            <span className="font-mono tracking-wider font-bold">DUNS: 88-992-1204 • REGISTERED US CORPORATE CONTRACTOR</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-[#faf8f5]/85">
            <span>✓ USDA ORGANIC COMMODITY CELL</span>
            <span>✓ FSC® C123456 CHAIN OF CUSTODY</span>
            <span>✓ FDA REGISTERED STORAGE FACILITIES</span>
          </div>
        </div>
      </div>

      {/* Main Sitemaps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center space-x-2 text-white">
              <div className="bg-white/10 p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-[#f59e0b]" />
              </div>
              <span className="font-bold tracking-wider text-lg">ROOTS OF AMERICA</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Powering the backbone of US manufacturing and sustainable enterprise through highly standardized, traceable wholesale commodity pipelines. Licensed in all 50 states for commercial freight and intermodal shipping.
            </p>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span>100 S. Wacker Drive, Chicago, IL 60606, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <span>+1 (800) 555-ROA-B2B</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>procurement@rootsofamerica.b2b.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Portfolios */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onScrollTo('hero-section')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('lumber-section')} className="hover:text-white transition-colors cursor-pointer">
                  Hardwood Timber
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('fiber-section')} className="hover:text-white transition-colors cursor-pointer">
                  Natural Fibers
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('bio-section')} className="hover:text-white transition-colors cursor-pointer">
                  Bio-Materials
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech & Solutions */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Logistics</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onScrollTo('calculator-section')} className="hover:text-white transition-colors cursor-pointer">
                  Cargo Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('tax-section')} className="hover:text-white transition-colors cursor-pointer">
                  Cargo Compliance
                </button>
              </li>
              <li>
                <span className="text-gray-600 line-through">REST API Docs</span>
              </li>
              <li>
                <span className="text-gray-600 line-through">EDI Connection</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Portal */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Partner Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setActiveView('dashboard')} className="hover:text-white transition-colors flex items-center space-x-1 cursor-pointer">
                  <Lock className="h-3 w-3 text-amber-500" />
                  <span>Client Dashboard</span>
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('sourcing-catalog-section')} className="hover:text-white transition-colors cursor-pointer">
                  RFQ Drafting
                </button>
              </li>
              <li>
                <span className="text-gray-600">Carrier Registry</span>
              </li>
              <li>
                <span className="text-gray-600">FOB Port Logs</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Compliance */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Corporate</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Roots of America is a Delaware registered C-Corporation in good standing. All materials comply with Section 102 of US Sourcing Standards.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                <Globe2 className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>© {currentYear} Roots Of America Inc. All wholesale trade rights reserved.</p>
          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">FOB Agreements</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
