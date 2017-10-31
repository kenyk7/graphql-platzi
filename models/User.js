const { Model } = require('objection')
const path = require('path')

class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Post'),
        join: {
          from: 'users.id',
          to: 'posts.authorId'
        }
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Comment'),
        join: {
          from: 'users.id',
          to: 'comments.authorId'
        }
      }
    }
  }
}

module.exports = User
