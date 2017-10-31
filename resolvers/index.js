const User = require('../models/User')
const Tag = require('../models/Tag')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

module.exports = {
  Query: {
    // users
    users: () => User.query().eager('[posts, comments]'),
    user: (rootValue, { id }) => User.query().eager('[posts, comments]').findById(id),
    // posts
    posts: () => Post.query().eager('[author, comments]'),
    post: (rootValue, { id }) => Post.query().eager('[author, comments]').findById(id),
    // comments
    comments: () => Comment.query().eager('[author, post]'),
    comment: (rootValue, { id }) => Comment.query().eager('[author, post]').findById(id)
  },
  Mutation: {
    // users
    userAdd: (_, { user }) => {
      return User.query().insert(user)
    },
    userDelete: (_, { id }) => {
      return User.query().findById(id).then(user => {
        return User.query().deleteById(id).then(() => user)
      })
    },
    userEdit: (_, { id, user }) => {
      return User.query().patchAndFetchById(id, user)
    },
    // posts
    postAdd: (_, { post }) => {
      return Post.query().insert(post)
    },
    postDelete: (_, { id }) => {
      return Post.query().findById(id).then(post => {
        return Post.query().deleteById(id).then(() => post)
      })
    },
    postEdit: (_, { id, post }) => {
      return Post.query().patchAndFetchById(id, post)
    },
    // comments
    commentAdd: (_, { comment }) => {
      return Comment.query().insert(comment)
    },
    commentDelete: (_, { id }) => {
      return Comment.query().findById(id).then(comment => {
        return Comment.query().deleteById(id).then(() => comment)
      })
    },
    commentEdit: (_, { id, comment }) => {
      return Comment.query().patchAndFetchById(id, comment)
    }
  }
}
