import { NextResponse } from "next/server"
import { MockDatabase } from "@/lib/database"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    let products

    if (search) {
      products = await MockDatabase.searchProducts(search)
    } else if (category && category !== "all") {
      products = await MockDatabase.getProductsByCategory(category)
    } else {
      products = await MockDatabase.getAllProducts()
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const productData = await request.json()
    const newProduct = await MockDatabase.createProduct(productData)
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
