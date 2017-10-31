## Servidor GraphQL - curso Platzi

Este servidor fue creado como proyecto en el curso de GraphQL que dicté para Platzi en Junio de 2017 (lanzado en Agosto). Sentite libre de descagarlo, modificarlo, o hacer lo que quieras con él para aprender sobre GraphQL.

Si quieres ver paso a paso cómo se hizo este proyecto y aprender más sobre GraphQL como tecnología, aquí está el [enlace al curso](https://platzi.com/graphql).

### Tecnologías usadas

- GraphQL
- GraphQL Server (Apollo)
- Node 7.5
- Yarn
- Objection como ORM
- Knex para migraciones de DB
- SQLite como motor de base de datos

### Instalación

Clona este repositorio y en la carpeta raíz ejecuta los siguientes comandos:

1. `yarn install`
1. `touch db/db.sqlite` para crear el archivo vacío que usará SQLite. Si no te funciona, simplemente crea un archivo llamado `db.sqlite` dentro de la carpeta `db`
1. `yarn run db:migrate` para crear las tablas en la DB
1. `yarn run db:seed` para llenar la DB con datos de relleno
1. `yarn start` para iniciar el servidor

Siguiendo estos pasos, ahora en http://localhost:3000/graphiql deberías ver GraphiQL, y http://localhost:3000/graphql es el endpoint que usarás en tus clientes.

## test

```gql
mutation addUser {
  userAdd(user: {username:"kenyk7", email:"kenyk7@gmail.com", password:"secret123"}){
    id
    username
    email
    password
  }
}

query users{
  users{
    id
    username
    email
    password
    posts{
      id
      title
      comments{
        id
      }
    }
    comments{
      id
      text
      post{
        id
      }
    }
  }
}

mutation addPost {
  postAdd(post: {title:"Title the post 3", content:"Description the post 3", authorId: 2}){
    id
    title
    content
  }
}

mutation deletePost {
  postDelete(id: 1){
    id
    title
    content
  }
}

query posts{
  posts{
    id
    title
    content
    author{
      id
      username
      email
      comments{
        id
      }
    }
    comments{
      id
      text
    }
  }
}

mutation addComment {
  commentAdd(comment: {text:"Comment 2 the post", postId: 3, authorId: 2}){
    id
    text
  }
}

query comments{
  comments{
    id
    text
    author{
      id
      email
    }
    post{
      id
      title
    }
  }
}
```