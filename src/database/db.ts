import knex from 'knex';
import config from '../knexfile';

// 1. Determine your environment
const environment = process.env.NODE_ENV || 'development';

// 2. Access the specific config
const dbConfig = config[environment];

// 3. Check if it exists to satisfy TypeScript
if (!dbConfig) {
  throw new Error(
    `Config for environment "${environment}" not found in knexfile.ts`
  );
}

const db = knex(dbConfig);

export default db;
