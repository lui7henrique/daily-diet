import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('meals', function (table) {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.timestamp('date').notNullable()
    table.boolean('is_on_diet').defaultTo(false)
    table
      .uuid('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('meals')
}
