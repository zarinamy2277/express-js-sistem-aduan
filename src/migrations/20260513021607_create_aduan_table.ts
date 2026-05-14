import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('aduan', (table) => {
    table.string('id', 36).primary().notNullable();
    table.string('nama_pengadu', 255).notNullable();
    table.string('catatan', 300).notNullable();
    table.string('kategori_aduan', 300).notNullable();
    table.string('emel', 50).notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('aduan');
}
