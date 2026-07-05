import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShieldAlert, 
  Scale, 
  MessageSquareQuote, 
  TrendingDown, 
  HelpCircle,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Coins,
  AlertTriangle,
  Receipt
} from 'lucide-react';

interface DisclaimerProps {
  onBack: () => void;
  defaultSection?: string;
}

export default function Disclaimer({ onBack, defaultSection }: DisclaimerProps) {
  // Ensure we scroll to top when page is mounted
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (defaultSection) {
      const element = document.getElementById(defaultSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [defaultSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="disclaimer-container" className="bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Breadcrumb & Back button */}
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
            <span className="text-[#0e4a36] font-bold">Disclaimer & Policies</span>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-[#0e4a36]/10 border border-[#0e4a36]/25 text-[#0e4a36] px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-widest">
            <Scale className="h-3.5 w-3.5" />
            <span>Legal Notice & Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c2421] tracking-tight leading-tight">
            Disclaimer & <br />
            <span className="text-[#0e4a36]">Service Terms Policy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
            Please read the official policies, payment verifications, and website disclaimers for Root Of America Inc. carefully to understand your rights, responsibilities, and transactions on our platform.
          </p>
        </motion.div>

        {/* Quick Jumps Sticky Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-white/60 backdrop-blur border border-[#e5dfd3] rounded-2xl max-w-4xl mx-auto">
          <button 
            onClick={() => scrollToSection('payment-notice')}
            className="px-3.5 py-1.5 text-xs font-sans font-bold text-[#1c2421] hover:bg-[#0e4a36]/5 hover:text-[#0e4a36] rounded-xl transition-all cursor-pointer"
          >
            🔒 Authorized Payments
          </button>
          <button 
            onClick={() => scrollToSection('website-disclaimer')}
            className="px-3.5 py-1.5 text-xs font-sans font-bold text-[#1c2421] hover:bg-[#0e4a36]/5 hover:text-[#0e4a36] rounded-xl transition-all cursor-pointer"
          >
            🌐 Website Disclaimer
          </button>
          <button 
            onClick={() => scrollToSection('testimonial-disclaimer')}
            className="px-3.5 py-1.5 text-xs font-sans font-bold text-[#1c2421] hover:bg-[#0e4a36]/5 hover:text-[#0e4a36] rounded-xl transition-all cursor-pointer"
          >
            💬 Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('results-disclaimer')}
            className="px-3.5 py-1.5 text-xs font-sans font-bold text-[#1c2421] hover:bg-[#0e4a36]/5 hover:text-[#0e4a36] rounded-xl transition-all cursor-pointer"
          >
            📈 Results Variation
          </button>
          <button 
            onClick={() => scrollToSection('refund-policy')}
            className="px-3.5 py-1.5 text-xs font-sans font-bold text-[#1c2421] hover:bg-[#0e4a36]/5 hover:text-[#0e4a36] rounded-xl transition-all cursor-pointer bg-amber-500/10 text-amber-950 border border-amber-500/20"
          >
            💰 Refund Policy
          </button>
        </div>

        {/* Dynamic Content Grid */}
        <div className="space-y-10 mb-16 text-left">
          
          {/* 1. Official Payment Notice */}
          <motion.section 
            id="payment-notice"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border-l-4 border-amber-500 rounded-r-3xl p-8 shadow-sm border border-y border-r border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-amber-600">
              <div className="bg-amber-100 p-2.5 rounded-2xl border border-amber-200">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1c2421]">Authorized Payments & Security Warning</h3>
                <p className="text-[10px] font-mono tracking-wider uppercase text-amber-700 font-bold mt-0.5">CRITICAL PROTECTION FOR CLIENTS</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              <p className="font-semibold text-gray-900 bg-amber-500/5 p-4 rounded-xl border border-amber-500/10">
                All payments for services offered through Root Of America must be made only to the officially authorized company bank account or approved payment gateway designated by Root Of America, a company headquartered in Delaware, USA. We do not authorize any employee, representative, reseller, third party, or organization to collect payments through personal bank accounts, personal payment applications, cryptocurrency wallets, or any other unauthorized payment method.
              </p>
              <p>
                Root Of America shall not be responsible or liable for any loss, damage, fraud, or inconvenience arising from payments made to unauthorized individuals or entities falsely claiming to represent our company. To protect your business and financial interests, we strongly recommend verifying all payment instructions directly with our official support team before completing any transaction.
              </p>
              <p className="bg-[#1c2421] text-white p-4 rounded-xl text-xs font-mono flex items-start space-x-2.5">
                <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>If you receive a payment request that does not reference an officially authorized Root Of America business account, please contact our support team immediately for verification before making any payment.</span>
              </p>
            </div>
          </motion.section>

          {/* 2. Website Disclaimer */}
          <motion.section 
            id="website-disclaimer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36]">
              <div className="bg-[#0e4a36]/10 p-2.5 rounded-2xl border border-[#0e4a36]/20">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1c2421]">Website Disclaimer</h3>
                <p className="text-[10px] font-mono tracking-wider uppercase text-[#0e4a36] font-bold mt-0.5">GENERAL INFORMATIONAL DISCLOSURE</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                The information provided by Root Of America on this website is intended solely for general informational and business purposes. While we make every reasonable effort to ensure that the information published on our platform is accurate, current, and reliable, we make no representations or warranties, express or implied, regarding the accuracy, completeness, reliability, availability, or suitability of any content, products, services, or information provided through this website.
              </p>
              <p className="font-semibold text-gray-800">
                To the fullest extent permitted under applicable U.S. law, Root Of America disclaims all liability for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use of, or reliance upon, any information available on this website.
              </p>
              <p>
                Users are encouraged to independently verify any information before making business, financial, legal, or commercial decisions.
              </p>
              <p className="italic text-gray-500 border-l-2 border-gray-300 pl-3">
                Your use of this website and reliance on any information provided is entirely at your own risk.
              </p>
            </div>
          </motion.section>

          {/* 3. Testimonial Disclaimer */}
          <motion.section 
            id="testimonial-disclaimer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36]">
              <div className="bg-[#0e4a36]/10 p-2.5 rounded-2xl border border-[#0e4a36]/20">
                <MessageSquareQuote className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1c2421]">Testimonial Disclaimer</h3>
                <p className="text-[10px] font-mono tracking-wider uppercase text-[#0e4a36] font-bold mt-0.5">USER SUBMISSIONS & ENDORSEMENTS</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                Root Of America may publish testimonials, reviews, ratings, case studies, and customer feedback submitted by users of our platform and services. These testimonials reflect the personal experiences and opinions of individual customers and should not be interpreted as guarantees of future performance or results.
              </p>
              <p>
                Business outcomes vary based on numerous factors, including industry, market conditions, competition, product quality, pricing strategy, customer engagement, and individual business efforts. Therefore, Root Of America does not guarantee that every customer will achieve results similar to those described in any testimonial.
              </p>
              <p>
                Testimonials may be submitted in various formats, including written reviews, video testimonials, audio recordings, surveys, and online feedback. We may edit testimonials for grammar, spelling, formatting, or length without changing their intended meaning.
              </p>
            </div>
          </motion.section>

          {/* 4. Individual Results May Vary */}
          <motion.section 
            id="results-disclaimer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-amber-600">
              <div className="bg-amber-50 p-2.5 rounded-2xl border border-amber-200">
                <Coins className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1c2421]">Individual Results May Vary</h3>
                <p className="text-[10px] font-mono tracking-wider uppercase text-amber-700 font-bold mt-0.5">B2B CONNECTIVITY & NETWORKING LIMITS</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                Root Of America is a B2B business networking and digital marketplace platform that connects buyers, suppliers, manufacturers, distributors, exporters, wholesalers, and service providers throughout the United States and international markets.
              </p>
              <p className="font-semibold text-gray-800">
                While our platform facilitates business networking, visibility, lead generation, and commercial opportunities, we do not guarantee sales, contracts, partnerships, revenue, profitability, or successful business transactions between users.
              </p>
              <p>
                The success of every business relationship depends on numerous independent factors, including product quality, pricing, responsiveness, negotiation, customer service, market demand, competition, and the decisions made by the participating parties.
              </p>
              <p className="italic text-gray-500">
                Root Of America serves solely as a platform to facilitate business connections and promotional opportunities. The outcome of any transaction or business relationship remains the sole responsibility of the participating businesses.
              </p>
            </div>
          </motion.section>

          {/* 5. Refund Policy */}
          <motion.section 
            id="refund-policy"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-emerald-50/40 rounded-3xl p-8 shadow-sm border border-emerald-500/20 space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36]">
              <div className="bg-[#0e4a36]/10 p-2.5 rounded-2xl border border-[#0e4a36]/20">
                <Receipt className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1c2421]">Refund Policy</h3>
                <p className="text-[10px] font-mono tracking-wider uppercase text-[#0e4a36] font-bold mt-0.5">21-DAY ELIGIBILITY TERMS</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-sans">
              <p className="font-semibold text-[#0e4a36]">
                At Root Of America, customer satisfaction and transparency are fundamental to our business practices.
              </p>
              <p>
                Customers may request a refund within <strong className="text-emerald-800">21 calendar days</strong> from the original payment date, provided that the purchased service has not been activated, delivered, accessed, utilized, customized, or substantially processed by our team.
              </p>
              <p>
                Once a service has been activated, initiated, delivered, or materially performed, refund requests may not be eligible for approval except where required under applicable law.
              </p>
              <p>
                Approved refunds will be processed using the original payment method whenever reasonably possible. Refunds may be subject to applicable administrative fees, payment processing fees, banking charges, or other transaction costs where permitted by applicable federal, state, or local laws.
              </p>
              <p>
                Root Of America reserves the right to review each refund request individually and make a final determination based on service status, work completed, payment history, contractual obligations, and these Terms and Conditions.
              </p>
              <p className="bg-[#0e4a36]/5 p-4 rounded-xl border border-[#0e4a36]/10 text-xs">
                For questions regarding this Refund Policy or to request a refund, customers should contact our Customer Support Team through the official communication channels provided on the Root Of America website.
              </p>
            </div>
          </motion.section>

        </div>

        {/* Dynamic Warning footer banner */}
        <div className="bg-gradient-to-r from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 sm:p-10 border border-[#135d44] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left relative overflow-hidden shadow-xl mb-12">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#faf8f5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-[9px] font-mono font-extrabold uppercase tracking-widest">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Security Assurance</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold">Secure Commerce &amp; Safe Networking</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We operate exclusively in a verified Delaware C-Corp environment. Protecting our buyers and sellers from unauthorized agents or accounts is our top operational priority. Always pay through officially routed invoices.
            </p>
          </div>
          <button
            onClick={onBack}
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-[#1c2421] px-6 py-4 rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center space-x-2 cursor-pointer group hover:scale-[1.02] relative z-10"
          >
            <span>I Understand</span>
          </button>
        </div>

        {/* Back to Home Button Footer */}
        <div className="flex justify-center mt-12 mb-8">
          <button 
            onClick={onBack}
            className="bg-white hover:bg-[#faf8f5] text-[#1c2421] border border-[#e5dfd3] hover:border-[#0e4a36] px-8 py-3.5 rounded-xl font-sans font-bold text-xs transition-all shadow-sm flex items-center space-x-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 text-[#0e4a36]" />
            <span>Back to Main Page</span>
          </button>
        </div>

      </div>
    </div>
  );
}
