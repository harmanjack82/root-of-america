import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Receipt, 
  HelpCircle,
  FileText,
  AlertCircle,
  Scale,
  Calendar,
  DollarSign,
  Briefcase,
  Mail,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

interface RefundPolicyPageProps {
  onBack: () => void;
}

export default function RefundPolicyPage({ onBack }: RefundPolicyPageProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="refund-policy-container" className="bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
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
            <span className="text-[#0e4a36] font-bold">Refund Policy</span>
          </div>
        </div>

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-4 mb-12 border-l-4 border-[#0e4a36] pl-6"
        >
          <div className="inline-flex items-center space-x-2 bg-[#0e4a36]/10 border border-[#0e4a36]/20 text-[#0e4a36] px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <Receipt className="h-3.5 w-3.5" />
            <span>Customer Satisfaction Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c2421] tracking-tight leading-none">
            Refund Policy
          </h1>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Delaware Registered C-Corporation • Roots of America
          </p>
        </motion.div>

        {/* Introduction */}
        <div className="prose prose-emerald max-w-none space-y-6 text-gray-700 font-sans leading-relaxed text-sm sm:text-base mb-12">
          <p className="font-semibold text-gray-900 bg-[#0e4a36]/5 p-6 rounded-2xl border border-[#0e4a36]/10">
            Thank you for choosing Root Of America for your business growth, digital marketing, and B2B marketplace solutions. Headquartered in Delaware, USA, we value our customers and are committed to delivering high-quality services that support their business objectives. If, for any reason, you are not completely satisfied with a purchase, please review this Refund Policy carefully.
          </p>
          <p>
            This Refund Policy explains the terms and conditions governing cancellations, refunds, and service-related disputes for services provided by Root Of America.
          </p>
        </div>

        {/* Dynamic Sections Grid */}
        <div className="space-y-10 mb-16 text-left">
          
          {/* Section: Interpretation and Definitions */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Scale className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Interpretation and Definitions</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-serif font-bold text-gray-900 mb-1">Interpretation</h3>
                <p className="text-sm text-gray-600">
                  Words with capitalized initial letters have the meanings defined below. These definitions apply whether the terms appear in singular or plural form.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-gray-900 mb-2">Definitions</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-gray-600">
                  <li className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3]">
                    <strong className="text-gray-900 block mb-1">Company</strong>
                    refers to Root Of America, a company headquartered in Delaware, United States, including its owners, directors, officers, employees, affiliates, contractors, representatives, and authorized service providers.
                  </li>
                  <li className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3]">
                    <strong className="text-gray-900 block mb-1">Services</strong>
                    refer to all products and business services offered by Root Of America, including but not limited to premium memberships, business listings, digital marketing services, advertising packages, lead generation services, promotional campaigns, branding solutions, business verification services, and other related offerings.
                  </li>
                  <li className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3]">
                    <strong className="text-gray-900 block mb-1">Membership</strong>
                    means any paid subscription, premium listing, advertising package, promotional plan, or business service purchased through Root Of America.
                  </li>
                  <li className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3]">
                    <strong className="text-gray-900 block mb-1">Order</strong>
                    means a request submitted by a customer to purchase any Membership, Service, or package offered by Root Of America.
                  </li>
                  <li className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3]">
                    <strong className="text-gray-900 block mb-1">Website</strong>
                    refers to the official Root Of America website and all associated web pages, applications, and online services.
                  </li>
                  <li className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3]">
                    <strong className="text-gray-900 block mb-1">User, Customer, or You</strong>
                    means any individual, business entity, organization, or other legal person accessing or purchasing services from Root Of America.
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section: Cancellation and Refund Rights */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Calendar className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Cancellation and Refund Rights</h2>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 font-sans leading-relaxed">
              <p>
                Customer satisfaction is important to us. Customers may request cancellation of a purchased Membership or Service within 21 calendar days from the original purchase date, subject to the conditions outlined in this policy.
              </p>
              
              <div className="bg-[#0e4a36]/5 p-5 rounded-2xl border border-[#0e4a36]/10 space-y-3">
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider">A refund request may be approved only if:</p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#0e4a36] shrink-0 mt-0.5" />
                    <span>The request is submitted within 21 calendar days of the purchase date.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#0e4a36] shrink-0 mt-0.5" />
                    <span>The purchased Service or Membership has not been activated, delivered, accessed, substantially performed, or fully utilized.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#0e4a36] shrink-0 mt-0.5" />
                    <span>No significant promotional work, advertising campaign, listing activation, lead generation, branding activity, consulting service, or other project work has been completed on behalf of the customer.</span>
                  </li>
                </ul>
              </div>

              <p className="bg-amber-500/5 text-amber-950 p-4 rounded-xl text-xs border border-amber-500/10">
                If the purchased Service has already been activated, customized, delivered, or materially performed, Root Of America reserves the right to deny the refund request, except where required by applicable law.
              </p>
            </div>
          </motion.section>

          {/* Section: How to Request a Refund & Refund Processing */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* How to Request */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4 text-left">
              <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
                <Mail className="h-5 w-5" />
                <h2 className="text-lg font-serif font-bold text-[#1c2421]">How to Request</h2>
              </div>
              <div className="space-y-3 text-xs text-gray-600 font-sans">
                <p>
                  To request a cancellation or refund, customers must submit a written request through the official customer support channels provided on the Root Of America website.
                </p>
                <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3] space-y-1.5">
                  <p className="font-semibold text-gray-800">The request should include:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-500">
                    <li>Customer Name</li>
                    <li>Registered Email Address</li>
                    <li>Order Number / Details</li>
                    <li>Date of Purchase</li>
                    <li>Reason for Request</li>
                  </ul>
                </div>
                <p className="italic">
                  Our Customer Support Team will review the request and respond within a reasonable timeframe.
                </p>
              </div>
            </div>

            {/* Refund Processing */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4 text-left">
              <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
                <DollarSign className="h-5 w-5" />
                <h2 className="text-lg font-serif font-bold text-[#1c2421]">Refund Processing</h2>
              </div>
              <div className="space-y-3 text-xs text-gray-600 font-sans">
                <p className="font-semibold text-gray-800">If a refund request is approved:</p>
                <p>
                  Refunds will be processed using the original payment method whenever reasonably possible.
                </p>
                <p>
                  Processing times may vary depending on the customer's financial institution, payment provider, or card issuer. Root Of America is not responsible for delays caused by banks or payment processors.
                </p>
                <p className="bg-amber-500/5 text-amber-900 p-3 rounded-lg border border-amber-500/10">
                  Where permitted by applicable law, administrative fees, payment processing fees, banking charges, taxes, or other service costs may be deducted from the refund.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: Conditions for Refund Eligibility & Non-Refundable Services */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Eligibility */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <CheckCircle className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Conditions for Eligibility</h3>
                </div>
                <ul className="space-y-2 text-xs text-gray-600 list-disc list-inside">
                  <li>The Membership or Service must have been purchased within the previous 21 calendar days.</li>
                  <li>The purchased Service must remain substantially unused or unperformed.</li>
                  <li>The customer must provide sufficient information for verification.</li>
                  <li>The refund request must comply with all requirements outlined in this Refund Policy.</li>
                </ul>
              </div>

              {/* Non-Refundable */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-red-600 border-b border-[#e5dfd3] pb-3">
                  <AlertCircle className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-gray-900">Non-Refundable Services</h3>
                </div>
                <ul className="space-y-2 text-xs text-gray-600 list-disc list-inside">
                  <li>Services that have already been completed or substantially performed.</li>
                  <li>Premium business listings that have already been activated.</li>
                  <li>Advertising or marketing campaigns that have already commenced.</li>
                  <li>Leads, inquiries, promotional exposure, or opportunities already delivered.</li>
                  <li>Customized, personalized, or specially developed business solutions.</li>
                  <li>Consulting or professional services already rendered.</li>
                  <li>Services suspended or terminated due to violation of our Terms.</li>
                  <li>Refund requests submitted after the 21-day period.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section: Partial Refunds & Limitation of Liability */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Partial Refunds */}
              <div className="space-y-4 text-left">
                <h3 className="font-serif font-bold text-[#1c2421] border-b border-[#e5dfd3] pb-2">Partial Refunds</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  In certain circumstances, Root Of America may approve a partial refund based on factors including:
                </p>
                <ul className="space-y-1.5 text-xs text-gray-500 list-disc list-inside pl-1">
                  <li>The extent to which the purchased Service has been utilized.</li>
                  <li>Resources allocated to the project.</li>
                  <li>Work already completed by our team.</li>
                  <li>Any mutual written agreement between the customer and Root Of America.</li>
                </ul>
                <p className="text-xs text-gray-500 italic">
                  The amount of any partial refund shall be determined solely at the discretion of Root Of America after reviewing the specific circumstances of the request.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-4 text-left">
                <h3 className="font-serif font-bold text-[#1c2421] border-b border-[#e5dfd3] pb-2">Limitation of Liability</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                  To the fullest extent permitted under applicable U.S. law, Root Of America shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising from the use of our Services.
                </p>
                <p className="text-xs text-gray-500">
                  Our Services are designed to facilitate business networking, promotion, lead generation, and commercial opportunities. However, Root Of America does not guarantee any specific business results, customer acquisition, revenue growth, contracts, or commercial success.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: Changes to This Refund Policy */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-2 text-[#0e4a36]">
              <FileText className="h-5 w-5" />
              <h2 className="text-lg font-serif font-bold text-[#1c2421]">Changes to This Refund Policy</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Root Of America reserves the right to modify, update, or replace this Refund Policy at any time. Any revisions become effective immediately upon publication on our Website unless otherwise stated. Customers are encouraged to review this Refund Policy periodically to remain informed about our current policies and procedures.
            </p>
          </motion.section>

          {/* Section: Contact Us */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 border border-[#135d44] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          >
            <div className="space-y-2 text-left">
              <h3 className="text-lg font-serif font-bold">Contact Our Support Team</h3>
              <p className="text-xs text-gray-300 max-w-lg">
                If you have questions regarding this Refund Policy or wish to submit a refund request, please contact the Root Of America Customer Support Team using the official contact information. We are committed to resolving customer concerns fairly, professionally, and transparently.
              </p>
            </div>
            <button 
              onClick={onBack}
              className="shrink-0 bg-amber-500 hover:bg-amber-600 text-[#1c2421] px-5 py-3.5 rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              Back to Home
            </button>
          </motion.section>

        </div>

      </div>
    </div>
  );
}
