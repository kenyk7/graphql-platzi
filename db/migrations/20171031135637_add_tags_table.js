
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('tags')
  ])
};
