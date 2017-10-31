const { Model } = require('objection')
const path = require('path')

class Tag extends Model {
  static get tableName () {
    return 'tags'
  }

  static get relationMappings () {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Post'),
        join: {
          from: 'tags.id',
          to: 'posts.tags'
        }
      }
    }
  }
}

module.exports = Tag
