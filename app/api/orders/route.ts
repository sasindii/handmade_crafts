import { NextResponse } from "next/server"
import { MockDatabase } from "@/lib/database"

export async function GET() {
  try {
    const orders = await MockDatabase.getAllOrders()
    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const orderData = await request.json()

    // Create or find customer
    let customer = await MockDatabase.getCustomerByEmail(orderData.customer.email)
    if (!customer) {
      customer = await MockDatabase.createCustomer(orderData.customer)
    }

    // Create order
    const newOrder = await MockDatabase.createOrder({
      customer_id: customer.id,
      total_amount: orderData.total_amount,
      shipping_address: orderData.shipping_address,
      order_notes: orderData.order_notes,
      items: orderData.items,
    })

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
