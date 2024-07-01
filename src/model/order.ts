import { pool } from "../config/database";

export const createOrdersTable = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS orders (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL REFERENCES users(id),
          total_amount NUMERIC(10, 2) NOT NULL,
          order_date TIMESTAMP NOT NULL,
          status VARCHAR(50) NOT NULL DEFAULT 'pending',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(createTableQuery);
    console.log('✅ Table "orders" created successfully');
  }