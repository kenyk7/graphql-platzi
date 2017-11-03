module.exports = `
  type Viewer{
  	allCursos: AllCursos
    curso(id: Int): Curso
    allProfesores: AllProfesores
    profesor(id: Int): Profesor
    allComentarios: AllComentarios
    comentario(id: Int): Comentario
  }
`
