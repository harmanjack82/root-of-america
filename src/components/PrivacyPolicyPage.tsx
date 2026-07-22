import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Eye, 
  Lock, 
  Database, 
  Cookie, 
  Share2, 
  UserCheck, 
  Calendar, 
  Mail, 
  ChevronRight,
  Info
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="privacy-policy-container" className="bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
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
            <span className="text-[#0e4a36] font-bold">Privacy Policy</span>
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
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Data Protection & Privacy commitment</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c2421] tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Tixisle LLC • 6300 RIVERSIDE PLAZA NW STE 100 #3037 ALBUQUERQUE NEW MEXICO 87120 UNITED STATES
          </p>
        </motion.div>

        {/* Introduction Banner */}
        <div className="prose prose-emerald max-w-none space-y-6 text-gray-700 font-sans leading-relaxed text-sm sm:text-base mb-12">
          <p className="font-semibold text-gray-900 bg-[#0e4a36]/5 p-6 rounded-2xl border border-[#0e4a36]/10">
            At Root Of America (operated by Tixisle LLC, located at 6300 RIVERSIDE PLAZA NW STE 100 #3037, ALBUQUERQUE, NEW MEXICO 87120, UNITED STATES), protecting the privacy and security of our visitors, customers, and business partners is one of our highest priorities. This Privacy Policy explains how we collect, use, disclose, store, and safeguard information when you visit our website or use our products and services.
          </p>
          <p>
            By accessing or using the Root Of America website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of information as described herein.
          </p>
        </div>

        {/* Dynamic Sections Grid */}
        <div className="space-y-10 mb-16 text-left">
          
          {/* Section 1: Scope of This Privacy Policy & Consent */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <Eye className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Scope of This Policy</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  This Privacy Policy applies exclusively to information collected through the official Root Of America website, mobile applications (if applicable), and online services.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  It governs information shared by visitors, registered users, buyers, suppliers, manufacturers, distributors, service providers, advertisers, and business partners while interacting with Root Of America online.
                </p>
                <p className="text-xs text-gray-500 italic">
                  This Privacy Policy does not apply to information collected through offline interactions or websites, applications, or services that are owned or operated by third parties.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <UserCheck className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Consent</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  By using our Website, creating an account, submitting inquiries, purchasing services, or otherwise interacting with Root Of America, you consent to the collection, use, storage, and disclosure of your information as described in this Privacy Policy.
                </p>
                <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#e5dfd3] text-xs text-gray-500">
                  Please do not use our website or provide personal information if you do not agree with the terms and conditions outlined in this Privacy Policy.
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Database className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Information We Collect</h2>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              Depending on how you interact with our platform, we may collect the following categories of information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-3">
                <h4 className="font-serif font-bold text-gray-900 text-sm">Personal Information</h4>
                <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Full Name</li>
                  <li>Email Address &amp; Phone</li>
                  <li>Business / Company Name</li>
                  <li>Business / Mailing Address</li>
                  <li>Job Title or Position</li>
                  <li>Industry Information</li>
                  <li>Payment and Billing Info</li>
                </ul>
              </div>

              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-3">
                <h4 className="font-serif font-bold text-gray-900 text-sm">Communications</h4>
                <p className="text-xs text-gray-600">
                  When you contact us through email, contact forms, live chat, telephone, or other channels, we collect:
                </p>
                <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Contact details</li>
                  <li>Inquiry specifics</li>
                  <li>Message content &amp; attachments</li>
                  <li>Customer support records</li>
                </ul>
              </div>

              <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-3">
                <h4 className="font-serif font-bold text-gray-900 text-sm">Account Registration</h4>
                <p className="text-xs text-gray-600">
                  Information necessary to verify your identity, establish your corporate profile, and securely access our business-to-business marketplace services.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: How We Use Your Information */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Info className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">How We Use Your Information</h2>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              We use the information we collect for legitimate business purposes, including to:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs text-gray-600 font-sans list-disc list-inside">
              <li>Operate, maintain, and improve our digital platform.</li>
              <li>Create, verify, and securely manage user accounts.</li>
              <li>Connect buyers, suppliers, manufacturers, and service providers.</li>
              <li>Process inquiries, RFQs, leads, and business opportunities.</li>
              <li>Deliver purchased services, marketing packages, and memberships.</li>
              <li>Personalize user experiences and custom dashboards.</li>
              <li>Improve website functionality and visual trade metrics.</li>
              <li>Develop new products, services, and wholesale platform features.</li>
              <li>Respond to high-priority customer support requests.</li>
              <li>Send service announcements and important account security notices.</li>
              <li>Deliver newsletters, promotional emails, and marketing content where permitted.</li>
              <li>Detect, prevent, and investigate fraud, security incidents, or abuse.</li>
              <li>Comply with applicable federal, state, and local laws and obligations.</li>
              <li>Protect our legal rights and business interests in the Delaware C-Corp environment.</li>
            </ul>
          </motion.section>

          {/* Section 4: Log Files, Cookies & Analytics */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <Database className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Log Files &amp; Analytics</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Like many modern websites, Root Of America automatically collects certain technical information through server logs and analytics tools, such as:
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside space-y-1 pl-1">
                  <li>IP Address &amp; Device Information</li>
                  <li>Browser Type and Version</li>
                  <li>Operating System &amp; ISP</li>
                  <li>Referring and Exit Pages</li>
                  <li>Date/Time stamp &amp; Navigation patterns</li>
                </ul>
                <p className="text-xs text-gray-500 italic">
                  This data is used to optimize performance, prevent fraud, ensure cybersecurity, and enhance user experience. It is not used to personally identify visitors.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <Cookie className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Cookies &amp; Tracking</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Root Of America uses cookies, web beacons, and pixels to enhance user experience. Cookies help us:
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside space-y-1 pl-1">
                  <li>Remember user preferences &amp; configurations</li>
                  <li>Maintain secure user sessions</li>
                  <li>Analyze website traffic and visitor behavior</li>
                  <li>Deliver personalized business content</li>
                </ul>
                <p className="text-xs text-gray-500 italic">
                  Most browsers allow managing cookies. Disabling cookies may affect certain website features.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Advertising and Third-Party Services */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-4"
          >
            <div className="flex items-center space-x-3 text-[#0e4a36] border-b border-[#e5dfd3] pb-4">
              <Share2 className="h-5 w-5" />
              <h2 className="text-xl font-serif font-bold text-[#1c2421]">Advertising and Third-Party Services</h2>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p>
                Root Of America may work with trusted advertising networks, analytics providers, payment processors, customer support providers, cloud hosting providers, and other third-party service providers.
              </p>
              <p>
                These providers may use cookies, pixels, or similar technologies to measure advertising effectiveness, deliver relevant business advertisements, analyze website usage, and improve service quality.
              </p>
              <p className="font-semibold text-gray-800">
                These third parties maintain their own privacy policies and data collection practices. Root Of America does not control the privacy practices of independent third-party providers. Users are encouraged to review the privacy policies of any third-party websites or services they visit through our platform.
              </p>
            </div>
          </motion.section>

          {/* Section 6: Data Security & Retention */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <Lock className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Data Security</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Protecting customer information is a core priority at Root Of America. We implement commercially reasonable safeguards including:
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside space-y-1.5 pl-1">
                  <li>Secure cloud infrastructure &amp; server firewalls</li>
                  <li>Encrypted communications (SSL/TLS encryption)</li>
                  <li>Role-based access control systems</li>
                  <li>Authentication and authorization procedures</li>
                  <li>Continuous monitoring and threat detection</li>
                </ul>
                <p className="text-xs text-gray-500 italic">
                  While we employ robust security measures, no internet transmission or electronic storage system can be guaranteed to be 100% secure.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#0e4a36] border-b border-[#e5dfd3] pb-3">
                  <Database className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-[#1c2421]">Data Retention</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Root Of America retains personal and business information only for as long as reasonably necessary to:
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside space-y-1.5 pl-1">
                  <li>Provide requested B2B and marketing services.</li>
                  <li>Maintain active customer accounts and RFQ histories.</li>
                  <li>Comply with regulatory or corporate tax requirements.</li>
                  <li>Resolve disputes and enforce platform agreements.</li>
                  <li>Protect legitimate business interests.</li>
                </ul>
                <p className="text-xs text-gray-500 italic">
                  When information is no longer required, it is securely deleted, anonymized, or safely disposed of.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Your Privacy Rights & Children's Privacy */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5dfd3] space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-[#1c2421] border-b border-[#e5dfd3] pb-2">Your Privacy Rights</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Depending on your location and applicable U.S. federal or state privacy laws (including the California Consumer Privacy Act (CCPA/CPRA)), you may have rights including:
                </p>
                <ul className="text-xs text-gray-500 list-disc list-inside space-y-1 pl-1">
                  <li>Access and request a copy of your stored personal data.</li>
                  <li>Correct inaccurate or incomplete corporate/personal files.</li>
                  <li>Request deletion of personal information.</li>
                  <li>Withdraw consent or object to processing activities.</li>
                  <li>Opt out of marketing or promotional emails.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif font-bold text-[#1c2421] border-b border-[#e5dfd3] pb-2">Children's Privacy</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Root Of America does not knowingly collect or solicit personal information from individuals under 18 years of age.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  If we become aware that personal information has been collected from a minor without appropriate authorization, we will promptly delete such information from our systems in accordance with applicable law.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Updates & Contact */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-emerald-50/40 rounded-3xl p-8 border border-emerald-500/20 space-y-4"
          >
            <div className="flex items-center space-x-2 text-[#0e4a36]">
              <Calendar className="h-5 w-5" />
              <h2 className="text-lg font-serif font-bold text-[#1c2421]">Updates to This Privacy Policy</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Root Of America reserves the right to revise, update, or modify this Privacy Policy at any time to reflect changes in our business practices, technology, legal requirements, or regulatory obligations. Any revisions will be posted on this page together with an updated effective date. Your continued use of our Website after any changes become effective constitutes your acceptance of the revised Privacy Policy.
            </p>
          </motion.section>

          {/* Contact Us Footer Block */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 border border-[#135d44] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          >
            <div className="space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold">Contact Our Support Team</h3>
              </div>
              <p className="text-xs text-gray-300 max-w-lg">
                If you have any questions, requests, or concerns regarding this Privacy Policy, our data protection practices, or the handling of your personal information, please contact the Root Of America Customer Support Team using the official contact information provided on our Website. We are committed to protecting your privacy, maintaining the security of your information, and earning the continued trust of our customers, users, and business partners.
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
