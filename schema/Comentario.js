module.exports = `
  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
    curso: Curso
  }
  
  type AllComentarios{
  	all: [Comentario]
    count: String!
  }
`
