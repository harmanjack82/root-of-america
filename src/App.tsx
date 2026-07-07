import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Quote, 
  ArrowUp,
  FileText,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ProductCatalog from './components/ProductCatalog';
import WholesaleCalculator from './components/WholesaleCalculator';
import GlobalTradeDesk from './components/GlobalTradeDesk';
import CompliancePanel from './components/CompliancePanel';
import RfqDrawer from './components/RfqDrawer';
import Footer from './components/Footer';
import DashboardSim from './components/DashboardSim';
import GlobalTradeHub from './components/GlobalTradeHub';
import AboutUs from './components/AboutUs';
import Disclaimer from './components/Disclaimer';
import RefundPolicyPage from './components/RefundPolicyPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfTradePage from './components/TermsOfTradePage';
import bannerImg from './assets/images/b2b_supply_chain_banner_1783159950805.jpg';

import { Product, RfqItem } from './types';
import { B2B_TESTIMONIALS } from './data';

export default function App() {
  const [rfqItems, setRfqItems] = useState<RfqItem[]>([]);
  const [isRfqOpen, setIsRfqOpen] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<'landing' | 'dashboard' | 'trade-desk' | 'about-us' | 'disclaimer' | 'refund-policy' | 'privacy-policy' | 'terms-of-trade'>('landing');
  const [disclaimerSection, setDisclaimerSection] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState<number>(0);

  // Scroll visibility for Back to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Staggered testimonial autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIdx((prev) => (prev + 1) % B2B_TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // RFQ Sourcing Handlers
  const handleAddToRfq = (product: Product, quantity: number) => {
    setRfqItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = { product, quantity };
        return updated;
      }
      return [...prev, { product, quantity }];
    });
    // Visual trigger
    setIsRfqOpen(true);
  };

  const handleUpdateRfqQty = (productId: string, quantity: number) => {
    setRfqItems((prev) => 
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveRfqItem = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearRfq = () => {
    setRfqItems([]);
  };

  const addedProductIds = rfqItems.reduce((acc, item) => {
    acc[item.product.id] = item.quantity;
    return acc;
  }, {} as Record<string, number>);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    // If on Dashboard view, first switch back to Landing
    if (activeView !== 'landing') {
      setActiveView('landing');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id="roots-b2b-app-container" className="bg-[#faf8f5] min-h-screen text-[#1c2421] selection:bg-[#0e4a36]/20 relative">
      
      {/* Upper Announcement Bar */}
      <div className="bg-[#1c2421] text-white py-2 text-center text-[10px] sm:text-[11px] font-mono tracking-widest border-b border-[#faf8f5]/15 flex items-center justify-center space-x-2 px-4">
        <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0"></span>
        <span>ALL PHYSICAL COMMODITIES SERVED • SCHEDULED DRUGS & WEAPONRY STRICTLY PROHIBITED</span>
      </div>

      {/* Navigation */}
      <Navbar 
        rfqCount={rfqItems.length}
        onOpenRfq={() => setIsRfqOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
        onScrollTo={handleScrollTo}
      />

      {/* Main content switchboard */}
      <AnimatePresence mode="wait">
        {activeView === 'landing' ? (
          <motion.div
            key="landing-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <Hero 
              onStartCalculator={() => handleScrollTo('calculator-section')}
              onBrowseSourcing={() => handleScrollTo('sourcing-catalog-section')}
            />

            {/* Social Trust Brands Bar */}
            <section className="bg-white border-y border-[#e5dfd3] py-8 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-gray-400">
                  Trusted by Registered US Industrial buyers
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="flex items-center space-x-1.5">
                    <Building2 className="h-5 w-5 text-[#0e4a36]" />
                    <span className="font-sans font-bold text-sm tracking-wide text-[#1c2421]">AMERIGRAIN CO.</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Building2 className="h-5 w-5 text-[#0e4a36]" />
                    <span className="font-sans font-bold text-sm tracking-wide text-[#1c2421]">SIERRA MILLWORK</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Building2 className="h-5 w-5 text-[#0e4a36]" />
                    <span className="font-sans font-bold text-sm tracking-wide text-[#1c2421]">ATLANTIC TEXTILES</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Building2 className="h-5 w-5 text-[#0e4a36]" />
                    <span className="font-sans font-bold text-sm tracking-wide text-[#1c2421]">MIDWEST CONTAINER</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Capabilities */}
            <FeatureGrid />

            {/* Premium B2B Procurement Banner */}
            <div className="pt-4 pb-8 bg-[#faf8f5] border-b border-[#e5dfd3]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1c2421] text-white rounded-3xl p-6 sm:p-8 border border-[#e5dfd3] shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
                  {/* Full Size Background Image */}
                  <img 
                    src={bannerImg} 
                    alt="B2B Supply Chain" 
                    className="absolute inset-0 w-full h-full object-cover opacity-25 select-none pointer-events-none z-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark gradient overlay for extreme text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1c2421] via-[#1c2421]/95 to-[#1c2421]/40 z-10 pointer-events-none" />

                  {/* Decorative ambient background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e4a36]/20 rounded-full blur-3xl pointer-events-none z-10" />
                  
                  <div className="text-left space-y-3 max-w-3xl relative z-20">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-mono font-bold text-amber-500 tracking-wider uppercase bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                        ⚡ FAST-TRACK CONTRACTS
                      </span>
                      <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-wider uppercase bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                        ✓ SECURED & AUDITED
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-white">
                      Guaranteed volume pricing & instant intermodal route routing
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      Select raw materials from the sourcing catalog below, run our live volume-bracket calculator, and initiate your instant contract purchase draft session.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 relative z-20">
                    <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-2xl p-3.5 px-5">
                      <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
                      <div className="text-left">
                        <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">Screening</p>
                        <p className="text-xs text-white font-bold">100% Cleared</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-2xl p-3.5 px-5">
                      <Award className="h-5 w-5 text-amber-500 shrink-0" />
                      <div className="text-left">
                        <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">Logistics Speed</p>
                        <p className="text-xs text-white font-bold">Standard or Expedited</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sourcing Catalog */}
            <ProductCatalog 
              onAddToRfq={handleAddToRfq}
              addedProductIds={addedProductIds}
            />

            {/* Logistics & Discount Calculator */}
            <WholesaleCalculator 
              onAddRfqWithQty={handleAddToRfq}
            />

            {/* Global Trade Matchmaker Desk */}
            <GlobalTradeDesk onExploreMore={() => setActiveView('trade-desk')} />

            {/* Sourcing Cargo Compliance Panel */}
            <CompliancePanel />

            {/* BigCommerce Testimonials Replica */}
            <section className="py-20 bg-white border-b border-[#e5dfd3] relative overflow-hidden">
              {/* Decorative Quote Mark */}
              <div className="absolute top-10 left-10 text-gray-100 font-serif text-[180px] leading-none pointer-events-none select-none">
                “
              </div>
              
              <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center space-y-8">
                <div className="flex justify-center">
                  <Quote className="h-10 w-10 text-[#f59e0b] opacity-80" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIdx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <p className="text-xl sm:text-2xl font-serif italic text-gray-700 leading-relaxed">
                      "{B2B_TESTIMONIALS[currentTestimonialIdx].quote}"
                    </p>
                    
                    <div className="text-center">
                      <p className="text-base font-sans font-bold text-[#1c2421]">
                        {B2B_TESTIMONIALS[currentTestimonialIdx].author}
                      </p>
                      <p className="text-xs text-[#0e4a36] font-mono mt-0.5">
                        {B2B_TESTIMONIALS[currentTestimonialIdx].position} — {B2B_TESTIMONIALS[currentTestimonialIdx].company}
                      </p>
                      <p className="text-[10px] text-gray-400 font-mono mt-1">
                        FOB Hub: {B2B_TESTIMONIALS[currentTestimonialIdx].location}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Dot selectors */}
                <div className="flex justify-center space-x-2">
                  {B2B_TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIdx(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                        currentTestimonialIdx === idx ? 'bg-[#0e4a36] w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </section>

          </motion.div>
        ) : activeView === 'trade-desk' ? (
          <motion.div
            key="trade-desk-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlobalTradeHub onBack={() => setActiveView('landing')} />
          </motion.div>
        ) : activeView === 'about-us' ? (
          <motion.div
            key="about-us-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AboutUs onBack={() => setActiveView('landing')} />
          </motion.div>
        ) : activeView === 'disclaimer' ? (
          <motion.div
            key="disclaimer-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Disclaimer onBack={() => {
              setActiveView('landing');
              setDisclaimerSection(undefined);
            }} defaultSection={disclaimerSection} />
          </motion.div>
        ) : activeView === 'refund-policy' ? (
          <motion.div
            key="refund-policy-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <RefundPolicyPage onBack={() => setActiveView('landing')} />
          </motion.div>
        ) : activeView === 'privacy-policy' ? (
          <motion.div
            key="privacy-policy-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PrivacyPolicyPage onBack={() => setActiveView('landing')} />
          </motion.div>
        ) : activeView === 'terms-of-trade' ? (
          <motion.div
            key="terms-of-trade-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TermsOfTradePage onBack={() => setActiveView('landing')} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Secure client-sourcing dashboard simulation */}
            <DashboardSim />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sourcing RFQ Drawer */}
      <RfqDrawer 
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        rfqItems={rfqItems}
        onUpdateQty={handleUpdateRfqQty}
        onRemoveItem={handleRemoveRfqItem}
        onClearRfq={handleClearRfq}
      />

      {/* Footer */}
      <Footer 
        onScrollTo={handleScrollTo}
        setActiveView={setActiveView}
        setDisclaimerSection={setDisclaimerSection}
      />

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3.5 bg-[#0e4a36] hover:bg-[#0b3c2a] text-[#faf8f5] rounded-xl shadow-xl hover:shadow-2xl z-40 transition-all cursor-pointer"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
