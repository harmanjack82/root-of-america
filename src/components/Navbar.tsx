import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingCart, 
  FileSpreadsheet, 
  ShieldCheck, 
  TrendingUp, 
  Truck, 
  Globe2, 
  Briefcase,
  Users2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Crown,
  Sparkles
} from 'lucide-react';
import { RfqItem } from '../types';

interface NavbarProps {
  rfqCount: number;
  onOpenRfq: () => void;
  activeView: 'landing' | 'dashboard' | 'trade-desk' | 'about-us' | 'disclaimer' | 'refund-policy' | 'privacy-policy' | 'terms-of-trade' | 'premium-services';
  setActiveView: (view: 'landing' | 'dashboard' | 'trade-desk' | 'about-us' | 'disclaimer' | 'refund-policy' | 'privacy-policy' | 'terms-of-trade' | 'premium-services') => void;
  onScrollTo: (elementId: string) => void;
}

export default function Navbar({ 
  rfqCount, 
  onOpenRfq, 
  activeView, 
  setActiveView,
  onScrollTo
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdowns = {
    sourcing: {
      label: 'Sourcing Hub',
      items: [
        { name: 'Organic Crops', desc: 'USDA Organic Red Wheat, Soybeans, & Raw Grains', target: 'ag-section' },
        { name: 'Hardwood Timber', desc: 'FSC Appalachian Oak, Black Walnut Slabs, Maple', target: 'lumber-section' },
        { name: 'Natural Fibers', desc: 'Extra-Long Staple Texas Cotton, Kentucky Industrial Hemp', target: 'fiber-section' },
        { name: 'Eco Bio-Materials', desc: 'Compostable PLA Resins & Recycled Kraft board', target: 'bio-section' },
      ]
    },
    solutions: {
      label: 'B2B Solutions',
      items: [
        { name: 'Volume Contract Engine', desc: 'Interactive pricing brackets & custom MOQs', target: 'calculator-section' },
        { name: 'Cargo Compliance Registry', desc: 'Real-time cargo screening compliance validator', target: 'tax-section' },
        { name: 'Intermodal Logistics network', desc: 'US freight, rail, and port-level cargo routes', target: 'calculator-section' },
      ]
    }
  };

  const handleDropdownClick = (target: string) => {
    setActiveDropdown(null);
    setIsOpen(false);
    onScrollTo(target);
  };

  return (
    <nav id="b2b-header-nav" className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e5dfd3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              id="nav-logo-btn"
              onClick={() => { setActiveView('landing'); onScrollTo('hero-section'); }}
              className="flex items-center space-x-3 cursor-pointer text-left"
            >
              <div className="bg-[#0e4a36] text-[#faf8f5] p-2 rounded-xl flex items-center justify-center shadow-md">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-sans font-bold tracking-tight text-xl text-[#1c2421]">ROOTS OF AMERICA</span>
                </div>
                <p className="text-[10px] font-mono text-[#0e4a36]/80 tracking-wider">REGISTERED USA ENTERPRISE</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation removed as per user selection */}
          <div className="hidden md:flex items-center">
          </div>

          {/* Action Button Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {(activeView === 'landing' || activeView === 'dashboard') ? (
              <button
                onClick={() => setActiveView('trade-desk')}
                className="bg-[#faf8f5] hover:bg-[#faf8f5]/50 border border-[#e5dfd3] hover:border-[#0e4a36] text-[#1c2421] px-4 py-2.5 rounded-xl font-sans font-semibold text-sm transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm"
              >
                <Globe2 className="h-4 w-4 text-[#0e4a36]" />
                <span>Global Trade Desk</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveView('landing')}
                className="bg-[#faf8f5] hover:bg-[#faf8f5]/50 border border-[#e5dfd3] hover:border-[#0e4a36] text-[#1c2421] px-4 py-2.5 rounded-xl font-sans font-semibold text-sm transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm"
              >
                <ArrowLeft className="h-4 w-4 text-[#0e4a36]" />
                <span>Back to Home</span>
              </button>
            )}
            {/* Active RFQ Basket Trigger replaced with Premium Services redirect */}
            {activeView === 'landing' && (
              <button
                id="nav-rfq-basket"
                onClick={() => setActiveView('premium-services')}
                className="relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#1c2421] px-5 py-2.5 rounded-xl font-sans font-bold text-sm transition-all flex items-center space-x-2 shadow-md hover:shadow-lg border border-amber-400/40 cursor-pointer"
              >
                <Crown className="h-4 w-4 text-[#1c2421]" />
                <span>Premium Services</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            {activeView === 'landing' && (
              <button
                onClick={() => setActiveView('premium-services')}
                className="relative p-2.5 bg-amber-500/10 text-amber-600 rounded-xl hover:bg-amber-500/20 transition-all cursor-pointer"
                title="Premium B2B Services"
              >
                <Crown className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-gray-100 text-gray-700 hover:text-[#0e4a36] rounded-xl transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#e5dfd3]"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {activeView === 'landing' ? (
                <>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest px-3 border-b pb-1 mb-2">Portfolio Navigation</p>
                  <button 
                    onClick={() => { setIsOpen(false); onScrollTo('ag-section'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl"
                  >
                    🌱 Organic Agriculture
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); onScrollTo('lumber-section'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl"
                  >
                    🌲 FSC Hardwood Timber
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); onScrollTo('fiber-section'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl"
                  >
                    🌾 Natural Fibers
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); onScrollTo('calculator-section'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl"
                  >
                    📊 Wholesale Calculator
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); setActiveView('trade-desk'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl flex items-center space-x-1.5"
                  >
                    <Globe2 className="h-4 w-4 text-[#0e4a36]" />
                    <span>Global Trade Desk</span>
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); onScrollTo('tax-section'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl flex items-center space-x-1.5"
                  >
                    <ShieldCheck className="h-4 w-4 text-[#0e4a36]" />
                    <span>Cargo Compliance</span>
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); setActiveView('premium-services'); }} 
                    className="block w-full text-left px-3 py-2 text-base font-medium text-[#1c2421] hover:bg-[#faf8f5] rounded-xl flex items-center space-x-1.5"
                  >
                    <Crown className="h-4 w-4 text-amber-500" />
                    <span className="font-bold text-amber-600">Premium B2B Services</span>
                  </button>
                </>
              ) : (
                <div className="p-3 bg-[#faf8f5] rounded-xl border border-dashed border-[#e5dfd3] mb-4">
                  <p className="text-xs text-gray-500">Logged in as Partner Account:</p>
                  <p className="font-bold text-[#1c2421]">Apex Woodcraft & Fabrics LLC</p>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <button
                  id="mobile-view-toggle"
                  onClick={() => {
                    setIsOpen(false);
                    if (activeView === 'landing') {
                      setActiveView('dashboard');
                    } else {
                      setActiveView('landing');
                    }
                  }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-[#e5dfd3] text-sm font-semibold rounded-xl text-[#1c2421] hover:bg-[#faf8f5] transition-all"
                >
                  {activeView === 'landing' ? (
                    <>
                      <Lock className="h-4 w-4 text-amber-500" />
                      <span>Log In To Partner Dashboard</span>
                    </>
                  ) : (
                    <>
                      <Briefcase className="h-4 w-4 text-[#0e4a36]" />
                      <span>Back to Public Sourcing</span>
                    </>
                  )}
                </button>

                {activeView === 'landing' && (
                  <button
                    id="mobile-rfq-trigger"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenRfq();
                    }}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-[#0e4a36] text-white text-sm font-semibold rounded-xl shadow-md"
                  >
                    <FileSpreadsheet className="h-4 w-4" />
                    <span>Review RFQ ({rfqCount})</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
