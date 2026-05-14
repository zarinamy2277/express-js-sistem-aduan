import type { Knex } from 'knex';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      // host: process.env.DB_HOST || 'wrong_localhost',
      // port: Number(process.env.DB_PORT) || 3308,
      // user: process.env.DB_USER || 'wrong_user',
      // password: process.env.DB_PASSWORD || 'wrong_password',
      // database: process.env.DB_NAME || 'wrong_db',
      host: 'localhost',
      port: 3306,
      user:'aduan',
      password: 'password',
      database: 'aduanbomba',
    },
    migrations: {
      extension: 'ts', // Forces knex to look for .ts files
      directory: './migrations',
    },
  },
};

export default config;
