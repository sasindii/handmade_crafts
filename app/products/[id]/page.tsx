"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Heart, Star, ArrowLeft, Plus, Minus } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/products/${params.id}`)
        if (response.ok) {
          const productData = await response.json()
          // Add default values for missing properties
          const enhancedProduct = {
            ...productData,
            images: productData.image_url
              ? [productData.image_url, productData.image_url, productData.image_url]
              : ["/placeholder.svg?height=500&width=500&text=Product+Image"],
            reviewCount: 24,
            inStock: productData.stock_quantity > 0,
            stockCount: productData.stock_quantity || 0,
            features: [
              "Handcrafted by skilled artisans",
              "High-quality materials",
              "Unique design",
              "Perfect for gifting",
              "Sustainable production",
            ],
            materials: "Premium materials",
            careInstructions: "Handle with care. Clean gently when needed.",
            shippingInfo: "Ships within 2-3 business days. Free shipping on orders over $50.",
          }
          setProduct(enhancedProduct)
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    )
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Ceramic Coffee Mug Set",
      price: 32.5,
      image: "https://i.pinimg.com/736x/67/b2/be/67b2be59f056bfbbf08538c9221d8daf.jpg",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Wooden Serving Tray",
      price: 55.0,
      image: "https://i.pinimg.com/736x/20/ba/ce/20baceee6e57dd831891cb50ebc7d0bf.jpg",
      rating: 4.8,
    },
  ]

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-amber-600">
                CraftedWithLove
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-amber-600">
                Products
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-amber-600">
                Cart
              </Link>
              <Link href="/admin" className="text-gray-700 hover:text-amber-600">
                Admin
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-amber-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <Button variant="ghost" asChild className="mb-6">
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={
                  product.images && product.images[selectedImage]
                    ? product.images[selectedImage]
                    : "/placeholder.svg?height=500&width=500&text=Product+Image"
                }
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-amber-600" : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category.replace("-", " ").toUpperCase()}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 4.5) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewCount || 0} reviews)</span>
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-4">${product.price}</div>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    In Stock
                  </Badge>
                  <span className="text-sm text-gray-600">{product.stockCount} items available</span>
                </>
              ) : (
                <Badge variant="secondary">Out of Stock</Badge>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1 bg-amber-600 hover:bg-amber-700" disabled={!product.inStock}>
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Features</h3>
                      <ul className="space-y-2">
                        {product.features &&
                          product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-amber-600 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Materials:</span>
                          <span className="ml-2 text-gray-600">{product.materials}</span>
                        </div>
                        <div>
                          <span className="font-medium">Care Instructions:</span>
                          <span className="ml-2 text-gray-600">{product.careInstructions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Shipping Information</h3>
                  <p className="text-gray-600">{product.shippingInfo}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                  <p className="text-gray-600">Reviews feature coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-amber-600">${relatedProduct.price}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/products/${relatedProduct.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
