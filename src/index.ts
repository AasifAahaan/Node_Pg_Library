import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controller/user';
import { createTables } from './model/tablesConfigurations';
import { client, connectToDatabase } from './config/database';

const app = express();
app.use(bodyParser.json());

const port = 4000;

app.post('/users', UserController.handleAddUserController);

// app.get('/', async (req, res) => {
//     try {
//         const result = await client.query('SELECT NOW()');
//         res.send(`PostgreSQL connected at ${result.rows[0].now}`);
//     } catch (err: any) {
//         console.error('Error executing query', err.stack);
//         res.status(500).send('Database query error');
//     }
// });


const testDatabaseConnection = async () => {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error('❌ Unable to connect to the database:', err);
        process.exit(1);
    }
}

const initializeApp = async () => {
    await createTables();
    await testDatabaseConnection();
    app.listen(port, () => {
        console.log(`🚀 Server is running on http://localhost:${port} 😊`);
    });

    // Graceful shutdown
    // const shutdown = () => {
    //     console.log('Shutting down gracefully...');
    //     server.close(async () => {
    //         console.log('Closed out remaining connections.');
    //         try {
    //             await pool.end();
    //             console.log('Database pool has ended.');
    //             process.exit(0);
    //         } catch (err) {
    //             console.error('Error during pool shutdown:', err);
    //             process.exit(1);
    //         }
    //     });
    // };

    // process.on('SIGTERM', shutdown);
    // process.on('SIGINT', shutdown);
};

initializeApp();