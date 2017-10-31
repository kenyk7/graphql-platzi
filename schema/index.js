const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const User = require('./User')
// const Tag = require('./Tag')
const Post = require('./Post')
const Comment = require('./Comment')

const rootTypes = `
  type Query {
    users: [User]
    user(id: Int): User
    posts: [Post]
    post(id: Int): Post
    comments: [Comment]
    comment(id: Int): Comment
  }

  input userPayload {
    username: String!
    email: String!
    password: String!
  }

  input postPayload {
    title: String!
    content: String!
    authorId: Int!
  }

  input commentPayload {
    text: String!
    postId: Int!
    authorId: Int!
  }

  type Mutation {
    userAdd(user: userPayload): User
    userDelete(id: Int): User
    userEdit(id: Int, user: userPayload): User
    postAdd(post: postPayload): Post
    postDelete(id: Int): Post
    postEdit(id: Int, post: postPayload): Post
    commentAdd(comment: commentPayload): Comment
    commentDelete(id: Int): Comment
    commentEdit(id: Int, comment: commentPayload): Comment
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootTypes, User, Post, Comment],
  resolvers
})

module.exports = schema
