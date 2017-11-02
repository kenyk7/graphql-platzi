const User = require('../models/User')
const Tag = require('../models/Tag')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

module.exports = {
  Query: {
    // users
    users: () => User.query(),
    user: (rootValue, { id }) => User.query().findById(id),
    // posts
    posts: () => Post.query(),
    post: (rootValue, { id }) => Post.query().findById(id),
    // comments
    comments: () => Comment.query(),
    comment: (rootValue, { id }) => Comment.query().findById(id)
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
  },
  User: {
    comments: async (user) => {
      return Comment.query().where('authorId', user.id)
    },
    posts: async (user) => {
      return Post.query().where('authorId', user.id)
    }
  },
  Post: {
    comments: async (post) => {
      return Comment.query().where('postId', post.id)
    },
    author: async (post) => {
      return User.query().findById(post.authorId)
    }
  },
  Comment: {
    post: async (comment) => {
      return Post.query().findById(comment.postId)
    },
    author: async (comment) => {
      return User.query().findById(comment.authorId)
    }
  }
}
