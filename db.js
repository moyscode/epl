import dotenv from "dotenv";
dotenv.config({ silent: true });

const devConfig = `${process.env.PG_USER}://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const prodConfig = process.env.DATABASE_URL;

export const dbConnection =
  process.env.NODE_ENV === "production" ? prodConfig : devConfig;
