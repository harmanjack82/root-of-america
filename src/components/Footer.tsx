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
  setActiveView: (view: 'landing' | 'dashboard' | 'trade-desk' | 'about-us' | 'disclaimer' | 'refund-policy' | 'privacy-policy' | 'terms-of-trade') => void;
  setDisclaimerSection?: (section: string | undefined) => void;
}

export default function Footer({ onScrollTo, setActiveView, setDisclaimerSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <footer id="footer" className="bg-[#1c2421] text-gray-400 font-sans border-t-8 border-[#0e4a36]">
      
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
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400 leading-relaxed">
                At Rootofamerica, we are committed to helping businesses expand their reach, strengthen their online presence, and connect with genuine buyers and sellers worldwide. Our goal is to provide businesses with the tools, opportunities, and support they need to grow faster and more efficiently in today's competitive marketplace.
              </p>
              {isExpanded && (
                <div className="space-y-3 pt-1">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Rootofamerica offers professional business solutions, digital promotion services, and valuable networking opportunities that help organizations establish a strong market presence. We believe that the success of our clients reflects our own success, which is why we focus on building long-term relationships based on trust, transparency, and mutual growth.
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    As a leading B2B business platform, Rootofamerica serves as a bridge between buyers and suppliers across various industries. We provide a secure and reliable environment where businesses can showcase their products and services, generate quality inquiries, and explore new business opportunities globally. Our dedicated support team is available to assist users and ensure a seamless experience throughout their business journey.
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    With extensive experience in the B2B industry, Rootofamerica continues to empower businesses by offering innovative solutions that simplify trade and promote sustainable growth. We strive to create a marketplace where buyers and sellers can connect, collaborate, and conduct business confidently and effectively.
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Our vision is to provide every business with maximum exposure to national and international markets while helping them build valuable industry connections. We aim to become a trusted destination where entrepreneurs, manufacturers, exporters, suppliers, and service providers can fulfill all their business requirements under one platform.
                  </p>
                </div>
              )}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b] hover:text-amber-400 transition-colors flex items-center space-x-1 mt-2 focus:outline-none cursor-pointer"
              >
                <span>{isExpanded ? 'View Less' : 'View More'}</span>
              </button>
            </div>

            <div className="space-y-2.5 text-xs font-mono pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-tight">6300 RIVERSIDE PLAZA NW STE 100 #3037, ALBUQUERQUE, NEW MEXICO 87120, UNITED STATES</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+1 (800) 555-ROA-B2B</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Info@rootofamerica.com</span>
              </div>
              <div className="pt-2 border-t border-gray-800 text-[11px] text-gray-400">
                <span className="text-amber-400 font-bold block mb-0.5">Payment Company:</span>
                <span>Tixisle LLC — All billing and payments are accepted and processed through Tixisle LLC.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Portfolios */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setActiveView('about-us')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (setDisclaimerSection) setDisclaimerSection('website-disclaimer');
                    setActiveView('disclaimer');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView('refund-policy');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveView('privacy-policy');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
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
            </ul>
          </div>

          {/* Column 5: Compliance */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Corporate &amp; Billing</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Roots of America is operated and billing is handled by <strong className="text-gray-300">Tixisle LLC</strong>.
            </p>
            <p className="text-[11px] text-gray-500 font-mono leading-tight">
              6300 RIVERSIDE PLAZA NW STE 100 #3037, ALBUQUERQUE, NM 87120, USA
            </p>
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>© 2026 Tixisle LLC (Roots Of America). All Business rights reserved.</p>
          <div className="flex space-x-6 text-gray-500">
            <button 
              id="terms-of-trade-footer-btn"
              onClick={() => setActiveView('terms-of-trade')} 
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Terms of Trade
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
