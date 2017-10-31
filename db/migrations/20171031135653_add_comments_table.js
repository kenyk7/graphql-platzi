
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('comments', (table) => {
      table.increments('id').primary().unsigned()
      table.string('text')
      table.integer('authorId').unsigned()
      table.integer('postId').unsigned()
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('comments')
  ])
};
