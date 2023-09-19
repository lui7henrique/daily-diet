import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('address').notNullable()
    table.float('weight').notNullable()
    table.float('height').notNullable()
    table.uuid('session_id').notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
