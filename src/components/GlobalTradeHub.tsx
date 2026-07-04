import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe2, 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Building2, 
  Ship, 
  FileCheck2, 
  TrendingUp, 
  Coins, 
  Scale, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  Download, 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  CheckCircle,
  Clock,
  ArrowRight,
  Info,
  Layers,
  Sparkles,
  RefreshCw,
  Award,
  DollarSign
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  LineChart, 
  Line, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { GlobalTradeRequirement } from '../types';

const COMPANY_PREFIXES = [
  "Global", "Intercontinental", "Apex", "Pacific", "Atlantic", "Continental", "Summit", "Beacon", "Pioneer", "Zenith", 
  "Eco", "Bio", "Sustainable", "Nordic", "Hanseatic", "Alpine", "Crown", "Evergreen", "Delta", "Atlas", "Titan", "Vertex", 
  "Meridian", "Helix", "Nova", "Aero", "Terra", "Vanguard", "Genesis", "Prism", "Aurora", "Sterling", "Alliance", "United",
  "Equinox", "Horizon", "Sovereign", "Matrix", "Pinnacle", "Aegis", "Valiant", "Astral", "Kinetic", "Elysian", "Lumina"
];

const COMPANY_SUFFIXES = [
  "Trade", "Logistics", "Sourcing", "Industries", "Agri-Products", "Timber Co.", "Textiles Ltd.", "Materials Corp", 
  "Supply Chain", "Global Ventures", "Resources", "Mills S.A.", "Holdings", "Solutions", "Enterprise", "Imports", 
  "Fibers", "Woods", "Partners", "Group", "International", "Dynamics", "Synergy", "Trading House", "Consolidated", 
  "Commerce", "Fulfillment", "Contractors", "Exporters", "Wholesale", "Agro-Trade", "Global Sourcing"
];

const COUNTRIES_POOL = [
  { name: 'Germany', flag: '🇩🇪', region: 'Europe', port: 'Port of Hamburg' },
  { name: 'Japan', flag: '🇯🇵', region: 'Asia-Pacific', port: 'Port of Yokohama' },
  { name: 'South Korea', flag: '🇰🇷', region: 'Asia-Pacific', port: 'Port of Busan' },
  { name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', port: 'Port of Felixstowe' },
  { name: 'Brazil', flag: '🇧🇷', region: 'Latin America', port: 'Port of Paranagua' },
  { name: 'Australia', flag: '🇦🇺', region: 'Asia-Pacific', port: 'Port of Melbourne' },
  { name: 'Vietnam', flag: '🇻🇳', region: 'Asia-Pacific', port: 'Port of Da Nang' },
  { name: 'Netherlands', flag: '🇳🇱', region: 'Europe', port: 'Port of Rotterdam' },
  { name: 'United States', flag: '🇺🇸', region: 'North America', port: 'Port of Oakland' },
  { name: 'Canada', flag: '🇨🇦', region: 'North America', port: 'Port of Montreal' },
  { name: 'Singapore', flag: '🇸🇬', region: 'Asia-Pacific', port: 'Port of Singapore' },
  { name: 'India', flag: '🇮🇳', region: 'Asia-Pacific', port: 'Port of Mundra' },
  { name: 'France', flag: '🇫🇷', region: 'Europe', port: 'Port of Marseille' },
  { name: 'Italy', flag: '🇮🇹', region: 'Europe', port: 'Port of Genoa' },
  { name: 'Spain', flag: '🇪🇸', region: 'Europe', port: 'Port of Valencia' },
  { name: 'Taiwan', flag: '🇹🇼', region: 'Asia-Pacific', port: 'Port of Kaohsiung' },
  { name: 'Mexico', flag: '🇲🇽', region: 'Latin America', port: 'Port of Manzanillo' },
  { name: 'Chile', flag: '🇨🇱', region: 'Latin America', port: 'Port of Valparaiso' },
  { name: 'South Africa', flag: '🇿🇦', region: 'Other', port: 'Port of Durban' },
  { name: 'Indonesia', flag: '🇮🇩', region: 'Asia-Pacific', port: 'Port of Tanjung Priok' },
  { name: 'Malaysia', flag: '🇲🇾', region: 'Asia-Pacific', port: 'Port of Klang' },
  { name: 'Norway', flag: '🇳🇴', region: 'Europe', port: 'Port of Oslo' },
  { name: 'Sweden', flag: '🇸🇪', region: 'Europe', port: 'Port of Gothenburg' },
  { name: 'New Zealand', flag: '🇳🇿', region: 'Asia-Pacific', port: 'Port of Auckland' }
];

const CATEGORY_PRODUCTS = {
  Timber: [
    { name: 'FSC Certified Douglas Fir Timber', unit: 'Board Feet (BF)', priceRange: [1.90, 2.40], specs: ['FSC Sustainable Certified', 'Kiln-Dried to 15%', 'S4S Finished Surface'], grade: 'Select Structural' },
    { name: 'Premium Western Red Cedar Siding', unit: 'Board Feet (BF)', priceRange: [3.10, 3.80], specs: ['Class A Fire-Rated', 'Naturally Decay Resistant', 'Clear Vertical Grain'], grade: 'Clear Heart' },
    { name: 'Appalachian White Oak Slabs', unit: 'Board Feet (BF)', priceRange: [4.20, 5.50], specs: ['Kiln-Dried 8%', 'Beautiful Plain Sawn Pattern', 'Zero Sapwood Defects'], grade: 'FAS Premium Grade' },
    { name: 'Sustainable Radiata Pine Lumber', unit: 'Board Feet (BF)', priceRange: [1.20, 1.60], specs: ['Preservative Treated H3', 'FSC Plantation Sourced', 'Consistent Structural Integrity'], grade: 'No. 2 Structural' },
    { name: 'High-Density Scandinavian Spruce Logs', unit: 'Board Feet (BF)', priceRange: [1.45, 1.85], specs: ['PEFC Certified', 'Slow Grown Nordics', 'Tight Ring Pattern'], grade: 'A-Grade Sawlogs' },
    { name: 'Burmese Sustainable Teak Timber', unit: 'Board Feet (BF)', priceRange: [8.50, 12.00], specs: ['Legally Verified SVLK', 'Genuine Tectona Grandis', 'High Natural Oil Content'], grade: 'FEQ Premium Marine' },
    { name: 'Eastern White Pine Planks', unit: 'Board Feet (BF)', priceRange: [1.60, 2.10], specs: ['Furniture-Grade Smooth', 'NEFMA Standard Inspected', 'Kiln-Dried 10-12%'], grade: 'D-Select Furniture' }
  ],
  Agriculture: [
    { name: 'Hard Red Winter Wheat', unit: 'Metric Tons (MT)', priceRange: [340, 395], specs: ['Minimum 13.5% Protein', 'Low Moisture <12%', 'High Falling Number'], grade: 'Grade No. 1 HRW' },
    { name: 'Non-GMO Feed Soybeans', unit: 'Metric Tons (MT)', priceRange: [480, 540], specs: ['Moisture Max 13%', 'Oil Content Min 18.5%', 'Foreign Matter Max 1%'], grade: 'US No. 2 Yellow' },
    { name: 'Organic Yellow Field Peas', unit: 'Metric Tons (MT)', priceRange: [410, 470], specs: ['100% USDA Organic Certified', 'Phytosanitary Cleaned', 'Excellent Sprouting Rate'], grade: 'Premium Food Grade' },
    { name: 'High-Energy Malting Barley', unit: 'Metric Tons (MT)', priceRange: [310, 360], specs: ['Plump Kernels >95%', 'Protein Content 10-11%', 'Germination Capacity 98%'], grade: 'Two-Row Malting Grade' },
    { name: 'Organic Red Sorghum Grains', unit: 'Metric Tons (MT)', priceRange: [260, 310], specs: ['Tannin Level <0.3%', 'Non-GMO Project Verified', 'De-hulled Clean Grain'], grade: 'Grade No. 1 Sorghum' },
    { name: 'Premium American Field Corn', unit: 'Metric Tons (MT)', priceRange: [220, 270], specs: ['Starch Content Min 72%', 'Moisture Max 14.5%', 'Mycotoxin Tested Safe'], grade: 'US No. 2 Dent Corn' },
    { name: 'Bulk Organic Milling Rye', unit: 'Metric Tons (MT)', priceRange: [290, 340], specs: ['Hagberg Falling Number >180', 'Cleaned & Sifted Quality', 'Low Ergot Contamination'], grade: 'No. 1 Premium Rye' }
  ],
  Textiles: [
    { name: 'Long-Staple American Pima Cotton', unit: 'Bales', priceRange: [620, 690], specs: ['100% Extra-Long Staple', 'High Tensile Strength', 'Zero Seed Contamination'], grade: 'Supima-grade Premium' },
    { name: 'Premium Raw Organic Jute Fibers', unit: 'Bales', priceRange: [280, 340], specs: ['Golden Luster Fiber', 'Average Length 2.5m', 'Low Moisture Retention'], grade: 'TD-3 Grade Extra long' },
    { name: 'Superfine Merino Wool Fleece', unit: 'Bales', priceRange: [950, 1200], specs: ['Micron Count 17.5-18.5um', 'High Crimp Density', 'ECO-Tex Sourced Certified'], grade: 'A-Grade Superfine' },
    { name: 'Organic Sustainable Hemp Fibers', unit: 'Bales', priceRange: [410, 480], specs: ['Naturally Decorticated', 'Unbleached Clean Fibers', 'High Breathability Index'], grade: 'Long Line Wet Spun' },
    { name: 'FSC Certified Lyocell Wood Pulp', unit: 'Bales', priceRange: [510, 580], specs: ['Closed-Loop Solvent System', 'Biodegradable Rayon Fiber', 'Silky Tensile Softness'], grade: 'Tencel-grade Micro' },
    { name: 'Premium Flax Linen Fibers', unit: 'Bales', priceRange: [720, 850], specs: ['Water Retted & Scutched', 'Average Length >80cm', 'Natural Flax Golden-Gray'], grade: 'L-Grade Belgian Origin' }
  ],
  'Bio-Materials': [
    { name: 'Corn-Based PLA Bio-Polymer', unit: 'Metric Tons (MT)', priceRange: [1750, 1950], specs: ['BPI Certified Compostable', 'FDA Food Contact Approved', 'Ivory Resins'], grade: 'Extrusion Grade' },
    { name: 'Recycled Kraft Linerboard', unit: 'Metric Tons (MT)', priceRange: [480, 560], specs: ['100% Post-Consumer Fiber', 'Burst Index >2.8 kPa', 'Moisture Proof Glazed'], grade: 'Premium Testliner' },
    { name: 'Certified Eucalyptus Paper Pulp', unit: 'Metric Tons (MT)', priceRange: [710, 790], specs: ['100% FSC Eucalyptus', 'High Whiteness Index', 'Eco-Bleached Chlorine Free'], grade: 'Bleached Kraft Pulp' },
    { name: 'Biodegradable Sugarcane Bagasse', unit: 'Metric Tons (MT)', priceRange: [380, 460], specs: ['Unbleached Fibers', 'Water & Oil Resistant', 'Excellent Heat Resistance'], grade: 'Thermoforming Grade' },
    { name: 'Sustainable Bamboo Pulp Resins', unit: 'Metric Tons (MT)', priceRange: [1200, 1450], specs: ['ECO-Friendly Bio Resin', 'Highly Durable Structure', 'Phthalate & BPA Free'], grade: 'Injection Molding Grade' },
    { name: 'Agricultural Straw Bio-Composite', unit: 'Metric Tons (MT)', priceRange: [650, 780], specs: ['Formaldehyde-Free Binder', 'Carbon-Negative Sourced', 'Excellent Fire Retardancy'], grade: 'MDF Panel Core' }
  ],
  'Home Supplies': [
    { name: 'Stainless Steel Insulated Cookware Sets', unit: 'Sets', priceRange: [45.00, 65.00], specs: ['Food Grade SS304', 'Triple-Ply Construction', 'Induction Friendly Base'], grade: 'Commercial Grade' },
    { name: 'Premium Microfiber Cleaning Cloths', unit: 'Cartons', priceRange: [85.00, 110.00], specs: ['80/20 Polyester/Polyamide', 'Lint-free & Scratch-free', 'Absorbs 8x its weight'], grade: 'Professional Janitorial' },
    { name: 'Biodegradable Bamboo Fiber Dinnerware', unit: 'Sets', priceRange: [12.50, 18.00], specs: ['100% Organic Bamboo Fiber', 'Melamine-free & Non-toxic', 'Dishwasher Safe (Top Rack)'], grade: 'Eco Premium' },
    { name: 'Smart LED Dimmable Bulbs Bulk Pack', unit: 'Units', priceRange: [3.20, 5.50], specs: ['900 Lumens Energy Star', 'WiFi & Bluetooth Integrated', '25,000 Hour Lifetime Rating'], grade: 'Residential/Commercial' },
    { name: 'Organic Cotton Premium Towels', unit: 'Cartons', priceRange: [240.00, 310.00], specs: ['100% GOTS Certified Cotton', '650 GSM Heavy Plush Weave', 'Chlorine-safe Reactive Dyes'], grade: 'Luxury Hotel Standard' }
  ],
  'Food & Beverages': [
    { name: 'Single-Origin Arabica Coffee Beans', unit: 'Metric Tons (MT)', priceRange: [4200, 5100], specs: ['Strictly High Grown (SHG)', 'SCA Score 84+ Grade', 'Direct Trade Sustainable Sourced'], grade: 'Specialty Grade' },
    { name: 'Extra Virgin Cold-Pressed Olive Oil', unit: 'Liters', priceRange: [4.80, 6.20], specs: ['Acidity Level < 0.3%', 'First Cold Extraction', 'Protected Geographical Indication'], grade: 'Premium Culinary' },
    { name: 'Organic Pure Canadian Maple Syrup', unit: 'Liters', priceRange: [11.50, 14.00], specs: ['100% Pure Grade A Amber', 'No Added Sugar/Additives', 'Fully Traceable Family Farms'], grade: 'Grade A Amber' },
    { name: 'Bulk Organic Matcha Green Tea Powder', unit: 'KG', priceRange: [22.00, 35.00], specs: ['First-Harvest Ceremonial', 'Stone-Ground Nishio Origin', 'Radiation Tested Safe'], grade: 'Ceremonial AAA' },
    { name: 'Premium Himalayan Pink Salt Fine', unit: 'Metric Tons (MT)', priceRange: [450, 620], specs: ['84+ Ionic Trace Minerals', 'Unrefined Food Grade', 'Heavy Metal Screened Safe'], grade: 'Pure Natural' }
  ],
  'Apparel & Fashion': [
    { name: 'Recycled Polyester Sportswear Jerseys', unit: 'Pieces', priceRange: [6.50, 9.20], specs: ['100% rPET GRS Certified', 'Dry-Fit Moisture Weicking', 'Antimicrobial Silver Ion Finish'], grade: 'Athletic Premium' },
    { name: 'Organic Heavyweight Cotton Hoodies', unit: 'Pieces', priceRange: [14.50, 19.00], specs: ['450 GSM Brushed Fleece', 'GOTS Certified Organic Dye', 'Pre-shrunk Double Stitching'], grade: 'Premium Streetwear' },
    { name: 'Water-Resistant Cordura Backpacks', unit: 'Pieces', priceRange: [18.00, 24.50], specs: ['1000D Genuine Cordura Nylon', 'YKK Aquaguard Zippers', 'Ergonomic Airflow Back Panel'], grade: 'Tactical/Travel' },
    { name: 'Seamless Stretch Yoga Leggings', unit: 'Pieces', priceRange: [8.20, 11.50], specs: ['Nylon/Spandex High Elastane', 'Squat-proof Interlock Knit', '4-Way Stretch Compression'], grade: 'Activewear High' },
    { name: 'Premium Mulberry Silk Scarves', unit: 'Pieces', priceRange: [22.00, 31.00], specs: ['100% 19 Momme Mulberry Silk', 'Hand-rolled Finished Hems', 'Non-toxic Eco-friendly Ink'], grade: 'Luxury Boutique' }
  ],
  Chemicals: [
    { name: 'Industrial Grade Sodium Bicarbonate', unit: 'Metric Tons (MT)', priceRange: [210, 260], specs: ['99.5% Minimum Purity', 'White Crystalline Powder', 'Halal & Kosher Approved'], grade: 'USP / Food Grade' },
    { name: 'High-Purity Isopropyl Alcohol 99%', unit: 'Drums', priceRange: [180, 240], specs: ['Water Content <0.1%', 'Electronic & Pharmaceutical Approved', 'Zero Resinous Residue'], grade: 'Anhydrous Spec Grade' },
    { name: 'Anhydrous Citric Acid Fine Granular', unit: 'Metric Tons (MT)', priceRange: [850, 1050], specs: ['30-80 Mesh Granulation', 'Non-GMO Maize Sourced', 'BP/USP Standard Conformed'], grade: 'Food & Cosmetic Grade' },
    { name: 'Agricultural Liquid Urea-Ammonium Nitrate', unit: 'Metric Tons (MT)', priceRange: [320, 390], specs: ['Total Nitrogen 32%', 'Corrosion Inhibited Form', 'Perfect Liquid Uniformity'], grade: 'Premium Fertilizer' },
    { name: 'Pure Cosmetic-Grade Glycerin 99.7%', unit: 'Metric Tons (MT)', priceRange: [920, 1150], specs: ['100% Vegetable Derived USP', 'Kosher & Halal Certified', 'Clear Viscous Odorless'], grade: 'Cosmetic Standard' }
  ],
  'Construction & Real Estate': [
    { name: 'Deformed Steel Rebar Grade 60', unit: 'Metric Tons (MT)', priceRange: [650, 780], specs: ['ASTM A615 Standard', 'Yield Strength Min 420 MPa', 'Carbon Equivalent <0.55%'], grade: 'Structural Grade HR' },
    { name: 'Portland Cement Type I/II bulk', unit: 'Metric Tons (MT)', priceRange: [95, 125], specs: ['ASTM C150 Premium Spec', 'High Initial Strength', 'Low Alkali Formula'], grade: 'High Strength Structural' },
    { name: 'Acoustic Drywall Gypsum Plasterboards', unit: 'Sheets', priceRange: [6.80, 9.50], specs: ['12mm Sound-proofing Core', 'Class A Non-Combustible', 'Recycled Face Paper Liner'], grade: 'Commercial Heavy' },
    { name: 'Anodized Extruded Aluminum Profiles', unit: 'Metric Tons (MT)', priceRange: [2800, 3400], specs: ['Alloy 6063-T5 Structural', 'Anodized Film Thickness >15um', 'Mill Finish Option Available'], grade: 'Architectural Grade' },
    { name: 'Tempered Double-Glazed Window Glass', unit: 'SQM', priceRange: [38.00, 52.00], specs: ['6mm + 12Argon + 6mm Low-E', 'U-Value < 1.6 W/m²K', 'Tempered Safety Standard EN12150'], grade: 'Premium Glazing' }
  ],
  Furniture: [
    { name: 'Ergonomic Mesh Office Task Chairs', unit: 'Units', priceRange: [42.00, 58.00], specs: ['BIFMA X5.1 Certified Gas Lift', '3D Adjustable Armrests', 'High-Elastic Breathable Mesh'], grade: 'Commercial Office' },
    { name: 'Solid Walnut Mid-Century Dining Tables', unit: 'Units', priceRange: [180.00, 240.00], specs: ['Solid American Walnut wood', 'NC Lacquer Finished Seal', 'Flat-pack KD Assembly Legs'], grade: 'Premium Residential' },
    { name: 'Modular Pocket Spring Sectional Sofas', unit: 'Sets', priceRange: [320.00, 440.00], specs: ['Solid Pine Structural Frame', 'High-density Foam with Pocket Springs', 'Linen-Look Polyester Upholstery'], grade: 'Luxury Comfort' },
    { name: 'Adjustable Electric Sit-Stand Desks', unit: 'Units', priceRange: [115.00, 155.00], specs: ['Dual Motors with Gyro anti-collision', 'Memory Controller Presets', 'Steel Telescopic Frame'], grade: 'Ergonomic Office' },
    { name: 'Sustainable Bamboo Folding Shoe Racks', unit: 'Units', priceRange: [8.50, 14.00], specs: ['100% Eco Moso Bamboo', 'No Installation Required', 'Waterproof Varnish Coat'], grade: 'Compact Living' }
  ],
  'Health & Beauty': [
    { name: 'Cold-Pressed Certified Organic Argan Oil', unit: 'Liters', priceRange: [18.00, 24.00], specs: ['100% Pure Argania Spinosa', 'Deodorized for Cosmetic Use', 'USDA Organic & EcoCert'], grade: 'Premium Cosmetic' },
    { name: 'Hyaluronic Acid 1% Serum bulk', unit: 'Liters', priceRange: [12.00, 16.50], specs: ['Dual Molecular Weight Complex', 'Vegan Botanical Hydration base', 'Paraben & Fragrance Free'], grade: 'Derma Grade' },
    { name: 'Disposable Medical 3-Ply Face Masks', unit: 'Cartons', priceRange: [4.50, 6.20], specs: ['ASTM F2100 Level 3 Certified', 'BFE/PFE >99% Meltblown Layer', 'Soft Latex-free Ear Loops'], grade: 'Medical Class I' },
    { name: 'Organic Bamboo Charcoal Toothpaste', unit: 'Cartons', priceRange: [42.00, 55.00], specs: ['Fluoride-Free Natural Formula', 'Peppermint Essential Oil Scent', 'Recycled Aluminum Tubes'], grade: 'Oral Care Premium' },
    { name: 'Pure Premium Hydrolyzed Marine Collagen', unit: 'KG', priceRange: [28.00, 39.00], specs: ['Type I Fish Collagen Peptides', 'Molecular Weight <2000 Da', 'Excellent Solubility & Taste Neutral'], grade: 'Nutraceutical Grade' }
  ],
  'Gifts & Crafts': [
    { name: 'Handcrafted Ceramic Minimalist Vases', unit: 'Pieces', priceRange: [4.20, 6.50], specs: ['High-Temperature Stoneware', 'Matte Textured Glaze Finish', 'Custom Gift Box Packed'], grade: 'Artisan Boutique' },
    { name: 'Natural Soy Wax Aromatherapy Candles', unit: 'Pieces', priceRange: [2.50, 4.10], specs: ['100% Natural Soy & Beeswax Mix', 'Lead-Free Cotton Wick', '8% Premium Essential Oils'], grade: 'Eco Craft Standard' },
    { name: 'Handcrafted Organic Scented Bath Bombs', unit: 'Sets', priceRange: [3.10, 5.20], specs: ['Shea Butter & Essential Oil Base', 'Fizzy Non-Staining Natural Dyes', 'Individually Shrink Wrapped'], grade: 'Wellness Gift' },
    { name: 'Engraved Sustainable Bamboo Gift Boxes', unit: 'Pieces', priceRange: [1.80, 3.20], specs: ['Magnetic Flap Closure', 'Laser-Engraved Logo Mockup', 'Smooth Polished Surface'], grade: 'Luxury Packaging' },
    { name: 'Hand-woven Rattan Coasters and Trivets', unit: 'Sets', priceRange: [2.20, 3.80], specs: ['100% Wild Natural Rattan Vine', 'Heat Insulating Heavy Weave', 'Smoked Honey Finish'], grade: 'Rustic Eco-Craft' }
  ],
  'Minerals & Metals': [
    { name: 'Cathode Copper Plates 99.99%', unit: 'Metric Tons (MT)', priceRange: [8100, 8900], specs: ['LME Grade A Registered', 'Dimensions 914mm x 914mm', 'ASTM B115-00 Standard Conformed'], grade: 'LME Certified' },
    { name: 'Premium Aluminum Ingots A7', unit: 'Metric Tons (MT)', priceRange: [2150, 2450], specs: ['Al Purity Min 99.7%', 'Weight 20kg per Ingot', 'SGS Chemical Tested Verified'], grade: 'Standard Metallurgy' },
    { name: 'Natural Battery-Grade Graphite Powder', unit: 'Metric Tons (MT)', priceRange: [1100, 1450], specs: ['Carbon Content 95-98%', 'Spherical High Purity', 'Excellent Anode Formulation'], grade: 'Energy Tech Grade' },
    { name: 'High-Grade Iron Ore Pellets', unit: 'Metric Tons (MT)', priceRange: [110, 145], specs: ['Total Fe 65.5% Min', 'Low Silica & Alumina Content', 'Compressive Strength >250kg'], grade: 'Blast Furnace Grade' },
    { name: 'Grade A Zinc Alloy Ingots Zamak 3', unit: 'Metric Tons (MT)', priceRange: [2600, 2950], specs: ['Standard ASTM B240 compliant', 'High Die-Casting Uniformity', 'Composition Al 4%, Mg 0.04%'], grade: 'Precision Cast Spec' }
  ]
};

// Generates exactly 8,576 items to meet the user's specific request
function generate8576TradeLeads(): GlobalTradeRequirement[] {
  const categories: ('Timber' | 'Agriculture' | 'Textiles' | 'Bio-Materials' | 'Home Supplies' | 'Food & Beverages' | 'Apparel & Fashion' | 'Chemicals' | 'Construction & Real Estate' | 'Furniture' | 'Health & Beauty' | 'Gifts & Crafts' | 'Minerals & Metals')[] = [
    'Timber', 'Agriculture', 'Textiles', 'Bio-Materials', 'Home Supplies', 'Food & Beverages', 'Apparel & Fashion', 'Chemicals', 'Construction & Real Estate', 'Furniture', 'Health & Beauty', 'Gifts & Crafts', 'Minerals & Metals'
  ];
  const incotermsList: ('FOB' | 'CIF' | 'DDP' | 'EXW')[] = ['CIF', 'FOB', 'DDP', 'EXW'];
  const results: GlobalTradeRequirement[] = [];

  for (let i = 1; i <= 8576; i++) {
    // Deterministic isSeller: ~10% sellers, ~90% buyers (approx 7,718 buyers, 858 sellers)
    const isSeller = (i % 10 === 0);
    const type = isSeller ? 'seller' : 'buyer';

    const countryObj = COUNTRIES_POOL[(i * 3) % COUNTRIES_POOL.length];
    const category = categories[(i * 11) % categories.length];
    const products = CATEGORY_PRODUCTS[category];
    const product = products[(i * 17) % products.length];

    const prefix = COMPANY_PREFIXES[(i * 19) % COMPANY_PREFIXES.length];
    const suffix = COMPANY_SUFFIXES[(i * 23) % COMPANY_SUFFIXES.length];
    const companyName = `${prefix} ${suffix}`;

    // Determine volume based on category
    let volume = 0;
    if (category === 'Timber') {
      volume = 40000 + ((i * 1537) % 180000); // 40k - 220k BF
    } else if (category === 'Agriculture') {
      volume = 120 + ((i * 87) % 1100); // 120 - 1,220 MT
    } else if (category === 'Textiles') {
      volume = 60 + ((i * 31) % 650); // 60 - 710 Bales
    } else if (category === 'Home Supplies') {
      volume = 500 + ((i * 123) % 11500); // 500 - 12,000 Sets/Cartons
    } else if (category === 'Food & Beverages') {
      volume = 200 + ((i * 237) % 4800); // 200 - 5,000 MT/KG
    } else if (category === 'Apparel & Fashion') {
      volume = 1000 + ((i * 345) % 49000); // 1,000 - 50,000 Pieces
    } else if (category === 'Chemicals') {
      volume = 50 + ((i * 47) % 1950); // 50 - 2,000 MT/Drums
    } else if (category === 'Construction & Real Estate') {
      volume = 100 + ((i * 567) % 24900); // 100 - 25,000 SQM/Sheets
    } else if (category === 'Furniture') {
      volume = 50 + ((i * 89) % 4950); // 50 - 5,000 Units
    } else if (category === 'Health & Beauty') {
      volume = 100 + ((i * 112) % 7900); // 100 - 8,000 Cartons
    } else if (category === 'Gifts & Crafts') {
      volume = 500 + ((i * 199) % 19500); // 500 - 20,000 Pieces
    } else if (category === 'Minerals & Metals') {
      volume = 50 + ((i * 311) % 9950); // 50 - 10,000 MT
    } else {
      volume = 70 + ((i * 41) % 480);
    }
    // Round to nearest 10
    volume = Math.round(volume / 10) * 10;

    // Price index based on range + slight variance
    const basePrice = product.priceRange[0] + ((i * 29) % 100) / 100 * (product.priceRange[1] - product.priceRange[0]);
    const pricePerUnit = Math.round(basePrice * 100) / 100;

    const incoterms = incotermsList[(i * 13) % incotermsList.length];

    results.push({
      id: `gtr-lead-${i}`,
      type,
      companyName,
      country: countryObj.name,
      flag: countryObj.flag,
      productCategory: category,
      itemName: product.name,
      volume,
      unit: product.unit,
      pricePerUnit,
      incoterms,
      preferredPort: countryObj.port,
      purityGrade: product.grade,
      specs: [
        product.specs[0],
        product.specs[1],
        `${countryObj.region} Custom Inspector Certified`
      ]
    });
  }

  return results;
}

interface GlobalTradeHubProps {
  onBack: () => void;
}

export default function GlobalTradeHub({ onBack }: GlobalTradeHubProps) {
  // Pre-generate all 8576 items
  const allLeads = useMemo(() => generate8576TradeLeads(), []);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'buyer' | 'seller'>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('volume-desc');

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  // Success message simulation toast
  const [showToast, setShowToast] = useState<string | null>(null);

  // Detail match states
  const [selectedMatch, setSelectedMatch] = useState<GlobalTradeRequirement | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'JPY' | 'GBP'>('USD');
  const [hasConnected, setHasConnected] = useState(false);
  const [negotiatedQty, setNegotiatedQty] = useState<number>(0);
  const [negotiationNotes, setNegotiationNotes] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'user' | 'partner'; text: string; time: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, selectedRegion, selectedCategory, itemsPerPage]);

  // Quick helper to determine region of a country
  const getCountryRegion = (countryName: string) => {
    const match = COUNTRIES_POOL.find(c => c.name === countryName);
    return match ? match.region : 'Other';
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return allLeads.filter(lead => {
      // Type Tab Filter
      if (activeTab === 'buyer' && lead.type !== 'buyer') return false;
      if (activeTab === 'seller' && lead.type !== 'seller') return false;

      // Category Filter
      if (selectedCategory !== 'All' && lead.productCategory !== selectedCategory) return false;

      // Region Filter
      if (selectedRegion !== 'All') {
        const region = getCountryRegion(lead.country);
        if (region !== selectedRegion) return false;
      }

      // Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          lead.itemName.toLowerCase().includes(query) ||
          lead.companyName.toLowerCase().includes(query) ||
          lead.country.toLowerCase().includes(query) ||
          lead.preferredPort.toLowerCase().includes(query) ||
          lead.productCategory.toLowerCase().includes(query)
        );
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'volume-desc') return b.volume - a.volume;
      if (sortBy === 'volume-asc') return a.volume - b.volume;
      if (sortBy === 'price-desc') return b.pricePerUnit - a.pricePerUnit;
      if (sortBy === 'price-asc') return a.pricePerUnit - b.pricePerUnit;
      if (sortBy === 'country-asc') return a.country.localeCompare(b.country);
      return 0;
    });
  }, [allLeads, searchQuery, activeTab, selectedRegion, selectedCategory, sortBy]);

  // Paginated Leads
  const paginatedLeads = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredLeads.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredLeads, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage) || 1;

  // Chart data aggregates
  const statsSummary = useMemo(() => {
    const totalCount = filteredLeads.length;
    const buyers = filteredLeads.filter(l => l.type === 'buyer').length;
    const sellers = filteredLeads.filter(l => l.type === 'seller').length;
    
    // Volume transacted projection (sum of volume times unit price)
    const projectedVal = filteredLeads.reduce((acc, lead) => acc + (lead.volume * lead.pricePerUnit), 0);

    return { totalCount, buyers, sellers, projectedVal };
  }, [filteredLeads]);

  // Category chart data
  const categoryChartData = useMemo(() => {
    const data: Record<string, number> = { Timber: 0, Agriculture: 0, Textiles: 0, 'Bio-Materials': 0 };
    filteredLeads.forEach(lead => {
      data[lead.productCategory] = (data[lead.productCategory] || 0) + 1;
    });
    return Object.keys(data).map(key => ({
      name: key,
      value: data[key]
    }));
  }, [filteredLeads]);

  // Regional chart data
  const regionalChartData = useMemo(() => {
    const data: Record<string, number> = { 'North America': 0, 'Europe': 0, 'Asia-Pacific': 0, 'Latin America': 0, 'Other': 0 };
    filteredLeads.forEach(lead => {
      const region = getCountryRegion(lead.country);
      data[region] = (data[region] || 0) + 1;
    });
    return Object.keys(data).map(key => ({
      name: key,
      count: data[key]
    }));
  }, [filteredLeads]);

  // Price trends chart data
  const priceTrendChartData = useMemo(() => {
    // Generate a beautiful index simulation based on categories
    return [
      { month: 'Jan', Timber: 102, Agriculture: 95, Textiles: 110, 'Bio-Materials': 100 },
      { month: 'Feb', Timber: 105, Agriculture: 98, Textiles: 108, 'Bio-Materials': 103 },
      { month: 'Mar', Timber: 108, Agriculture: 102, Textiles: 112, 'Bio-Materials': 105 },
      { month: 'Apr', Timber: 112, Agriculture: 100, Textiles: 115, 'Bio-Materials': 107 },
      { month: 'May', Timber: 115, Agriculture: 104, Textiles: 118, 'Bio-Materials': 110 },
      { month: 'Jun', Timber: 118, Agriculture: 107, Textiles: 122, 'Bio-Materials': 114 },
    ];
  }, []);

  const COLORS = ['#0e4a36', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

  // Handle Export Simulation
  const handleExportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["ID,Type,Company,Country,Category,Product,Volume,Unit,Price,Incoterms,Port,Grade"].join(",") + "\n"
      + filteredLeads.map(lead => 
          `"${lead.id}","${lead.type}","${lead.companyName}","${lead.country}","${lead.productCategory}","${lead.itemName}",${lead.volume},"${lead.unit}",${lead.pricePerUnit},"${lead.incoterms}","${lead.preferredPort}","${lead.purityGrade}"`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ROA_Global_Sourcing_Leads_${activeTab}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    triggerToast(`Successfully exported ${filteredLeads.length} leads as CSV.`);
  };

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 4000);
  };

  // Open match connection drawer
  const handleOpenMatch = (lead: GlobalTradeRequirement) => {
    setSelectedMatch(lead);
    setNegotiatedQty(lead.volume);
    setHasConnected(false);
    setNegotiationNotes('');
    setChatLog([
      {
        sender: 'partner',
        text: `Hello! This is the Sourcing Officer from ${lead.companyName}. We saw your interest in our active trade listing for ${lead.itemName}. Let us know your preferred logistical timeframe and target rate.`,
        time: 'Just Now'
      }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!negotiationNotes.trim()) return;

    const userMsg = negotiationNotes;
    setChatLog(prev => [...prev, { sender: 'user', text: userMsg, time: 'Just Now' }]);
    setNegotiationNotes('');
    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That fits our logistical capacity perfectly. We operate custom freight lanes from our warehouse. Shall we prepare the formal RFQ contract draft?",
        "Our supply chain is fully FSC/PEFC certified, and we can guarantee clearance within 14 business days. I will send over our certified cargo specifications sheet.",
        "We can agree to those price parameters for any contract term over 6 months. Let us schedule a direct intermodal routing session with our legal representatives.",
        "That is acceptable under DDP / CIF terms. Let's submit a verified purchase order draft through the Roots of America secure escrow panel."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatLog(prev => [...prev, { sender: 'partner', text: randomResponse, time: 'Just Now' }]);
    }, 1500);
  };

  const exchangeRates = { USD: 1, EUR: 0.92, JPY: 154.2, GBP: 0.79 };
  const currencySymbols = { USD: '$', EUR: '€', JPY: '¥', GBP: '£' };

  const convertedPrice = selectedMatch 
    ? (selectedMatch.pricePerUnit * exchangeRates[selectedCurrency]).toFixed(2)
    : '0.00';

  return (
    <div className="bg-[#faf8f5] min-h-screen text-[#1c2421] font-sans pb-24 relative overflow-x-hidden">
      
      {/* Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-[#0e4a36] text-[#faf8f5] px-6 py-3.5 rounded-xl shadow-2xl z-50 flex items-center space-x-3 border border-[#135d44]"
          >
            <CheckCircle className="h-5 w-5 text-amber-500 shrink-0" />
            <span className="text-xs font-semibold font-mono">{showToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Hub Header */}
      <div className="relative bg-[#1c2421] text-white overflow-hidden py-16 border-b-8 border-[#0e4a36]">
        {/* Abstract background vector lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0e4a36_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#0e4a36]/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button 
            onClick={onBack}
            className="mb-8 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border border-white/10 transition-all flex items-center space-x-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Landing Page</span>
          </button>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3 max-w-3xl text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold">
                <Sparkles className="h-3 w-3" />
                <span>Verified Global Trade Sourcing Database</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight">
                Global Sourcing Hub
              </h1>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Connect directly with premium buyers and suppliers across 24 countries. Filter, negotiate, and establish fully certified contract lines within a secure B2B platform.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExportData}
                className="bg-[#0e4a36] hover:bg-[#0b3c2a] text-white px-5 py-3 rounded-xl font-sans font-bold text-xs transition-all flex items-center space-x-2 border border-[#135d44] shadow-lg cursor-pointer"
              >
                <Download className="h-4 w-4 text-amber-400" />
                <span>Export Sourcing Data</span>
              </button>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                  setSelectedRegion('All');
                  setSelectedCategory('All');
                  setSortBy('volume-desc');
                  triggerToast('Database filters refreshed and reset.');
                }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-xl font-sans font-bold text-xs transition-all flex items-center space-x-2 cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5 text-gray-400" />
                <span>Reset Database</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Insight Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* Core Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-[#e5dfd3] shadow-md hover:shadow-lg transition-all text-left">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">ACTIVE DATABASE LEADS</p>
            <div className="flex items-baseline space-x-2 mt-2">
              <p className="text-3xl font-serif font-extrabold text-[#0e4a36]">{statsSummary.totalCount.toLocaleString()}</p>
              <span className="text-xs text-amber-500 font-bold font-mono">100% Live</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Verified global trade requirements</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#e5dfd3] shadow-md hover:shadow-lg transition-all text-left">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">BUYER DEMAND LEADS</p>
            <div className="flex items-baseline space-x-2 mt-2">
              <p className="text-3xl font-serif font-extrabold text-[#0e4a36]">{(statsSummary.buyers).toLocaleString()}</p>
              <span className="text-xs text-green-500 font-bold font-mono">85.4% Share</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Active buy requirements across categories</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#e5dfd3] shadow-md hover:shadow-lg transition-all text-left">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">SELLER SUPPLY OFFERINGS</p>
            <div className="flex items-baseline space-x-2 mt-2">
              <p className="text-3xl font-serif font-extrabold text-[#0e4a36]">{(statsSummary.sellers).toLocaleString()}</p>
              <span className="text-xs text-amber-500 font-bold font-mono">14.6% Share</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Direct supplier listings ready to contract</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#e5dfd3] shadow-md hover:shadow-lg transition-all text-left bg-gradient-to-br from-[#0e4a36]/5 to-[#faf8f5]">
            <p className="text-[10px] font-mono text-[#0e4a36] uppercase tracking-widest font-bold">PROJECTED PIPELINE VALUE</p>
            <div className="flex items-baseline space-x-2 mt-2">
              <p className="text-3xl font-serif font-extrabold text-[#0e4a36]">
                ${(statsSummary.projectedVal / 1000000).toFixed(1)}M
              </p>
              <span className="text-xs text-amber-500 font-bold font-mono">USD</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Logistics & transaction volume value</p>
          </div>
        </div>

        {/* Charts Panel Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Chart 1: Commodity Category Proportions */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5dfd3] shadow-sm text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Layers className="h-4.5 w-4.5 text-[#0e4a36]" />
                <h3 className="font-sans font-bold text-sm text-[#1c2421]">Commodity Categorization</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Breakdown of active trading bulletins divided into raw industrial commodities.
              </p>
            </div>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {categoryChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} leads`, 'Count']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xs font-mono text-gray-400 font-bold uppercase">Database</span>
                <span className="text-base font-serif font-bold text-[#0e4a36]">1,000+</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-4 text-[10px] font-mono text-gray-500">
              {categoryChartData.map((entry, idx) => (
                <div key={entry.name} className="flex items-center space-x-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                  <span>{entry.name} ({entry.value})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Regional Densities */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5dfd3] shadow-sm text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe2 className="h-4.5 w-4.5 text-[#0e4a36]" />
                <h3 className="font-sans font-bold text-sm text-[#1c2421]">Regional Lead Densities</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Distribution of verified buyers and suppliers categorized by target port region.
              </p>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 9, fontFamily: 'monospace' }} />
                  <YAxis tick={{ fontSize: 9, fontFamily: 'monospace' }} />
                  <Tooltip formatter={(value) => [`${value} leads`, 'Active Listings']} />
                  <Bar dataKey="count" fill="#0e4a36" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-center font-mono text-gray-400 mt-4 uppercase">
              Top Region: Europe & Asia-Pacific
            </p>
          </div>

          {/* Chart 3: Standard Price Index trend */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5dfd3] shadow-sm text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-4.5 w-4.5 text-[#0e4a36]" />
                <h3 className="font-sans font-bold text-sm text-[#1c2421]">Commodity Price Index (Indexed)</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Standard indices tracking price trends (Baseline 100 on Jan 1, 2026).
              </p>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceTrendChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" tick={{ fontSize: 9, fontFamily: 'monospace' }} />
                  <YAxis tick={{ fontSize: 9, fontFamily: 'monospace' }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: 8, fontFamily: 'monospace' }} />
                  <Line type="monotone" dataKey="Timber" stroke="#0e4a36" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Agriculture" stroke="#f59e0b" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Textiles" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Bio-Materials" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-center font-mono text-gray-400 mt-4 uppercase">
              Average Global Demand Growth: +14.2% YoY
            </p>
          </div>
        </div>

        {/* Database Control Bar (Search, Filters, Sort) */}
        <div className="bg-[#faf8f5] border border-[#e5dfd3] rounded-2xl p-5 mt-8 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, companies, countries, ports (e.g. Douglas Fir, Hamburg, India)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#e5dfd3] rounded-xl font-sans text-sm text-[#1c2421] placeholder-gray-400 focus:outline-none focus:border-[#0e4a36] shadow-sm transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-400 hover:text-[#1c2421] bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-3 rounded-xl font-sans font-bold text-xs transition-all cursor-pointer ${
                  activeTab === 'all' 
                    ? 'bg-[#0e4a36] text-white' 
                    : 'bg-white text-[#1c2421] border border-[#e5dfd3] hover:bg-gray-50'
                }`}
              >
                All Leads ({allLeads.length})
              </button>
              <button
                onClick={() => setActiveTab('buyer')}
                className={`px-4 py-3 rounded-xl font-sans font-bold text-xs transition-all cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'buyer' 
                    ? 'bg-[#0e4a36] text-white' 
                    : 'bg-white text-gray-700 border border-[#e5dfd3] hover:bg-gray-50'
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Buyer Leads (Demand)</span>
              </button>
              <button
                onClick={() => setActiveTab('seller')}
                className={`px-4 py-3 rounded-xl font-sans font-bold text-xs transition-all cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'seller' 
                    ? 'bg-[#0e4a36] text-white' 
                    : 'bg-white text-gray-700 border border-[#e5dfd3] hover:bg-gray-50'
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Seller Listings (Supply)</span>
              </button>
            </div>
          </div>

          {/* Fine Tuning Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#e5dfd3]/60">
            <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>REFINE BULLETINS:</span>
            </div>

            {/* Region Select */}
            <div className="flex items-center space-x-1.5 bg-white border border-[#e5dfd3] rounded-xl px-3 py-2 text-xs">
              <span className="text-gray-400">Region:</span>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-transparent font-bold text-[#1c2421] focus:outline-none cursor-pointer"
              >
                <option value="All">All Regions</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia-Pacific">Asia-Pacific</option>
                <option value="Latin America">Latin America</option>
                <option value="Other">Other Regions</option>
              </select>
            </div>

            {/* Category Select */}
            <div className="flex items-center space-x-1.5 bg-white border border-[#e5dfd3] rounded-xl px-3 py-2 text-xs">
              <span className="text-gray-400">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent font-bold text-[#1c2421] focus:outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Timber">🌲 Timber</option>
                <option value="Agriculture">🌾 Agriculture</option>
                <option value="Textiles">🧵 Textiles</option>
                <option value="Bio-Materials">🌱 Bio-Materials</option>
                <option value="Home Supplies">🏠 Home Supplies</option>
                <option value="Food & Beverages">🍎 Food & Beverages</option>
                <option value="Apparel & Fashion">👕 Apparel & Fashion</option>
                <option value="Chemicals">🧪 Chemicals</option>
                <option value="Construction & Real Estate">🏗️ Construction & Real Estate</option>
                <option value="Furniture">🛋️ Furniture</option>
                <option value="Health & Beauty">💄 Health & Beauty</option>
                <option value="Gifts & Crafts">🎁 Gifts & Crafts</option>
                <option value="Minerals & Metals">🔩 Minerals & Metals</option>
              </select>
            </div>

            {/* Sort Select */}
            <div className="flex items-center space-x-1.5 bg-white border border-[#e5dfd3] rounded-xl px-3 py-2 text-xs ml-auto">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-[#1c2421] focus:outline-none cursor-pointer"
              >
                <option value="volume-desc">Volume (High → Low)</option>
                <option value="volume-asc">Volume (Low → High)</option>
                <option value="price-desc">Price (High → Low)</option>
                <option value="price-asc">Price (Low → High)</option>
                <option value="country-asc">Country (Alphabetical)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-xs font-mono text-gray-500">
              Showing <span className="font-bold text-[#1c2421]">{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredLeads.length)}</span> of <span className="font-bold text-[#0e4a36]">{filteredLeads.length}</span> matching leads
            </p>

            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-400">Per Page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="bg-white border border-[#e5dfd3] rounded-lg px-2.5 py-1 font-bold text-xs"
              >
                <option value={12}>12 leads</option>
                <option value={24}>24 leads</option>
                <option value={48}>48 leads</option>
                <option value={100}>100 leads</option>
              </select>
            </div>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-[#e5dfd3] shadow-sm space-y-4">
              <div className="bg-[#faf8f5] w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-300">
                <Search className="h-8 w-8" />
              </div>
              <p className="text-lg font-serif font-bold text-[#1c2421]">No matching sourcing leads found</p>
              <p className="text-xs text-gray-400 max-w-md mx-auto">
                No items in our active 1,000-lead database matched your current filter criteria. Try resetting filters or shortening your search keywords.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedRegion('All');
                  setActiveTab('all');
                }}
                className="bg-[#0e4a36] text-white px-5 py-2.5 rounded-xl font-sans font-bold text-xs hover:bg-[#0b3c2a] transition-all cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedLeads.map((lead) => {
                const isBuyer = lead.type === 'buyer';
                return (
                  <motion.div
                    key={lead.id}
                    layoutId={lead.id}
                    className="bg-white border border-[#e5dfd3] rounded-2xl p-5 hover:border-[#0e4a36] shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group relative"
                  >
                    <div>
                      {/* Header Badge */}
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-md text-[9px] font-mono font-extrabold uppercase tracking-widest ${
                          isBuyer 
                            ? 'bg-green-50 text-green-700 border border-green-100' 
                            : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {isBuyer ? '● BUYER DEMAND' : '◆ SUPPLIER OFFER'}
                        </span>
                        
                        <div className="flex items-center space-x-1 font-mono text-[10px] text-gray-500">
                          <span>{lead.flag}</span>
                          <span className="font-bold">{lead.country}</span>
                        </div>
                      </div>

                      {/* Item Details */}
                      <h3 className="font-serif font-bold text-sm text-[#1c2421] group-hover:text-[#0e4a36] line-clamp-1 transition-colors">
                        {lead.itemName}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5 uppercase tracking-wide">
                        {lead.companyName}
                      </p>

                      <div className="space-y-2 mt-4 bg-[#faf8f5] p-3 rounded-xl border border-gray-100">
                        {/* Volume */}
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-1">
                            <Scale className="h-3 w-3 text-gray-400" />
                            <span>Req Volume:</span>
                          </span>
                          <span className="font-bold text-[#1c2421]">
                            {lead.volume.toLocaleString()} {lead.unit}
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-1">
                            <Coins className="h-3 w-3 text-gray-400" />
                            <span>Target Rate:</span>
                          </span>
                          <span className="font-bold text-[#0e4a36]">
                            ${lead.pricePerUnit} / {lead.unit.split(' ')[0]}
                          </span>
                        </div>

                        {/* Port and Incoterms */}
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-1">
                            <Ship className="h-3 w-3 text-gray-400" />
                            <span>Terms:</span>
                          </span>
                          <span className="font-semibold text-gray-700 font-mono text-[11px]">
                            {lead.incoterms} • {lead.preferredPort.replace('Port of ', '')}
                          </span>
                        </div>
                      </div>

                      {/* Bullet Specs List */}
                      <div className="mt-4 space-y-1">
                        {lead.specs.slice(0, 2).map((spec, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5 text-[10px] text-gray-500">
                            <CheckCircle className="h-3 w-3 text-[#0e4a36] shrink-0" />
                            <span className="line-clamp-1">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Trigger Action */}
                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                        {lead.productCategory}
                      </span>

                      <button
                        onClick={() => handleOpenMatch(lead)}
                        className="bg-[#faf8f5] hover:bg-[#0e4a36] text-[#1c2421] hover:text-white border border-[#e5dfd3] hover:border-[#0e4a36] px-3.5 py-2 rounded-xl font-sans font-bold text-[10px] tracking-wider uppercase transition-all flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Negotiate</span>
                        <ArrowRight className="h-3 w-3 text-amber-500" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Pagination Footer */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 bg-white border border-[#e5dfd3] rounded-2xl p-5 shadow-sm">
              <span className="text-xs font-mono text-gray-500">
                Page <span className="font-bold text-[#1c2421]">{currentPage}</span> of <span className="font-bold text-[#0e4a36]">{totalPages}</span> ({filteredLeads.length} total leads)
              </span>

              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-[#e5dfd3] rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-[#e5dfd3] rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent flex items-center space-x-1 text-xs font-bold"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Prev</span>
                </button>

                {/* Page Index Select Dots */}
                <div className="hidden sm:flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                    let pageNum = idx + 1;
                    if (currentPage > 3 && totalPages > 5) {
                      if (currentPage + 2 > totalPages) {
                        pageNum = totalPages - 4 + idx;
                      } else {
                        pageNum = currentPage - 2 + idx;
                      }
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                          currentPage === pageNum
                            ? 'bg-[#0e4a36] text-white'
                            : 'border border-[#e5dfd3] text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  {totalPages > 5 && currentPage + 2 < totalPages && (
                    <span className="px-1 text-gray-400">...</span>
                  )}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-[#e5dfd3] rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent flex items-center space-x-1 text-xs font-bold"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-[#e5dfd3] rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <ChevronsRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global Matchmaker Connection Drawer Modal Panel */}
      <AnimatePresence>
        {selectedMatch && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMatch(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Sliding Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#e5dfd3]"
            >
              
              {/* Drawer Header */}
              <div className="p-6 bg-[#1c2421] text-white border-b border-[#0e4a36] flex justify-between items-center text-left">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-500 text-[#1c2421] p-2.5 rounded-xl flex items-center justify-center font-serif text-base font-bold">
                    {selectedMatch.flag}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono text-amber-400 font-extrabold tracking-wider uppercase bg-white/10 px-2.5 py-0.5 rounded border border-white/5">
                        {selectedMatch.type === 'buyer' ? 'BUYER REQUIREMENTS' : 'SUPPLIER LISTING'}
                      </span>
                    </div>
                    <h2 className="text-lg font-serif font-extrabold mt-1">{selectedMatch.companyName}</h2>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">Customs registered in {selectedMatch.country}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedMatch(null)}
                  className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-xl transition-all"
                >
                  Close Panel
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left">
                
                {/* Product spec block */}
                <div className="bg-[#faf8f5] rounded-2xl p-5 border border-[#e5dfd3] space-y-3">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">PRODUCT REQUIREMENTS</p>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-md font-sans font-bold text-[#1c2421]">{selectedMatch.itemName}</h3>
                    <span className="bg-[#0e4a36] text-[#faf8f5] text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      {selectedMatch.productCategory}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#e5dfd3]/60 font-sans">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Desired Quantity</p>
                      <p className="text-sm font-extrabold text-[#1c2421] mt-0.5">
                        {selectedMatch.volume.toLocaleString()} {selectedMatch.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Suggested Target Rate</p>
                      <p className="text-sm font-extrabold text-[#0e4a36] mt-0.5">
                        ${selectedMatch.pricePerUnit} / {selectedMatch.unit.split(' ')[0]}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Incoterms Basis</p>
                      <p className="text-sm font-semibold text-[#1c2421] mt-0.5">{selectedMatch.incoterms}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-mono">Discharge Port</p>
                      <p className="text-sm font-semibold text-[#1c2421] mt-0.5">{selectedMatch.preferredPort}</p>
                    </div>
                  </div>
                </div>

                {/* Multilingual / Currency Converter Widget */}
                <div className="bg-white rounded-2xl p-5 border border-[#e5dfd3] space-y-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                      <Coins className="h-4 w-4 text-[#0e4a36]" />
                      <span>Incoterm Currency Conversion</span>
                    </div>
                    
                    <div className="flex bg-gray-100 rounded-lg p-0.5">
                      {(['USD', 'EUR', 'JPY', 'GBP'] as const).map((curr) => (
                        <button
                          key={curr}
                          onClick={() => setSelectedCurrency(curr)}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                            selectedCurrency === curr ? 'bg-[#0e4a36] text-white shadow-xs' : 'text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-[#faf8f5] p-3.5 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500">Converted unit rate:</span>
                    <span className="font-mono font-extrabold text-sm text-[#0e4a36]">
                      {currencySymbols[selectedCurrency]}{convertedPrice} <span className="text-[10px] font-sans font-normal text-gray-400">/{selectedMatch.unit.split(' ')[0]}</span>
                    </span>
                  </div>
                </div>

                {/* Secure Matchmaking Negotiation Room */}
                <div className="bg-white border border-[#e5dfd3] rounded-2xl overflow-hidden flex flex-col h-80">
                  <div className="bg-[#faf8f5] px-4 py-3 border-b border-[#e5dfd3] flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      SECURE COMMODITY WIRE CHAT
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">128-bit Encrypted</span>
                  </div>

                  {/* Messages list */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-3.5 flex flex-col justify-end">
                    {chatLog.map((chat, idx) => {
                      const isUser = chat.sender === 'user';
                      return (
                        <div key={idx} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                          <div className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed ${
                            isUser 
                              ? 'bg-[#0e4a36] text-white rounded-tr-none' 
                              : 'bg-gray-100 text-[#1c2421] rounded-tl-none'
                          }`}>
                            {chat.text}
                          </div>
                          <span className="text-[9px] text-gray-400 font-mono mt-1 px-1">{chat.time}</span>
                        </div>
                      );
                    })}
                    {isTyping && (
                      <div className="flex flex-col items-start">
                        <div className="p-3 bg-gray-100 text-gray-500 rounded-2xl rounded-tl-none text-xs flex items-center space-x-1">
                          <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input form */}
                  <form onSubmit={handleSendMessage} className="p-3 bg-[#faf8f5] border-t border-[#e5dfd3] flex space-x-2">
                    <input
                      type="text"
                      placeholder={`Discuss pricing details with ${selectedMatch.companyName}...`}
                      value={negotiationNotes}
                      onChange={(e) => setNegotiationNotes(e.target.value)}
                      className="flex-1 bg-white border border-[#e5dfd3] rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0e4a36]"
                    />
                    <button
                      type="submit"
                      className="bg-[#0e4a36] text-white px-4 py-2.5 rounded-xl font-sans font-bold text-xs hover:bg-[#0b3c2a] cursor-pointer"
                    >
                      Send
                    </button>
                  </form>
                </div>

                {/* Compliance & Shipping space verification */}
                <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-3">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">CONTAINER LOGISTICS ESTIMATION</p>
                  
                  <div className="space-y-2.5 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Logistics Port Lane:</span>
                      <span className="font-semibold text-gray-900 font-mono">US-Oakland ⇄ {selectedMatch.preferredPort}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard Transit Time:</span>
                      <span className="font-semibold text-gray-900">14–18 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Regulatory Tariffs:</span>
                      <span className="font-semibold text-amber-600 font-mono">Fully Cleared (Roots Escrow)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 bg-gray-50 border-t border-[#e5dfd3] flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setHasConnected(true);
                    setSelectedMatch(null);
                    triggerToast(`Transaction drafted with ${selectedMatch.companyName}. Form sent to escrow registrar.`);
                  }}
                  className="w-full bg-[#0e4a36] hover:bg-[#0b3c2a] text-[#faf8f5] py-3.5 rounded-xl font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <FileCheck2 className="h-4.5 w-4.5 text-amber-400" />
                  <span>Submit Verified Contract Draft</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedMatch(null);
                    triggerToast("Custom compliance inspection requested successfully.");
                  }}
                  className="w-full bg-white hover:bg-[#faf8f5] text-gray-700 border border-[#e5dfd3] py-3 rounded-xl font-sans font-bold text-xs transition-all cursor-pointer"
                >
                  Request Pre-shipment USDA Inspection
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
