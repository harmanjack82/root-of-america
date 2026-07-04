export interface Product {
  id: string;
  name: string;
  category: string;
  grade: string;
  moq: number; // Minimum Order Quantity
  unit: string;
  pricePerUnit: number; // Wholesale unit price
  origin: string; // US State of origin
  warehouse: string; // US Fulfillment center
  purity: string;
  specs: string[];
  stock: string;
  image: string;
}

export interface RfqItem {
  product: Product;
  quantity: number;
}

export interface RfqFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  shippingState: string;
  logisticsSpeed: 'standard' | 'expedited' | 'intermodal';
  notes: string;
}

export interface CalculationResult {
  basePrice: number;
  discountPercentage: number;
  discountedPrice: number;
  freightCost: number;
  totalCost: number;
  deliveryDays: number;
  fulfillmentHub: string;
}

export interface BuyerProfile {
  companyName: string;
  creditLimit: number;
  availableCredit: number;
  representative: string;
  repEmail: string;
}

export interface MockPurchaseOrder {
  id: string;
  date: string;
  items: { productName: string; quantity: number; totalCost: number }[];
  totalAmount: number;
  status: 'Processing' | 'In Transit' | 'Fulfillment Hub' | 'Delivered';
  trackingNumber: string;
}

export interface GlobalTradeRequirement {
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

