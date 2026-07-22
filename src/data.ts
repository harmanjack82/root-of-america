import { Product, MockPurchaseOrder, BuyerProfile } from './types';
import pimaCottonImg from './assets/images/pima_cotton_card_1783160145462.jpg';
import plaGranulesImg from './assets/images/pla_granules_card_1783160280317.jpg';
import douglasFirImg from './assets/images/douglas_fir_timber_card_1783160432380.jpg';

export const USA_PRODUCTS: Product[] = [
  // Organic Agriculture
  {
    id: 'ag-01',
    name: 'Premium Hard Red Winter Wheat',
    category: 'Organic Crops',
    grade: 'USDA No. 1 Food-Grade',
    moq: 50,
    unit: 'Tons',
    pricePerUnit: 380, // $380 per Ton
    origin: 'Kansas, USA',
    warehouse: 'Chicago Midwest Distribution Center',
    purity: '99.8% Purity Index',
    specs: ['Non-GMO Certified', '13.5% Protein Content', 'Max 12% Moisture'],
    stock: '2,500 Tons Available',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ag-02',
    name: 'Certified Organic Soybeans',
    category: 'Organic Crops',
    grade: 'USDA Grade A Organic',
    moq: 40,
    unit: 'Tons',
    pricePerUnit: 520, // $520 per Ton
    origin: 'Iowa, USA',
    warehouse: 'Des Moines Regional Hub',
    purity: '99.5% Organic Purity',
    specs: ['USDA Certified Organic', 'No Chemical Treatments', 'Excellent Oil Yield'],
    stock: '1,800 Tons Available',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ag-03',
    name: 'Cold-Pressed Sunflower Seed Oil',
    category: 'Organic Crops',
    grade: 'Food & Cosmetic Premium',
    moq: 15,
    unit: 'Barrels (55 Gal)',
    pricePerUnit: 850, // $850 per barrel
    origin: 'North Dakota, USA',
    warehouse: 'Minneapolis Logistics Hub',
    purity: '100% First-Press Extra Virgin',
    specs: ['Rich in Vitamin E', 'High Oleic Content', 'Mechanically Pressed Only'],
    stock: '450 Barrels Available',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600'
  },

  // Sustainable Timber
  {
    id: 'wd-01',
    name: 'Appalachian White Oak Lumber',
    category: 'Hardwood Timber',
    grade: 'FAS (First and Seconds)',
    moq: 10000,
    unit: 'Board Feet (BF)',
    pricePerUnit: 4.85, // $4.85 per BF
    origin: 'Pennsylvania, USA',
    warehouse: 'Pittsburgh Timber Yard',
    purity: 'Kiln-Dried to 6-8%',
    specs: ['FSC Sustainable Certified', 'Quarter-Sawn Grain Pattern', 'Excellent Strength Index'],
    stock: '120,000 BF Available',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'wd-02',
    name: 'Premium American Black Walnut Slabs',
    category: 'Hardwood Timber',
    grade: 'Select Hardwood Grade',
    moq: 4000,
    unit: 'Board Feet (BF)',
    pricePerUnit: 8.90, // $8.90 per BF
    origin: 'Indiana, USA',
    warehouse: 'Indianapolis Woodcraft Center',
    purity: 'Kiln-Dried to 8%',
    specs: ['Rich Heartwood Color', 'Beautiful Cathedral Cathedral Figuring', 'Live Edge & Straight Options'],
    stock: '45,000 BF Available',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'wd-03',
    name: 'FSC Certified Douglas Fir Timber',
    category: 'Softwood Timber',
    grade: 'Select Structural / No. 1',
    moq: 15000,
    unit: 'Board Feet (BF)',
    pricePerUnit: 2.10, // $2.10 per BF
    origin: 'Oregon, USA',
    warehouse: 'Portland Shipping Terminal',
    purity: 'Kiln-Dried to 15%',
    specs: ['FSC Sustainable Certified', 'Exceptional Structural Strength', 'S4S Premium Finished Surface'],
    stock: '250,000 BF Available',
    image: douglasFirImg
  },

  // Natural Fibers
  {
    id: 'fb-01',
    name: 'Long-Staple American Pima Cotton',
    category: 'Natural Fibers',
    grade: 'USDA Supima Certified',
    moq: 20,
    unit: 'Bales (500 lbs)',
    pricePerUnit: 680, // $680 per bale
    origin: 'Texas, USA',
    warehouse: 'Houston Port Logistics Hub',
    purity: '100% Pure Extra-Long Staple',
    specs: ['Supima-grade Staple Length', 'High Tensile Strength', 'Premium Dye Affinity'],
    stock: '850 Bales Available',
    image: pimaCottonImg
  },
  {
    id: 'fb-02',
    name: 'Industrial Hemp Bast Fiber',
    category: 'Natural Fibers',
    grade: 'Standard Retting Grade',
    moq: 25,
    unit: 'Tons',
    pricePerUnit: 740, // $740 per Ton
    origin: 'Kentucky, USA',
    warehouse: 'Louisville Transit Hub',
    purity: 'Processed Raw Fiber',
    specs: ['Super-high Tensile Rating', 'Naturally Pest-Resistant', 'Ideal for Textiles & Composites'],
    stock: '600 Tons Available',
    image: 'https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?auto=format&fit=crop&q=80&w=600'
  },

  // Eco-Packaging & Bio-Polymers
  {
    id: 'pkg-01',
    name: 'Corn-Based PLA Bio-Polymer Granules',
    category: 'Bio-Materials',
    grade: 'Industrial Compostable',
    moq: 15,
    unit: 'Metric Tons (MT)',
    pricePerUnit: 1850, // $1850 per MT
    origin: 'Nebraska, USA',
    warehouse: 'Omaha Agricultural Bio-Hub',
    purity: '100% Biodegradable Resin',
    specs: ['Extrusion-Grade Pellets', 'BPI Certified Compostable', 'FDA Approved for Food Contact'],
    stock: '380 MT Available',
    image: plaGranulesImg
  }
];

export const MOCK_BUYER: BuyerProfile = {
  companyName: 'Apex Woodcraft & Fabrics LLC',
  creditLimit: 150000,
  availableCredit: 82540,
  representative: 'Sarah Jenkins',
  repEmail: 'info@rootofamerica.com'
};

export const MOCK_ORDERS: MockPurchaseOrder[] = [
  {
    id: 'PO-2026-8841',
    date: '2026-06-18',
    items: [
      { productName: 'Appalachian White Oak Lumber', quantity: 12000, totalCost: 58200 },
      { productName: 'Premium American Black Walnut Slabs', quantity: 5000, totalCost: 44500 }
    ],
    totalAmount: 102700,
    status: 'In Transit',
    trackingNumber: 'ROA-US-778942-A'
  },
  {
    id: 'PO-2026-8512',
    date: '2026-05-02',
    items: [
      { productName: 'Long-Staple American Pima Cotton', quantity: 30, totalCost: 20400 }
    ],
    totalAmount: 20400,
    status: 'In Transit',
    trackingNumber: 'ROA-US-661208-C'
  },
  {
    id: 'PO-2026-7910',
    date: '2026-03-24',
    items: [
      { productName: 'Premium Hard Red Winter Wheat', quantity: 60, totalCost: 22800 }
    ],
    totalAmount: 22800,
    status: 'In Transit',
    trackingNumber: 'ROA-US-554129-F'
  }
];

export const B2B_TESTIMONIALS = [
  {
    quote: "Roots Of America completely transformed our timber supply chain. Being a registered US corporate vendor with integrated logistics, their portal allows our procurement team to lock in volume pricing in minutes.",
    author: "Richard Kessler",
    position: "VP of Global Sourcing",
    company: "Heritage Furnishings Group",
    location: "High Point, NC"
  },
  {
    quote: "The transparency of having state-certified origin tags and automated cargo calculators means we no longer spend weeks negotiating lead times. We purchase raw Texas Supima Cotton with total freight visibility.",
    author: "Elena Vasquez",
    position: "Director of Production",
    company: "AmTex Eco-Spinners",
    location: "San Antonio, TX"
  },
  {
    quote: "Securing industrial biopolymers from Nebraska with full FDA certifications is a standard requirement for our consumer packaging division. Roots of America delivers both the scale and the regulatory confidence we demand.",
    author: "Dr. Aris Vance",
    position: "Chief Sustainability Officer",
    company: "BioPack Solutions Inc.",
    location: "Lincoln, NE"
  }
];
