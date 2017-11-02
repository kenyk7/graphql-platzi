const Curso = require('../models/Curso')
const Profesor = require('../models/Profesor')
const Comentario = require('../models/Comentario')

module.exports = {
  Query: {
    cursos: () => Curso.query(),
    profesores: () => Profesor.query(),
    comentarios: () => Comentario.query(),
    curso: (rootValue, { id }) => Curso.query().findById(id),
    profesor: (rootValue, { id }) => Profesor.query().findById(id),
    comentario: (rootValue, { id }) => Comentario.query().findById(id),
    buscar: (rootValue, params) => {
      return [
        Curso.query().findById(3),
        Profesor.query().findById(1)
      ]
    }
  },
  Mutation: {
    profesorAdd: (_, { profesor }) => {
      return Profesor
        .query()
        .insert(profesor)
    },
    profesorDelete: (_, { profesorId }) => {
      return Profesor.query().findById(profesorId).then(profesor => {
        return Profesor.query().deleteById(profesorId).then(() => profesor)
      })
    },
    profesorEdit: (_, { profesorId, profesor }) => {
      return Profesor
        .query()
        .patchAndFetchById(profesorId, profesor)
    }
  },
  ResultadoBusqueda: {
    __resolveType: (obj) => {
      if (obj.nombre) return 'Profesor'
      return 'Curso'
    }
  },
  Curso: {
    profesor: async (curso) => {
      return Profesor.query().findById(curso.profesor_id)
    },
    comentarios: async (curso) => {
      return Comentario.query().where('curso_id', curso.id)
    }
  },
  Profesor: {
    cursos: async (profesor) => {
      return Curso.query().where('profesor_id', profesor.id)
    }
  },
  Comentario: {
    curso: async (comentario) => {
      return Curso.query().findById(comentario.curso_id)
    }
  }
}
