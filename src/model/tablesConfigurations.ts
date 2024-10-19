import { createOrdersTable } from "./order";
import { createReviewsTable } from "./review";
import { createUsersTable } from "./user";
import { createVehiclesTable } from "./vehicle";

export const createTables = async () => {
    try {
        await createVehiclesTable();
        await createUsersTable();
        await createOrdersTable();
        await createReviewsTable();
        console.log('✅ All tables created successfully');
    } catch (err) {
        console.error('❌ Error creating tables:', err);
    } 
};