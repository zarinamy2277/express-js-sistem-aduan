import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('aduan', (table) => {
    /**
     * Menggunakan integer untuk status:
     * 1: Baru (Default)
     * 2: Proses
     * 3: Selesai
     */
    table.integer('status').unsigned().notNullable().defaultTo(1);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('aduan', (table) => {
    table.dropColumn('status');
  });
}
