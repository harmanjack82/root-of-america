import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Briefcase, 
  Lock, 
  Clock, 
  ChevronRight,
  Scale,
  PieChart,
  Target,
  Compass,
  Layers,
  Zap,
  Check,
  HeartHandshake,
  Lightbulb,
  BarChart3,
  Globe2,
  FileCheck
} from 'lucide-react';

interface CorporateFinancierPageProps {
  onOpenEnquiry: (category?: string) => void;
  onBackToHome: () => void;
}

export default function CorporateFinancierPage({ onOpenEnquiry, onBackToHome }: CorporateFinancierPageProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-[#1c2421] pb-24">
      {/* Hero Header */}
      <div className="bg-[#0e4a36] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#0b3c2a]">
        <div className="absolute inset-0 bg-[radial-gradient(#156046_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-300 uppercase tracking-widest mb-4">
            <button onClick={onBackToHome} className="hover:text-amber-400 transition-colors cursor-pointer">Root of America</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-amber-400 font-bold">Corporate Financier</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-900/80 border border-emerald-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300">
                <Briefcase className="h-4 w-4" />
                <span>ROOT OF AMERICA</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Corporate Investment & Business Financing Program
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-300 font-serif">
                Building Businesses. Creating Wealth. Empowering Growth.
              </p>
              <p className="text-sm sm:text-base text-emerald-100 max-w-2xl font-light leading-relaxed">
                Root of America is a business financing and investment company dedicated to empowering entrepreneurs, supporting business expansion, and creating sustainable wealth for our investment partners.
              </p>
            </div>

            <div className="lg:col-span-4 bg-emerald-950/80 border border-emerald-800 p-6 rounded-2xl space-y-4 backdrop-blur-xs shadow-xl">
              <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Root of America Finance Desk</div>
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-amber-500 text-gray-950 rounded-xl font-bold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-200">Direct Financial Inbox</div>
                  <a href="mailto:info@rootofamerica.com" className="font-mono font-bold text-amber-300 text-sm hover:underline">
                    info@rootofamerica.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => onOpenEnquiry('Corporate Financier')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-gray-950 font-sans font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
              >
                <span>SUBMIT INVEST INTEREST</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">

        {/* About Root of America Section */}
        <section className="bg-white border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
            <div className="p-2.5 bg-emerald-50 text-[#0e4a36] rounded-xl">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-semibold block">Company Profile</span>
              <h2 className="text-2xl font-serif font-bold text-[#1c2421]">About Root of America</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed pt-2">
            <p>
              <strong>Root of America</strong> is a business financing and investment company dedicated to empowering entrepreneurs, supporting business expansion, and creating sustainable wealth for our investment partners. Our mission is to bridge the financing gap for businesses by providing timely working capital while delivering attractive investment opportunities to individuals and institutions seeking portfolio growth.
            </p>
            <p>
              We believe that strong businesses create stronger economies. Through strategic capital partnerships, Root of America connects investors with qualified businesses that require funding to expand operations, execute contracts, increase inventory, and strengthen cash flow.
            </p>
          </div>
        </section>

        {/* Investment Opportunity & Features */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 border-b border-gray-200 pb-3">
            <TrendingUp className="h-6 w-6 text-[#0e4a36]" />
            <div>
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-semibold block">Capital Investment Program</span>
              <h2 className="text-2xl font-serif font-bold text-[#1c2421]">Investment Opportunity & Features</h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
            Root of America invites investors, entrepreneurs, corporate entities, and institutional partners to participate in our Business Capital Investment Program. Our investment structure is designed to generate consistent monthly income while contributing to the growth of small and medium-sized enterprises across multiple industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-amber-400 rounded-2xl p-6 space-y-3 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-gray-950 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase font-mono">
                Target Yield
              </div>
              <div className="h-10 w-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold">
                <DollarSign className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-medium">Target ROI</span>
                <span className="text-3xl font-serif font-bold text-[#0e4a36]">2% <span className="text-xs font-sans font-normal text-gray-600">/ month</span></span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Target Return on Investment paid monthly to eligible partners.
              </p>
            </div>

            <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 bg-emerald-50 text-[#0e4a36] rounded-xl flex items-center justify-center font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-medium">Minimum Lock-in</span>
                <span className="text-2xl font-serif font-bold text-[#1c2421]">6 Months</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Minimum commitment period ensuring capital deployment stability.
              </p>
            </div>

            <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 bg-emerald-50 text-[#0e4a36] rounded-xl flex items-center justify-center font-bold">
                <PieChart className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-medium">Distribution</span>
                <span className="text-xl font-serif font-bold text-[#1c2421]">Monthly Schedule</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regular monthly profit distribution with transparent reporting.
              </p>
            </div>

            <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 bg-emerald-50 text-[#0e4a36] rounded-xl flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-medium">Management</span>
                <span className="text-xl font-serif font-bold text-[#1c2421]">Professional Care</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Professional capital management, portfolio diversification & dedicated support.
              </p>
            </div>
          </div>
        </section>

        {/* How the Root of America Investment Model Works */}
        <section className="bg-white border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
            <div className="p-2.5 bg-emerald-50 text-[#0e4a36] rounded-xl">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-semibold block">Capital Lifecycle</span>
              <h2 className="text-2xl font-serif font-bold text-[#1c2421]">How the Root of America Investment Model Works</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#faf8f5] border border-[#e5dfd3] rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md inline-block">
                STEP 1
              </span>
              <h3 className="font-serif font-bold text-lg text-[#1c2421]">Capital Investment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Investors allocate funds to Root of America's Business Financing Program.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#faf8f5] border border-[#e5dfd3] rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md inline-block">
                STEP 2
              </span>
              <h3 className="font-serif font-bold text-lg text-[#1c2421]">Capital Deployment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Root of America carefully deploys capital to verified businesses requiring financing for working capital, orders, inventory & trade.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#faf8f5] border border-[#e5dfd3] rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md inline-block">
                STEP 3
              </span>
              <h3 className="font-serif font-bold text-lg text-[#1c2421]">Business Financing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Qualified businesses receive financing at a rate of <strong>2.5% per month</strong>, enabling fast, flexible funding.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#faf8f5] border border-[#e5dfd3] rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md inline-block">
                STEP 4
              </span>
              <h3 className="font-serif font-bold text-lg text-[#1c2421]">Investor Returns</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Root of America distributes a target monthly ROI of <strong>2%</strong> to eligible investors throughout the investment period.
              </p>
            </div>
          </div>

          {/* Margin Allocation breakdown */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 space-y-3 mt-4 border border-emerald-800">
            <div className="text-xs font-mono text-amber-300 uppercase tracking-wider font-bold">
              The Remaining 0.5% Monthly Margin Supports:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-emerald-100 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Credit Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Risk Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Portfolio Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Operational Expenses</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Reserve Funds</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Business Development</span>
              </div>
              <div className="flex items-center space-x-2 sm:col-span-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Sustainable Company Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* Business Financing Solutions & Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
              <div className="p-2 bg-emerald-100 text-[#0e4a36] rounded-lg">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Business Financing Solutions</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Root of America understands that every successful business depends on reliable access to capital. We provide financing solutions designed to help businesses seize opportunities without unnecessary delays.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#0e4a36] uppercase tracking-wider block">Financing Available For:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-medium text-gray-800">
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Working Capital</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Inventory Purchases</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Import & Export Trade</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Purchase Orders</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Manufacturing</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Distribution</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Wholesale & Retail</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Construction Projects</span>
                </div>
                <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] flex items-center space-x-2">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Contract Financing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#0e4a36] text-white rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-wider font-bold">Standard Borrower Term</span>
              <h3 className="text-2xl font-serif font-bold text-white">Financing Rate</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Businesses may access financing from Root of America at:
              </p>
              <div className="text-4xl font-serif font-bold text-amber-400 my-2">
                2.5% <span className="text-xs font-sans font-normal text-white">/ month</span>
              </div>
              <p className="text-[11px] text-emerald-200 italic">
                *Subject to credit evaluation, due diligence, documentation, and approval.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry('Corporate Financier')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-gray-950 font-sans font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer mt-4"
            >
              <span>Apply for Credit Facility</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Why Invest with Root of America? & Our Credit Evaluation Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Why Invest */}
          <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Why Invest with Root of America?</h2>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Root of America is committed to building long-term relationships founded on transparency, professionalism, and responsible financial management.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Competitive monthly investment returns</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Diversified business financing portfolio</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Professional investment management</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Regular portfolio updates & transparent reporting</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Strong governance and compliance practices</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Dedicated client relationship management</span>
              </li>
            </ul>
          </div>

          {/* Credit Evaluation Process */}
          <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
              <div className="p-2 bg-emerald-100 text-[#0e4a36] rounded-lg">
                <FileCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Our Credit Evaluation Process</h2>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every financing request undergoes a structured assessment process intended to support responsible lending decisions and long-term portfolio sustainability:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center space-x-2 bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3]">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Business Verification</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3]">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Financial Statements</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3]">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Cash Flow Analysis</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3]">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Credit Assessment</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3]">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Business Risk Evaluation</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#faf8f5] p-2.5 rounded-lg border border-[#e5dfd3]">
                <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Portfolio Diversification</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 pt-1">
              Includes ongoing performance monitoring throughout the facility tenor.
            </p>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-3 border border-emerald-800 shadow-sm">
              <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Target className="h-4 w-4" />
                <span>Our Purpose</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-light">
                To become a trusted financial partner by providing innovative investment opportunities and accessible business financing that drives sustainable economic growth.
              </p>
            </div>

            <div className="bg-[#0e4a36] text-white rounded-2xl p-6 sm:p-8 space-y-3 border border-emerald-700 shadow-sm">
              <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Compass className="h-4 w-4" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-light">
                To build one of the most respected business financing ecosystems by connecting investors with growth-oriented businesses through integrity, transparency, and financial excellence.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white border border-[#e5dfd3] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-[#0e4a36] uppercase tracking-wider">
              Guiding Principles
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1c2421]">Our Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs font-semibold text-[#0e4a36]">
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center">Integrity</div>
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center">Transparency</div>
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center">Accountability</div>
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center">Innovation</div>
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center">Partnership</div>
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center">Excellence</div>
              <div className="bg-[#faf8f5] p-3 rounded-xl border border-[#e5dfd3] text-center col-span-2 sm:col-span-1">Sustainable Growth</div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-6 space-y-2 text-amber-950 text-xs shadow-xs">
          <div className="flex items-center space-x-2 text-amber-900 font-bold font-serif text-sm">
            <Scale className="h-4 w-4 text-amber-700 shrink-0" />
            <span>Regulatory & Compliance Notice</span>
          </div>
          <p className="leading-relaxed text-amber-900">
            <strong>Disclaimer:</strong> Investment returns are subject to the terms of the investment agreement, business performance, applicable laws, and regulatory requirements. Financing approvals are subject to credit evaluation, due diligence, and eligibility criteria.
          </p>
        </div>

        {/* Bottom Join Network CTA */}
        <div className="bg-[#0e4a36] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="text-xs font-mono text-amber-300 uppercase tracking-widest font-bold">Join the Root of America Network</div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Invest with Confidence. Finance with Purpose. Grow Together.</h3>
            <p className="text-emerald-200 text-xs sm:text-sm max-w-xl font-light leading-relaxed">
              Whether you are an investor seeking opportunities to grow your capital or a business owner looking for dependable financing, Root of America is committed to building partnerships that create lasting value.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenEnquiry('Corporate Financier')}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-gray-950 font-sans font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
            >
              <span>SUBMIT INVEST INTEREST</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:info@rootofamerica.com?subject=Root of America Corporate Investment Program Inquiry"
              className="w-full sm:w-auto bg-emerald-900/90 hover:bg-emerald-800 text-white font-sans font-bold py-3.5 px-5 rounded-xl text-xs flex items-center justify-center space-x-2 border border-emerald-600/50 transition-all cursor-pointer uppercase tracking-wider"
            >
              <Mail className="h-4 w-4 text-amber-400" />
              <span>SUBMIT INVEST INTEREST</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
