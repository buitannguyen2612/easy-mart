// =========================================================
// 🧱 ENUMS — shared constants for domain logic
// =========================================================

// Transaction types for Inventory Logs
export enum ENUM_TRANSACTION_TYPE {
  Purchase = "Purchase",
  Sale = "Sale",
  Return = "Return",
  Adjustment = "Adjustment",
}

// Review moderation status
export enum ENUM_REVIEW_STATUS {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
}
