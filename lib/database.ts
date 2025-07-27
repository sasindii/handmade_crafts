// Mock database using JSON data with CRUD operations
export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  stock_quantity: number
  image_url: string
  status: "active" | "inactive"
  rating: number
  created_at: string
  updated_at: string
}

export interface Customer {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip_code: string
  country: string
  created_at: string
}

export interface Order {
  id: number
  customer_id: number
  total_amount: number
  status: "pending" | "shipped" | "delivered" | "cancelled"
  shipping_address: string
  order_notes?: string
  created_at: string
  updated_at: string
  items: OrderItem[]
  customer?: Customer
}

export interface OrderItem {
  id: number
  order_id: number
  product_id: number
  quantity: number
  price: number
  product?: Product
}

export interface CartItem {
  id: number
  session_id: string
  product_id: number
  quantity: number
  created_at: string
  product?: Product
}

// Mock data storage with updated image paths
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Handwoven Macrame Wall Hanging",
    description:
      "Beautiful handwoven macrame wall hanging crafted with natural cotton cord featuring an intricate geometric pattern. Perfect for adding a bohemian touch to any room.",
    price: 45.99,
    category: "home-decor",
    stock_quantity: 15,
    image_url: "/images/macrame-wall-hanging.png",
    status: "active",
    rating: 4.8,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug Set",
    description:
      "Set of 2 handcrafted ceramic coffee mugs with unique glazing patterns. Perfect for your morning coffee ritual.",
    price: 32.5,
    category: "home-decor",
    stock_quantity: 8,
    image_url: "/images/ceramic-mug-set.png",
    status: "active",
    rating: 4.9,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    description:
      "Genuine leather crossbody bag handcrafted by skilled artisans. Features multiple compartments and adjustable strap.",
    price: 78.0,
    category: "bags",
    stock_quantity: 5,
    image_url: "/images/leather-crossbody-bag.png",
    status: "active",
    rating: 4.7,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 4,
    name: "Silver Wire Wrapped Earrings",
    description:
      "Elegant silver wire wrapped earrings with natural gemstone accents. Lightweight and comfortable for daily wear.",
    price: 24.99,
    category: "jewelry",
    stock_quantity: 12,
    image_url: "/images/silver-wire-earrings.png",
    status: "active",
    rating: 4.6,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 5,
    name: "Wooden Serving Tray",
    description:
      "Handcrafted wooden serving tray made from sustainable bamboo. Perfect for entertaining guests or daily use.",
    price: 55.0,
    category: "home-decor",
    stock_quantity: 6,
    image_url: "/images/wooden-serving-tray.png",
    status: "active",
    rating: 4.8,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 6,
    name: "Beaded Bracelet Set",
    description:
      "Set of 3 handmade beaded bracelets with natural stones and crystals. Each piece is unique and one-of-a-kind.",
    price: 18.5,
    category: "jewelry",
    stock_quantity: 20,
    image_url: "/images/beaded-bracelet-set.png",
    status: "active",
    rating: 4.5,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
]

const mockCustomers: Customer[] = [
  {
    id: 1,
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip_code: "12345",
    country: "US",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 2,
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 234-5678",
    address: "456 Oak Ave",
    city: "Springfield",
    state: "NY",
    zip_code: "67890",
    country: "US",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: 3,
    first_name: "Mike",
    last_name: "Davis",
    email: "mike.davis@example.com",
    phone: "(555) 345-6789",
    address: "789 Pine Rd",
    city: "Riverside",
    state: "TX",
    zip_code: "54321",
    country: "US",
    created_at: "2024-01-01T00:00:00Z",
  },
]

const mockOrders: Order[] = [
  {
    id: 1001,
    customer_id: 1,
    total_amount: 124.48,
    status: "pending",
    shipping_address: "123 Main St, Anytown, CA 12345",
    order_notes: "Please handle with care",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    items: [
      { id: 1, order_id: 1001, product_id: 1, quantity: 2, price: 45.99 },
      { id: 2, order_id: 1001, product_id: 2, quantity: 1, price: 32.5 },
    ],
  },
  {
    id: 1002,
    customer_id: 2,
    total_amount: 78.0,
    status: "shipped",
    shipping_address: "456 Oak Ave, Springfield, NY 67890",
    created_at: "2024-01-14T14:20:00Z",
    updated_at: "2024-01-16T09:15:00Z",
    items: [{ id: 3, order_id: 1002, product_id: 3, quantity: 1, price: 78.0 }],
  },
  {
    id: 1003,
    customer_id: 3,
    total_amount: 45.99,
    status: "delivered",
    shipping_address: "789 Pine Rd, Riverside, TX 54321",
    created_at: "2024-01-13T16:45:00Z",
    updated_at: "2024-01-18T11:30:00Z",
    items: [{ id: 4, order_id: 1003, product_id: 1, quantity: 1, price: 45.99 }],
  },
]

let mockCart: CartItem[] = []

// Database operations
export class MockDatabase {
  // Product operations
  static async getAllProducts(): Promise<Product[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return [...mockProducts]
  }

  static async getProductById(id: number): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return mockProducts.find((p) => p.id === id) || null
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockProducts.filter((p) => p.category === category)
  }

  static async searchProducts(query: string): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const lowercaseQuery = query.toLowerCase()
    return mockProducts.filter(
      (p) => p.name.toLowerCase().includes(lowercaseQuery) || p.description.toLowerCase().includes(lowercaseQuery),
    )
  }

  static async createProduct(productData: Omit<Product, "id" | "created_at" | "updated_at">): Promise<Product> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const newProduct: Product = {
      ...productData,
      id: Math.max(...mockProducts.map((p) => p.id)) + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    mockProducts.push(newProduct)
    return newProduct
  }

  static async updateProduct(id: number, updates: Partial<Product>): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const index = mockProducts.findIndex((p) => p.id === id)
    if (index === -1) return null

    mockProducts[index] = {
      ...mockProducts[index],
      ...updates,
      updated_at: new Date().toISOString(),
    }
    return mockProducts[index]
  }

  static async deleteProduct(id: number): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const index = mockProducts.findIndex((p) => p.id === id)
    if (index === -1) return false

    mockProducts.splice(index, 1)
    return true
  }

  // Customer operations
  static async createCustomer(customerData: Omit<Customer, "id" | "created_at">): Promise<Customer> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const newCustomer: Customer = {
      ...customerData,
      id: Math.max(...mockCustomers.map((c) => c.id)) + 1,
      created_at: new Date().toISOString(),
    }
    mockCustomers.push(newCustomer)
    return newCustomer
  }

  static async getCustomerByEmail(email: string): Promise<Customer | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockCustomers.find((c) => c.email === email) || null
  }

  // Order operations
  static async getAllOrders(): Promise<Order[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockOrders.map((order) => ({
      ...order,
      customer: mockCustomers.find((c) => c.id === order.customer_id),
      items: order.items.map((item) => ({
        ...item,
        product: mockProducts.find((p) => p.id === item.product_id),
      })),
    }))
  }

  static async getOrderById(id: number): Promise<Order | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const order = mockOrders.find((o) => o.id === id)
    if (!order) return null

    return {
      ...order,
      customer: mockCustomers.find((c) => c.id === order.customer_id),
      items: order.items.map((item) => ({
        ...item,
        product: mockProducts.find((p) => p.id === item.product_id),
      })),
    }
  }

  static async createOrder(orderData: {
    customer_id: number
    total_amount: number
    shipping_address: string
    order_notes?: string
    items: { product_id: number; quantity: number; price: number }[]
  }): Promise<Order> {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const newOrderId = Math.max(...mockOrders.map((o) => o.id)) + 1
    const orderItems: OrderItem[] = orderData.items.map((item, index) => ({
      id: index + 1,
      order_id: newOrderId,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }))

    const newOrder: Order = {
      id: newOrderId,
      customer_id: orderData.customer_id,
      total_amount: orderData.total_amount,
      status: "pending",
      shipping_address: orderData.shipping_address,
      order_notes: orderData.order_notes,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      items: orderItems,
    }

    mockOrders.push(newOrder)

    // Update product stock
    for (const item of orderData.items) {
      const product = mockProducts.find((p) => p.id === item.product_id)
      if (product) {
        product.stock_quantity = Math.max(0, product.stock_quantity - item.quantity)
        product.updated_at = new Date().toISOString()
      }
    }

    return newOrder
  }

  static async updateOrderStatus(id: number, status: Order["status"]): Promise<Order | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const order = mockOrders.find((o) => o.id === id)
    if (!order) return null

    order.status = status
    order.updated_at = new Date().toISOString()
    return order
  }

  // Cart operations
  static async getCartItems(sessionId: string): Promise<CartItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockCart
      .filter((item) => item.session_id === sessionId)
      .map((item) => ({
        ...item,
        product: mockProducts.find((p) => p.id === item.product_id),
      }))
  }

  static async addToCart(sessionId: string, productId: number, quantity: number): Promise<CartItem> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const existingItem = mockCart.find((item) => item.session_id === sessionId && item.product_id === productId)

    if (existingItem) {
      existingItem.quantity += quantity
      return {
        ...existingItem,
        product: mockProducts.find((p) => p.id === productId),
      }
    }

    const newCartItem: CartItem = {
      id: mockCart.length + 1,
      session_id: sessionId,
      product_id: productId,
      quantity,
      created_at: new Date().toISOString(),
    }

    mockCart.push(newCartItem)
    return {
      ...newCartItem,
      product: mockProducts.find((p) => p.id === productId),
    }
  }

  static async updateCartItem(sessionId: string, productId: number, quantity: number): Promise<CartItem | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const item = mockCart.find((item) => item.session_id === sessionId && item.product_id === productId)

    if (!item) return null

    if (quantity <= 0) {
      const index = mockCart.indexOf(item)
      mockCart.splice(index, 1)
      return null
    }

    item.quantity = quantity
    return {
      ...item,
      product: mockProducts.find((p) => p.id === productId),
    }
  }

  static async removeFromCart(sessionId: string, productId: number): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    const index = mockCart.findIndex((item) => item.session_id === sessionId && item.product_id === productId)

    if (index === -1) return false

    mockCart.splice(index, 1)
    return true
  }

  static async clearCart(sessionId: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    mockCart = mockCart.filter((item) => item.session_id !== sessionId)
  }

  // Analytics
  static async getAnalytics() {
    await new Promise((resolve) => setTimeout(resolve, 100))

    const totalProducts = mockProducts.length
    const totalOrders = mockOrders.length
    const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total_amount, 0)
    const pendingOrders = mockOrders.filter((order) => order.status === "pending").length
    const lowStockProducts = mockProducts.filter((product) => product.stock_quantity < 5).length

    return {
      totalProducts,
      totalOrders,
      totalRevenue,
      pendingOrders,
      lowStockProducts,
      recentOrders: mockOrders.slice(-5).reverse(),
    }
  }
}
