import React from 'react';
import { motion } from 'motion/react';
import { 
  FolderLock, 
  TrendingDown, 
  Settings, 
  Database, 
  Calculator, 
  Network, 
  Truck, 
  CheckSquare 
} from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-[#faf8f5]" />,
      title: "Wholesale Contract Engine",
      description: "Automate volume pricing tiers and lock in customized minimum order quantities (MOQs). High-volume purchasers benefit from live, dynamic contracts that decrease unit cost as commitments grow."
    },
    {
      icon: <FolderLock className="h-6 w-6 text-[#faf8f5]" />,
      title: "Cargo Compliance Filter",
      description: "Automated, real-time natural language filters screen and blacklist unsanctioned chemical compounds, pharmaceuticals, or weapons. Protect your organization's legal standing with total automated vigilance."
    },
    {
      icon: <Network className="h-6 w-6 text-[#faf8f5]" />,
      title: "Intermodal Logistics splits",
      description: "Optimized route planning across dry bulk cargo, freight trucking, rail lines, and deepwater ports. Track your agricultural and timber orders down to specific transit sectors in real time."
    },
    {
      icon: <Database className="h-6 w-6 text-[#faf8f5]" />,
      title: "REST & EDI Auto-Restock",
      description: "Connect your enterprise ERP directly to our live availability tables. Use our standard JSON REST APIs or legacy EDI channels to trigger automated bulk restocking based on custom safety-stock variables."
    }
  ];

  return (
    <section id="features-section" className="pt-20 pb-10 bg-white border-y border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-[#0e4a36] tracking-widest uppercase bg-[#0e4a36]/10 px-3.5 py-1.5 rounded-full">
            Enterprise Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1c2421]">
            Designed for Modern B2B Scale and Security.
          </h2>
          <p className="text-base text-gray-500">
            A high-fidelity wholesale suite built to eliminate procurement friction, reduce regulatory headaches, and streamline cross-country raw material logistics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 bg-[#faf8f5] rounded-3xl border border-[#e5dfd3] hover:border-[#0e4a36] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4 text-left">
                {/* Icon Circle */}
                <div className="h-12 w-12 bg-[#0e4a36] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-sans font-bold text-[#1c2421] group-hover:text-[#0e4a36] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom line decorator */}
              <div className="w-12 h-1 bg-[#f59e0b] rounded-full mt-6 opacity-60 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Platform Integration Trust Line */}
        <div className="mt-16 p-6 bg-[#0e4a36]/5 rounded-3xl border border-[#0e4a36]/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="bg-[#0e4a36] text-white p-3 rounded-2xl">
              <Settings className="h-6 w-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-base font-sans font-bold text-[#1c2421]">Fully Compatible with Legacy ERPs</h4>
              <p className="text-xs text-gray-500">Integrates with SAP, Oracle Cloud, NetSuite, Dynamics 365, and major warehouse management engines.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#0e4a36] bg-[#0e4a36]/10 px-4 py-2 rounded-xl border border-[#0e4a36]/20">
            <span className="h-2 w-2 bg-[#0e4a36] rounded-full animate-ping"></span>
            <span>API SLA Guarantee: 99.99%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
