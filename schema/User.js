module.exports = `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    # likes: [Post]
    posts: [Post]
    comments: [Comment]
  }
`
