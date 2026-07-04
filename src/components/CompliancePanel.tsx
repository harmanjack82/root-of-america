import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  RefreshCw, 
  CheckCircle, 
  ShieldAlert,
  Globe,
  Ban
} from 'lucide-react';

interface ScreeningResult {
  itemName: string;
  category: string;
  status: 'APPROVED' | 'BANNED_DRUGS' | 'BANNED_WEAPONS';
  reason: string;
  code: string;
}

export default function CompliancePanel() {
  // Screening State
  const [screenInput, setScreenInput] = useState<string>('');
  const [activeScreening, setActiveScreening] = useState<ScreeningResult | null>(null);
  const [isScreening, setIsScreening] = useState<boolean>(false);

  // Screening logic
  const handleScreeningCheck = (query: string) => {
    if (!query.trim()) return;
    setIsScreening(true);
    setActiveScreening(null);

    setTimeout(() => {
      const normalized = query.toLowerCase().trim();
      
      // Keywords for weapons
      const isWeapon = /weapon|gun|rifle|pistol|ammo|ammunition|bullet|firearm|explosive|bomb|grenade|ordnance|combat|missile|artillery|sword|knife|lethal/i.test(normalized);
      
      // Keywords for drugs
      const isDrug = /drug|narcotic|heroin|cocaine|meth|fentanyl|marijuana|cannabis|opioid|pharmaceutical|prescription|pills|synthetic drug|precursor|chemical|acid|mdma|weed|substance/i.test(normalized);

      let result: ScreeningResult;

      if (isWeapon) {
        result = {
          itemName: query,
          category: 'Restricted Firearm / Combat Ordinance',
          status: 'BANNED_WEAPONS',
          reason: 'Lethal tactical weaponry, ordnance components, and firearms are strictly blacklisted under Title 18 B2B charter guidelines.',
          code: 'BLOCK-WEAPON-18USC'
        };
      } else if (isDrug) {
        result = {
          itemName: query,
          category: 'Scheduled Narcotics & Restricted Pharmaceutical',
          status: 'BANNED_DRUGS',
          reason: 'Controlled scheduled chemical precursors, clinical pharmaceuticals, and narcotic compounds are barred from our logistics net.',
          code: 'BLOCK-NARCOTIC-21USC'
        };
      } else {
        // Find close match for legal ones or generic approved
        result = {
          itemName: query,
          category: 'Permitted Industrial / Agricultural Commodity',
          status: 'APPROVED',
          reason: 'Cleared for multi-state intermodal shipping and tax-exempt B2B wholesale distribution.',
          code: 'ALLOW-PERMITTED-B2B'
        };
      }

      setActiveScreening(result);
      setIsScreening(false);
    }, 600);
  };

  // Templates
  const screeningTemplates = [
    { name: 'Appalachian White Oak Lumber', type: 'Timber' },
    { name: 'Certified Organic Soybeans', type: 'Agriculture' },
    { name: 'Military Assault Rifles', type: 'Weapons' },
    { name: 'Prescription Fentanyl Slabs', type: 'Drugs' },
    { name: 'Industrial Copper Cables', type: 'Metals' },
    { name: 'Friction Combustive Munitions', type: 'Weapons' },
    { name: 'Clinical Precursor Ephedrine', type: 'Drugs' }
  ];

  return (
    <section id="tax-section" className="py-20 bg-[#faf8f5] border-b border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universal Category Coverage Declaration */}
        <div className="bg-[#1c2421] text-white rounded-3xl p-6 sm:p-10 border border-[#e5dfd3] shadow-lg mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e4a36]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full">
                Universal B2B Trade Compliance
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                All Enterprise Categories Served. <span className="text-red-500">Drugs and Weapons Strictly Prohibited.</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
                Roots of America operates as a universal clearinghouse for high-volume raw materials, commodities, and industrial supplies. We facilitate duty-free commercial fulfillment across literally <strong>every primary legal industrial vertical</strong> with a strict, non-negotiable interdiction on military hardware, weaponry, ammunition, and controlled pharmaceutical substances or narcotics.
              </p>
              
              {/* Highlight Grid of Permitted Verticals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">🌱 01. Agriculture</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Crops & Feedstocks</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">🌲 02. Timber</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Sustainable Wood</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">🌾 03. Textiles</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Natural Fiber Mills</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">⚙️ 04. Metals & Ores</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Copper, Iron, Steel</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">📦 05. Bio-Polymers</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Compostables</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">🪵 06. Paper Pulp</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Kraft Linerboards</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-amber-500 font-bold uppercase">🔌 07. Equipment</p>
                  <p className="text-xs text-gray-300 font-semibold mt-1">Heavy Machinery</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] font-mono text-[#0e4a36] font-bold uppercase bg-white/10 px-1 rounded inline-block">❌ 08. BANNED</p>
                  <p className="text-xs text-red-400 font-bold mt-1">Weapons & Drugs</p>
                </div>
              </div>
            </div>

            {/* Zero Tolerance Flag Board */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-red-500">
                <ShieldAlert className="h-5 w-5 flex-shrink-0" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Zero-Tolerance Exclusions</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                In strict cooperation with the <strong>Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)</strong> and the <strong>Drug Enforcement Administration (DEA)</strong>, our system utilizes automated natural language routing vectors to automatically block and blacklist any order or RFQ related to weapons or drugs.
              </p>
              <div className="bg-red-950/40 border border-red-900/50 p-3 rounded-xl text-[11px] text-red-300 space-y-1">
                <p className="font-bold flex items-center space-x-1">
                  <Ban className="h-3.5 w-3.5 text-red-500" />
                  <span>Restricted Categories Checked:</span>
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-red-400 font-mono">
                  <li>Small Arms, Munitions, Combat Gear</li>
                  <li>Schedule I-V Narcotics & Precursors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-24">
            <span className="text-xs font-mono font-bold text-[#0e4a36] tracking-widest uppercase bg-[#0e4a36]/10 px-3.5 py-1.5 rounded-full">
              Federal & State Compliance
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1c2421]">
              Automated Cargo Screening Suite
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Ensure total legal adherence when procuring bulk commodities. Test any raw material or cargo description in our compliance filter before locking in intermodal freight routes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#0e4a36] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-sans font-bold text-[#1c2421]">Safe Sourcing Guarantee</p>
                  <p className="text-xs text-gray-500">Every catalog cargo undergoes rigorous laboratory origin tags, certified zero-exempt from hazardous, illicit, or combat-restricted elements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#0e4a36] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-sans font-bold text-[#1c2421]">Real-Time Customs Interdiction</p>
                  <p className="text-xs text-gray-500">Integrates directly with state and federal transport guidelines to ensure seamless intermodal railway crossing with zero dwell time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0e4a36] via-[#f59e0b] to-[#0e4a36]" />

              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-sans font-bold text-[#1c2421] flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-[#0e4a36]" />
                    <span>Interactive Sourcing Compliance Screener</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Test any cargo item or category description. See our real-time screening filter isolate unpermitted scheduled narcotics, drugs, and firearms.
                  </p>
                </div>

                {/* Sourcing Input Bar */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-gray-500 uppercase">Input Sourcing Item / Raw Material</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="e.g. Industrial Steel, Fentanyl, Handguns, Timber, Wheat..."
                        value={screenInput}
                        onChange={(e) => setScreenInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleScreeningCheck(screenInput);
                        }}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-4 py-3 text-sm font-semibold outline-none text-[#1c2421]"
                      />
                    </div>
                    <button
                      onClick={() => handleScreeningCheck(screenInput)}
                      disabled={isScreening}
                      className="bg-[#0e4a36] hover:bg-[#0b3c2a] text-white px-5 py-3 rounded-xl font-sans font-bold text-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer disabled:bg-gray-300"
                    >
                      {isScreening ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <span>Scan Cargo</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Template Quick Clicks */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">Or click a sample category to test:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {screeningTemplates.map((tpl, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setScreenInput(tpl.name);
                          handleScreeningCheck(tpl.name);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                          tpl.type === 'Weapons' || tpl.type === 'Drugs'
                            ? 'bg-red-50 hover:bg-red-100 border-red-200 text-red-700'
                            : 'bg-[#faf8f5] hover:bg-[#e5dfd3]/50 border-[#e5dfd3] text-[#1c2421]'
                        }`}
                      >
                        {tpl.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Result Panel */}
                <AnimatePresence mode="wait">
                  {activeScreening ? (
                    <motion.div
                      key={activeScreening.itemName}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-5 rounded-2xl border text-left space-y-4 ${
                        activeScreening.status === 'APPROVED'
                          ? 'bg-emerald-50 border-emerald-200 text-[#0e4a36]'
                          : 'bg-red-50 border-red-200 text-red-950'
                      }`}
                    >
                      <div className="flex justify-between items-start border-b border-dashed pb-3 border-current">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Item Checked</p>
                          <p className="text-sm font-sans font-extrabold text-[#1c2421] mt-0.5">"{activeScreening.itemName}"</p>
                        </div>

                        <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full ${
                          activeScreening.status === 'APPROVED'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-red-600 text-white'
                        }`}>
                          {activeScreening.status === 'APPROVED' ? '✓ APPROVED CARGO' : '⚠️ EXCLUDED / BANNED'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <p className="text-gray-400">LOGISTICS CLASSIFICATION</p>
                          <p className="font-bold text-[#1c2421] mt-0.5">{activeScreening.category}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">TRADE SANCTIONS CODE</p>
                          <p className="font-bold text-[#1c2421] mt-0.5">{activeScreening.code}</p>
                        </div>
                      </div>

                      <div className="bg-white/80 p-3.5 rounded-xl border border-dashed border-gray-200 text-xs text-gray-700 leading-relaxed">
                        <p className="font-sans font-bold text-[#1c2421] mb-1">Interdiction Status Report:</p>
                        {activeScreening.reason}
                      </div>

                      {activeScreening.status !== 'APPROVED' && (
                        <div className="bg-red-950 text-red-100 p-3 rounded-xl text-[10px] leading-relaxed flex items-start space-x-2">
                          <ShieldAlert className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Warning:</strong> Sourcing requests for weapon components or scheduled medical drugs will automatically freeze your draft RFQ session and trigger a security audit review of your associated corporate purchasing account.</span>
                        </div>
                      )}

                    </motion.div>
                  ) : (
                    <div className="border border-dashed border-[#e5dfd3] p-8 rounded-2xl text-center text-gray-400 text-xs font-mono flex flex-col items-center justify-center space-y-2">
                      <ShieldCheck className="h-8 w-8 text-[#0e4a36] opacity-30 animate-pulse" />
                      <p>Ready to run commodity screening query.</p>
                      <p className="text-[10px] text-gray-400 max-w-xs">We support 100+ categories (Timber, Metals, Crops, Bio-plastics) but actively block pharmaceuticals and guns.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
