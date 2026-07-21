import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Truck, 
  TrendingUp, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import heroImage from '../assets/images/hero_supply_chain_1783154011561.jpg';

interface HeroProps {
  onStartCalculator: () => void;
  onBrowseSourcing: () => void;
}

export default function Hero({ onStartCalculator, onBrowseSourcing }: HeroProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section id="hero-section" className="relative bg-gradient-to-br from-[#faf8f5] via-[#f5edd7] to-[#e6dbbf] overflow-hidden pt-6 pb-20 md:pt-14 md:pb-20">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0e4a36]/10 rounded-bl-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Registered US Entity Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#0e4a36]/10 text-[#0e4a36] px-3.5 py-1.5 rounded-full w-fit self-start border border-[#0e4a36]/20"
            >
              <ShieldCheck className="h-4 w-4 text-[#0e4a36]" />
              <span className="text-xs font-mono font-bold tracking-wider">USA REGISTERED B2B CORPORATION • ESTABLISHED COMMERCE</span>
            </motion.div>

            {/* Core Enterprise Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-sans font-bold tracking-tight text-[#1c2421]">
                The Premier <span className="text-[#0e4a36] relative inline-block">
                  USA-Sourced
                  <span className="absolute left-0 bottom-1.5 w-full h-1 bg-[#f59e0b] rounded-full" />
                </span> Supply Chain Engine.
              </h1>
              <div className="space-y-4 max-w-xl text-left">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  At Rootofamerica, we are committed to helping businesses expand their reach, strengthen their online presence, and connect with genuine buyers and sellers worldwide. Our goal is to provide businesses with the tools, opportunities, and support they need to grow faster and more efficiently in today's competitive marketplace.
                </p>
                {isExpanded && (
                  <div className="space-y-4 pt-1">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Rootofamerica offers professional business solutions, digital promotion services, and valuable networking opportunities that help organizations establish a strong market presence. We believe that the success of our clients reflects our own success, which is why we focus on building long-term relationships based on trust, transparency, and mutual growth.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      As a leading B2B business platform, Rootofamerica serves as a bridge between buyers and suppliers across various industries. We provide a secure and reliable environment where businesses can showcase their products and services, generate quality inquiries, and explore new business opportunities globally. Our dedicated support team is available to assist users and ensure a seamless experience throughout their business journey.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      With extensive experience in the B2B industry, Rootofamerica continues to empower businesses by offering innovative solutions that simplify trade and promote sustainable growth. We strive to create a marketplace where buyers and sellers can connect, collaborate, and conduct business confidently and effectively.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Our vision is to provide every business with maximum exposure to national and international markets while helping them build valuable industry connections. We aim to become a trusted destination where entrepreneurs, manufacturers, exporters, suppliers, and service providers can fulfill all their business requirements under one platform.
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#0e4a36] hover:text-[#0b3c2a] transition-colors flex items-center space-x-1 mt-2 focus:outline-none cursor-pointer"
                >
                  <span>{isExpanded ? 'View Less' : 'View More'}</span>
                </button>
              </div>
            </motion.div>

            {/* Micro USP Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-[#0e4a36] flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-gray-700">USDA Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-[#0e4a36] flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-gray-700">FSC Hardwood Timber</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-[#0e4a36] flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-gray-700">100% Compliance Clean</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-[#0e4a36] flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-gray-700">FOB Port Shipping</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                id="hero-primary-cta"
                onClick={onBrowseSourcing}
                className="bg-[#0e4a36] hover:bg-[#0b3c2a] text-[#faf8f5] px-8 py-4 rounded-xl font-sans font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>Submit Sourcing Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={onStartCalculator}
                className="bg-white border-2 border-[#e5dfd3] hover:border-[#0e4a36] text-[#1c2421] px-8 py-4 rounded-xl font-sans font-bold text-sm transition-all flex items-center justify-center space-x-2"
              >
                <TrendingUp className="h-4 w-4 text-[#f59e0b]" />
                <span>Calculate Wholesale Discount</span>
              </button>
            </motion.div>

            {/* Trust Badging */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 border-t border-[#e5dfd3] flex items-center space-x-6 text-xs text-gray-400 font-mono"
            >
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                <span className="text-[#1c2421] font-sans font-semibold ml-1">4.9 / 5</span>
              </div>
              <span>DUNS VERIFIED VENDOR</span>
              <span>100% SECURE ESCROW</span>
            </motion.div>

          </div>

          {/* Right Imagery Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative mt-6 lg:mt-0"
          >
            {/* Premium Frame with high-pixel image */}
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-white aspect-[16/10]">
              <img 
                src={heroImage} 
                alt="Roots Of America B2B Wholesale Supply Chain Logistics"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c2421]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Metric Badge 1: Logistics hub speed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 md:right-4 bg-white/95 backdrop-blur border border-[#e5dfd3] rounded-2xl p-4 shadow-lg flex items-center space-x-3 max-w-xs"
            >
              <div className="bg-[#f59e0b]/10 text-[#f59e0b] p-2 rounded-xl">
                <Truck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-gray-500 uppercase">Average Lead Time</p>
                <p className="text-sm font-sans font-extrabold text-[#1c2421]">3.8 Working Days</p>
              </div>
            </motion.div>

            {/* Floating Metric Badge 2: Supply Purity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 md:left-4 bg-white/95 backdrop-blur border border-[#e5dfd3] rounded-2xl p-4 shadow-lg flex items-center space-x-3 max-w-xs"
            >
              <div className="bg-[#0e4a36]/10 text-[#0e4a36] p-2 rounded-xl">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-gray-500 uppercase">National Fulfilment</p>
                <p className="text-sm font-sans font-extrabold text-[#1c2421]">8 Core USA Hubs</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
