-- Insert sample products
INSERT INTO products (name, description, price, category, stock_quantity, image_url) VALUES
('Handwoven Macrame Wall Hanging', 'Beautiful handwoven macrame wall hanging crafted with natural cotton cord featuring an intricate geometric pattern.', 45.99, 'home-decor', 15, '/placeholder.svg'),
('Ceramic Coffee Mug Set', 'Set of 2 handcrafted ceramic coffee mugs with unique glazing patterns. Perfect for your morning coffee ritual.', 32.50, 'home-decor', 8, '/placeholder.svg'),
('Leather Crossbody Bag', 'Genuine leather crossbody bag handcrafted by skilled artisans. Features multiple compartments and adjustable strap.', 78.00, 'bags', 5, '/placeholder.svg'),
('Silver Wire Wrapped Earrings', 'Elegant silver wire wrapped earrings with natural gemstone accents. Lightweight and comfortable for daily wear.', 24.99, 'jewelry', 12, '/placeholder.svg'),
('Wooden Serving Tray', 'Handcrafted wooden serving tray made from sustainable bamboo. Perfect for entertaining guests or daily use.', 55.00, 'home-decor', 6, '/placeholder.svg'),
('Beaded Bracelet Set', 'Set of 3 handmade beaded bracelets with natural stones and crystals. Each piece is unique and one-of-a-kind.', 18.50, 'jewelry', 20, '/placeholder.svg');

-- Insert sample customers
INSERT INTO customers (first_name, last_name, email, phone, address, city, state, zip_code) VALUES
('John', 'Smith', 'john.smith@example.com', '(555) 123-4567', '123 Main St', 'Anytown', 'CA', '12345'),
('Sarah', 'Johnson', 'sarah.johnson@example.com', '(555) 234-5678', '456 Oak Ave', 'Springfield', 'NY', '67890'),
('Mike', 'Davis', 'mike.davis@example.com', '(555) 345-6789', '789 Pine Rd', 'Riverside', 'TX', '54321');

-- Insert sample orders
INSERT INTO orders (customer_id, total_amount, status, shipping_address) VALUES
(1, 124.48, 'pending', '123 Main St, Anytown, CA 12345'),
(2, 78.00, 'shipped', '456 Oak Ave, Springfield, NY 67890'),
(3, 45.99, 'delivered', '789 Pine Rd, Riverside, TX 54321');

-- Insert sample order items
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 2, 45.99),
(1, 2, 1, 32.50),
(2, 3, 1, 78.00),
(3, 1, 1, 45.99);
