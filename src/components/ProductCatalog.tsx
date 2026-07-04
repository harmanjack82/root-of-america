import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MapPin, 
  FileCheck, 
  Plus, 
  Package, 
  Scale, 
  Layers, 
  ChevronRight, 
  Sparkles,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { USA_PRODUCTS } from '../data';

interface ProductCatalogProps {
  onAddToRfq: (product: Product, quantity: number) => void;
  addedProductIds: Record<string, number>;
}

export default function ProductCatalog({ onAddToRfq, addedProductIds }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [customQuantities, setCustomQuantities] = useState<Record<string, number>>({});

  const categories = ['All', 'Organic Crops', 'Hardwood Timber', 'Natural Fibers', 'Bio-Materials'];

  const filteredProducts = USA_PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.warehouse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getQuantityForProduct = (productId: string, minOrder: number) => {
    return customQuantities[productId] || minOrder;
  };

  const handleQuantityChange = (productId: string, val: string, minOrder: number) => {
    const num = parseInt(val) || 0;
    setCustomQuantities(prev => ({
      ...prev,
      [productId]: num
    }));
  };

  const handleAddClick = (product: Product) => {
    const qty = getQuantityForProduct(product.id, product.moq);
    if (qty < product.moq) {
      alert(`The Minimum Order Quantity (MOQ) for ${product.name} is ${product.moq} ${product.unit}. Please adjust your quantity.`);
      return;
    }
    onAddToRfq(product, qty);
  };

  return (
    <section id="sourcing-catalog-section" className="py-10 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono font-bold text-[#0e4a36] tracking-widest uppercase bg-[#0e4a36]/10 px-3.5 py-1.5 rounded-full">
              Sourcing Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1c2421]">
              Browse Certified American Goods
            </h2>
            <p className="text-sm text-gray-500 max-w-xl">
              Procure premium-grade natural assets sourced directly from American sustainable farms, timber reserves, and production fields. Detailed compliance records and trade specs provided on each item.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e5dfd3]">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-sans font-semibold text-sm transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0e4a36] text-[#faf8f5] shadow-md'
                    : 'text-gray-500 hover:text-[#1c2421] hover:bg-[#faf8f5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-gray-500 bg-gray-100 border px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span>Industrial & Natural Assets Only • Firearms & Drugs Restricted</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const currentQty = getQuantityForProduct(product.id, product.moq);
              const isAdded = addedProductIds[product.id] !== undefined;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-[#e5dfd3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Category Section & Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#e5dfd3] px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#0e4a36] shadow-sm">
                      {product.category}
                    </div>
                    {isAdded && (
                      <div className="absolute top-4 right-4 bg-amber-500 text-[#1c2421] px-3 py-1 rounded-full text-[11px] font-sans font-bold flex items-center space-x-1 shadow-sm">
                        <Sparkles className="h-3 w-3 animate-pulse" />
                        <span>In Draft RFQ ({addedProductIds[product.id]} {product.unit})</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      {/* Product Name & Origin */}
                      <div>
                        <div className="flex items-center space-x-1 text-xs text-gray-400 font-mono">
                          <MapPin className="h-3 w-3 text-red-500" />
                          <span>Origin: {product.origin}</span>
                        </div>
                        <h3 className="text-xl font-sans font-bold text-[#1c2421] mt-1 leading-tight line-clamp-1 group-hover:text-[#0e4a36] transition-colors">
                          {product.name}
                        </h3>
                      </div>

                      {/* Technical Specs Block */}
                      <div className="bg-[#faf8f5] p-3.5 rounded-2xl border border-gray-100 text-xs text-gray-600 space-y-1.5 font-mono">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Purity Grade:</span>
                          <span className="font-semibold text-gray-800">{product.purity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Spec Standard:</span>
                          <span className="font-semibold text-gray-800">{product.grade}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Nearest Hub:</span>
                          <span className="font-semibold text-[#0e4a36]">{product.warehouse.split(' ')[0]} Hub</span>
                        </div>
                      </div>

                      {/* Bulk Pricing Specs */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
                        <div>
                          <p className="text-xs text-gray-400 font-mono">FOB Price per {product.unit.split(' ')[0]}</p>
                          <p className="text-lg font-sans font-bold text-[#0e4a36]">
                            ${product.pricePerUnit.toLocaleString('en-US', { minimumFractionDigits: product.pricePerUnit < 10 ? 2 : 0 })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400 font-mono">Minimum Order (MOQ)</p>
                          <p className="font-sans font-bold text-[#1c2421]">
                            {product.moq.toLocaleString('en-US')} <span className="text-xs text-gray-500 font-normal">{product.unit}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RFQ Input controls */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-3">
                      <div className="w-1/2">
                        <label className="block text-[10px] font-mono text-gray-400 uppercase mb-1">Set Cargo Vol.</label>
                        <div className="relative">
                          <input
                            type="number"
                            min={product.moq}
                            value={currentQty}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value, product.moq)}
                            className="w-full bg-white border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-2.5 py-2 text-xs font-semibold text-[#1c2421] outline-none text-center pr-8"
                          />
                          <span className="absolute right-2.5 top-2.5 text-[10px] text-gray-400 font-mono">{product.unit.split(' ')[0]}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddClick(product)}
                        className={`w-1/2 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl font-sans font-bold text-xs transition-all ${
                          isAdded 
                            ? 'bg-amber-500 hover:bg-amber-600 text-[#1c2421] shadow-sm'
                            : 'bg-[#0e4a36] hover:bg-[#0b3c2a] text-white shadow-md hover:shadow-lg'
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>{isAdded ? 'Update RFQ' : 'Add to RFQ'}</span>
                      </button>
                    </div>

                    {/* Bottom Info Sheet Toggle */}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-4 text-center text-[11px] font-sans font-semibold text-gray-400 hover:text-[#0e4a36] flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <Info className="h-3 w-3" />
                      <span>View Technical Spec Sheets</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Product Technical Spec Sheet Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl border border-[#e5dfd3] p-6 sm:p-8 max-w-lg w-full relative shadow-2xl text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-5 right-5 p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Search className="h-4 w-4 rotate-45" />
                </button>

                <div className="space-y-6">
                  {/* Title & Origin */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#0e4a36] uppercase bg-[#0e4a36]/10 px-2.5 py-1 rounded-full">
                      {selectedProduct.category} Spec Sheet
                    </span>
                    <h3 className="text-2xl font-sans font-bold text-[#1c2421] mt-2 leading-tight">
                      {selectedProduct.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 mt-1">
                      <MapPin className="h-3.5 w-3.5 text-red-500" />
                      <span>Sourced in {selectedProduct.origin}</span>
                    </div>
                  </div>

                  {/* Spec List */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono font-bold text-gray-400 uppercase">Certified Lab Specifications</p>
                    <ul className="space-y-2.5 text-sm text-gray-700">
                      {selectedProduct.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FileCheck className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warehouse Location Info */}
                  <div className="bg-[#faf8f5] p-4 rounded-2xl border border-dashed border-[#e5dfd3] space-y-2">
                    <p className="text-xs font-mono text-gray-400 uppercase">Fulfillment & Logistical Hub</p>
                    <div className="text-sm">
                      <p className="font-bold text-[#1c2421]">{selectedProduct.warehouse}</p>
                      <p className="text-xs text-gray-500 mt-0.5">Complies with FDA Food Facility, FSC Chain of Custody, and OSHA workplace standards. Direct intermodal rail links available.</p>
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 font-mono">Wholesale FOB Rate</p>
                      <p className="text-xl font-sans font-extrabold text-[#0e4a36]">
                        ${selectedProduct.pricePerUnit.toLocaleString()} / {selectedProduct.unit.split(' ')[0]}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handleAddClick(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-[#0e4a36] hover:bg-[#0b3c2a] text-white px-5 py-3 rounded-xl font-sans font-bold text-xs shadow-md transition-colors"
                    >
                      Add Spec to RFQ List
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
