import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  Cookie, 
  Copyright, 
  MessageSquare, 
  ExternalLink, 
  Settings, 
  Layers, 
  AlertTriangle, 
  Gavel, 
  Phone,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface TermsOfTradePageProps {
  onBack: () => void;
}

export default function TermsOfTradePage({ onBack }: TermsOfTradePageProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="terms-of-trade-container" className="bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
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
            <span className="text-[#0e4a36] font-bold">Terms of Trade</span>
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
            <Scale className="h-3.5 w-3.5" />
            <span>Official Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c2421] tracking-tight leading-none">
            Terms of Trade
          </h1>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Roots Of America Inc. • Delaware Headquarters
          </p>
        </motion.div>

        {/* Introduction Banner */}
        <div className="prose prose-emerald max-w-none space-y-6 text-gray-700 font-sans leading-relaxed text-sm sm:text-base mb-12">
          <p className="font-semibold text-gray-900 bg-[#0e4a36]/5 p-6 rounded-2xl border border-[#0e4a36]/10">
            Welcome to Root Of America. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Root Of America website, products, and services. By accessing or using our website, you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of our website immediately.
          </p>
          
          <div className="bg-white rounded-2xl p-6 border border-[#e5dfd3] space-y-3 shadow-sm">
            <p className="text-xs font-mono uppercase tracking-widest text-[#0e4a36] font-bold">Throughout these Terms:</p>
            <ul className="text-xs text-gray-600 space-y-2 list-none pl-0">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-[#1c2421] shrink-0 min-w-[120px]">&quot;User,&quot; &quot;You,&quot; &quot;Your&quot;:</span>
                <span>Refer to any individual, business, organization, or other legal entity accessing or using our Website or Services.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-[#1c2421] shrink-0 min-w-[120px]">&quot;Root Of America&quot;:</span>
                <span>&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; and &quot;Our&quot; refer to Root Of America, a company headquartered in Delaware, United States, together with its affiliates, subsidiaries, officers, employees, contractors, and authorized representatives.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-[#1c2421] shrink-0 min-w-[120px]">&quot;Parties&quot;:</span>
                <span>Refers collectively to both the User and Root Of America.</span>
              </li>
            </ul>
          </div>

          <p>
            These Terms govern your use of our Website, services, content, marketplace, and all related interactions in accordance with the applicable federal laws of the United States and the laws of the State of Delaware.
          </p>
        </div>

        {/* Dynamic Sections Grid */}
        <div className="space-y-10 mb-16 text-left">
          
          {/* Section: Cookies Policy */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Cookie className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Cookies Policy</h2>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 font-sans">
              <p>
                Root Of America uses cookies, pixels, and similar technologies to improve website functionality, enhance user experience, analyze website traffic, and personalize content.
              </p>
              <p className="font-semibold text-[#0e4a36]">
                By using our Website, you consent to our use of cookies in accordance with our Privacy Policy.
              </p>
              
              <div className="bg-[#faf8f5] p-5 rounded-xl border border-[#e5dfd3] space-y-2">
                <p className="font-bold text-xs uppercase tracking-wider text-gray-800">Cookies help us:</p>
                <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                  <li>Remember your preferences.</li>
                  <li>Maintain secure login sessions.</li>
                  <li>Improve website performance.</li>
                  <li>Understand visitor behavior.</li>
                  <li>Deliver relevant content and advertisements.</li>
                </ul>
              </div>

              <p className="text-xs text-gray-500">
                Third-party advertising partners, analytics providers, and service providers integrated with our Website may also use cookies. Users may manage cookie preferences through their browser settings.
              </p>
            </div>
          </motion.section>

          {/* Section: Intellectual Property Rights */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Copyright className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Intellectual Property Rights</h2>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 font-sans leading-relaxed">
              <p>
                Unless otherwise stated, all content available on the Root Of America Website—including text, graphics, logos, trademarks, service marks, software, databases, website design, images, videos, and other materials—is owned by or licensed to Root Of America and is protected by United States and international intellectual property laws.
              </p>
              <p className="font-semibold text-gray-800">
                You may access and use our Website solely for lawful, personal, or internal business purposes.
              </p>

              <div className="bg-[#0e4a36]/5 p-5 rounded-xl border border-[#0e4a36]/10 space-y-2">
                <p className="font-bold text-xs uppercase tracking-wider text-[#0e4a36]">You may not:</p>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                  <li>Republish Root Of America content without written permission.</li>
                  <li>Sell, rent, lease, sublicense, or commercially exploit our content.</li>
                  <li>Copy, reproduce, modify, distribute, or duplicate website materials for commercial purposes.</li>
                  <li>Redistribute any Website content without our prior written consent.</li>
                </ul>
              </div>

              <p className="italic text-gray-500">
                All rights not expressly granted are reserved by Root Of America.
              </p>
            </div>
          </motion.section>

          {/* Section: User Comments and Contributions */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <MessageSquare className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">User Comments and Contributions</h2>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 font-sans leading-relaxed">
              <p>
                Certain sections of our Website may permit users to submit reviews, comments, testimonials, ratings, business information, or other user-generated content.
              </p>
              <p>
                Root Of America does not routinely monitor or review all submissions before publication. Opinions expressed by users belong solely to those individuals and do not necessarily reflect the views of Root Of America.
              </p>

              <div className="bg-[#faf8f5] p-5 rounded-xl border border-[#e5dfd3] space-y-2">
                <p className="font-bold text-xs uppercase tracking-wider text-gray-800">By submitting content, you represent and warrant that:</p>
                <ul className="list-disc list-inside text-xs text-gray-600 space-y-1.5">
                  <li>You have the legal authority to submit the content.</li>
                  <li>The content does not infringe upon any intellectual property or proprietary rights.</li>
                  <li>The content is not false, misleading, defamatory, obscene, unlawful, abusive, or harmful.</li>
                  <li>The content does not promote illegal activities or violate applicable laws or regulations.</li>
                </ul>
              </div>

              <p>
                Root Of America reserves the right, but is not obligated, to remove, edit, reject, or restrict access to any content that violates these Terms or is otherwise deemed inappropriate.
              </p>
              <p className="text-xs text-gray-500 font-semibold italic">
                To the fullest extent permitted by law, Root Of America shall not be liable for any damages arising from user-generated content.
              </p>
            </div>
          </motion.section>

          {/* Section: Hyperlinks, iFrames & Content Liability */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Hyperlinks & iFrames */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-[#1c2421] border-b border-[#e5dfd3] pb-2">Hyperlinks &amp; iFrames</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our Website may contain links to third-party websites for informational or convenience purposes. Root Of America does not own, control, endorse, or assume responsibility for the content, privacy practices, products, or services offered by third-party websites. Users access them entirely at their own risk.
                </p>
                <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 text-xs text-amber-950">
                  <strong>iFrames Restriction:</strong> Without the prior written consent of Root Of America, you may not frame, embed, mirror, or otherwise display any portion of our Website in a manner that alters its appearance, branding, functionality, or presentation.
                </div>
              </div>

              {/* Right Column: Content Liability */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-[#1c2421] border-b border-[#e5dfd3] pb-2">Content Liability</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Root Of America and its affiliates, officers, directors, employees, contractors, and representatives from any claims, liabilities, damages, costs, losses, or legal expenses arising from content published on your website or platform that references or links to Root Of America.
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  No content or hyperlink may be presented in a manner that is defamatory, fraudulent, offensive, obscene, illegal, misleading, or infringing. We reserve the right to request the removal of any link.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: Privacy, Reservation of Rights & Access */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600">
              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-2">
                <h4 className="font-serif font-bold text-gray-900 text-sm flex items-center space-x-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#0e4a36]" />
                  <span>Privacy First</span>
                </h4>
                <p>
                  Your use of this Website is also governed by our Privacy Policy, which explains how we collect, use, disclose, and protect your personal information. By using our Website, you acknowledge that you have reviewed and accepted our Privacy Policy.
                </p>
              </div>

              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-2">
                <h4 className="font-serif font-bold text-gray-900 text-sm flex items-center space-x-1.5">
                  <Settings className="h-4 w-4 text-[#0e4a36]" />
                  <span>Reserved Rights</span>
                </h4>
                <p>
                  We reserve the right to modify, revise, or update these Terms, restrict/terminate website access, or remove unauthorized content and links at any time without prior notice. Your continued use constitutes acceptance of revised terms.
                </p>
              </div>

              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-2">
                <h4 className="font-serif font-bold text-gray-900 text-sm flex items-center space-x-1.5">
                  <Layers className="h-4 w-4 text-[#0e4a36]" />
                  <span>Access &amp; Hosting</span>
                </h4>
                <p>
                  If Root Of America develops or manages a website or digital project for you, administrative access, hosting credentials, or control panel access may require that you maintain an active hosting account. Credentials will be provided after payments are satisfied.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section: Limitation of Liability */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-amber-600 border-b border-[#e5dfd3] pb-4">
              <AlertTriangle className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Limitation of Liability</h2>
            </div>
            
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
              <p className="font-semibold text-gray-900">
                To the fullest extent permitted by applicable United States law, Root Of America shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from or relating to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-xs text-gray-500">
                <li>Use of or inability to use our Website or Services.</li>
                <li>Website interruptions, outages, or technical failures.</li>
                <li>Errors, inaccuracies, or omissions in Website content.</li>
                <li>Loss of revenue, profits, business opportunities, contracts, goodwill, or data.</li>
                <li>Unauthorized access to or disclosure of user information.</li>
                <li>Actions or omissions of third-party service providers.</li>
              </ul>
              <p className="italic font-bold text-[#0e4a36]">
                Users agree that they access and use the Website entirely at their own risk.
              </p>
            </div>
          </motion.section>

          {/* Section: Governing Law */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Gavel className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Governing Law</h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles, and applicable federal laws of the United States of America.
              </p>
              <p className="font-semibold">
                Any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Website shall be subject to the exclusive jurisdiction of the state or federal courts located in Delaware, USA, and each party irrevocably submits to the jurisdiction of those courts.
              </p>
            </div>
          </motion.section>

          {/* Contact Us Footer Block */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-gradient-to-r from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 border border-[#135d44] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          >
            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold">Official Inquiries & Support</h3>
              </div>
              <p className="text-xs text-gray-300 max-w-lg">
                If you have any questions regarding these Terms and Conditions or any of our Services, please contact the Root Of America Customer Support Team using the official contact information provided on our Website. We are committed to providing a secure, transparent, and reliable business platform for organizations throughout the United States and around the world.
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
