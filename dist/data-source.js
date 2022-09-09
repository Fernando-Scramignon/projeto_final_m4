"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE === "production" ? { rejectUnauthorized: false } : false,
    entities: process.env.NODE === "production"
        ? ["dist/src/entities/**/*.{ts,js}"]
        : ["src/entities/**/*.{ts,js}"],
    migrations: process.env.NODE === "production"
        ? ["dist/src/entities/**/*.{ts,js}"]
        : ["src/entities/**/*.{ts,js}"],
    synchronize: false,
    logging: true,
});
exports.AppDataSource = AppDataSource;
