"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the shape of our inventory data
export type InventoryItem = {
  id: string
  name: string
  category: "ingredient" | "product" | "packaging" | "other"
  quantity: number
  unit: string // e.g., "kg", "liters", "pcs"
  pricePerUnit: number
  status: "in-stock" | "low-stock" | "out-of-stock"
}

export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: "name",
    header: "Item Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "pricePerUnit",
    header: "Price per Unit",
    cell: info => `$${info.getValue()}`, // Format as currency
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
