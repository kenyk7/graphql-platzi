const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Comentario = require('./Comentario')
const Curso = require('./Curso')
const Viewer = require('./Viewer')

const rootTypes = `
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    comentarios: [Comentario]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    comentario(id: Int): Comentario
    buscar(query: String): [ResultadoBusqueda]
    viewer: Viewer
  }

  input NuevoProfesor {
    nombre: String!
    genero: Genero!
    nacionalidad: String!
  }

  input ProfesorEditable {
    nombre: String
    genero: Genero
    nacionalidad: String
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorDelete(profesorId: Int): Profesor
    profesorEdit(profesorId: Int, profesor: ProfesorEditable): Profesor
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootTypes, Viewer, Profesor, Comentario, Curso],
  resolvers
})

module.exports = schema
