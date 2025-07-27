-- Show the instructor this SQL structure to explain the database design

-- 1. PRODUCTS TABLE (with stock tracking)
SELECT id, name, stock_quantity, price FROM products;
-- Example output:
-- 1 | Macrame Wall Hanging | 15 | 45.99
-- 2 | Ceramic Mug Set      | 8  | 32.50

-- 2. ORDERS TABLE (with status tracking)  
SELECT id, customer_id, total_amount, status, created_at FROM orders;
-- Example output:
-- 1001 | 1 | 124.48 | pending | 2024-01-15T10:30:00Z

-- 3. ORDER_ITEMS TABLE (links orders to products)
SELECT order_id, product_id, quantity, price FROM order_items;
-- Example output:
-- 1001 | 1 | 2 | 45.99  (2 Macrame items)
-- 1001 | 2 | 1 | 32.50  (1 Mug set)

-- 4. STOCK DEDUCTION LOGIC (happens automatically)
-- When order created: UPDATE products SET stock_quantity = stock_quantity - ordered_quantity
-- Result: Macrame stock: 15 → 13, Mug stock: 8 → 7
