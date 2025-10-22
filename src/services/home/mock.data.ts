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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2020&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1598300054673-3b4d63df03a1?q=80&w=1200",
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1615873968403-89e7f9a7d23c?q=80&w=987&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1595526114035-0e92e6f1f759?q=80&w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1600585154205-189b857bff10?q=80&w=987&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1600607687632-6f25d0c2f9ff?q=80&w=1200",
      "https://images.unsplash.com/photo-1618221607926-19710187cb9c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1615873968403-89e7f9a7d23c?q=80&w=1925&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1595526114035-0e92e6f1f759?q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1925&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1600585154205-189b857bff10?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=987&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1598300054673-3b4d63df03a1?q=80&w=1200",
      "https://images.unsplash.com/photo-1618221607926-19710187cb9c?q=80&w=1200",
    ],
    thumbnail_url:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2071&auto=format&fit=crop",
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
