import { pool } from '../config/database';

export const createVehiclesTable = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS vehicles (
          id SERIAL PRIMARY KEY,
          city VARCHAR(255) NOT NULL,
          car_name VARCHAR(255) NOT NULL,
          brand_name VARCHAR(255) NOT NULL,
          seating_capacity VARCHAR(50) NOT NULL,
          vehicle_descriptions TEXT NOT NULL,
          vehicle_specifications JSONB NOT NULL,
          car_features JSONB NOT NULL,
          extra_service JSONB NOT NULL,
          vehicle_registration_number VARCHAR(255) NOT NULL UNIQUE,
          available BOOLEAN NOT NULL,
          booking_date TIMESTAMP NOT NULL,
          featured_image JSONB NOT NULL,
          image_gallery JSONB[] NOT NULL,
          customer_feedback TEXT NOT NULL,
          star_rating VARCHAR(50) NOT NULL,
          meta_title VARCHAR(255),
          meta_description TEXT,
          keywords TEXT,
          booking_options JSONB NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(createTableQuery);
    console.log('✅ Table "vehicles" created successfully');
  };