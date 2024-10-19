import { Pool } from 'pg';
import { Client } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Node_Pg',
    password: 'aasif@123',
    port: 5432,
});

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Example of handling pool closing on application shutdown
// Uncomment this block if you want to handle graceful shutdowns
// process.on('SIGINT', () => {
//     pool.end(() => {
//         console.log('Pool has ended');
//         process.exit(0);
//     });
// });



export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Node_Pg',
    password: 'aasif@123',
    port: 5432,
});

export const connectToDatabase = async () => {
    try {
        await client.connect();
        const result = await client.query('SELECT NOW()');
        console.log('✅ Connected to PostgreSQL successfully', result.rows[0]);
        // console.log('✅ Connected to PostgreSQL successfully');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        process.exit(1);
    }
}; 
