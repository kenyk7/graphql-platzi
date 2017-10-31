module.exports = `
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
    comments: [Comment]
    # tags: [Tag]
    # likedPosts: [User]
  }
`
