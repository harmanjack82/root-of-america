import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  ShoppingBag, 
  Megaphone, 
  ArrowRight 
} from 'lucide-react';

interface CustomSourcingBoxProps {
  onOpenEnquiry?: (category?: string) => void;
}

export default function CustomSourcingBox({ onOpenEnquiry }: CustomSourcingBoxProps) {
  const services = [
    {
      id: 'design-branding',
      title: 'Design & Branding',
      description: 'Design and branding combine creativity and strategy to create a unique identity for your business. From memorable logos and stunning visuals to consistent brand messaging, we help your brand stand out, build trust, and leave a lasting impression.',
      metric: 'Award-Winning Creative',
      icon: <Palette className="h-6 w-6 text-[#0e4a36]" />,
      bgImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'ecommerce-development',
      title: 'eCommerce Development',
      description: 'eCommerce development is the process of designing, building, and maintaining online stores that provide secure, fast, and user-friendly shopping experiences. It includes features such as product catalogs, shopping carts, secure payment integration, order management, and responsive design, helping businesses expand their online presence, increase sales, and deliver a seamless customer experience.',
      metric: 'Secure Payments Integrated',
      icon: <ShoppingBag className="h-6 w-6 text-[#0e4a36]" />,
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'We provide complete digital solutions, including eCommerce development, web development, and digital marketing, to help businesses build a strong online presence, reach the right audience, and achieve sustainable growth through innovative, user-friendly, and results-driven strategies.',
      metric: 'Maximizing ROI & Growth',
      icon: <Megaphone className="h-6 w-6 text-[#0e4a36]" />,
      bgImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=400',
      badgeColor: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <section id="featured-services-section" className="py-10 bg-[#faf8f5] border-b border-[#e5dfd3] relative">
      {/* Ambient background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0e4a36]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <div className="flex justify-center items-center space-x-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0e4a36]"></span>
            <span className="text-xs font-mono font-bold text-[#0e4a36] tracking-widest uppercase">
              Exclusive Access
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0e4a36]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1c2421]">
            Featured Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Our cross-functional teams breathe life into flawless web solutions, expertly designing, developing, and promoting your digital vision.
          </p>
        </div>

        {/* Three Small Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-[#e5dfd3] hover:border-[#0e4a36] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Decorative Visual Header with subtle image overlay */}
                <div className="relative h-32 bg-gray-100 overflow-hidden">
                  <img 
                    src={service.bgImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  
                  {/* Floating Icon Box */}
                  <div className="absolute bottom-4 left-6 h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-md border border-[#e5dfd3] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 pt-2 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-bold text-[#1c2421] group-hover:text-[#0e4a36] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed min-h-[72px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-gray-50 mt-2">
                <button
                  id={`featured-service-btn-${service.id}`}
                  onClick={() => {
                    if (onOpenEnquiry) {
                      onOpenEnquiry(service.title);
                    } else {
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-2.5 bg-gray-50 hover:bg-[#0e4a36] text-[#1c2421] hover:text-white border border-[#e5dfd3] hover:border-[#0e4a36] font-sans font-bold text-xs rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
