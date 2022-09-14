import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl:
    process.env.NODE === "production" ? { rejectUnauthorized: false } : false,
  entities:
    process.env.NODE === "production"
      ? ["src/entities/**/*.{ts,js}"]
      : ["src/entities/**/*.{ts,js}"],
  migrations:
    process.env.NODE === "production"
      ? ["src/migrations/**/*.{ts,js}"]
      : ["src/migrations/**/*.{ts,js}"],
  synchronize: false,
  logging: true,
});

export { AppDataSource };
