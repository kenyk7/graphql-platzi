const { Model } = require('objection')
const path = require('path')

class Post extends Model {
  static get tableName () {
    return 'posts'
  }

  static get relationMappings () {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/User'),
        join: {
          from: 'posts.authorId',
          to: 'users.id'
        }
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Comment'),
        join: {
          from: 'posts.id',
          to: 'comments.postId'
        }
      }
    }
  }
}

module.exports = Post

