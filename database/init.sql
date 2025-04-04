CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    carbon_footprint VARCHAR(50),
    is_sustainable BOOLEAN DEFAULT FALSE
);

CREATE TABLE alternatives (
    alternative_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(product_id),
    alternative_name VARCHAR(255) NOT NULL,
    description TEXT,
    carbon_savings VARCHAR(50)
);

INSERT INTO products (name, category, carbon_footprint, is_sustainable) VALUES
('Plastic Water Bottle', 'Beverages', 'High', FALSE),
('Fast Fashion T-Shirt', 'Clothing', 'Medium', FALSE),
('Reusable Steel Bottle', 'Beverages', 'Low', TRUE),
('Organic Cotton T-Shirt', 'Clothing', 'Low', TRUE);

INSERT INTO alternatives (product_id, alternative_name, description, carbon_savings) VALUES
(1, 'Reusable Steel Bottle', 'Durable and eco-friendly', 'Saves 10 kg CO2/year'),
(2, 'Organic Cotton T-Shirt', 'Made from sustainable materials', 'Saves 3 kg CO2/year');