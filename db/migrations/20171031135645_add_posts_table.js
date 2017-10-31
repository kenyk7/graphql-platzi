
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('posts', (table) => {
      table.increments('id').primary().unsigned()
      table.string('title')
      table.string('content')
      table.integer('authorId').unsigned()
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('posts')
  ])
};
