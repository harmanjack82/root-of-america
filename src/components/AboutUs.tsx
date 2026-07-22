import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Building2, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Eye, 
  CheckCircle, 
  Sparkles, 
  Award,
  ChevronRight
} from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

export default function AboutUs({ onBack }: AboutUsProps) {
  // Ensure we scroll to top when page is mounted
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div id="about-us-container" className="bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8">
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
            <span className="text-[#0e4a36] font-bold">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#0e4a36]/10 border border-[#0e4a36]/25 text-[#0e4a36] px-4 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our Strategy & Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c2421] tracking-tight leading-tight">
            We Have the Right Strategy to <br />
            <span className="text-[#0e4a36]">Accelerate Your Business Growth</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            At Root Of America, we are committed to helping businesses expand their market reach, strengthen their digital presence, and connect with verified buyers and suppliers across the United States and around the world.
          </p>
        </motion.div>

        {/* Introduction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-[#e5dfd3] shadow-sm hover:shadow-md transition-shadow text-left space-y-4"
          >
            <div className="bg-[#0e4a36]/10 h-12 w-12 rounded-2xl flex items-center justify-center text-[#0e4a36]">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1c2421]">Empowering Organizations</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Operated by <strong>Tixisle LLC</strong> (located at 6300 RIVERSIDE PLAZA NW STE 100 #3037, ALBUQUERQUE, NEW MEXICO 87120, UNITED STATES), our mission is to provide businesses with innovative tools, valuable opportunities, and reliable support to help them grow faster and compete successfully in today's global marketplace.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Root Of America delivers professional B2B business solutions, digital marketing services, and strategic networking opportunities that empower organizations to establish a strong market presence. We believe our clients' success reflects our own, which is why we focus on building long-term partnerships based on trust, transparency, innovation, and shared growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1c2421] text-white p-8 rounded-3xl border border-[#135d44] shadow-sm hover:shadow-md transition-shadow text-left space-y-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#faf8f5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="bg-amber-500/10 h-12 w-12 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20 relative z-10">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white relative z-10">A Trusted Bridge</h3>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              As a leading B2B business platform based in the United States, Root Of America serves as a trusted bridge between buyers, manufacturers, suppliers, exporters, distributors, wholesalers, and service providers across multiple industries.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              We provide a secure and reliable marketplace where businesses can showcase their products and services, generate qualified business inquiries, and discover new domestic and international trade opportunities. Our dedicated customer success team is committed to delivering a seamless experience throughout every stage of the business journey.
            </p>
          </motion.div>
        </div>

        {/* Vision & Platform Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#faf8f5] border-y border-[#e5dfd3] py-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#1c2421]">Our Vision</h3>
            <p className="text-base sm:text-lg text-gray-700 italic font-serif leading-relaxed max-w-3xl mx-auto">
              "Our vision is to become one of America's most trusted B2B business platforms, providing companies of all sizes with maximum exposure across U.S. and international markets. We aim to create a comprehensive business ecosystem where entrepreneurs, manufacturers, exporters, suppliers, distributors, wholesalers, and service providers can meet all of their business needs through a single, reliable platform."
            </p>
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto font-sans">
              With extensive experience in the B2B marketplace industry, Root Of America continues to empower businesses by providing innovative digital solutions that simplify commerce, strengthen business relationships, and promote sustainable growth. We strive to create a marketplace where businesses can connect, collaborate, and grow with confidence.
            </p>
          </div>
        </motion.div>

        {/* Our Team Section */}
        <div className="mb-16 space-y-6 text-left">
          <div className="border-l-4 border-[#0e4a36] pl-4">
            <h3 className="text-2xl font-serif font-bold text-[#1c2421]">Our Team</h3>
            <p className="text-sm text-gray-500 font-mono mt-1">THE FACES BEHIND ROOT OF AMERICA</p>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
            The strength of Root Of America lies in the expertise, passion, and dedication of our talented professionals. Our team consists of experienced specialists from diverse industries who are committed to delivering exceptional customer service and business solutions.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
            From technology development and digital marketing to customer success, business consulting, and operations management, every member of our team works diligently to ensure outstanding client satisfaction. By staying ahead of evolving market trends, emerging technologies, and industry best practices, we continuously enhance our platform to meet the changing needs of businesses across the United States and globally.
          </p>
          <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 text-sm text-[#1c2421] leading-relaxed max-w-4xl">
            <strong>Customized Industry Growth:</strong> Our industry expertise enables us to understand the unique challenges businesses face and provide customized solutions that deliver measurable growth and long-term value.
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mb-20 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c2421]">Our Core Values</h3>
            <p className="text-xs font-mono text-gray-500 tracking-wider uppercase">The foundation of everything we stand for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5dfd3] space-y-4 text-left shadow-sm">
              <div className="bg-emerald-50 text-[#0e4a36] h-10 w-10 rounded-xl flex items-center justify-center border border-emerald-100">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1c2421]">Integrity & Ethics</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Integrity is the foundation of everything we do. We conduct business with honesty, accountability, transparency, and professionalism, building lasting trust with our customers, partners, employees, and stakeholders.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5dfd3] space-y-4 text-left shadow-sm">
              <div className="bg-emerald-50 text-[#0e4a36] h-10 w-10 rounded-xl flex items-center justify-center border border-emerald-100">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1c2421]">Respect for Everyone</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We believe every individual deserves respect and equal opportunity. Root Of America embraces diversity, equity, and inclusion by creating an environment where people from all backgrounds, cultures, and experiences are welcomed and valued.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5dfd3] space-y-4 text-left shadow-sm">
              <div className="bg-emerald-50 text-[#0e4a36] h-10 w-10 rounded-xl flex items-center justify-center border border-emerald-100">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1c2421]">Innovation & Creativity</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Innovation drives business success. We encourage creative thinking, embrace emerging technologies, and continuously develop innovative solutions that create meaningful value for our customers and partners.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5dfd3] space-y-4 text-left shadow-sm md:col-span-1.5">
              <div className="bg-emerald-50 text-[#0e4a36] h-10 w-10 rounded-xl flex items-center justify-center border border-emerald-100">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1c2421]">Growth & Excellence</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We are committed to continuous improvement and operational excellence. By investing in learning, professional development, and innovation, we empower our team and customers to achieve sustainable long-term success.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-6 rounded-2xl border border-[#e5dfd3] space-y-4 text-left shadow-sm md:col-span-1.5">
              <div className="bg-emerald-50 text-[#0e4a36] h-10 w-10 rounded-xl flex items-center justify-center border border-emerald-100">
                <Eye className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#1c2421]">Transparent Work Culture</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Root Of America promotes an open, collaborative, and transparent work culture where communication, teamwork, integrity, and mutual respect are the foundation of every relationship. We believe transparency builds stronger partnerships and drives lasting business growth.
              </p>
            </div>

          </div>
        </div>

        {/* Why Choose Root Of America? */}
        <div className="bg-white border border-[#e5dfd3] rounded-3xl p-8 sm:p-12 mb-16 text-left space-y-8 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c2421]">Why Choose Root Of America?</h3>
            <p className="text-sm text-gray-600">
              Root Of America is a modern, cost-effective, and user-friendly B2B marketplace designed to simplify business connections and help companies expand across the United States and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Buyers Benefits */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-[#1c2421] px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider">
                <span>Benefits for Buyers</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Post business requirements quickly and receive competitive quotations.",
                  "Connect with verified manufacturers, suppliers, wholesalers, and service providers.",
                  "Access thousands of products and business services through one trusted platform.",
                  "Save valuable time with efficient supplier discovery and streamlined communication.",
                  "Discover reliable business partners for both domestic and international sourcing."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-sm text-gray-600 leading-snug">
                    <CheckCircle className="h-4 w-4 text-[#0e4a36] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sellers Benefits */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#0e4a36]/10 border border-[#0e4a36]/20 text-[#0e4a36] px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider">
                <span>Benefits for Sellers</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Showcase products and services to a broader national and global audience.",
                  "Generate high-quality business inquiries and qualified sales leads.",
                  "Increase brand visibility through targeted digital marketing opportunities.",
                  "Connect directly with buyers actively searching for your products and services.",
                  "Expand into new markets with enhanced business networking opportunities."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-sm text-gray-600 leading-snug">
                    <CheckCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Premium Business Promotion Opportunities banner */}
        <div className="bg-gradient-to-r from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 sm:p-10 border border-[#135d44] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left relative overflow-hidden shadow-xl mb-12">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#faf8f5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[9px] font-mono font-extrabold uppercase tracking-widest">
              <span>Premium Business Promotion</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold">Premium Business Promotion Opportunities</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To help businesses maximize visibility and accelerate growth, Root Of America offers premium membership plans, featured business listings, homepage promotions, sponsored placements, banner advertising, and digital branding solutions.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              At Root Of America, headquartered in Delaware, USA, we are dedicated to empowering businesses with the technology, resources, expertise, and support they need to achieve sustainable growth, expand into new markets, and build lasting business success.
            </p>
          </div>
          <button
            onClick={onBack}
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-[#1c2421] px-6 py-4 rounded-xl font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center space-x-2 cursor-pointer group hover:scale-[1.02] relative z-10"
          >
            <span>Explore Opportunities</span>
            <ChevronRight className="h-4 w-4 text-[#1c2421] group-hover:translate-x-1 transition-transform" />
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
