import { pool } from "../config/database";

export const createReviewsTable = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS reviews (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL REFERENCES users(id),
          vehicle_id INT NOT NULL REFERENCES vehicles(id),
          rating INT NOT NULL,
          comment TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(createTableQuery);
    console.log('✅ Table "reviews" created successfully');
}