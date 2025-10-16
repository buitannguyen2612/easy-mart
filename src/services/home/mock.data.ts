import type { Brand, Category, Product } from "@/schema-model/models";

// ===================== BRANDS =====================
export const mockBrands: Brand[] = [
  {
    id: "brand-1",
    name: "Nike",
    slug: "nike",
    description:
      "https://medium.com/design-bootcamp/list-of-best-ecommerce-website-templates-to-use-in-2025-3558e4621d97",
    logo_url: "https://example.com/nike-logo.png",
    is_active: true,
    created_at: "2025-09-20T10:00:00Z",
    product_list: [],
  },
  {
    id: "brand-2",
    name: "Adidas",
    slug: "adidas",
    description: "Performance shoes and sports apparel.",
    logo_url: "https://example.com/adidas-logo.png",
    is_active: true,
    created_at: "2025-09-21T10:00:00Z",
    product_list: [],
  },
];

// ===================== CATEGORIES =====================
export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Running Shoes",
    slug: "running-shoes",
    description: "Shoes designed for running and training.",
    parent_id: null,
    display_order: 1,
    is_active: true,
    created_at: "2025-09-19T09:00:00Z",
    product_list: [],
  },
  {
    id: "cat-2",
    name: "Lifestyle Shoes",
    slug: "lifestyle-shoes",
    description: "Everyday sneakers for comfort and style.",
    parent_id: null,
    display_order: 2,
    is_active: true,
    created_at: "2025-09-19T09:30:00Z",
    product_list: [],
  },
];

// ===================== PRODUCTS =====================
export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Nike Air Zoom Pegasus 39",
    description: "Lightweight running shoes with responsive cushioning.",
    base_price: 120.0,
    sku: "SKU-NIKE-PEG39",
    stock_quantity: 50,
    category_id: "cat-1",
    brand_id: "brand-1",
    attributes: {
      color: "Black/White",
      sizes: ["38", "39", "40", "41", "42"],
      material: "Mesh",
    },
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9f34c?q=80&w=1200",
      "https://images.unsplash.com/photo-1519744346364-283efadd62c4?q=80&w=1200",
      "https://images.unsplash.com/photo-1600180758890-6d0b5a35a08c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-28T12:00:00Z",
    updated_at: "2025-10-02T15:30:00Z",
    created_by: "user-1",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-2",
    name: "Adidas Ultraboost 22",
    description: "High-performance running shoes with superior energy return.",
    base_price: 180.0,
    sku: "SKU-ADI-UB22",
    stock_quantity: 30,
    category_id: "cat-1",
    brand_id: "brand-2",
    attributes: {
      color: "White/Blue",
      sizes: ["39", "40", "41", "42", "43"],
      material: "Primeknit",
    },
    images: [
      "https://images.unsplash.com/photo-1616469829935-c86187b7007b?q=80&w=1200",
      "https://images.unsplash.com/photo-1606813902774-1b2b1a3e39b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-28T15:00:00Z",
    updated_at: "2025-10-02T15:30:00Z",
    created_by: "user-2",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-3",
    name: "Nike React Infinity Run Flyknit 3",
    description: "Soft, stable running shoes designed to reduce injury.",
    base_price: 160.0,
    sku: "SKU-NIKE-REACT3",
    stock_quantity: 25,
    category_id: "cat-1",
    brand_id: "brand-1",
    attributes: {
      color: "Grey/Orange",
      sizes: ["38", "39", "40", "41", "42", "43"],
      material: "Flyknit",
    },
    images: [
      "https://images.unsplash.com/photo-1600180758890-6d0b5a35a08c?q=80&w=1200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200",
    ],
    thumbnail_url:
      "https://plus.unsplash.com/premium_photo-1681396658834-b56190480934?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-29T10:00:00Z",
    updated_at: "2025-10-03T12:30:00Z",
    created_by: "user-3",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-4",
    name: "Adidas Adizero Boston 11",
    description:
      "Fast, lightweight trainers built for long-distance performance.",
    base_price: 150.0,
    sku: "SKU-ADI-BOS11",
    stock_quantity: 40,
    category_id: "cat-1",
    brand_id: "brand-2",
    attributes: {
      color: "Lime/Black",
      sizes: ["39", "40", "41", "42", "43"],
      material: "Mesh",
    },
    images: [
      "https://images.unsplash.com/photo-1606813902774-1b2b1a3e39b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9f34c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-30T09:00:00Z",
    updated_at: "2025-10-04T11:00:00Z",
    created_by: "user-4",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-5",
    name: "Adidas Adizero Boston 11",
    description:
      "Fast, lightweight trainers built for long-distance performance.",
    base_price: 150.0,
    sku: "SKU-ADI-BOS11",
    stock_quantity: 40,
    category_id: "cat-1",
    brand_id: "brand-2",
    attributes: {
      color: "Lime/Black",
      sizes: ["39", "40", "41", "42", "43"],
      material: "Mesh",
    },
    images: [
      "https://images.unsplash.com/photo-1606813902774-1b2b1a3e39b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9f34c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-30T09:00:00Z",
    updated_at: "2025-10-04T11:00:00Z",
    created_by: "user-4",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-6",
    name: "Adidas Adizero Boston 11",
    description:
      "Fast, lightweight trainers built for long-distance performance.",
    base_price: 150.0,
    sku: "SKU-ADI-BOS11",
    stock_quantity: 40,
    category_id: "cat-1",
    brand_id: "brand-2",
    attributes: {
      color: "Lime/Black",
      sizes: ["39", "40", "41", "42", "43"],
      material: "Mesh",
    },
    images: [
      "https://images.unsplash.com/photo-1606813902774-1b2b1a3e39b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9f34c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-30T09:00:00Z",
    updated_at: "2025-10-04T11:00:00Z",
    created_by: "user-4",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-7",
    name: "Adidas Adizero Boston 11",
    description:
      "Fast, lightweight trainers built for long-distance performance.",
    base_price: 150.0,
    sku: "SKU-ADI-BOS11",
    stock_quantity: 40,
    category_id: "cat-1",
    brand_id: "brand-2",
    attributes: {
      color: "Lime/Black",
      sizes: ["39", "40", "41", "42", "43"],
      material: "Mesh",
    },
    images: [
      "https://images.unsplash.com/photo-1606813902774-1b2b1a3e39b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9f34c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://plus.unsplash.com/premium_photo-1683531060718-4dd0a8f2a692?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-30T09:00:00Z",
    updated_at: "2025-10-04T11:00:00Z",
    created_by: "user-4",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
  {
    id: "prod-8",
    name: "Adidas Adizero Boston 11",
    description:
      "Fast, lightweight trainers built for long-distance performance.",
    base_price: 150.0,
    sku: "SKU-ADI-BOS11",
    stock_quantity: 40,
    category_id: "cat-1",
    brand_id: "brand-2",
    attributes: {
      color: "Lime/Black",
      sizes: ["39", "40", "41", "42", "43"],
      material: "Mesh",
    },
    images: [
      "https://images.unsplash.com/photo-1606813902774-1b2b1a3e39b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9f34c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://plus.unsplash.com/premium_photo-1681233751666-612c7bc77485?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_active: true,
    created_at: "2025-09-30T09:00:00Z",
    updated_at: "2025-10-04T11:00:00Z",
    created_by: "user-4",
    InventoryLog_list: [],
    ProductView_list: [],
    ProductReview_list: [],
  },
];

mockBrands[0].product_list.push(mockProducts[0]);
mockBrands[1].product_list.push(mockProducts[1]);
mockCategories[0].product_list.push(mockProducts[0], mockProducts[1]);
