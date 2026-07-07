import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Globe2, 
  ChevronRight, 
  PhoneCall, 
  Star, 
  BarChart3, 
  Award, 
  Mail, 
  UserCheck, 
  MessageSquare,
  Zap,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Volume2,
  VolumeX,
  Tv,
  Video,
  Captions,
  Clock,
  ArrowRight,
  Ship,
  Building2
} from 'lucide-react';

interface PremiumServicesPageProps {
  onBack: () => void;
}

export default function PremiumServicesPage({ onBack }: PremiumServicesPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<'gold' | 'elite' | 'standard'>('gold');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Interactive Add-ons state
  const [standardAddons, setStandardAddons] = useState({
    customs: true,
    audit: false,
  });
  const [goldAddons, setGoldAddons] = useState({
    logistics: true,
    translation: false,
    speedMatch: false,
  });
  const [eliteAddons, setEliteAddons] = useState({
    booth: false,
    api: true,
    legal: false,
  });

  // ROI Calculator state
  const [monthlyVolume, setMonthlyVolume] = useState<number>(100000); // Default $100k volume
  const [brokerFeeRate, setBrokerFeeRate] = useState<number>(3.5); // Default 3.5% standard broker commission

  // Calculated pricing based on selected interactive add-ons
  const standardPrice = 1200 + (standardAddons.customs ? 450 : 0) + (standardAddons.audit ? 300 : 0);
  const goldPrice = 2999 + (goldAddons.logistics ? 600 : 0) + (goldAddons.translation ? 450 : 0) + (goldAddons.speedMatch ? 550 : 0);
  const elitePrice = 5499 + (eliteAddons.booth ? 1200 : 0) + (eliteAddons.api ? 750 : 0) + (eliteAddons.legal ? 500 : 0);

  // Interactive micro-service utilities states
  const [activeLang, setActiveLang] = useState<'ES' | 'ZH' | 'DE' | 'PT'>('ES');
  const [invoiceQty, setInvoiceQty] = useState<number>(500);
  const [invoicePrice, setInvoicePrice] = useState<number>(12.50);
  const [searchBoostVal, setSearchBoostVal] = useState<number>(10); // Default 10x boost slider
  const [testApiConnected, setTestApiConnected] = useState<boolean>(false);
  const [testApiOutput, setTestApiOutput] = useState<string>('{"status": "waiting", "endpoint": "/v1/sourcing/timber-logs"}');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'agriculture',
    message: ''
  });

  // Interactive Animated Video Simulator States
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true);
  const [videoPlan, setVideoPlan] = useState<'standard' | 'gold' | 'elite'>('gold');
  const [videoProgress, setVideoProgress] = useState<number>(0); // Progress percentage 0-100
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1); // Speed multiplier
  const [videoMuted, setVideoMuted] = useState<boolean>(false);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);

  // Auto-ticking progress effect
  React.useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (videoPlaying) {
      timer = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            return 0; // loop back
          }
          // For 40 seconds (400 ticks at 100ms interval):
          // Each tick adds 100 / 400 = 0.25 % at 1x speed.
          return Math.min(100, prev + 0.25 * playbackSpeed);
        });
      }, 100);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [videoPlaying, playbackSpeed]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', industry: 'agriculture', message: '' });
    }, 4000);
  };

  const b2bFeatures = [
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: "Dedicated Key Account Manager",
      desc: "An active US-based trade specialist handles buyer match-making, translate inquiries, and negotiate high-volume supply contracts on your behalf."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
      title: "First-Page Category Rankings",
      desc: "Propel your products to the top of category searches and direct buyer recommendations. Gold & Elite members see up to 10x higher click-through rates."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Active Buy Leads & RFQ Access",
      desc: "Unlock immediate access to verified corporate Request for Quotes (RFQs) and direct wholesale buy leads. Submit quotes with priority delivery."
    },
    {
      icon: <Globe2 className="h-6 w-6 text-indigo-500" />,
      title: "Omnichannel SEO & Google Indexing",
      desc: "Our trade optimization experts index your products on Google, Bing, Yahoo, and international search networks to drive external organic buyers."
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: "Root Of America Verified Seal",
      desc: "A premium verified badge on your company profile that instantly signals trust, regulatory cargo compliance, and financial trade validity."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-rose-500" />,
      title: "Premium Showroom Design",
      desc: "A fully custom digital storefront with interactive wholesale calculators, tier MOQ displays, and personalized inquiries collection panels."
    }
  ];

  return (
    <div id="premium-services-container" className="bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-10 border-b border-[#e5dfd3] pb-6">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm font-sans font-bold text-[#0e4a36] hover:text-[#1c2421] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          <div className="text-xs font-mono text-gray-500 flex items-center space-x-1.5">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0e4a36] font-bold">Premium B2B Services</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-[#135d44] shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Crown className="h-48 w-48 text-amber-400" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Scale Your Wholesale Sourcing</span>
            </div>
            
            <h1 className="text-3xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Premium B2B Sourcing &amp; Sales Services
            </h1>
            
            <p className="text-sm sm:text-lg text-gray-300 font-sans leading-relaxed">
              Unlock priority placement, direct access to premium RFQ buy leads, and get dedicated US-based key account management to maximize your business transaction volume globally.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#plans-section"
                className="bg-amber-500 hover:bg-amber-600 text-[#1c2421] px-6 py-3.5 rounded-xl font-sans font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:scale-105"
              >
                View Premium Packages
              </a>
              <a 
                href="#inquiry-form"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-sans font-bold text-sm tracking-wider uppercase transition-all"
              >
                Consult a Trade Expert
              </a>
            </div>
          </div>
        </div>

        {/* Premium Benefits Grid */}
        <div className="mb-20 text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1c2421]">
              Why Choose Root Of America Premium?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base font-sans">
              Unlike traditional listing websites, we provide an active trade facilitator framework that directly sources buyers and helps close premium wholesale transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {b2bFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-[#e5dfd3] hover:border-[#0e4a36] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-[#faf8f5] p-3.5 rounded-2xl w-fit mb-6 border border-[#e5dfd3]/60 group-hover:bg-[#0e4a36]/5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1c2421] mb-2 group-hover:text-[#0e4a36] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Plans & Pricing Section */}
        <div id="plans-section" className="mb-16 py-12 border-t border-[#e5dfd3]">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1c2421]">
              Premium Membership Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm font-sans">
              Choose the level of active matching, search exposure, and marketing assistance your manufacturing or distribution enterprise needs. Toggle optional premium service add-ons below.
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto w-full">
            
            {/* 1. Standard Verified Widescreen Section */}
            <div className={`bg-white rounded-3xl p-8 sm:p-12 border-2 transition-all shadow-sm ${selectedPlan === 'standard' ? 'border-[#0e4a36] ring-4 ring-[#0e4a36]/5' : 'border-[#e5dfd3] hover:shadow-md'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                
                {/* Standard Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0e4a36] bg-[#0e4a36]/10 px-3.5 py-1.5 rounded-full border border-[#0e4a36]/20">
                        Tier I: Essential Trade
                      </span>
                      <button 
                        onClick={() => setSelectedPlan('standard')}
                        className="h-6 w-6 rounded-full border-2 border-[#e5dfd3] flex items-center justify-center cursor-pointer hover:border-[#0e4a36] transition-colors"
                      >
                        {selectedPlan === 'standard' && <div className="h-3 w-3 bg-[#0e4a36] rounded-full" />}
                      </button>
                    </div>

                    <div>
                      <h3 className="text-3xl font-serif font-bold text-[#1c2421]">Standard Verified</h3>
                      <p className="text-xs text-gray-500 font-sans mt-2.5 leading-relaxed">
                        The bedrock framework for growing local producers and trade agencies. Establishes a verified presence in our national sourcing directories, unlocks open procurement boards, and supports bulk pricing tier matrices.
                      </p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2 bg-emerald-50 text-[#0e4a36] px-3.5 py-2.5 rounded-xl border border-emerald-100/60 text-xs font-sans font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0e4a36]" />
                          <span>Includes upto 20 leads per month</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-50 text-blue-800 px-3.5 py-2.5 rounded-xl border border-blue-100/60 text-xs font-sans font-medium">
                          <Globe2 className="h-4 w-4 shrink-0 text-blue-600" />
                          <span>Dynamic Website: Up to 10 pages included</span>
                        </div>
                      </div>
                    </div>

                    {/* Standard Sourcing Price & Add-ons */}
                    <div className="py-5 border-t border-b border-gray-100 space-y-4">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-5xl font-bold text-[#1c2421] font-mono">${standardPrice.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 font-sans"> / year flat rate</span>
                      </div>
                      <div className="text-[10px] text-[#0e4a36] font-mono">
                        Base: $1,200/yr {standardAddons.customs || standardAddons.audit ? `+ selected add-ons` : ''}
                      </div>

                      {/* Interactive Add-ons board */}
                      <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3]/60 space-y-3">
                        <p className="text-[10px] font-mono font-bold text-gray-700 uppercase tracking-widest mb-1">
                          Tailor Your Standard Plan Add-ons:
                        </p>
                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={standardAddons.customs}
                            onChange={(e) => setStandardAddons({ ...standardAddons, customs: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-[#0e4a36] focus:ring-[#0e4a36] h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">Customs Clearance Support</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Expedited custom filing forms and port filing guides.</span>
                            <span className="text-emerald-700 font-mono text-[10px] bg-emerald-100/60 px-1.5 py-0.5 rounded inline-block mt-1">+$450/yr</span>
                          </div>
                        </label>

                        <div className="border-t border-gray-200/50 my-2"></div>

                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={standardAddons.audit}
                            onChange={(e) => setStandardAddons({ ...standardAddons, audit: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-[#0e4a36] focus:ring-[#0e4a36] h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">Third-Party Quality Audits</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">On-demand laboratory checkups and chemical testing voucher.</span>
                            <span className="text-emerald-700 font-mono text-[10px] bg-emerald-100/60 px-1.5 py-0.5 rounded inline-block mt-1">+$300/yr</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelectedPlan('standard'); document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="w-full py-4 bg-[#faf8f5] hover:bg-[#0e4a36] hover:text-white text-[#1c2421] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-[#e5dfd3] hover:shadow-lg cursor-pointer"
                  >
                    Select Standard Verified
                  </button>
                </div>

                {/* Standard Services Board */}
                <div className="lg:col-span-7 bg-[#faf8f5] p-8 rounded-3xl border border-[#e5dfd3]/60 flex flex-col justify-between space-y-8">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-6">
                      <Sparkles className="h-5 w-5 text-[#0e4a36]" />
                      <h4 className="text-sm font-mono font-bold text-gray-800 uppercase tracking-widest">
                        Embedded Standard Service Modules
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-[#0e4a36] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Sourcing Catalogs</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Upload 100 Products</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Sellers can catalog grain, timber, minerals or textiles. Build detailed listings with customized MOQ, weight specifications, and transport metrics.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-[#0e4a36] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Procurement Board</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Access Public RFQs</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Monitor incoming purchase requests published directly by North American and global enterprise buyers. Place flat-rate wholesale supply bids.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-[#0e4a36] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Trade Operations</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Tier-MOQ Pricing Support</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Set custom discount thresholds dynamically. Instantly calculate variable bulk pricing for containers, palettes, or truckloads automatically.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-[#0e4a36] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Interactive Module</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Standard Sourcing Invoice Estimator</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed mb-1">
                          Test our automated transactional invoice generator. Slide values below:
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-blue-100 space-y-3 shadow-xs md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2 flex-1 text-left">
                          <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded inline-block">Web Presence</span>
                          <h5 className="font-serif font-bold text-gray-900 text-sm">Dynamic B2B Showroom Website (Up to 10 Pages)</h5>
                          <p className="text-xs text-gray-500 font-sans leading-relaxed">
                            Includes a fully responsive, custom-branded domain with interactive inquiry forms, optimized catalog sheets, and contact pages designed for direct North American wholesale buyers.
                          </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl text-center shrink-0 self-start sm:self-auto">
                          <span className="text-[10px] font-mono text-blue-500 block uppercase font-bold">PAGE ALLOCATION</span>
                          <span className="font-serif font-black text-blue-700 text-xl">10 Pages</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Standard Tool: Interactive Wholesale Invoice Preview */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">Draft Commercial Invoice Preview</span>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">AUTO-GENERATOR</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Sliders */}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono text-gray-600">
                            <span>Sourcing Qty:</span>
                            <span className="font-bold">{invoiceQty.toLocaleString()} units</span>
                          </div>
                          <input 
                            type="range" 
                            min="100" 
                            max="5000" 
                            step="100"
                            value={invoiceQty}
                            onChange={(e) => setInvoiceQty(Number(e.target.value))}
                            className="w-full accent-[#0e4a36] h-1.5 bg-gray-100 rounded-lg cursor-pointer"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono text-gray-600">
                            <span>Unit Price:</span>
                            <span className="font-bold">${invoicePrice.toFixed(2)}</span>
                          </div>
                          <input 
                            type="range" 
                            min="1.50" 
                            max="50.00" 
                            step="0.50"
                            value={invoicePrice}
                            onChange={(e) => setInvoicePrice(Number(e.target.value))}
                            className="w-full accent-[#0e4a36] h-1.5 bg-gray-100 rounded-lg cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Mock Invoice Output */}
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-mono text-[10px] text-gray-600 flex flex-col justify-between">
                        <div className="space-y-1">
                          <div className="flex justify-between border-b border-slate-200 pb-1 font-bold text-slate-800">
                            <span>B2B TRANS: ROOT-9922</span>
                            <span>VERIFIED</span>
                          </div>
                          <div className="flex justify-between text-[9px] text-gray-500 pt-1">
                            <span>Line Item Qty:</span>
                            <span>{invoiceQty} units</span>
                          </div>
                          <div className="flex justify-between text-[9px] text-gray-500">
                            <span>Unit Rate:</span>
                            <span>${invoicePrice.toFixed(2)} USD</span>
                          </div>
                        </div>
                        <div className="flex justify-between border-t border-dashed border-slate-300 pt-1.5 font-bold text-[#0e4a36] text-[11px]">
                          <span>EST. TRANSACTION:</span>
                          <span>${(invoiceQty * invoicePrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Full-width Lead Allocation Section */}
                <div className="lg:col-span-12 border-t border-gray-100 pt-8 mt-4">
                  <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-emerald-100 rounded-lg text-[#0e4a36]">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-gray-900 text-base">
                          Targeted B2B Lead Generation Quota
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans max-w-3xl leading-relaxed">
                        Under the Standard Verified tier, you receive an allocation of <strong className="text-gray-900 font-semibold">up to 20 verified leads per month</strong>. These high-intent procurement requests are pre-screened for purchasing authority, MOQ requirements, and active trade verification. Direct connection detail dashboards are unlocked instantly upon distribution.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 bg-white px-5 py-3.5 rounded-xl border border-emerald-100 shadow-xs self-start md:self-auto shrink-0">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Monthly Limit</span>
                        <span className="font-serif font-black text-[#0e4a36] text-2xl">20 Leads</span>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Quality Tier</span>
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-0.5">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. Gold Premium VIP Sourcing Center (Best Value Stack) */}
            <div className={`bg-white rounded-3xl p-8 sm:p-12 border-2 transition-all shadow-md relative overflow-hidden ${selectedPlan === 'gold' ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-[#e5dfd3] hover:shadow-lg'}`}>
              <div className="absolute -right-16 -top-16 bg-amber-500/10 h-64 w-64 rounded-full blur-2xl pointer-events-none"></div>
              
              {/* Premium Choice Top Badge */}
              <div className="absolute -top-1.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-sans font-black text-[9px] sm:text-[10px] tracking-widest uppercase px-6 py-2 rounded-b-xl shadow-md flex items-center space-x-1.5 border-b border-amber-400">
                <Star className="h-3 w-3 fill-white animate-spin" style={{ animationDuration: '4s' }} />
                <span>RECOMMENDED INDUSTRIAL FRAMEWORK</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pt-4">
                
                {/* Gold VIP Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                        Tier II: Active Sourcing VIP
                      </span>
                      <button 
                        onClick={() => setSelectedPlan('gold')}
                        className="h-6 w-6 rounded-full border-2 border-amber-500 flex items-center justify-center cursor-pointer"
                      >
                        {selectedPlan === 'gold' && <div className="h-3 w-3 bg-amber-500 rounded-full" />}
                      </button>
                    </div>

                    <div>
                      <h3 className="text-3xl font-serif font-bold text-[#1c2421] flex items-center space-x-2">
                        <span>Gold Premium VIP</span>
                        <Crown className="h-6 w-6 text-amber-500 fill-amber-100 animate-pulse" />
                      </h3>
                      <p className="text-xs text-gray-500 font-sans mt-2.5 leading-relaxed">
                        Our ultimate service suite designed for high-capacity manufacturers and trading corporations. Features proactive matchmaking by experienced US-based commodity specialists, priority SEO category positioning, and verified safe-trade escrow trust accounts.
                      </p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2 bg-amber-50 text-amber-800 px-3.5 py-2.5 rounded-xl border border-amber-200/60 text-xs font-sans font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />
                          <span>Includes upto 40 leads per month</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-50 text-blue-800 px-3.5 py-2.5 rounded-xl border border-blue-100/60 text-xs font-sans font-medium">
                          <Globe2 className="h-4 w-4 shrink-0 text-blue-600" />
                          <span>Dynamic Website: Up to 20 pages included</span>
                        </div>
                      </div>
                    </div>

                    {/* Gold Pricing & Add-ons */}
                    <div className="py-5 border-t border-b border-gray-100 space-y-4">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-5xl font-bold text-[#1c2421] font-mono">${goldPrice.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 font-sans"> / year flat rate</span>
                      </div>
                      <div className="text-[10px] text-amber-600 font-mono">
                        Base: $2,999/yr {goldAddons.logistics || goldAddons.translation || goldAddons.speedMatch ? `+ selected add-ons` : ''}
                      </div>

                      {/* Interactive Add-ons board */}
                      <div className="bg-[#faf8f5] p-5 rounded-2xl border border-amber-200 space-y-3">
                        <p className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-widest mb-1">
                          Tailor Your Gold VIP Add-ons:
                        </p>
                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={goldAddons.logistics}
                            onChange={(e) => setGoldAddons({ ...goldAddons, logistics: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-amber-500 focus:ring-amber-500 h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">Logistics &amp; Cargo Insurance</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Pre-arranged sea cargo container rates with full loss protections.</span>
                            <span className="text-amber-700 font-mono text-[10px] bg-amber-100 px-1.5 py-0.5 rounded inline-block mt-1">+$600/yr</span>
                          </div>
                        </label>

                        <div className="border-t border-amber-200/50 my-2"></div>

                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={goldAddons.translation}
                            onChange={(e) => setGoldAddons({ ...goldAddons, translation: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-amber-500 focus:ring-amber-500 h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">5-Language Translation Sourcing</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Automatic premium localized catalog creation.</span>
                            <span className="text-amber-700 font-mono text-[10px] bg-amber-100 px-1.5 py-0.5 rounded inline-block mt-1">+$450/yr</span>
                          </div>
                        </label>

                        <div className="border-t border-amber-200/50 my-2"></div>

                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={goldAddons.speedMatch}
                            onChange={(e) => setGoldAddons({ ...goldAddons, speedMatch: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-amber-500 focus:ring-amber-500 h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">24/7 Priority Sourcing Queue</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Instant broker response SLAs (typically &lt;2 hours).</span>
                            <span className="text-amber-700 font-mono text-[10px] bg-amber-100 px-1.5 py-0.5 rounded inline-block mt-1">+$550/yr</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelectedPlan('gold'); document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-[#1c2421] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Select Gold Premium VIP
                  </button>
                </div>

                {/* Gold Services Board */}
                <div className="lg:col-span-7 bg-[#faf8f5] p-8 rounded-3xl border border-amber-200 flex flex-col justify-between space-y-8">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-6">
                      <Crown className="h-5 w-5 text-amber-500" />
                      <h4 className="text-sm font-mono font-bold text-gray-800 uppercase tracking-widest">
                        VIP Active Sourcing Suite &amp; Matchmaker Panel
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-2xl border border-amber-100/50 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">Personalized Human Broker</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Dedicated US Trade Facilitator</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Your enterprise is paired with a specific logistics and trade analyst. They actively call on verified buyers, solicit purchase requests, and handle direct transaction audits on your behalf.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-100/50 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">Security Protocol</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Safe Trade Escrow Protection</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Mitigate supply chain transaction risks. We secure financial downpayments in an auditable US bank account, holding funds securely until cargo is certified at the loading port.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-100/50 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">Web Exposure</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Priority SEO Google Indexing</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          We push your products directly into top rankings of major search engines. High-intent corporate buyers find your timber, grain or fuel catalogs straight from standard Google queries.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-100/50 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">Interactive Module</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Directory Impressions Booster</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Simulate exposure multipliers in our database by dragging the slider below.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-3 shadow-xs md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2 flex-1 text-left">
                          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded inline-block">VIP Web Presence</span>
                          <h5 className="font-serif font-bold text-gray-900 text-sm">Dynamic Premium Showroom Website (Up to 20 Pages)</h5>
                          <p className="text-xs text-gray-500 font-sans leading-relaxed">
                            Includes custom styling, high-contrast visual showcases, advanced inventory filtering, dynamic bulk discount quote forms, and integration with local buyer search feeds.
                          </p>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 px-4 py-3 rounded-xl text-center shrink-0 self-start sm:self-auto">
                          <span className="text-[10px] font-mono text-amber-600 block uppercase font-bold">PAGE ALLOCATION</span>
                          <span className="font-serif font-black text-amber-700 text-xl">20 Pages</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gold Tool: Interactive Directory Impressions Simulator */}
                  <div className="bg-gradient-to-br from-[#1c2421] to-[#283530] text-white p-5 rounded-2xl border border-amber-400/20 space-y-4 shadow-md">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">SEO Placement Simulator</span>
                      <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">GOLD EXCLUSIVE</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-6 space-y-3">
                        <div className="flex justify-between text-[11px] font-mono text-gray-300">
                          <span>Set Search Multiplier:</span>
                          <span className="text-amber-400 font-bold">{searchBoostVal}x Visibility</span>
                        </div>
                        <input 
                          type="range" 
                          min="2" 
                          max="25" 
                          step="1"
                          value={searchBoostVal}
                          onChange={(e) => setSearchBoostVal(Number(e.target.value))}
                          className="w-full accent-amber-500 h-2 bg-white/15 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                          <span>2x Standard</span>
                          <span>12x VIP</span>
                          <span>25x Max</span>
                        </div>
                      </div>

                      <div className="md:col-span-6 bg-white/5 border border-white/15 rounded-xl p-3.5 space-y-2.5 font-sans">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-300">Est. Buyer Reach:</span>
                          <span className="font-mono font-bold text-emerald-400">{(searchBoostVal * 1650).toLocaleString()} / mo</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-300">Category Search Rank:</span>
                          <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${searchBoostVal >= 15 ? 'text-amber-400 bg-amber-500/20' : 'text-gray-300 bg-white/10'}`}>
                            {searchBoostVal >= 18 ? '★ Top Sponsor' : searchBoostVal >= 10 ? '★ Front Page' : 'Highlighted Listing'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Full-width Lead Allocation Section */}
                <div className="lg:col-span-12 border-t border-gray-100 pt-8 mt-4">
                  <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-amber-100 rounded-lg text-amber-800">
                          <Crown className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-gray-900 text-base">
                          VIP Lead Generation Allocation & Matchmaking
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans max-w-3xl leading-relaxed">
                        Under the Gold Premium VIP tier, you receive an enhanced allocation of <strong className="text-gray-900 font-semibold">up to 40 VIP leads per month</strong>. In addition to high-intent automated matches, our dedicated US-based trade officers actively match your inventory specs with major purchasing agencies, presenting verified bids directly to your account representative.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 bg-white px-5 py-3.5 rounded-xl border border-amber-100 shadow-xs self-start md:self-auto shrink-0">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Monthly Limit</span>
                        <span className="font-serif font-black text-amber-700 text-2xl">40 Leads</span>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Quality Tier</span>
                        <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block mt-0.5">VIP Match</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Enterprise Elite Widescreen Section */}
            <div className={`bg-white rounded-3xl p-8 sm:p-12 border-2 transition-all shadow-sm ${selectedPlan === 'elite' ? 'border-emerald-600 ring-4 ring-emerald-600/5' : 'border-[#e5dfd3] hover:shadow-md'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                
                {/* Elite Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                        Tier III: Omnichannel Sourcing Pipeline
                      </span>
                      <button 
                        onClick={() => setSelectedPlan('elite')}
                        className="h-6 w-6 rounded-full border-2 border-emerald-300 flex items-center justify-center cursor-pointer hover:border-emerald-600 transition-colors"
                      >
                        {selectedPlan === 'elite' && <div className="h-3 w-3 bg-emerald-600 rounded-full" />}
                      </button>
                    </div>

                    <div>
                      <h3 className="text-3xl font-serif font-bold text-[#1c2421]">Enterprise Elite</h3>
                      <p className="text-xs text-gray-500 font-sans mt-2.5 leading-relaxed">
                        The definitive omnichannel framework for global distribution networks and conglomerate suppliers. Seamlessly aggregates bulk container cargo routing, physical catalogue deployment at major US/EU industrial expos, and real-time ERP inventory sync APIs.
                      </p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3.5 py-2.5 rounded-xl border border-emerald-200/60 text-xs font-sans font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                          <span>Includes upto 60 leads per month</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-50 text-blue-800 px-3.5 py-2.5 rounded-xl border border-blue-100/60 text-xs font-sans font-medium">
                          <Globe2 className="h-4 w-4 shrink-0 text-blue-600" />
                          <span>Dynamic Website: Up to 50 pages included</span>
                        </div>
                      </div>
                    </div>

                    {/* Elite Sourcing Price & Add-ons */}
                    <div className="py-5 border-t border-b border-gray-100 space-y-4">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-5xl font-bold text-[#1c2421] font-mono">${elitePrice.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 font-sans"> / year flat rate</span>
                      </div>
                      <div className="text-[10px] text-emerald-600 font-mono">
                        Base: $5,499/yr {eliteAddons.booth || eliteAddons.api || eliteAddons.legal ? `+ selected add-ons` : ''}
                      </div>

                      {/* Interactive Add-ons board */}
                      <div className="bg-[#faf8f5] p-5 rounded-2xl border border-emerald-200 space-y-3">
                        <p className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest mb-1">
                          Tailor Your Enterprise Elite Add-ons:
                        </p>
                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={eliteAddons.booth}
                            onChange={(e) => setEliteAddons({ ...eliteAddons, booth: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-emerald-600 focus:ring-emerald-600 h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">Industrial Expo Catalogue Booth</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Physical distribution of catalogs at Chicago Mfg &amp; Frankfurt expos.</span>
                            <span className="text-emerald-700 font-mono text-[10px] bg-emerald-100 px-1.5 py-0.5 rounded inline-block mt-1">+$1,200/yr</span>
                          </div>
                        </label>

                        <div className="border-t border-emerald-200/50 my-2"></div>

                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={eliteAddons.api}
                            onChange={(e) => setEliteAddons({ ...eliteAddons, api: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-emerald-600 focus:ring-emerald-600 h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">Direct Stock Sync ERP API</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Automated webhook updates directly from your storage warehouses.</span>
                            <span className="text-emerald-700 font-mono text-[10px] bg-emerald-100 px-1.5 py-0.5 rounded inline-block mt-1">+$750/yr</span>
                          </div>
                        </label>

                        <div className="border-t border-emerald-200/50 my-2"></div>

                        <label className="flex items-start space-x-3 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={eliteAddons.legal}
                            onChange={(e) => setEliteAddons({ ...eliteAddons, legal: e.target.checked })}
                            className="rounded border-[#e5dfd3] text-emerald-600 focus:ring-emerald-600 h-4.5 w-4.5 mt-0.5"
                          />
                          <div className="text-xs font-sans text-gray-700 leading-normal">
                            <span className="font-bold block text-gray-900">Bilateral Legal Supply Drafts</span>
                            <span className="text-gray-500 block text-[10px] mt-0.5">Standard contract templates certified across US/EU trade lanes.</span>
                            <span className="text-emerald-700 font-mono text-[10px] bg-emerald-100 px-1.5 py-0.5 rounded inline-block mt-1">+$500/yr</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelectedPlan('elite'); document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="w-full py-4 bg-[#faf8f5] hover:bg-emerald-600 hover:text-white text-[#1c2421] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-[#e5dfd3] hover:shadow-lg cursor-pointer"
                  >
                    Select Enterprise Elite
                  </button>
                </div>

                {/* Elite Services Board */}
                <div className="lg:col-span-7 bg-[#faf8f5] p-8 rounded-3xl border border-emerald-200 flex flex-col justify-between space-y-8">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-6">
                      <Globe2 className="h-5 w-5 text-emerald-600" />
                      <h4 className="text-sm font-mono font-bold text-gray-800 uppercase tracking-widest">
                        Omnichannel Global Enterprise Sourcing pipeline
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Internationalization</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Multilingual Sourcing Localization</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Your inventories are automatically translated into 5 target languages (Spanish, German, Mandarin, French, Portuguese) and served to global industrial search engines.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Physical Expo</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Exhibition Catalogue Representation</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          We display your physical company profile and trade catalogs at major wholesale and industrial manufacturing expositions across North America and Europe.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Bulk Logistics</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">Direct Freight Carrier Bidding</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Skip intermediate freight markups. Use our direct portal to source sea shipping container quotes from certified shipping carriers at base industry cost.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-3 shadow-xs">
                        <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">Automated Syncer</span>
                        <h5 className="font-serif font-bold text-gray-900 text-sm">ERP Webhook Sourcing Pipeline</h5>
                        <p className="text-xs text-gray-500 font-sans leading-relaxed">
                          Integrate standard API connections directly into your inventory software. Synchronize storage stock numbers and dispatch logistics dynamically.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-emerald-200 space-y-3 shadow-xs md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-2 flex-1 text-left">
                          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded inline-block">Enterprise Web Presence</span>
                          <h5 className="font-serif font-bold text-gray-900 text-sm">Dynamic Omnichannel Portal Website (Up to 50 Pages)</h5>
                          <p className="text-xs text-gray-500 font-sans leading-relaxed">
                            Features full multi-language page variants, custom-coded interactive tools, automatic stock syncing from your local ERP database, and deep analytics tracking.
                          </p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-xl text-center shrink-0 self-start sm:self-auto">
                          <span className="text-[10px] font-mono text-emerald-600 block uppercase font-bold">PAGE ALLOCATION</span>
                          <span className="font-serif font-black text-emerald-700 text-xl">50 Pages</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elite Tools: 2 Custom Live Demos (1. Translation Live Preview, 2. ERP API Test Handshake) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Live Preview Tool 1: Catalog Localization */}
                    <div className="bg-white p-4.5 rounded-2xl border border-emerald-100 space-y-3 shadow-xs">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-1.5">
                        <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">Live Translation Review</span>
                        <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1 rounded">LOCALIZER</span>
                      </div>
                      
                      {/* Language Tabs */}
                      <div className="flex space-x-1.5 bg-gray-50 p-1 rounded-lg">
                        {(['ES', 'ZH', 'DE', 'PT'] as const).map((lang) => (
                          <button 
                            key={lang}
                            onClick={() => setActiveLang(lang)}
                            className={`flex-1 text-[9px] font-mono font-bold py-1 rounded transition-all cursor-pointer ${activeLang === lang ? 'bg-emerald-600 text-white shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>

                      {/* Display translated mock */}
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100/60 font-sans text-xs">
                        <div className="text-[9px] text-gray-400 font-mono mb-0.5">PRODUCT HEADER:</div>
                        <p className="font-bold text-[#0e4a36]">
                          {activeLang === 'ES' && 'Madera de roble blanco de primera calidad'}
                          {activeLang === 'ZH' && '优质白橡木木材'}
                          {activeLang === 'DE' && 'Premium Weißeiche Schnittholz'}
                          {activeLang === 'PT' && 'Madeira de carvalho branco de alta qualidade'}
                        </p>
                        <p className="text-[9px] text-gray-400 font-mono mt-2 mb-0.5">MOQ STATUS:</p>
                        <p className="text-[10px] text-gray-500 leading-snug">
                          {activeLang === 'ES' && 'Pedido Mínimo: 2 Contenedores de carga marítima standard.'}
                          {activeLang === 'ZH' && '起订量: 2个标准海运货柜。'}
                          {activeLang === 'DE' && 'Mindestbestellmenge: 2 Standard Seefrachtcontainer.'}
                          {activeLang === 'PT' && 'Pedido Mínimo: 2 Contêineres de carga marítima padrão.'}
                        </p>
                      </div>
                    </div>

                    {/* Live Preview Tool 2: API Test Endpoint Handshake */}
                    <div className="bg-slate-900 text-[#00ff66] p-4.5 rounded-2xl border border-[#00ff66]/10 space-y-3 shadow-md flex flex-col justify-between">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                        <span className="text-[9px] font-mono font-bold text-gray-400 uppercase">Developer ERP API Console</span>
                        <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950 px-1 rounded">ONLINE</span>
                      </div>

                      <div className="font-mono text-[9px] leading-relaxed break-all bg-black/40 p-2 rounded-lg border border-white/5 overflow-x-auto select-none">
                        {testApiOutput}
                      </div>

                      <button 
                        onClick={() => {
                          setTestApiConnected(true);
                          setTestApiOutput('{"status": "200_OK", "connected": true, "sync": "99,410 Timber units", "latency": "38ms"}');
                        }}
                        className="w-full py-2 bg-[#00ff6 green] hover:bg-emerald-800 text-white font-mono text-[9px] uppercase tracking-wider rounded-lg transition-all border border-emerald-500/40 cursor-pointer text-center font-bold"
                        style={{ backgroundColor: '#135d44' }}
                      >
                        {testApiConnected ? '✓ Handshake Completed' : '⚡ Test API Webhook'}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Full-width Lead Allocation Section */}
                <div className="lg:col-span-12 border-t border-gray-100 pt-8 mt-4">
                  <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-800">
                          <Globe2 className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-gray-900 text-base">
                          Enterprise Omnichannel Lead Pipeline Allocation
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans max-w-3xl leading-relaxed">
                        Under the Enterprise Elite tier, you receive our highest allocation of <strong className="text-gray-900 font-semibold">up to 60 global enterprise leads per month</strong>. These are enterprise-grade purchasing pipelines directly connected to public/private procurement networks, featuring high volume requests, fully verified letter-of-credit status, and localized multi-language response support.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 bg-white px-5 py-3.5 rounded-xl border border-emerald-100 shadow-xs self-start md:self-auto shrink-0">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Monthly Limit</span>
                        <span className="font-serif font-black text-emerald-800 text-2xl">60 Leads</span>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">Quality Tier</span>
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-0.5">Enterprise</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Interactive B2B Membership Plan Video Walkthrough Center */}
        <div className="bg-[#121916] text-[#faf8f5] rounded-3xl p-6 sm:p-10 mb-16 border border-[#135d44]/60 shadow-2xl relative overflow-hidden">
          {/* Subtle background graphic design */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Tv className="h-64 w-64 text-emerald-500" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-8">
            
            {/* Header section with human-friendly descriptions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#135d44]/30 pb-6">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Interactive Video Showcase &amp; Simulation
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight leading-tight">
                  Animated Service Pipeline Walkthrough
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm max-w-2xl font-sans">
                  Experience a detailed, frame-by-frame animated visual representation of how each membership plan functions. Toggle between packages to view the customized dispatch pipeline.
                </p>
              </div>

              {/* Video Plan Selectors styled like a luxury console switcher */}
              <div className="flex bg-slate-950 p-1.5 rounded-xl border border-white/5 self-start md:self-auto">
                <button
                  onClick={() => { setVideoPlan('standard'); setVideoProgress(0); }}
                  className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all uppercase tracking-wider cursor-pointer ${
                    videoPlan === 'standard' 
                      ? 'bg-[#0e4a36] text-emerald-400 border border-emerald-500/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => { setVideoPlan('gold'); setVideoProgress(0); }}
                  className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all uppercase tracking-wider cursor-pointer ${
                    videoPlan === 'gold' 
                      ? 'bg-amber-950/80 text-amber-400 border border-amber-500/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Gold VIP
                </button>
                <button
                  onClick={() => { setVideoPlan('elite'); setVideoProgress(0); }}
                  className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all uppercase tracking-wider cursor-pointer ${
                    videoPlan === 'elite' 
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Enterprise Elite
                </button>
              </div>
            </div>

            {/* Video Player Main Stage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Simulated Cinema screen and control deck */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Cinema Screen Frame */}
                <div className="aspect-[16/10] w-full bg-slate-950 rounded-2xl border-4 border-slate-900 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  
                  {/* Subtle Scanlines & Grid Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,150,100,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,150,100,0.1)_1px,transparent_1px)] bg-[size:16px_16px] z-10" />
                  
                  {/* Top bar indicators */}
                  <div className="p-3 bg-slate-900/80 backdrop-blur-md flex justify-between items-center z-20 border-b border-white/5 font-mono">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                      <span className="text-[9px] tracking-widest text-emerald-400 uppercase font-black">
                        B2B PRESENTATION // {videoPlan.toUpperCase()} TIER
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[8px] text-gray-400">FPS: 60</span>
                      <span className="h-3 w-px bg-white/10" />
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/20">
                        Chapter {Math.floor(videoProgress / 20) + 1} of 5
                      </span>
                    </div>
                  </div>

                  {/* Simulated High-Fidelity Render Panel */}
                  <div className="flex-1 w-full bg-slate-950 relative flex items-center justify-center overflow-hidden">
                    
                    {/* Glowing background ambient light */}
                    <div className="absolute -inset-10 bg-radial-gradient from-emerald-500/10 to-transparent pointer-events-none blur-3xl" />

                    {renderVideoGraphic(
                      videoPlan === 'standard' 
                        ? (['profile-setup', 'directory-index', 'standard-website', 'matchmaking', 'lead-delivery'][Math.floor(videoProgress / 20)] || 'profile-setup')
                        : videoPlan === 'gold'
                        ? (['specialist-match', 'seo-boost', 'gold-website', 'trust-escrow', 'vip-leads'][Math.floor(videoProgress / 20)] || 'specialist-match')
                        : (['global-expo', 'erp-sync', 'elite-website', 'logistics-shipping', 'elite-leads'][Math.floor(videoProgress / 20)] || 'global-expo')
                    )}

                    {/* HUD Telemetry Display Overlay */}
                    <div className="absolute top-3 left-4 pointer-events-none select-none font-mono text-[8px] text-gray-500 space-y-0.5 z-10">
                      <div>SIGNAL: ROA-SECURE-992</div>
                      <div>LATENCY: 12ms // SYNCED</div>
                      <div className="text-emerald-500/60 font-bold">STATUS: {videoPlaying ? 'NARRATION ON' : 'PAUSED'}</div>
                    </div>

                    {/* Countdown / Chapter Duration Progress Alert */}
                    <div className="absolute top-3 right-4 pointer-events-none select-none font-mono text-[8px] text-gray-500 text-right z-10">
                      <div>CHAPTER PROGRESS</div>
                      <div className="text-emerald-400 font-bold">
                        {Math.floor(8 - ((videoProgress * 0.4) % 8))}s Remaining
                      </div>
                    </div>

                    {/* Audio Waveform Spectrum Overlay */}
                    <div className="absolute bottom-3 right-4 pointer-events-none select-none flex items-end space-x-0.5 h-6 z-20">
                      {Array.from({ length: 14 }).map((_, i) => {
                        const randomDelay = [0.1, 0.4, 0.2, 0.6, 0.3, 0.5, 0.2, 0.7, 0.1, 0.4, 0.3, 0.5, 0.2, 0.6][i];
                        const randomHeight = [12, 24, 16, 20, 8, 14, 22, 10, 18, 12, 15, 20, 8, 16][i];
                        return (
                          <span 
                            key={i} 
                            className="w-0.5 bg-emerald-400/80 rounded-full transition-all duration-300"
                            style={{ 
                              height: videoPlaying && !videoMuted ? `${randomHeight}px` : '2px',
                              animation: videoPlaying && !videoMuted ? `pulse 1s infinite alternate` : 'none',
                              animationDelay: `${randomDelay}s`
                            }}
                          />
                        );
                      })}
                    </div>

                    {/* Simple watermarks */}
                    <div className="absolute bottom-4 left-4 pointer-events-none select-none opacity-20">
                      <span className="font-serif font-black text-xs text-white uppercase tracking-widest">ROOT OF AMERICA</span>
                    </div>
                  </div>

                  {/* Subtitle / Narrative Captions Drawer */}
                  <AnimatePresence mode="wait">
                    {showCaptions && (
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        key={`${videoPlan}-${Math.floor(videoProgress / 20)}`}
                        className="bg-slate-900/95 backdrop-blur-md p-4.5 border-t border-white/5 text-center min-h-[85px] flex items-center justify-center relative z-20"
                      >
                        <div className="absolute left-4 top-4 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[8px] font-mono tracking-wider font-bold shrink-0">
                          VOICE OVER
                        </div>
                        <p className="text-xs text-gray-200 font-sans leading-relaxed max-w-xl pl-12 pr-4 text-left">
                          {videoPlan === 'standard' && [
                            "We begin by authenticating your company profile. Our compliance specialists audit your licenses, trade certifications, and factory specifications to establish a vetted Roots presence.",
                            "Once audited, your showroom is indexed live inside the US National B2B Sourcing directories, putting your catalog directly in front of procurement agents.",
                            "We build and host a dynamic B2B website (up to 10 pages) for your business, complete with interactive MOQ sliders, wholesale catalog pages, and secure lead inquiry channels.",
                            "Our system filters incoming buyer bids. Each Request for Quote is pre-screened to ensure the buyer has validated MOQ budgets, shipping lines, and purchasing authorization.",
                            "Finally, up to 20 verified high-intent leads are pushed to your dashboard each month, complete with direct buyer phone and email contacts."
                          ][Math.floor(videoProgress / 20)]}
                          {videoPlan === 'gold' && [
                            "Under Gold Premium, you are assigned a dedicated US commodity specialist who actively pitches your inventory directly to major volume brokers.",
                            "Your brand showroom is locked in first-page rankings, styled with a premium gold crown border. This guarantees up to ten times more organic buyer click-throughs.",
                            "We provision a dynamic premium website (up to 20 pages) showcasing your bulk capacities with advanced sorting, high-contrast imagery, and integrated RFQ estimators.",
                            "To mitigate trade risks, we activate bulletproof escrow trust accounts, holding validated purchasing funds securely before you book cargo liners.",
                            "Each month, your account representative secures up to 40 VIP matchmaking leads, accelerating wholesale deals with higher transaction volumes."
                          ][Math.floor(videoProgress / 20)]}
                          {videoPlan === 'elite' && [
                            "For global enterprises, your sample catalogs are represented physically by Root Of America agents at premier US and European industrial trade expos.",
                            "We build a direct API bridge connecting your local ERP warehouse databases with our real-time portal, updating inventories automatically.",
                            "You receive a dynamic enterprise-grade portal (up to 50 pages) featuring automatic multi-language translations, CRM integration, and real-time shipment progress widgets.",
                            "Our logistics desk manages your container load sheets, steamship line reservations, and customs clearance procedures for stress-free shipping.",
                            "Maximize international trade pipelines with up to 60 global enterprise leads monthly, fully backed by vetted Letters of Credit."
                          ][Math.floor(videoProgress / 20)]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Video Controls Console Deck */}
                <div className="bg-slate-900 p-4 rounded-2xl border border-[#135d44]/30 space-y-4 shadow-xl">
                  
                  {/* Timeline Scrubber */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                      <span className="flex items-center text-emerald-400 font-bold">
                        <Clock className="h-3.5 w-3.5 mr-1 text-emerald-500" /> 
                        {`00:${Math.floor(videoProgress * 0.4) < 10 ? '0' : ''}${Math.floor(videoProgress * 0.4)} / 00:40`} ({Math.floor(videoProgress)}%)
                      </span>
                      <span className="text-gray-400 uppercase tracking-widest text-[8px] font-black">
                        Drag Playhead to Scrub Timeline
                      </span>
                    </div>
                    
                    {/* Continuous Interactive range input slider */}
                    <div className="relative group pt-1">
                      <input 
                        type="range"
                        min="0"
                        max="100"
                        step="0.1"
                        value={videoProgress}
                        onChange={(e) => setVideoProgress(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-slate-950 accent-emerald-500 focus:outline-none transition-all"
                        style={{
                          background: `linear-gradient(to right, #10b981 0%, #10b981 ${videoProgress}%, #020617 ${videoProgress}%, #020617 100%)`
                        }}
                      />
                    </div>

                    {/* Segmented Scrubbers Blocks for Easy jumping */}
                    <div className="grid grid-cols-5 gap-1.5 pt-1">
                      {[0, 1, 2, 3, 4].map((chapterIdx) => {
                        const min = chapterIdx * 20;
                        const max = (chapterIdx + 1) * 20;
                        let filledPct = 0;
                        if (videoProgress >= max) {
                          filledPct = 100;
                        } else if (videoProgress >= min) {
                          filledPct = ((videoProgress - min) / 20) * 100;
                        }
                        return (
                          <div 
                            key={chapterIdx}
                            onClick={() => setVideoProgress(chapterIdx * 20 + 1)}
                            className="bg-slate-950 h-2.5 rounded-md cursor-pointer relative overflow-hidden group hover:bg-slate-800 transition-colors border border-white/5"
                            title={`Jump to Phase ${chapterIdx + 1} (${chapterIdx * 8}s - ${(chapterIdx + 1) * 8}s)`}
                          >
                            <div 
                              className={`h-full transition-all duration-100 ${
                                videoPlan === 'standard' ? 'bg-emerald-500' : videoPlan === 'gold' ? 'bg-amber-500' : 'bg-emerald-400'
                              }`}
                              style={{ width: `${filledPct}%` }}
                            ></div>
                            <span className="absolute inset-0 flex items-center justify-center text-[7px] font-mono text-white/50 group-hover:text-white transition-colors">
                              PH{chapterIdx + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Buttons Control Row */}
                  <div className="flex flex-wrap justify-between items-center gap-4 pt-1 text-xs">
                    <div className="flex items-center space-x-2.5">
                      {/* Play / Pause Toggle */}
                      <button
                        onClick={() => setVideoPlaying(!videoPlaying)}
                        className="p-3 bg-white text-slate-900 hover:bg-emerald-400 hover:text-slate-950 rounded-xl transition-all cursor-pointer shadow-sm flex items-center justify-center font-bold"
                        title={videoPlaying ? "Pause Video" : "Play Video"}
                      >
                        {videoPlaying ? <Pause className="h-4.5 w-4.5" /> : <Play className="h-4.5 w-4.5 fill-current" />}
                      </button>

                      {/* Restart Button */}
                      <button
                        onClick={() => setVideoProgress(0)}
                        className="p-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                        title="Restart Presentation"
                      >
                        <RotateCcw className="h-4.5 w-4.5" />
                      </button>

                      {/* Next Chapter Button */}
                      <button
                        onClick={() => {
                          const currentCh = Math.floor(videoProgress / 20);
                          const nextCh = (currentCh + 1) % 5;
                          setVideoProgress(nextCh * 20 + 1);
                        }}
                        className="p-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                        title="Skip to Next Phase"
                      >
                        <SkipForward className="h-4.5 w-4.5" />
                      </button>

                      <div className="h-6 w-px bg-white/10" />

                      {/* Mute/Unmute Audio Button */}
                      <button
                        onClick={() => setVideoMuted(!videoMuted)}
                        className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                          videoMuted 
                            ? 'bg-rose-500/10 text-rose-400 hover:bg-rose-500/20' 
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                        title={videoMuted ? "Unmute Voiceover Narrator" : "Mute Voiceover Narrator"}
                      >
                        {videoMuted ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
                      </button>
                      <span className="text-[9px] font-mono text-gray-500 hidden sm:inline">
                        {videoMuted ? "NARRATOR MUTED" : "VOICEOVER STREAM ON"}
                      </span>
                    </div>

                    {/* Speed multiplier & Subtitles Controls */}
                    <div className="flex items-center space-x-3 text-[10px] font-mono">
                      
                      {/* Speed */}
                      <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-white/5">
                        <span className="px-1.5 text-gray-400">Speed</span>
                        {[1, 1.5, 2].map((spd) => (
                          <button
                            key={spd}
                            onClick={() => setPlaybackSpeed(spd)}
                            className={`px-1.5 py-0.5 rounded text-[9px] cursor-pointer ${
                              playbackSpeed === spd 
                                ? 'bg-[#135d44] text-white font-bold' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            {spd}x
                          </button>
                        ))}
                      </div>

                      {/* Subtitles Toggle */}
                      <button
                        onClick={() => setShowCaptions(!showCaptions)}
                        className={`p-2.5 rounded-xl border flex items-center space-x-1 cursor-pointer transition-all ${
                          showCaptions 
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold' 
                            : 'bg-white/5 border-transparent text-gray-400'
                        }`}
                      >
                        <Captions className="h-3.5 w-3.5" />
                        <span>Subtitles</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Narrative detailed timeline step-by-step breakdown */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-widest font-bold">
                    Service Execution Chronology ({videoPlan.toUpperCase()})
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    40s FULL WALKTHROUGH
                  </span>
                </div>

                <div className="space-y-3">
                  {(videoPlan === 'standard' 
                    ? videoScenesData.standard 
                    : videoPlan === 'gold' 
                    ? videoScenesData.gold 
                    : videoScenesData.elite
                  ).map((scene, idx) => {
                    const isActive = Math.floor(videoProgress / 20) === idx;
                    const stepNum = idx + 1;
                    const startTimeStr = `00:${idx * 8 < 10 ? '0' : ''}${idx * 8}`;
                    const endTimeStr = `00:${(idx + 1) * 8 < 10 ? '0' : ''}${(idx + 1) * 8}`;
                    
                    return (
                      <motion.div
                        key={idx}
                        onClick={() => { setVideoProgress(idx * 20 + 1); }}
                        className={`p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer relative overflow-hidden ${
                          isActive 
                            ? videoPlan === 'standard'
                              ? 'bg-emerald-950/20 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/10 translate-x-1'
                              : videoPlan === 'gold'
                              ? 'bg-amber-950/20 border-amber-500/40 shadow-md ring-1 ring-amber-500/10 translate-x-1'
                              : 'bg-emerald-950/30 border-emerald-400/40 shadow-md ring-1 ring-emerald-400/10 translate-x-1'
                            : 'bg-slate-900/40 border-white/5 hover:border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        {/* Interactive glow effect on the active card */}
                        {isActive && (
                          <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                            videoPlan === 'standard' ? 'bg-emerald-500' : videoPlan === 'gold' ? 'bg-amber-500' : 'bg-emerald-400'
                          }`} />
                        )}

                        <div className="flex items-start space-x-3.5">
                          {/* Chronological badge */}
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center font-mono font-black text-[10px] shrink-0 mt-0.5 ${
                            isActive 
                              ? videoPlan === 'standard'
                                ? 'bg-emerald-500 text-slate-950'
                                : videoPlan === 'gold'
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-emerald-400 text-slate-950'
                              : 'bg-slate-800 text-gray-400'
                          }`}>
                            {stepNum}
                          </div>

                          <div className="space-y-1 flex-1">
                            <div className="flex justify-between items-start gap-2">
                              <h4 className={`font-serif text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                {scene.title}
                              </h4>
                              <span className="text-[9px] font-mono text-gray-500 shrink-0 font-bold bg-slate-950 px-1.5 py-0.5 rounded border border-white/5">
                                {startTimeStr} - {endTimeStr}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wide">
                                {scene.subtitle}
                              </p>
                              {isActive && (
                                <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                                  videoPlan === 'standard' 
                                    ? 'text-emerald-400 bg-emerald-950/80 border border-emerald-500/20' 
                                    : videoPlan === 'gold' 
                                    ? 'text-amber-400 bg-amber-950/80 border border-amber-500/20' 
                                    : 'text-emerald-300 bg-emerald-950/80 border border-emerald-400/20'
                                }`}>
                                  LIVE FRAME
                                </span>
                              )}
                            </div>
                            {isActive && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-2 pt-1.5 border-t border-white/5 mt-1"
                              >
                                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                                  {scene.narrative}
                                </p>
                                
                                {/* Micro countdown bar */}
                                <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                                  <motion.div 
                                    className={`h-full ${
                                      videoPlan === 'standard' ? 'bg-emerald-500' : videoPlan === 'gold' ? 'bg-amber-500' : 'bg-emerald-400'
                                    }`}
                                    style={{ width: `${((videoProgress % 20) / 20) * 100}%` }}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Dynamic B2B ROI Sourcing Calculator */}
        <div className="bg-gradient-to-br from-[#1c2421] to-[#0a3526] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-[#135d44] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <BarChart3 className="h-64 w-64 text-amber-500" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                Interactive B2B Sourcing ROI Calculator
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Calculate Your Real-Time Brokerage Fee Savings
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm max-w-3xl">
                Traditional trade brokers and export agents charge 2.5% to 5% commission on wholesale containers. See how our flat-rate annual membership compares to traditional trade middlemen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Box */}
              <div className="lg:col-span-7 bg-[#135d44]/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                {/* Slider 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300 uppercase tracking-wider font-bold">Estimated Monthly Trade Volume:</span>
                    <span className="text-amber-400 font-bold">${monthlyVolume.toLocaleString()} / mo</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000"
                    value={monthlyVolume} 
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>$10,000</span>
                    <span>$500,000</span>
                    <span>$1,000,000+</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-300 uppercase tracking-wider font-bold">Standard Middleman / Broker Commission:</span>
                    <span className="text-amber-400 font-bold">{brokerFeeRate.toFixed(1)}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="8" 
                    step="0.5"
                    value={brokerFeeRate} 
                    onChange={(e) => setBrokerFeeRate(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>1.0%</span>
                    <span>4.0%</span>
                    <span>8.0%</span>
                  </div>
                </div>
              </div>

              {/* Real-time ROI calculations comparison */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs sm:text-sm font-sans">
                    <span className="text-gray-300">Typical Broker Annual Fees:</span>
                    <span className="text-rose-400 font-mono font-bold">
                      ${((monthlyVolume * brokerFeeRate / 100) * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}/yr
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs sm:text-sm font-sans">
                    <span className="text-gray-300">Root Of America Member Cost:</span>
                    <span className="text-[#faf8f5] font-mono font-bold">
                      ${(selectedPlan === 'standard' ? standardPrice : selectedPlan === 'gold' ? goldPrice : elitePrice).toLocaleString()}/yr
                    </span>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                      Estimated Annual Savings
                    </div>
                    <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400">
                      ${Math.max(0, ((monthlyVolume * brokerFeeRate / 100) * 12) - (selectedPlan === 'standard' ? standardPrice : selectedPlan === 'gold' ? goldPrice : elitePrice)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-[10px] text-gray-300 font-sans mt-1">
                      Based on flat-rate annual pricing framework
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => { document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="bg-amber-500 hover:bg-amber-600 text-[#1c2421] px-6 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
                  >
                    <Zap className="h-4 w-4" />
                    <span>Lock In Your Savings Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Consultation Form Section */}
        <div id="inquiry-form" className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#e5dfd3] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-2 text-[#0e4a36]">
                <PhoneCall className="h-5 w-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Connect with an Expert</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c2421]">
                Speak to a Premium Trade Specialist
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                Ready to take your B2B sourcing and distribution to the next level? Submit your contact info below, and a registered Root Of America specialist will schedule a custom walkthrough within 24 hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0e4a36]/10 p-2 rounded-lg text-[#0e4a36] shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 font-sans">Corporate Sales Inquiries</h4>
                    <p className="text-xs text-gray-500 font-mono">premium-sourcing@rootofamerica.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0e4a36]/10 p-2 rounded-lg text-[#0e4a36] shrink-0">
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 font-sans">Active Matchmaking Team</h4>
                    <p className="text-xs text-gray-500 font-mono">vip-matching@rootofamerica.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-[#e5dfd3] relative">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12"
                  >
                    <div className="bg-[#0e4a36] text-white p-4 rounded-full">
                      <ShieldCheck className="h-10 w-10 text-amber-400" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-gray-950">Inquiry Logged Securely</h3>
                    <p className="text-xs text-gray-600 max-w-xs font-sans">
                      Thank you! A senior Key Account Manager representing your selected plan (<strong>{selectedPlan.toUpperCase()}</strong>) has been assigned and will contact you via email shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-bold">Selected Service Level</label>
                      <select 
                        value={selectedPlan} 
                        onChange={(e: any) => setSelectedPlan(e.target.value)}
                        className="w-full bg-white border border-[#e5dfd3] text-[#1c2421] px-4 py-2.5 rounded-xl text-xs font-bold focus:outline-none focus:border-[#0e4a36]"
                      >
                        <option value="standard">Standard Verified Supplier ($1,200/yr)</option>
                        <option value="gold">Gold Premium VIP ($2,999/yr)</option>
                        <option value="elite">Enterprise Elite ($5,499/yr)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Contact Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-white border border-[#e5dfd3] text-[#1c2421] px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[#0e4a36]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Business Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="j.doe@company.com"
                          className="w-full bg-white border border-[#e5dfd3] text-[#1c2421] px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[#0e4a36]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+1 (555) 019-2834"
                          className="w-full bg-white border border-[#e5dfd3] text-[#1c2421] px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[#0e4a36]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Enterprise USA Corp"
                        className="w-full bg-white border border-[#e5dfd3] text-[#1c2421] px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[#0e4a36]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">Primary Industry Sector</label>
                      <select 
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        className="w-full bg-white border border-[#e5dfd3] hover:border-[#0e4a36]/50 focus:border-[#0e4a36] text-[#1c2421] px-4 py-3 rounded-xl text-xs focus:ring-4 focus:ring-[#0e4a36]/10 transition-all font-sans font-medium cursor-pointer shadow-xs focus:outline-none"
                      >
                        <option value="" disabled>-- Select Global Category --</option>
                        
                        {/* --- NORTH AMERICAN / USMCA COMMODITIES --- */}
                        <optgroup label="🍁🇺🇸 USMCA Corridor: Heavy Industrial &amp; Transit" className="font-sans font-bold text-[#0e4a36] bg-emerald-50">
                          <option value="usmca-auto" className="text-gray-900 font-normal bg-white">🚗 Automotive &amp; OEM Parts (Detroit-Windsor Corridor)</option>
                          <option value="aerospace" className="text-gray-900 font-normal bg-white">✈️ Aerospace, Aviation &amp; Defense Avionics</option>
                          <option value="heavy-equipment" className="text-gray-900 font-normal bg-white">🚜 Great Lakes Heavy Machinery &amp; Tractors</option>
                          <option value="freight-shipping" className="text-gray-900 font-normal bg-white">📦 Cross-Border Intermodal Logistics &amp; 3PL</option>
                        </optgroup>

                        <optgroup label="🌲 Forestry, SPF Lumber &amp; Timber Exports" className="font-sans font-bold text-amber-900 bg-amber-50">
                          <option value="spf-lumber" className="text-gray-900 font-normal bg-white">🪵 SPF Softwood Lumber (Canada-US Trade)</option>
                          <option value="hardwood" className="text-gray-900 font-normal bg-white">🍁 Premium Maple &amp; Hardwood Timber</option>
                          <option value="pulp-paper" className="text-gray-900 font-normal bg-white">📄 Kraft Wood Pulp &amp; Raw Paper Reels</option>
                          <option value="woodworking" className="text-gray-900 font-normal bg-white">🧱 Engineered Plywood, Veneers &amp; OSB Panels</option>
                        </optgroup>

                        <optgroup label="🌾 North American Agri-Foods &amp; Bulk Produce" className="font-sans font-bold text-emerald-950 bg-emerald-50/50">
                          <option value="grains" className="text-gray-900 font-normal bg-white">🌾 Great Plains Durum Wheat &amp; Canola Seeds</option>
                          <option value="soy-corn" className="text-gray-900 font-normal bg-white">🌽 US Midwest Soybeans &amp; Feed Corn</option>
                          <option value="livestock" className="text-gray-900 font-normal bg-white">🥩 Beef, Pork &amp; Live Animal Procurement</option>
                          <option value="seafood-atlantic" className="text-gray-900 font-normal bg-white">🦞 Atlantic Lobster, Scallops &amp; Coldwater Seafood</option>
                          <option value="maple-syrup" className="text-gray-900 font-normal bg-white">🍁 Quebec Maple Syrup &amp; Specialty Sweeteners</option>
                          <option value="horticulture" className="text-gray-900 font-normal bg-white">🍎 BC &amp; Pacific Northwest Tree Fruits</option>
                          <option value="beverages" className="text-gray-900 font-normal bg-white">🍺 Napa/Okanagan Wines &amp; Kentucky Bourbon</option>
                        </optgroup>

                        <optgroup label="🛢️ Energy, Hydrocarbons &amp; Clean Fuel Networks" className="font-sans font-bold text-blue-900 bg-blue-50">
                          <option value="crude-oil" className="text-gray-900 font-normal bg-white">🛢️ Western Canadian Select &amp; North Sea Crude</option>
                          <option value="natural-gas" className="text-gray-900 font-normal bg-white">🔥 Natural Gas Liquefaction &amp; Pipelines</option>
                          <option value="biomass" className="text-gray-900 font-normal bg-white">🪵 Premium Biomass Pellets &amp; Clean Biofuels</option>
                        </optgroup>

                        <optgroup label="🔋 Battery Metals &amp; Critical Minerals" className="font-sans font-bold text-indigo-900 bg-indigo-50">
                          <option value="ev-minerals" className="text-gray-900 font-normal bg-white">🔋 Lithium, Nickel, Cobalt &amp; Graphite (EV Grade)</option>
                          <option value="uranium-nuclear" className="text-gray-900 font-normal bg-white">⚛️ Athabasca Uranium &amp; Reactor Raw Materials</option>
                          <option value="rare-earths" className="text-gray-900 font-normal bg-white">💎 Rare Earth Elements &amp; High-Purity Oxides</option>
                        </optgroup>

                        {/* --- WORLDWIDE / GLOBAL TRADE --- */}
                        <optgroup label="🌐 Global Metals, Ore &amp; Smelting" className="font-sans font-bold text-gray-700 bg-gray-100">
                          <option value="steel-metals" className="text-gray-900 font-normal bg-white">🧱 Structural Carbon Steel, Rebar &amp; Pipes</option>
                          <option value="aluminum" className="text-gray-900 font-normal bg-white">🔩 Hydro-Powered Aluminum Ingots &amp; Billets</option>
                          <option value="copper-brass" className="text-gray-900 font-normal bg-white">🔌 Copper Cathodes, Brass &amp; Zinc Alloys</option>
                          <option value="precious-metals" className="text-gray-900 font-normal bg-white">🏆 Industrial Gold, Silver &amp; Platinum Bars</option>
                          <option value="minerals" className="text-gray-900 font-normal bg-white">⛏️ Iron Ore, Bauxite &amp; Raw Mining Slurry</option>
                        </optgroup>

                        <optgroup label="🌐 Global Chemicals, Petrochemicals &amp; Plastics" className="font-sans font-bold text-gray-700 bg-gray-100">
                          <option value="resins" className="text-gray-900 font-normal bg-white">🧪 Eco-Friendly PLA Resins &amp; Bioplastics</option>
                          <option value="industrial-chemicals" className="text-gray-900 font-normal bg-white">⚗️ Sarnia/Texas Solvents &amp; Organic Chemicals</option>
                          <option value="fertilizers" className="text-gray-900 font-normal bg-white">🌱 Potash, Ammonia &amp; Nitrogenous Fertilizers</option>
                          <option value="polymers" className="text-gray-900 font-normal bg-white">💿 Polyethylene (PE) &amp; Polypropylene (PP) Granules</option>
                          <option value="industrial-gas" className="text-gray-900 font-normal bg-white">💨 Bulk Helium, Argon, Hydrogen &amp; Nitrogen</option>
                        </optgroup>

                        <optgroup label="🌐 Global Electronics, Semiconductors &amp; Clean Tech" className="font-sans font-bold text-gray-700 bg-gray-100">
                          <option value="semiconductors" className="text-gray-900 font-normal bg-white">💾 Precision Microchips &amp; Silicon Wafers</option>
                          <option value="telecom" className="text-gray-900 font-normal bg-white">📡 Fiber-Optic Cables &amp; Telecomm Cabinets</option>
                          <option value="electronics" className="text-gray-900 font-normal bg-white">💻 Consumer Hardware &amp; Printed Circuit Boards</option>
                          <option value="solar-renewables" className="text-gray-900 font-normal bg-white">☀️ Photovoltaic Solar Modules &amp; Wind Hardware</option>
                        </optgroup>

                        <optgroup label="🌐 Global Textiles, Apparel &amp; Leather" className="font-sans font-bold text-gray-700 bg-gray-100">
                          <option value="textiles" className="text-gray-900 font-normal bg-white">🧵 Natural Fibers, Raw Organic Cotton &amp; Wool</option>
                          <option value="yarns" className="text-gray-900 font-normal bg-white">🪡 High-Tensile Industrial Yarns &amp; Synthetics</option>
                          <option value="apparel" className="text-gray-900 font-normal bg-white">🧥 Flame-Retardant Uniforms &amp; Outerwear</option>
                          <option value="leather" className="text-gray-900 font-normal bg-white">👞 Raw Hides, Skins &amp; Tanned Leather</option>
                        </optgroup>

                        <optgroup label="🌐 Global Medical Equipment, Pharma &amp; Wellness" className="font-sans font-bold text-gray-700 bg-gray-100">
                          <option value="pharma-ingredients" className="text-gray-900 font-normal bg-white">💊 Active Pharmaceutical Ingredients (APIs)</option>
                          <option value="medical-supplies" className="text-gray-900 font-normal bg-white">🩺 Surgical Devices &amp; Biomedical Hardware</option>
                          <option value="protective-gear" className="text-gray-900 font-normal bg-white">😷 N95 Respirators, Nitrile Gloves &amp; PPE</option>
                          <option value="nutraceuticals" className="text-gray-900 font-normal bg-white">🥗 Botanical Extracts, Supplements &amp; Amino Acids</option>
                        </optgroup>

                        <optgroup label="🌐 Global Consumer Goods &amp; Wholesale Assets" className="font-sans font-bold text-gray-700 bg-gray-100">
                          <option value="furniture" className="text-gray-900 font-normal bg-white">🛋️ Commercial Office Furniture &amp; Hotel Fixtures</option>
                          <option value="housewares" className="text-gray-900 font-normal bg-white">🍽️ Bulk Glassware, Ceramics &amp; Kitchen Utensils</option>
                          <option value="toys-leisure" className="text-gray-900 font-normal bg-white">🧸 Recreational Goods, Toys &amp; Sporting Gear</option>
                          <option value="overstock" className="text-gray-900 font-normal bg-white">🏷️ Excess Inventory &amp; Liquidation Merchandise</option>
                        </optgroup>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0e4a36] hover:bg-[#0b3c2a] text-[#faf8f5] py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      Log Inquiry Securely
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

const videoScenesData = {
  standard: [
    {
      title: "Account Compliance & Audit",
      subtitle: "Phase 1: Vetting & Verification",
      narrative: "We begin by authenticating your company profile. Our compliance specialists audit your licenses, trade certifications, and factory specifications to establish a vetted Roots presence."
    },
    {
      title: "Showroom Directory Indexing",
      subtitle: "Phase 2: Live US Indexing",
      narrative: "Once audited, your showroom is indexed live inside the US National B2B Sourcing directories, putting your catalog directly in front of procurement agents."
    },
    {
      title: "Dynamic Website Setup",
      subtitle: "Phase 3: Custom 10-Page Storefront",
      narrative: "We build and host a dynamic B2B website (up to 10 pages) for your business, complete with interactive MOQ sliders, wholesale catalog pages, and secure lead inquiry channels."
    },
    {
      title: "Automated RFQ Screening",
      subtitle: "Phase 4: Lead Selection Engine",
      narrative: "Our system filters incoming buyer bids. Each Request for Quote is pre-screened to ensure the buyer has validated MOQ budgets, shipping lines, and purchasing authorization."
    },
    {
      title: "Direct Dashboard Handover",
      subtitle: "Phase 5: Pipeline Delivery",
      narrative: "Finally, up to 20 verified high-intent leads are pushed to your dashboard each month, complete with direct buyer phone and email contacts."
    }
  ],
  gold: [
    {
      title: "Trade Officer Placement",
      subtitle: "Phase 1: Matchmaking Officer",
      narrative: "Under Gold Premium, you are assigned a dedicated US commodity specialist who actively pitches your inventory directly to major volume brokers."
    },
    {
      title: "SEO Category Positioning",
      subtitle: "Phase 2: Priority First-Page Listings",
      narrative: "Your brand showroom is locked in first-page rankings, styled with a premium gold crown border. This guarantees up to ten times more organic buyer click-throughs."
    },
    {
      title: "Premium Website Design",
      subtitle: "Phase 3: Custom 20-Page Showroom",
      narrative: "We provision a dynamic premium website (up to 20 pages) showcasing your bulk capacities with advanced sorting, high-contrast imagery, and integrated RFQ estimators."
    },
    {
      title: "Escrow Trust Setup",
      subtitle: "Phase 4: Safe-Trade Escrow Protection",
      narrative: "To mitigate trade risks, we activate bulletproof escrow trust accounts, holding validated purchasing funds securely before you book cargo liners."
    },
    {
      title: "Priority VIP Dispatch",
      subtitle: "Phase 5: 40 VIP Matchmaking Leads",
      narrative: "Each month, your account representative secures up to 40 VIP matchmaking leads, accelerating wholesale deals with higher transaction volumes."
    }
  ],
  elite: [
    {
      title: "Physical Trade Expo Placement",
      subtitle: "Phase 1: US/EU Expo Representation",
      narrative: "For global enterprises, your sample catalogs are represented physically by Root Of America agents at premier US and European industrial trade expos."
    },
    {
      title: "Real-time ERP API Sync",
      subtitle: "Phase 2: Live Database Bridge",
      narrative: "We build a direct API bridge connecting your local ERP warehouse databases with our real-time portal, updating inventories automatically."
    },
    {
      title: "Omnichannel Sourcing Portal",
      subtitle: "Phase 3: Elite 50-Page Multi-Language Portal",
      narrative: "You receive a dynamic enterprise-grade portal (up to 50 pages) featuring automatic multi-language translations, CRM integration, and real-time shipment progress widgets."
    },
    {
      title: "Customs & Freight Desk",
      subtitle: "Phase 4: Cargo Coordination",
      narrative: "Our logistics desk manages your container load sheets, steamship line reservations, and customs clearance procedures for stress-free shipping."
    },
    {
      title: "Letter of Credit Pipeline",
      subtitle: "Phase 5: 60 Global Enterprise Leads",
      narrative: "Maximize international trade pipelines with up to 60 global enterprise leads monthly, fully backed by vetted Letters of Credit."
    }
  ]
};

function renderVideoGraphic(scene: string) {
  switch (scene) {
    // STANDARD PLAN SCENES
    case 'profile-setup':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 text-center w-full h-full">
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <ShieldCheck className="h-10 w-10 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <div className="space-y-1.5 w-full max-w-xs">
            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full inline-block">
              Compliance Audit Active
            </div>
            <p className="text-xs text-gray-300 font-sans font-medium">Verifying Tax Identification, Factory Licenses, and Quality Certifications...</p>
          </div>
          <div className="w-full max-w-xs bg-slate-900/60 border border-white/5 rounded-xl p-3 text-left space-y-2 font-mono text-[9px]">
            <div className="flex items-center justify-between text-emerald-400">
              <span>● REGISTRATION LICENSE</span>
              <span className="font-bold">VERIFIED</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400">
              <span>● COLD STORAGE CAP</span>
              <span className="font-bold">PASSED</span>
            </div>
            <div className="flex items-center justify-between text-amber-400">
              <span>○ US IMPORT COMPLIANCE</span>
              <span className="font-bold animate-pulse">AUDITING</span>
            </div>
          </div>
        </div>
      );

    case 'directory-index':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="w-full max-w-sm bg-slate-900 border border-white/5 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[9px] font-mono text-gray-400 font-bold">DIRECTORY INDEX SEARCH</span>
              <div className="flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-[8px] font-mono text-emerald-400">INDEXED LIVE</span>
              </div>
            </div>
            <div className="space-y-1.5 text-left">
              <div className="p-2 bg-[#0e4a36]/20 border border-[#0e4a36]/50 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-serif font-bold text-white">Your Showroom Profile (Premium)</span>
                </div>
                <span className="text-[9px] font-mono bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded font-bold">Rank #1</span>
              </div>
              <div className="p-2 bg-slate-950 border border-white/5 rounded-lg flex items-center justify-between opacity-50">
                <span className="text-xs font-sans text-gray-400">Alternative Supplier B (Unverified)</span>
                <span className="text-[9px] font-mono text-gray-500">Rank #27</span>
              </div>
              <div className="p-2 bg-slate-950 border border-white/5 rounded-lg flex items-center justify-between opacity-50">
                <span className="text-xs font-sans text-gray-400">Alternative Supplier C (Unverified)</span>
                <span className="text-[9px] font-mono text-gray-500">Rank #28</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-300 font-sans font-medium">Priority indexing boosts organic search visibility inside the National Directory.</p>
          </div>
        </div>
      );

    case 'standard-website':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="w-full max-w-sm bg-slate-900 border border-blue-500/20 rounded-2xl p-4 space-y-3 relative overflow-hidden text-left">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center space-x-1.5">
                <Globe2 className="h-4 w-4 text-blue-400" />
                <span className="text-[10px] font-mono text-white font-bold">Standard B2B Storefront</span>
              </div>
              <span className="text-[8px] font-mono text-blue-400 bg-blue-950 px-1.5 py-0.5 rounded border border-blue-500/20 font-bold">Up to 10 Pages</span>
            </div>
            
            {/* Simulated mini browser window */}
            <div className="bg-slate-950 rounded-xl p-3 border border-white/5 space-y-2.5 text-left animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px] font-mono text-gray-500">
                <span>URL: standard-supplier.roots.com</span>
                <span className="text-blue-400 font-bold">SSL SECURE</span>
              </div>
              <div className="space-y-1.5">
                {/* Simulated Header */}
                <div className="h-4 bg-[#0e4a36]/15 rounded border border-[#0e4a36]/30 flex items-center justify-between px-1.5">
                  <span className="text-[7px] text-emerald-400 font-bold">Green Wood Co.</span>
                  <div className="flex space-x-1.5 text-[6px] text-gray-500">
                    <span>Home</span>
                    <span>Products</span>
                    <span>About</span>
                    <span>RFQ</span>
                  </div>
                </div>
                {/* Simulated Hero */}
                <div className="p-2 bg-[#0e4a36]/10 rounded border border-emerald-500/10 text-center">
                  <h5 className="text-[9px] font-serif font-bold text-white leading-tight">North American Softwood Exports</h5>
                  <p className="text-[7px] text-gray-400 mt-0.5">Moisture level audited &bull; FSC certified logs</p>
                </div>
                {/* Catalog sample */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-slate-900 p-1.5 rounded border border-white/5 text-[7px] text-left">
                    <span className="text-white block font-bold">Spruce Logs</span>
                    <span className="text-emerald-400 block mt-0.5 font-mono">MOQ: 1 Container</span>
                  </div>
                  <div className="bg-slate-900 p-1.5 rounded border border-white/5 text-[7px] text-left">
                    <span className="text-white block font-bold">Pine Timber</span>
                    <span className="text-emerald-400 block mt-0.5 font-mono">MOQ: 2 Containers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-300 font-sans font-medium">Fully-hosted 10-page B2B website with customized inquiry forms and bulk listings.</p>
          </div>
        </div>
      );

    case 'matchmaking':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm items-center relative">
            <div className="bg-slate-900 border border-white/5 p-3 rounded-xl space-y-1.5 text-left">
              <span className="text-[8px] font-mono text-gray-400 uppercase tracking-wider block">Incoming RFQ</span>
              <p className="text-xs font-serif font-black text-white">Organic Wheat</p>
              <p className="text-[10px] text-gray-400">Vol: 450 Tons</p>
            </div>
            
            <div className="bg-slate-900 border border-white/5 p-3 rounded-xl space-y-1.5 text-left relative">
              <div className="absolute top-2 right-2 flex space-x-0.5">
                <span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                <span className="h-1 w-1 rounded-full bg-emerald-400"></span>
              </div>
              <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-wider block">Matchmaker Core</span>
              <p className="text-xs font-serif font-black text-white">Audited Match</p>
              <p className="text-[10px] text-emerald-400 font-bold">Credit Score OK</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-[#0e4a36] text-emerald-300 p-2 rounded-full border border-emerald-500/30"
              >
                <Zap className="h-4 w-4" />
              </motion.div>
            </div>
          </div>

          <div className="space-y-1 text-center">
            <p className="text-xs text-gray-300 font-sans font-medium">Our custom screening system eliminates unvetted requests and fraud.</p>
          </div>
        </div>
      );

    case 'lead-delivery':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 border-2 border-emerald-500/30 p-4 rounded-2xl w-full max-w-sm text-left space-y-3 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center space-x-1.5">
                <div className="p-1 bg-emerald-500/10 rounded-md text-emerald-400">
                  <UserCheck className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-serif font-bold text-white">Verified Lead Unlocked</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/20">Active Target</span>
            </div>

            <div className="space-y-2 font-mono text-[10px] text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">BUYER:</span>
                <span className="text-white font-bold">Vance Agro Holdings</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">CONTACT:</span>
                <span className="text-white">j.vance@vanceagro.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">PHONE:</span>
                <span className="text-white">+1 (312) 555-0149</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-1.5 mt-1">
                <span className="text-gray-500">MONTHLY QUOTA:</span>
                <span className="text-emerald-400 font-bold">1 of 20 Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>
      );

    // GOLD TIER SCENES
    case 'specialist-match':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="flex items-center space-x-3 w-full max-w-sm bg-slate-900 border border-white/5 p-4 rounded-2xl">
            <div className="h-10 w-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Crown className="h-5 w-5 text-amber-400 animate-pulse" />
            </div>
            <div className="space-y-1 text-left flex-1">
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-wider font-bold">DEDICATED COMMODITY OFFICER</span>
              <h4 className="text-xs font-serif font-bold text-white">Broker Assigned: Robert Chen</h4>
              <p className="text-[10px] text-gray-400 font-sans">Active Pitching &amp; Sourcing Negotiations Active</p>
            </div>
          </div>
          <div className="w-full max-w-sm bg-slate-950 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-left text-gray-300 space-y-1">
            <div className="text-gray-500 font-bold">CHAT PROTOCOL // SECURED</div>
            <p className="text-amber-400 font-semibold">[09:12 AM] Chen: "Presented catalog to US Feed Co &amp; Miller Group. Expecting bid sheets within 2 hours."</p>
          </div>
        </div>
      );

    case 'seo-boost':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="w-full max-w-sm bg-slate-900 border border-amber-500/30 rounded-2xl p-4 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-mono text-[8px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-sm">
              GOLD VIP FEATURED
            </div>
            <div className="text-left space-y-1.5">
              <span className="text-[9px] font-mono text-amber-400 uppercase font-bold">TOP PLACEMENT MATRIX</span>
              <h4 className="text-sm font-serif font-bold text-white">Your Premium Showroom Profile</h4>
              <div className="flex items-center space-x-1 text-amber-400 text-xs font-mono">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <span className="ml-1 text-[10px] bg-amber-500/10 px-1.5 rounded border border-amber-500/20 font-bold">10x CTR MULTIPLIER</span>
              </div>
            </div>
            <div className="border-t border-white/5 pt-2.5 flex items-center justify-between text-[10px] text-gray-400">
              <span>Category Rank: #1 (Sticky Placement)</span>
              <span className="text-emerald-400 font-bold">1,400+ Impressions</span>
            </div>
          </div>
        </div>
      );

    case 'gold-website':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="w-full max-w-sm bg-slate-900 border border-amber-500/30 rounded-2xl p-4 space-y-3 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-mono text-[8px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-sm flex items-center space-x-1">
              <Crown className="h-2.5 w-2.5" />
              <span>VIP SHOWCASE</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center space-x-1.5">
                <Globe2 className="h-4 w-4 text-amber-400" />
                <span className="text-[10px] font-mono text-white font-bold">Gold Premium Showcase</span>
              </div>
              <span className="text-[8px] font-mono text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded border border-amber-500/20 font-bold">Up to 20 Pages</span>
            </div>
            
            {/* Simulated luxury browser window */}
            <div className="bg-slate-950 rounded-xl p-3 border border-amber-500/20 space-y-2.5 text-left animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px] font-mono text-gray-500">
                <span>URL: premium-grain.com (Custom Domain)</span>
                <span className="text-amber-400 font-bold">PLATINUM SECURE</span>
              </div>
              <div className="space-y-1.5">
                {/* Simulated Header */}
                <div className="h-4 bg-amber-950/20 rounded border border-amber-500/30 flex items-center justify-between px-1.5">
                  <div className="flex items-center space-x-1">
                    <Crown className="h-2 w-2 text-amber-400" />
                    <span className="text-[7px] text-amber-400 font-bold">Apex Grains International</span>
                  </div>
                  <div className="flex space-x-1.5 text-[6px] text-gray-400 font-semibold">
                    <span>Storefront</span>
                    <span>Fields</span>
                    <span>Interactive RFQ</span>
                    <span>Escrow</span>
                  </div>
                </div>
                {/* Hero */}
                <div className="p-2.5 bg-gradient-to-r from-amber-950/30 to-slate-900 rounded border border-amber-500/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-[9px] font-serif font-bold text-white leading-tight">Verified Feed Barley &amp; Wheat</h5>
                    <p className="text-[7px] text-gray-400 mt-0.5">Sourced from top-tier Midwest cooperatives</p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 text-[6px] text-amber-400 font-mono px-1 py-0.5 rounded">
                    ESCROW ACTIVE
                  </div>
                </div>
                {/* Interactive Quote Estimator */}
                <div className="bg-slate-900 p-2 rounded border border-amber-500/10 text-[7px] font-mono text-gray-300 flex justify-between items-center">
                  <span>ENTERPRISE QUOTE CALCULATOR:</span>
                  <span className="text-amber-400 font-black">$380 / Ton Base</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-300 font-sans font-medium">Custom-designed 20-page responsive web layout with premium branding &amp; RFQ calculators.</p>
          </div>
        </div>
      );

    case 'trust-escrow':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="flex flex-col items-center justify-center space-y-2 w-full max-w-xs">
            <div className="relative">
              <motion.div 
                animate={{ rotate: [0, 90, 90, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-16 h-16 rounded-xl border border-amber-500/30 bg-amber-500/5 flex items-center justify-center"
              >
                <ShieldCheck className="h-8 w-8 text-amber-400" />
              </motion.div>
            </div>
            <div className="text-center space-y-1">
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest font-bold">VERIFIED ESCROW ACCOUNT</span>
              <h4 className="text-sm font-serif font-bold text-white">Buyer Trust Deposit Locked</h4>
              <p className="text-xs text-[#0e4a36] font-mono font-bold bg-emerald-500/15 border border-emerald-500/20 rounded px-2.5 py-0.5 inline-block">
                $120,000 USD SECURED
              </p>
            </div>
          </div>
        </div>
      );

    case 'vip-leads':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/40 p-4 rounded-2xl w-full max-w-sm text-left space-y-3.5 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center space-x-1.5">
                <Crown className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-serif font-black text-amber-400">VIP Lead Match unlocked</span>
              </div>
              <span className="text-[9px] font-mono text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded font-bold">GOLD VIP TIER</span>
            </div>

            <div className="space-y-2 font-mono text-[10px] text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">VIP BUYER:</span>
                <span className="text-white font-bold">US National Feed Distributors</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">OFFER RANGE:</span>
                <span className="text-amber-400 font-bold">$220,000 - $450,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">MOQ MATCH:</span>
                <span className="text-emerald-400">PASSED (500 Tons minimum met)</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-1.5 mt-1">
                <span className="text-gray-500">MONTHLY CAPACITY:</span>
                <span className="text-amber-400 font-bold">Up to 40 Leads Allocated</span>
              </div>
            </div>
          </div>
        </div>
      );

    // ELITE PLAN SCENES
    case 'global-expo':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="w-full max-w-sm bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 text-left space-y-3 relative overflow-hidden">
            <div className="absolute top-2 right-2 flex space-x-1">
              <Globe2 className="h-4 w-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-bold">PHYSICAL SHOWCASE CODES</span>
              <h4 className="text-xs font-serif font-bold text-white">Chicago &amp; Cologne Industrial Expo Booths</h4>
              <p className="text-[10px] text-gray-300 font-sans leading-relaxed">
                Your print catalogs, samples, and digital contact QR codes are physically distributed and represented by licensed US sourcing officers.
              </p>
            </div>
            <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[9px] font-mono text-gray-400">
              <span>ACTIVE SHOWS: 3 ANNUAL PLACEMENTS</span>
              <span className="text-emerald-400 font-bold">ACTIVE SCAN CODES</span>
            </div>
          </div>
        </div>
      );

    case 'erp-sync':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="flex items-center justify-between space-x-6 w-full max-w-sm bg-slate-950 p-4 rounded-2xl border border-white/5">
            <div className="text-center space-y-1">
              <Building2 className="h-7 w-7 text-gray-400 mx-auto" />
              <span className="text-[8px] font-mono text-gray-400 block uppercase font-bold">YOUR ERP (SAP)</span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.div 
                animate={{ x: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-emerald-400 font-mono text-[9px] font-black border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 rounded-full flex items-center space-x-1"
              >
                <span>SYNC STREAMING</span>
              </motion.div>
              <div className="w-full h-0.5 bg-dashed bg-white/10 mt-2"></div>
            </div>

            <div className="text-center space-y-1">
              <Globe2 className="h-7 w-7 text-emerald-400 mx-auto" />
              <span className="text-[8px] font-mono text-emerald-400 block uppercase font-bold">ROOTS SYSTEM</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 font-mono">Instant inventory balance &amp; automated wholesale catalog synchronization.</p>
        </div>
      );

    case 'elite-website':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="w-full max-w-sm bg-slate-900 border border-emerald-400/40 rounded-2xl p-4 space-y-3 relative overflow-hidden text-left">
            <div className="absolute top-2 right-2 flex space-x-1 text-emerald-400">
              <Globe2 className="h-4 w-4 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center space-x-1.5">
                <Globe2 className="h-4 w-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-white font-bold">Elite Omnichannel Portal</span>
              </div>
              <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-400/20 font-bold font-black">Up to 50 Pages</span>
            </div>
            
            {/* Simulated enterprise browser window */}
            <div className="bg-slate-950 rounded-xl p-3 border border-emerald-500/20 space-y-2.5 text-left animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px] font-mono text-gray-500">
                <span>URL: portal.globaltimberconglomerate.com</span>
                <span className="text-emerald-400 font-bold flex items-center space-x-1">
                  <span>●</span> <span>ERP SYNCED</span>
                </span>
              </div>
              <div className="space-y-1.5">
                {/* Header */}
                <div className="h-4 bg-emerald-950/20 rounded border border-emerald-500/30 flex items-center justify-between px-1.5">
                  <span className="text-[7px] text-emerald-300 font-black">Global Timber Conglomerate</span>
                  <div className="flex space-x-1 bg-white/5 px-1 py-0.5 rounded">
                    <span className="text-[5px] text-emerald-400 font-bold uppercase">LANG: EN | ZH | ES</span>
                  </div>
                </div>
                {/* Multi-language live card */}
                <div className="p-2 bg-gradient-to-br from-emerald-950/20 to-slate-900 border border-emerald-400/10 rounded space-y-1">
                  <div className="flex justify-between text-[7px] font-mono text-gray-400">
                    <span>SAP ERP REAL-TIME STATUS</span>
                    <span className="text-emerald-400 font-bold">SECURED CLOUD RUN</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[6px]">
                    <div className="bg-slate-900 p-1 rounded border border-white/5 text-left">
                      <span className="text-gray-500 block">AVAILABLE STOCK</span>
                      <span className="text-white block font-bold font-mono">148,200 Metric Tons</span>
                    </div>
                    <div className="bg-slate-900 p-1 rounded border border-white/5 text-left">
                      <span className="text-gray-500 block">EST. FREIGHT RATE</span>
                      <span className="text-emerald-300 block font-bold font-mono">-$4,200 / FCL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-300 font-sans font-medium">Enterprise-level 50-page multilingual commerce gateway directly synced with your warehouse ERP.</p>
          </div>
        </div>
      );

    case 'logistics-shipping':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="flex flex-col items-center justify-center space-y-3 w-full max-w-xs">
            <motion.div 
              animate={{ x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="text-center"
            >
              <Ship className="h-12 w-12 text-emerald-400" />
            </motion.div>
            <div className="text-center space-y-1">
              <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold">OCEAN FREIGHT DESK LOGISTICS</span>
              <h4 className="text-xs font-serif font-bold text-white">Full Container Load (FCL) Bookings</h4>
              <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                Customs brokerage clearance, Bill of Lading filing, and local US port cargo distribution coordinates.
              </p>
            </div>
          </div>
        </div>
      );

    case 'elite-leads':
      return (
        <div className="flex flex-col items-center justify-center p-6 space-y-4 w-full h-full">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-400/40 p-4.5 rounded-2xl w-full max-w-sm text-left space-y-3.5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center space-x-1.5">
                <Globe2 className="h-4 w-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-xs font-serif font-black text-emerald-300">Global Enterprise Pipeline</span>
              </div>
              <span className="text-[9px] font-mono text-slate-950 bg-emerald-400 px-2.5 py-0.5 rounded font-black">ENTERPRISE ELITE</span>
            </div>

            <div className="space-y-1.5 font-mono text-[10px] text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">BUYING POWER:</span>
                <span className="text-white font-bold">Multi-National Sourcing Group</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">LETTER OF CREDIT (L/C):</span>
                <span className="text-emerald-400 font-bold">VERIFIED BANQUE NATIONALE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">EXPECTED VOLUME:</span>
                <span className="text-white">6,000 Metric Tons / Q1 Contract</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-1.5 mt-1">
                <span className="text-gray-500">MONTHLY CAPACITY:</span>
                <span className="text-emerald-400 font-bold">Up to 60 Global Leads Allocated</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
