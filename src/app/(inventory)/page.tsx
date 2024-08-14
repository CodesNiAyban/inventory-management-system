import { InventoryItem, columns } from "@/app/(inventory)/components/columns"
import { DataTable } from "@/app/(inventory)/components/data-table"

// Example data fetching function
async function getData(): Promise<InventoryItem[]> {
    return [
        {
            id: "728ed52f",
            name: "Beef Patty",
            category: "ingredient",
            quantity: 50,
            unit: "kg",
            pricePerUnit: 5.99,
            status: "in-stock",
        },
        {
            id: "982bgt9z",
            name: "Burger Bun",
            category: "product",
            quantity: 200,
            unit: "pcs",
            pricePerUnit: 0.5,
            status: "low-stock",
        },
        // Add more items as needed
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
