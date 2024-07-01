import express from 'express';
import { pool } from './config/database'
import bodyParser from 'body-parser'
import { createTables } from './model/tablesConfigurations';


const app = express();

app.use(bodyParser.json());
const port = 4000;

const startServer = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('✅ Connection has been established successfully.');
        await createTables();
        console.log('✅ All tables created and server ready');
        app.listen(port, () => {
            console.log(`✅ Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('❌ Unable to connect to the database:', err);
        process.exit(1);
    }
};

startServer();


// const testDatabaseConnection = async () => {
//     try {
//         await pool.query('SELECT NOW()');
//         console.log('✅ Connection has been established successfully.');
//     } catch (err) {
//         console.error('❌ Unable to connect to the database:', err);
//         process.exit(1);
//     }
// }


// testDatabaseConnection().then(() => {
//     app.listen(port, () => {
//         console.log(`Server running at http://localhost:${port}`);
//     });
// });


