const { Pool } = require("pg")

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Node_Pg",
    password: "aasif@123",
    port: 5432,
})

