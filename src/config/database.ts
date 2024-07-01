import { Pool } from 'pg';

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
