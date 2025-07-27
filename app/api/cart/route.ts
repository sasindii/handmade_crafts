import { NextResponse } from "next/server"
import { MockDatabase } from "@/lib/database"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId") || "default-session"

    const cartItems = await MockDatabase.getCartItems(sessionId)
    return NextResponse.json(cartItems)
  } catch (error) {
    console.error("Error fetching cart:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { sessionId = "default-session", productId, quantity } = await request.json()

    const cartItem = await MockDatabase.addToCart(sessionId, productId, quantity)
    return NextResponse.json(cartItem, { status: 201 })
  } catch (error) {
    console.error("Error adding to cart:", error)
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { sessionId = "default-session", productId, quantity } = await request.json()

    const cartItem = await MockDatabase.updateCartItem(sessionId, productId, quantity)
    return NextResponse.json(cartItem)
  } catch (error) {
    console.error("Error updating cart:", error)
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId") || "default-session"
    const productId = searchParams.get("productId")

    if (productId) {
      await MockDatabase.removeFromCart(sessionId, Number.parseInt(productId))
    } else {
      await MockDatabase.clearCart(sessionId)
    }

    return NextResponse.json({ message: "Item removed from cart" })
  } catch (error) {
    console.error("Error removing from cart:", error)
    return NextResponse.json({ error: "Failed to remove from cart" }, { status: 500 })
  }
}
