import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe2, 
  ArrowRight, 
  Plus, 
  MapPin, 
  Building2, 
  Ship, 
  FileCheck2, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Coins, 
  Scale, 
  X, 
  ChevronRight,
  Info,
  SlidersHorizontal,
  DollarSign
} from 'lucide-react';

interface GlobalTradeRequirement {
  id: string;
  type: 'buyer' | 'seller';
  companyName: string;
  country: string;
  flag: string;
  productCategory: 'Timber' | 'Agriculture' | 'Textiles' | 'Bio-Materials' | 'Home Supplies' | 'Food & Beverages' | 'Apparel & Fashion' | 'Chemicals' | 'Construction & Real Estate' | 'Furniture' | 'Health & Beauty' | 'Gifts & Crafts' | 'Minerals & Metals';
  itemName: string;
  volume: number;
  unit: string;
  pricePerUnit: number;
  incoterms: 'FOB' | 'CIF' | 'DDP' | 'EXW';
  preferredPort: string;
  purityGrade: string;
  specs: string[];
}

const COMPANY_PREFIXES = [
  "Global", "Intercontinental", "Apex", "Pacific", "Atlantic", "Continental", "Summit", "Beacon", "Pioneer", "Zenith", 
  "Eco", "Bio", "Sustainable", "Nordic", "Hanseatic", "Alpine", "Crown", "Evergreen", "Delta", "Atlas", "Titan", "Vertex", 
  "Meridian", "Helix", "Nova", "Aero", "Terra", "Vanguard", "Genesis", "Prism", "Aurora", "Sterling", "Alliance", "United"
];

const COMPANY_SUFFIXES = [
  "Trade", "Logistics", "Sourcing", "Industries", "Agri-Products", "Timber Co.", "Textiles Ltd.", "Materials Corp", 
  "Supply Chain", "Global Ventures", "Resources", "Mills S.A.", "Holdings", "Solutions", "Enterprise", "Imports", 
  "Fibers", "Woods", "Partners", "Group", "International", "Dynamics", "Synergy", "Trading House"
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

function generateMoreBulletins(count: number): GlobalTradeRequirement[] {
  const categories: ('Timber' | 'Agriculture' | 'Textiles' | 'Bio-Materials' | 'Home Supplies' | 'Food & Beverages' | 'Apparel & Fashion' | 'Chemicals' | 'Construction & Real Estate' | 'Furniture' | 'Health & Beauty' | 'Gifts & Crafts' | 'Minerals & Metals')[] = [
    'Timber', 'Agriculture', 'Textiles', 'Bio-Materials', 'Home Supplies', 'Food & Beverages', 'Apparel & Fashion', 'Chemicals', 'Construction & Real Estate', 'Furniture', 'Health & Beauty', 'Gifts & Crafts', 'Minerals & Metals'
  ];
  
  const incotermsList: ('FOB' | 'CIF' | 'DDP' | 'EXW')[] = ['CIF', 'FOB', 'DDP', 'EXW'];

  const results: GlobalTradeRequirement[] = [];

  for (let i = 1; i <= count; i++) {
    // 85% Buyers, 15% Sellers
    const type = (i % 7 === 0) ? 'seller' : 'buyer';

    // Select country from the pool
    const countryObj = COUNTRIES_POOL[i % COUNTRIES_POOL.length];

    // Select category
    const category = categories[i % categories.length];

    // Select product template
    const templates = CATEGORY_PRODUCTS[category];
    const template = templates[(i * 3) % templates.length];

    // Generate realistic company name
    const prefix = COMPANY_PREFIXES[(i * 7) % COMPANY_PREFIXES.length];
    const suffix = COMPANY_SUFFIXES[(i * 11) % COMPANY_SUFFIXES.length];
    const companyName = `${prefix} ${suffix}`;

    // Calculate volume based on category
    let volume = 0;
    if (category === 'Timber') {
      volume = 50000 + ((i * 12345) % 150000); // 50k to 200k BF
    } else if (category === 'Agriculture') {
      volume = 100 + ((i * 47) % 900); // 100 to 1,000 MT
    } else if (category === 'Textiles') {
      volume = 50 + ((i * 13) % 450); // 50 to 500 Bales
    } else {
      volume = 80 + ((i * 29) % 350); // 80 to 430 MT
    }
    // Round volume
    volume = Math.round(volume / 10) * 10;

    // Calculate price
    const basePrice = template.priceRange[0] + ((i * 17) % 100) / 100 * (template.priceRange[1] - template.priceRange[0]);
    const pricePerUnit = Math.round(basePrice * 100) / 100;

    // Select incoterms
    const incoterms = incotermsList[(i * 5) % incotermsList.length];

    const specs = [
      template.specs[0],
      template.specs[1],
      `${countryObj.region} Import Standard Approved`
    ];

    results.push({
      id: `gtr-gen-${10 + i}`,
      type,
      companyName,
      country: countryObj.name,
      flag: countryObj.flag,
      productCategory: category,
      itemName: template.name,
      volume,
      unit: template.unit,
      pricePerUnit,
      incoterms,
      preferredPort: countryObj.port,
      purityGrade: template.grade,
      specs
    });
  }

  return results;
}

const INITIAL_TRADE_BULLETINS: GlobalTradeRequirement[] = [
  {
    id: 'gtr-01',
    type: 'buyer',
    companyName: 'Bavarian Woodcrafts GmbH',
    country: 'Germany',
    flag: '🇩🇪',
    productCategory: 'Timber',
    itemName: 'FSC Certified Douglas Fir Timber',
    volume: 120000,
    unit: 'Board Feet (BF)',
    pricePerUnit: 2.15,
    incoterms: 'CIF',
    preferredPort: 'Port of Rotterdam',
    purityGrade: 'Select Structural',
    specs: ['FSC Chain of Custody', 'Kiln-Dried <15%', 'S4S Finished Surface']
  },
  {
    id: 'gtr-02',
    type: 'buyer',
    companyName: 'Kyoto Eco-Textile Mill',
    country: 'Japan',
    flag: '🇯🇵',
    productCategory: 'Textiles',
    itemName: 'Long-Staple American Pima Cotton',
    volume: 350,
    unit: 'Bales',
    pricePerUnit: 670,
    incoterms: 'CIF',
    preferredPort: 'Port of Osaka',
    purityGrade: 'Supima-grade Premium',
    specs: ['100% Extra-Long Staple', 'High Tensile Strength', 'Zero Seed Contamination']
  },
  {
    id: 'gtr-03',
    type: 'buyer',
    companyName: 'Seoul BioPlastic Corp',
    country: 'South Korea',
    flag: '🇰🇷',
    productCategory: 'Bio-Materials',
    itemName: 'Corn-Based PLA Bio-Polymer',
    volume: 220,
    unit: 'Metric Tons (MT)',
    pricePerUnit: 1820,
    incoterms: 'DDP',
    preferredPort: 'Port of Incheon',
    purityGrade: 'Extrusion Grade',
    specs: ['BPI Certified Compostable', 'FDA Food Contact Approved', 'Ivory Resins']
  },
  {
    id: 'gtr-04',
    type: 'buyer',
    companyName: 'London Millers Alliance',
    country: 'United Kingdom',
    flag: '🇬🇧',
    productCategory: 'Agriculture',
    itemName: 'Premium Hard Red Winter Wheat',
    volume: 850,
    unit: 'Metric Tons (MT)',
    pricePerUnit: 375,
    incoterms: 'CIF',
    preferredPort: 'Port of London',
    purityGrade: 'Grade No. 1 HRW',
    specs: ['Minimum 13.5% Protein', 'Low Moisture <12%', 'High Falling Number']
  },
  {
    id: 'gtr-05',
    type: 'seller',
    companyName: 'Amazonas Sustainable Pulp',
    country: 'Brazil',
    flag: '🇧🇷',
    productCategory: 'Bio-Materials',
    itemName: 'Certified Eucalyptus Paper Pulp',
    volume: 500,
    unit: 'Metric Tons (MT)',
    pricePerUnit: 740,
    incoterms: 'FOB',
    preferredPort: 'Port of Santos',
    purityGrade: 'Bleached Kraft Pulp',
    specs: ['100% FSC Eucalyptus', 'High Whiteness Index', 'Eco-Bleached Chlorine Free']
  },
  {
    id: 'gtr-06',
    type: 'seller',
    companyName: 'Queensland Grain Co-Op',
    country: 'Australia',
    flag: '🇦🇺',
    productCategory: 'Agriculture',
    itemName: 'High-Energy Organic Sorghum',
    volume: 1200,
    unit: 'Metric Tons (MT)',
    pricePerUnit: 280,
    incoterms: 'FOB',
    preferredPort: 'Port of Brisbane',
    purityGrade: 'Premium Feed Grade',
    specs: ['Low Tannin Level', '100% Non-GMO Certified', 'Phytosanitary Cleaned']
  },
  {
    id: 'gtr-07',
    type: 'seller',
    companyName: 'Mekong Eco-Fiber Mills',
    country: 'Vietnam',
    flag: '🇻🇳',
    productCategory: 'Textiles',
    itemName: 'Premium Raw Organic Jute Fibers',
    volume: 400,
    unit: 'Bales',
    pricePerUnit: 320,
    incoterms: 'FOB',
    preferredPort: 'Port of Ho Chi Minh',
    purityGrade: 'TD-3 Grade Extra long',
    specs: ['Golden Luster Fiber', 'Average Length 2.5m', 'Low Moisture Retention']
  },
  {
    id: 'gtr-08',
    type: 'buyer',
    companyName: 'Rotterdam Bio-Packaging S.A.',
    country: 'Netherlands',
    flag: '🇳🇱',
    productCategory: 'Bio-Materials',
    itemName: 'Recycled Kraft Linerboard',
    volume: 150,
    unit: 'Metric Tons (MT)',
    pricePerUnit: 520,
    incoterms: 'DDP',
    preferredPort: 'Port of Rotterdam',
    purityGrade: 'Premium Testliner',
    specs: ['100% Post-Consumer Fiber', 'Burst Index >2.8 kPa', 'Moisture Proof Glazed']
  }
];

interface GlobalTradeDeskProps {
  onExploreMore?: () => void;
}

export default function GlobalTradeDesk({ onExploreMore }: GlobalTradeDeskProps = {}) {
  const [bulletins, setBulletins] = useState<GlobalTradeRequirement[]>(() => {
    return [...INITIAL_TRADE_BULLETINS, ...generateMoreBulletins(100)];
  });
  const [activeTab, setActiveTab] = useState<'all' | 'buyer' | 'seller'>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  React.useEffect(() => {
    setVisibleCount(12);
  }, [activeTab, selectedRegion, selectedCategory]);
  
  // Custom Sourcing Posting Form Modal
  const [isPostOpen, setIsPostOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    type: 'buyer',
    companyName: '',
    country: 'Germany',
    productCategory: 'Timber',
    itemName: '',
    volume: '',
    unit: 'Board Feet (BF)',
    pricePerUnit: '',
    incoterms: 'CIF',
    preferredPort: '',
    purityGrade: 'Premium Selected',
    spec1: '',
    spec2: '',
    spec3: ''
  });

  // Connecting Matchmaker Negotiation Panel
  const [selectedMatch, setSelectedMatch] = useState<GlobalTradeRequirement | null>(null);
  const [selectedTargetCurrency, setSelectedTargetCurrency] = useState<'USD' | 'EUR' | 'JPY' | 'GBP'>('USD');
  const [hasConnected, setHasConnected] = useState<boolean>(false);
  const [negotiatedQty, setNegotiatedQty] = useState<number>(0);
  const [negotiationNotes, setNegotiationNotes] = useState<string>('');

  // Currencies conversions
  const CURRENCY_CONVERSION = {
    USD: { rate: 1.0, symbol: '$' },
    EUR: { rate: 0.92, symbol: '€' },
    JPY: { rate: 158.5, symbol: '¥' },
    GBP: { rate: 0.79, symbol: '£' }
  };

  const countries = [
    { name: 'Germany', flag: '🇩🇪', region: 'Europe', port: 'Port of Rotterdam' },
    { name: 'Japan', flag: '🇯🇵', region: 'Asia-Pacific', port: 'Port of Osaka' },
    { name: 'South Korea', flag: '🇰🇷', region: 'Asia-Pacific', port: 'Port of Incheon' },
    { name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', port: 'Port of London' },
    { name: 'Brazil', flag: '🇧🇷', region: 'Latin America', port: 'Port of Santos' },
    { name: 'Australia', flag: '🇦🇺', region: 'Asia-Pacific', port: 'Port of Brisbane' },
    { name: 'Vietnam', flag: '🇻🇳', region: 'Asia-Pacific', port: 'Port of Ho Chi Minh' },
    { name: 'Netherlands', flag: '🇳🇱', region: 'Europe', port: 'Port of Rotterdam' },
    { name: 'United States', flag: '🇺🇸', region: 'North America', port: 'Port of Los Angeles' },
    { name: 'Canada', flag: '🇨🇦', region: 'North America', port: 'Port of Vancouver' },
    { name: 'Singapore', flag: '🇸🇬', region: 'Asia-Pacific', port: 'Port of Singapore' },
    { name: 'India', flag: '🇮🇳', region: 'Asia-Pacific', port: 'Port of Nhava Sheva' }
  ];

  const getRegionOfCountry = (countryName: string) => {
    const found = countries.find(c => c.name === countryName);
    return found ? found.region : 'Other';
  };

  const getFlagOfCountry = (countryName: string) => {
    const found = countries.find(c => c.name === countryName);
    return found ? found.flag : '🌐';
  };

  // Filter logic
  const filteredBulletins = bulletins.filter((item) => {
    // Type Filter
    const typeMatch = activeTab === 'all' || item.type === activeTab;
    
    // Region Filter
    const itemRegion = getRegionOfCountry(item.country);
    const regionMatch = selectedRegion === 'All' || itemRegion === selectedRegion;

    // Category Filter
    const categoryMatch = selectedCategory === 'All' || item.productCategory === selectedCategory;

    return typeMatch && regionMatch && categoryMatch;
  });

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.itemName || !formData.volume || !formData.pricePerUnit) {
      alert('Please fill out all required fields.');
      return;
    }

    const newRequirement: GlobalTradeRequirement = {
      id: `gtr-user-${Math.floor(1000 + Math.random() * 9000)}`,
      type: formData.type as 'buyer' | 'seller',
      companyName: formData.companyName,
      country: formData.country,
      flag: getFlagOfCountry(formData.country),
      productCategory: formData.productCategory as any,
      itemName: formData.itemName,
      volume: parseFloat(formData.volume),
      unit: formData.unit,
      pricePerUnit: parseFloat(formData.pricePerUnit),
      incoterms: formData.incoterms as any,
      preferredPort: formData.preferredPort || countries.find(c => c.name === formData.country)?.port || 'Main Sea Port',
      purityGrade: formData.purityGrade,
      specs: [formData.spec1, formData.spec2, formData.spec3].filter(Boolean)
    };

    setBulletins([newRequirement, ...bulletins]);
    setIsPostOpen(false);

    const subject = encodeURIComponent(`New Global Trade Listing [${formData.type.toUpperCase()}]: ${formData.itemName} - ${formData.companyName}`);
    const body = encodeURIComponent(
      `NEW TRADE LISTING SUBMISSION\n` +
      `-----------------------------------\n` +
      `Type: ${formData.type.toUpperCase()}\n` +
      `Company: ${formData.companyName}\n` +
      `Country: ${formData.country}\n` +
      `Item Name: ${formData.itemName}\n` +
      `Category: ${formData.productCategory}\n` +
      `Volume: ${formData.volume} ${formData.unit}\n` +
      `Target Price: $${formData.pricePerUnit} USD per ${formData.unit}\n` +
      `Incoterms: ${formData.incoterms}\n` +
      `Preferred Port: ${formData.preferredPort}\n` +
      `Purity/Grade: ${formData.purityGrade}\n` +
      `-----------------------------------\n` +
      `Dispatched to info@rootofamerica.com`
    );

    try {
      window.location.href = `mailto:info@rootofamerica.com?subject=${subject}&body=${body}`;
    } catch (err) {
      console.log('Mailto error:', err);
    }

    // Reset form
    setFormData({
      type: 'buyer',
      companyName: '',
      country: 'Germany',
      productCategory: 'Timber',
      itemName: '',
      volume: '',
      unit: 'Board Feet (BF)',
      pricePerUnit: '',
      incoterms: 'CIF',
      preferredPort: '',
      purityGrade: 'Premium Selected',
      spec1: '',
      spec2: '',
      spec3: ''
    });
  };

  const openMatchPanel = (item: GlobalTradeRequirement) => {
    setSelectedMatch(item);
    setNegotiatedQty(item.volume);
    setHasConnected(false);
    setNegotiationNotes('');
  };

  const handleExecuteNegotiation = (e: React.FormEvent) => {
    e.preventDefault();
    setHasConnected(true);

    if (selectedMatch) {
      const subject = encodeURIComponent(`Trade Negotiation Inquiry: ${selectedMatch.title}`);
      const body = encodeURIComponent(
        `NEW TRADE DESK NEGOTIATION\n` +
        `-----------------------------------\n` +
        `Listing Title: ${selectedMatch.title}\n` +
        `Commodity Category: ${selectedMatch.productCategory}\n` +
        `Proposed Volume: ${negotiatedQty} ${selectedMatch.unit}\n` +
        `Target Currency: ${selectedTargetCurrency}\n` +
        `Incoterms: ${selectedMatch.incoterms}\n` +
        `Additional Notes: ${negotiationNotes || 'None'}\n` +
        `-----------------------------------\n` +
        `Dispatched to info@rootofamerica.com`
      );

      try {
        window.location.href = `mailto:info@rootofamerica.com?subject=${subject}&body=${body}`;
      } catch (err) {
        console.log('Mailto error:', err);
      }
    }
  };

  // Cost estimates
  const basePriceUSD = selectedMatch ? selectedMatch.pricePerUnit * negotiatedQty : 0;
  // Estimate ocean freight / trans-border logistics
  const estFreightUSD = selectedMatch 
    ? selectedMatch.incoterms === 'CIF' || selectedMatch.incoterms === 'DDP'
      ? selectedMatch.productCategory === 'Timber' ? negotiatedQty * 0.28 
      : selectedMatch.productCategory === 'Agriculture' ? negotiatedQty * 0.12
      : negotiatedQty * 0.45
      : 0
    : 0;

  // Custom import duty estimate
  const estDutiesUSD = selectedMatch && selectedMatch.incoterms === 'DDP' ? basePriceUSD * 0.065 : 0;
  const totalCostUSD = basePriceUSD + estFreightUSD + estDutiesUSD;

  const currentCurrency = CURRENCY_CONVERSION[selectedTargetCurrency];

  return (
    <section id="global-trade-desk-section" className="py-20 bg-gradient-to-br from-[#faf8f5] via-[#f5edd7] to-[#e4d8bc] border-b border-[#e5dfd3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold text-amber-600 tracking-widest uppercase bg-amber-600/10 px-3.5 py-1.5 rounded-full">
              Global Matchmaker & Trade Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1c2421]">
              Connecting Buyers & Sellers Globally
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Unlock cross-border trade matches instantly. Search real requirements logged by verified industrial enterprises across Europe, the Americas, and Asia-Pacific. Apply live shipping calculations to lock in cargo routes.
            </p>
          </div>

          <div className="flex shrink-0">
            <button
              onClick={() => setIsPostOpen(true)}
              className="bg-[#0e4a36] hover:bg-[#0b3c2a] text-white px-5 py-3 rounded-xl font-sans font-bold text-xs transition-all flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
            >
              <Plus className="h-4 w-4 text-amber-500" />
              <span>Post Trade Requirement</span>
            </button>
          </div>
        </div>

        {/* Filters and Tabs Controller Bar */}
        <div className="bg-[#faf8f5] border border-[#e5dfd3] p-4 rounded-2xl flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8">
          
          {/* Action Tabs: All / Buyers / Sellers */}
          <div className="flex bg-white border border-[#e5dfd3] p-1.5 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer ${
                activeTab === 'all' 
                  ? 'bg-[#1c2421] text-white shadow-sm' 
                  : 'text-gray-500 hover:text-[#1c2421]'
              }`}
            >
              All Bulletins
            </button>
            <button
              onClick={() => setActiveTab('buyer')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'buyer' 
                  ? 'bg-[#0e4a36] text-white shadow-sm' 
                  : 'text-gray-500 hover:text-[#0e4a36]'
              }`}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Buyer Demands</span>
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'seller' 
                  ? 'bg-amber-600 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-amber-600'
              }`}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span>Supplier Supply Offers</span>
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Region selector */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">Region:</span>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-white border border-[#e5dfd3] rounded-lg px-2.5 py-1.5 text-xs font-semibold outline-none text-[#1c2421] cursor-pointer"
              >
                <option value="All">All Regions</option>
                <option value="Europe">Europe</option>
                <option value="Asia-Pacific">Asia-Pacific</option>
                <option value="Latin America">Latin America</option>
                <option value="North America">North America</option>
              </select>
            </div>

            {/* Category Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-[#e5dfd3] rounded-lg px-2.5 py-1.5 text-xs font-semibold outline-none text-[#1c2421] cursor-pointer"
              >
                <option value="All">All Sectors</option>
                <option value="Timber">Timber & Lumber</option>
                <option value="Agriculture">Agriculture & Grains</option>
                <option value="Textiles">Textiles & Fibers</option>
                <option value="Bio-Materials">Eco Bio-Materials</option>
                <option value="Home Supplies">Home Supplies</option>
                <option value="Food & Beverages">Food & Beverages</option>
                <option value="Apparel & Fashion">Apparel & Fashion</option>
                <option value="Chemicals">Chemicals</option>
                <option value="Construction & Real Estate">Construction & Real Estate</option>
                <option value="Furniture">Furniture</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Gifts & Crafts">Gifts & Crafts</option>
                <option value="Minerals & Metals">Minerals & Metals</option>
              </select>
            </div>

            {/* Total Display Counter */}
            <span className="text-xs font-mono text-gray-400 border-l border-[#e5dfd3] pl-3 py-1">
              Showing {filteredBulletins.length} Global Listings
            </span>

          </div>

        </div>

        {/* Global Trade Bulletin Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBulletins.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`bg-gradient-to-b from-white to-[#fcfaf7] border rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0e4a36]/40 transition-all relative overflow-hidden ${
                  item.type === 'buyer' 
                    ? 'border-l-4 border-l-[#0e4a36] border-[#e5dfd3]' 
                    : 'border-l-4 border-l-amber-500 border-[#e5dfd3]'
                }`}
              >
                {/* Header Flag and Type Indicator */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-sans font-bold flex items-center space-x-1.5">
                      <span className="text-lg">{item.flag}</span>
                      <span className="text-gray-800 text-xs truncate max-w-[120px]">{item.country}</span>
                    </span>

                    <span className={`text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      item.type === 'buyer' 
                        ? 'bg-[#0e4a36]/10 text-[#0e4a36]' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.type === 'buyer' ? 'Seeking Supply' : 'Supply Offer'}
                    </span>
                  </div>

                  {/* Company and Product */}
                  <div className="text-left">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Building2 className="h-3 w-3 flex-shrink-0" />
                      <p className="text-[10px] font-mono uppercase truncate max-w-[170px]">{item.companyName}</p>
                    </div>
                    <h4 className="text-sm font-bold text-[#1c2421] mt-1.5 min-h-[40px] line-clamp-2 leading-tight">
                      {item.itemName}
                    </h4>
                  </div>

                  {/* Specifications Dots */}
                  <div className="flex flex-wrap gap-1">
                    {item.specs.slice(0, 2).map((spec, i) => (
                      <span key={i} className="bg-[#faf8f5] text-gray-500 text-[9px] font-mono px-2 py-0.5 rounded border border-gray-100 truncate max-w-[110px]">
                        {spec}
                      </span>
                    ))}
                    {item.specs.length > 2 && (
                      <span className="bg-[#faf8f5] text-gray-400 text-[9px] font-mono px-1 py-0.5 rounded border border-gray-100">
                        +{item.specs.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Price & Volume Breakdown */}
                  <div className="bg-[#faf8f5] p-3 rounded-xl border border-gray-100 space-y-1.5 text-xs text-left">
                    <div className="flex justify-between text-gray-500 font-mono text-[10px]">
                      <span>REQUIRED VOLUME:</span>
                      <span className="font-sans font-bold text-[#1c2421]">{item.volume.toLocaleString()} {item.unit.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 font-mono text-[10px]">
                      <span>TARGET RATE:</span>
                      <span className="font-sans font-extrabold text-[#0e4a36]">${item.pricePerUnit} / {item.unit.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 font-mono text-[10px] border-t border-dashed border-gray-200 pt-1.5 mt-1.5">
                      <span>INCOTERMS:</span>
                      <span className="font-sans font-bold text-amber-600 uppercase bg-amber-50 px-1.5 rounded">{item.incoterms} • {item.preferredPort.split(' ').slice(-1)[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Match Trigger Button */}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => openMatchPanel(item)}
                    className="w-full bg-[#faf8f5] hover:bg-[#0e4a36] group text-[#1c2421] hover:text-white border border-[#e5dfd3] hover:border-[#0e4a36] py-2 rounded-xl text-xs font-sans font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Match & Connect</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty fallback */}
          {filteredBulletins.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-4 border border-dashed border-[#e5dfd3] py-16 px-4 rounded-3xl text-center space-y-3">
              <Globe2 className="h-10 w-10 text-gray-300 mx-auto animate-pulse" />
              <h4 className="text-sm font-bold text-[#1c2421]">No Active Global Trade Bulletins Found</h4>
              <p className="text-xs text-gray-500 max-w-md mx-auto">Try resetting your category or regional filters. Post a trade requirement to start matching immediately!</p>
              <button
                onClick={() => { setSelectedRegion('All'); setSelectedCategory('All'); setActiveTab('all'); }}
                className="text-xs text-[#0e4a36] font-bold underline hover:no-underline"
              >
                Clear Sourcing Filters
              </button>
            </div>
          )}
        </div>

        {/* Unified Load More & Sourcing Hub Redirection Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#1c2421] to-[#0e4a36] text-white rounded-3xl p-8 sm:p-10 border border-[#135d44] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#faf8f5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3.5 py-1.5 rounded-full text-[9px] font-mono font-extrabold uppercase tracking-widest">
              <span>Verified Sourcing Leads Database</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-serif font-bold tracking-tight">Load More & Explore 8,576+ Verified Leads</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Access the complete global directory on our interactive sourcing dashboard. Analyze massive commodity flows, filter by 13+ industrial categories, use smart currency calculators, and unlock escrow-protected trade opportunities.
            </p>
          </div>
          <button
            onClick={onExploreMore}
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-[#1c2421] px-8 py-4 rounded-xl font-sans font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center space-x-2 cursor-pointer group hover:scale-[1.03]"
          >
            <span>Load More & Open Sourcing Page</span>
            <ChevronRight className="h-4 w-4 text-[#1c2421] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Global Matchmaker Connected Drawer Modal Panel */}
        <AnimatePresence>
          {selectedMatch && (
            <div className="fixed inset-0 bg-[#1c2421]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl border border-[#e5dfd3] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative text-left"
              >
                
                {/* Header Title Block */}
                <div className="bg-[#1c2421] text-white p-6 sm:p-8 flex justify-between items-center relative">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{selectedMatch.flag}</span>
                      <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                        Active B2B Matchmaker Desk • {selectedMatch.country}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-white">
                      Cross-Border Sourcing Match: {selectedMatch.companyName}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedMatch(null)}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#1c2421]">
                  
                  {hasConnected ? (
                    // Connection Success Page
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-10 space-y-6 max-w-xl mx-auto"
                    >
                      <div className="h-16 w-16 bg-emerald-100 text-[#0e4a36] rounded-full flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-sans font-bold text-gray-900">B2B Trade Pitch Dispatched!</h4>
                        <p className="text-sm text-gray-600">
                          A secure commercial B2B contract proposal has been sent to <strong>{selectedMatch.companyName}</strong> representing your trade request. 
                        </p>
                      </div>

                      {/* Summary Contract slip */}
                      <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-3 text-left font-mono text-xs">
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-gray-400">DISPATCHED REF:</span>
                          <span className="font-bold">B2B-INT-{Math.floor(10000 + Math.random() * 90000)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">TARGET COMMODITY:</span>
                          <span className="font-bold text-[#1c2421]">{selectedMatch.itemName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">PROPOSED CARGO:</span>
                          <span className="font-bold text-[#1c2421]">{negotiatedQty.toLocaleString()} {selectedMatch.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">TOTAL EST VALUE:</span>
                          <span className="font-sans font-bold text-[#0e4a36]">${Math.round(totalCostUSD).toLocaleString()} USD</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 border-dashed">
                          <span className="text-gray-400">DELIVERY TERM:</span>
                          <span className="font-sans font-bold text-amber-600">{selectedMatch.incoterms} — {selectedMatch.preferredPort}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-gray-400 leading-normal">
                        Our trade routing desk has notified their regional account representative. You will receive an email confirmation and standard intercontinental customs clearance sheets within 2 business hours.
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={() => setSelectedMatch(null)}
                          className="bg-[#0e4a36] hover:bg-[#0b3c2a] text-white px-8 py-3 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Return to Bulletins
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    // Live Calculation and Negotiate Panel
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Spec card (5 cols) */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-4 text-xs">
                          <div>
                            <p className="text-[10px] font-mono text-gray-400 uppercase">PARTNER ENTITY</p>
                            <p className="text-sm font-bold mt-0.5">{selectedMatch.companyName}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-gray-400 uppercase">SPECIFIED GRADE</p>
                            <p className="text-sm font-bold text-[#0e4a36] mt-0.5">{selectedMatch.purityGrade}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-gray-400 uppercase">ORIGIN & HUBS</p>
                            <p className="text-sm font-bold mt-0.5">{selectedMatch.country} • FOB terminal via {selectedMatch.preferredPort}</p>
                          </div>

                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-[10px] font-mono text-gray-400 uppercase mb-2">VERIFIED SPECS REPORT</p>
                            <ul className="space-y-1.5">
                              {selectedMatch.specs.map((spec, idx) => (
                                <li key={idx} className="flex items-center space-x-1.5 text-gray-600">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Trade terms explanation helper box */}
                        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 text-[11px] leading-relaxed text-amber-800 flex items-start space-x-2">
                          <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Incoterms Help:</strong> {selectedMatch.incoterms === 'CIF' 
                              ? 'CIF (Cost, Insurance & Freight) means the seller handles all deep-ocean carrier transport costs up to the port of entry.' 
                              : selectedMatch.incoterms === 'DDP' 
                              ? 'DDP (Delivered Duty Paid) means all customs, local taxes, import tariffs, and harbor clearances are pre-calculated and paid.' 
                              : 'FOB (Free On Board) cargo requires your shipping agent to collect materials directly from the seller\'s terminal.'}
                          </span>
                        </div>
                      </div>

                      {/* Right: Pricing Calculator Desk (7 cols) */}
                      <form onSubmit={handleExecuteNegotiation} className="lg:col-span-7 space-y-5 text-left">
                        
                        {/* Dynamic volume field */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">PROPOSED VOL ({selectedMatch.unit.split(' ')[0]})</label>
                            <input
                              type="number"
                              min={1}
                              value={negotiatedQty}
                              onChange={(e) => setNegotiatedQty(Math.max(1, parseInt(e.target.value) || 0))}
                              className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 text-xs font-bold outline-none text-[#1c2421]"
                            />
                            <p className="text-[9px] font-mono text-gray-400 mt-1">Listed required: {selectedMatch.volume.toLocaleString()}</p>
                          </div>

                          {/* Currency Selection */}
                          <div>
                            <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Target Billing Currency</label>
                            <div className="flex bg-[#faf8f5] border border-[#e5dfd3] p-1 rounded-xl">
                              {(['USD', 'EUR', 'JPY', 'GBP'] as const).map((curr) => (
                                <button
                                  key={curr}
                                  type="button"
                                  onClick={() => setSelectedTargetCurrency(curr)}
                                  className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                                    selectedTargetCurrency === curr
                                      ? 'bg-white text-[#1c2421] shadow-sm border border-gray-200'
                                      : 'text-gray-400 hover:text-gray-600'
                                  }`}
                                >
                                  {curr}
                                </button>
                              ))}
                            </div>
                            <p className="text-[9px] font-mono text-gray-400 mt-1">Live exchange rate conversion active</p>
                          </div>
                        </div>

                        {/* Interactive calculations box */}
                        <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5dfd3] space-y-3 font-mono text-xs">
                          <p className="font-sans font-bold text-gray-700 text-[11px] uppercase tracking-wide pb-1.5 border-b border-dashed">
                            Interactive Trade Costing Calculator
                          </p>
                          
                          <div className="flex justify-between text-gray-500">
                            <span>FOB Commodity Rate:</span>
                            <span className="text-[#1c2421]">
                              {currentCurrency.symbol}{Math.round(selectedMatch.pricePerUnit * currentCurrency.rate * 100) / 100} / {selectedMatch.unit.split(' ')[0]}
                            </span>
                          </div>

                          <div className="flex justify-between text-gray-500">
                            <span>Base Cargo Cost:</span>
                            <span className="text-[#1c2421] font-sans font-bold">
                              {currentCurrency.symbol}{Math.round(basePriceUSD * currentCurrency.rate).toLocaleString()}
                            </span>
                          </div>

                          <div className="flex justify-between text-gray-500">
                            <span>Est. Global Ocean Freight:</span>
                            <span className="text-[#1c2421] font-sans">
                              {estFreightUSD > 0 
                                ? `${currentCurrency.symbol}${Math.round(estFreightUSD * currentCurrency.rate).toLocaleString()}` 
                                : `${currentCurrency.symbol}0 (Included in ${selectedMatch.incoterms})`}
                            </span>
                          </div>

                          {selectedMatch.incoterms === 'DDP' && (
                            <div className="flex justify-between text-gray-500">
                              <span>Customs Duties & Tariffs:</span>
                              <span className="text-gray-800 font-sans">
                                {currentCurrency.symbol}{Math.round(estDutiesUSD * currentCurrency.rate).toLocaleString()} (Paid)
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between text-gray-800 font-bold border-t border-dashed border-gray-200 pt-2.5 text-sm">
                            <span className="font-sans">Est. CIF Total:</span>
                            <span className="text-[#0e4a36] font-sans text-base">
                              {currentCurrency.symbol}{Math.round(totalCostUSD * currentCurrency.rate).toLocaleString()} {selectedTargetCurrency}
                            </span>
                          </div>
                        </div>

                        {/* Notes message to other party */}
                        <div>
                          <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Add a custom message / pricing pitch</label>
                          <textarea
                            rows={2}
                            placeholder="e.g. We can guarantee a letter of credit within 48 hours. Please confirm lead times..."
                            value={negotiationNotes}
                            onChange={(e) => setNegotiationNotes(e.target.value)}
                            className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2 text-xs outline-none text-[#1c2421]"
                          />
                        </div>

                        {/* Confirm Submit */}
                        <button
                          type="submit"
                          className="w-full bg-[#0e4a36] hover:bg-[#0b3c2a] text-white py-3.5 rounded-xl font-sans font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
                        >
                          <FileCheck2 className="h-4.5 w-4.5 text-amber-500" />
                          <span>Submit Trade Pitch & Connect</span>
                        </button>

                      </form>
                    </div>
                  )}

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Post Sourcing Modal */}
        <AnimatePresence>
          {isPostOpen && (
            <div className="fixed inset-0 bg-[#1c2421]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl border border-[#e5dfd3] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col relative text-left text-[#1c2421]"
              >
                
                {/* Header */}
                <div className="bg-[#1c2421] text-white p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-bold text-white flex items-center space-x-2">
                      <Globe2 className="h-5 w-5 text-amber-400" />
                      <span>Post Global Trade Bulletin</span>
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">Post an active sourcing requirement or a supply offer to find international partners.</p>
                  </div>

                  <button
                    onClick={() => setIsPostOpen(false)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                {/* Form body */}
                <form onSubmit={handlePostSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
                  
                  {/* Type */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1.5">Trade Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'buyer' })}
                        className={`py-2 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          formData.type === 'buyer'
                            ? 'bg-[#0e4a36] border-[#0e4a36] text-white shadow-sm'
                            : 'bg-[#faf8f5] border-[#e5dfd3] text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        Buyer Demand (Seeking Supply)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'seller' })}
                        className={`py-2 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          formData.type === 'seller'
                            ? 'bg-amber-600 border-amber-600 text-white shadow-sm'
                            : 'bg-[#faf8f5] border-[#e5dfd3] text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        Supplier Offer (Supply Available)
                      </button>
                    </div>
                  </div>

                  {/* Company Name & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Company Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Frankfurt Agri-Processing"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Country Location</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                      >
                        {countries.map(c => (
                          <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Category & Item name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Material Sector</label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                      >
                        <option value="Timber">Timber & Lumber</option>
                        <option value="Agriculture">Agriculture & Grains</option>
                        <option value="Textiles">Textiles & Fibers</option>
                        <option value="Bio-Materials">Eco Bio-Materials</option>
                        <option value="Home Supplies">Home Supplies</option>
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Apparel & Fashion">Apparel & Fashion</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Construction & Real Estate">Construction & Real Estate</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                        <option value="Gifts & Crafts">Gifts & Crafts</option>
                        <option value="Minerals & Metals">Minerals & Metals</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Specific Commodity / Product Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Organic Hemp Stalks, Walnut Slabs"
                        value={formData.itemName}
                        onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                        required
                      />
                    </div>
                  </div>

                  {/* Volume, Unit, Price, Incoterms */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Volume</label>
                      <input
                        type="number"
                        placeholder="e.g. 50000"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-bold text-[#1c2421]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Cargo Unit</label>
                      <select
                        value={formData.unit}
                        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                      >
                        <option value="Board Feet (BF)">Board Feet (BF)</option>
                        <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                        <option value="Bales">Bales</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Target Rate (USD)</label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="e.g. 2.15"
                        value={formData.pricePerUnit}
                        onChange={(e) => setFormData({ ...formData, pricePerUnit: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-bold text-[#1c2421]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Incoterms</label>
                      <select
                        value={formData.incoterms}
                        onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                      >
                        <option value="FOB">FOB</option>
                        <option value="CIF">CIF</option>
                        <option value="DDP">DDP</option>
                        <option value="EXW">EXW</option>
                      </select>
                    </div>
                  </div>

                  {/* Quality grade & port */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Quality Grade / Purity</label>
                      <input
                        type="text"
                        placeholder="e.g. Supima-grade Premium, Grade 1"
                        value={formData.purityGrade}
                        onChange={(e) => setFormData({ ...formData, purityGrade: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">Preferred Port (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Port of Rotterdam"
                        value={formData.preferredPort}
                        onChange={(e) => setFormData({ ...formData, preferredPort: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] focus:border-[#0e4a36] rounded-xl px-3 py-2.5 outline-none font-semibold text-[#1c2421]"
                      />
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase">Product Specifications / Certifications</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="e.g. 100% Sustainable Certified"
                        value={formData.spec1}
                        onChange={(e) => setFormData({ ...formData, spec1: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] rounded-xl px-3 py-2 outline-none font-semibold text-[#1c2421]"
                      />
                      <input
                        type="text"
                        placeholder="e.g. Moister <12%"
                        value={formData.spec2}
                        onChange={(e) => setFormData({ ...formData, spec2: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] rounded-xl px-3 py-2 outline-none font-semibold text-[#1c2421]"
                      />
                      <input
                        type="text"
                        placeholder="e.g. FDA approved resin"
                        value={formData.spec3}
                        onChange={(e) => setFormData({ ...formData, spec3: e.target.value })}
                        className="w-full bg-[#faf8f5] border border-[#e5dfd3] rounded-xl px-3 py-2 outline-none font-semibold text-[#1c2421]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsPostOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-[#e5dfd3] text-gray-500 hover:bg-[#faf8f5] transition-all font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#0e4a36] hover:bg-[#0b3c2a] text-white rounded-xl transition-all font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <Plus className="h-4 w-4 text-amber-500" />
                      <span>Post Bulletin</span>
                    </button>
                  </div>

                </form>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
