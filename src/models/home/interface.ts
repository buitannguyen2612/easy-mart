// ===================== PRODUCTS =====================
export interface Product {
  id: string; // uuid
  name: string;
  description: string;
  base_price: number; // decimal
  sku: string; // unique
  stock_quantity: number;
  category_id: string; // FK
  brand_id: string; // FK
  attributes: Record<string, any>; // flexible json
  is_active: boolean;
  created_at: string; // timestamp
  updated_at: string; // timestamp
  created_by: string; // uuid (FK)
}

// ===================== INVENTORY_LOGS =====================
export interface InventoryLog {
  id: string; // uuid
  product_id: string; // FK
  variant_id?: string | null; // nullable
  transaction_type: "Purchase" | "Sale" | "Return" | "Adjustment";
  quantity_change: number;
  quantity_after: number;
  reference_id: string; // Order ID, Purchase ID, etc
  reference_type: string;
  notes?: string;
  created_by: string; // FK
  created_at: string; // timestamp
}

// ===================== PRODUCT_VIEWS =====================
export interface ProductView {
  id: string; // uuid
  product_id: string; // FK
  user_id?: string | null; // nullable
  session_id: string;
  ip_address: string;
  user_agent: string;
  referrer?: string;
  viewed_at: string; // timestamp
}

// ===================== BRANDS =====================
export interface Brand {
  id: string; // uuid
  name: string;
  slug: string; // unique
  description?: string;
  logo_url: string;
  is_active: boolean;
  created_at: string;
}

// ===================== CATEGORIES =====================
export interface Category {
  id: string; // uuid
  name: string;
  slug: string; // unique
  description?: string;
  parent_id?: string | null; // self reference
  display_order: number;
  is_active: boolean;
  created_at: string;
}

// ===================== PRODUCT_REVIEWS =====================
export interface ProductReview {
  id: string; // uuid
  product_id: string; // FK
  user_id: string; // FK
  order_id: string; // FK
  rating: number; // 1–5
  title: string;
  review_text: string;
  images?: Record<string, any>; // jsonb
  helpful_count: number;
  is_verified_purchase: boolean;
  status: "Pending" | "Approved" | "Rejected";
  reviewed_at: string; // timestamp
  created_at: string; // timestamp
}
