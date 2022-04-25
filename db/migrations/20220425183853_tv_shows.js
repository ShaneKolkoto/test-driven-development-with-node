/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('shows', function(table){
      table.increments();
      table.string('name').notNullable().unique();
      table.string('channel').notNullable();
      table.string('genre').notNullable();
      table.integer('rating').notNullable();
      table.boolean('explicit').notNullable();
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shows');
  };
