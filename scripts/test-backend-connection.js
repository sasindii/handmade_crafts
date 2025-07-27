// Test script to check backend connectivity
async function testBackend() {
  console.log("🧪 Testing Backend Connection...\n")

  // Test 1: Basic API test
  try {
    console.log("1. Testing basic API endpoint...")
    const testResponse = await fetch("/api/test")
    const testData = await testResponse.json()
    console.log("✅ Basic API:", testData.message)
  } catch (error) {
    console.log("❌ Basic API failed:", error.message)
  }

  // Test 2: Products API
  try {
    console.log("\n2. Testing products API...")
    const productsResponse = await fetch("/api/products")
    const productsData = await productsResponse.json()
    console.log("✅ Products API:", `${productsData.length} products loaded`)
  } catch (error) {
    console.log("❌ Products API failed:", error.message)
  }

  // Test 3: Orders API
  try {
    console.log("\n3. Testing orders API...")
    const ordersResponse = await fetch("/api/orders")
    const ordersData = await ordersResponse.json()
    console.log("✅ Orders API:", `${ordersData.length} orders loaded`)
  } catch (error) {
    console.log("❌ Orders API failed:", error.message)
  }

  console.log("\n🏁 Backend test complete!")
}

// Run the test
testBackend()
