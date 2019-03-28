-- SELDROP DATABASE IF EXISTS reviews_module;

-- CREATE DATABASE reviews_module;

\connect reviews_module;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    thumbnail_url VARCHAR(255)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    rating INTEGER CHECK (rating > 0 AND rating <= 5),
    title VARCHAR(100),
    text_body VARCHAR(500),
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    product_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);