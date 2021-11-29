import { gql } from '@apollo/client'

const CREATE_TODO = gql`
   mutation createTodo($description : String! $title: String! $isDone: Boolean!) {
        createTodo(data:{description : $description, title : $title , isDone : $isDone}) {
            id
            description
            title
            isDone
        }
    }
`

const DELETE_TODO = gql`
    mutation deleteTodo($id : ID!) {
        deleteTodo(id : $id) {
            id
        }
    }
`


const UPDATE_STATUS = gql`

mutation updateTodo($id : ID!, $isDone : Boolean!) {
        updateTodo(id : $id, data:{isDone : $isDone}) {
            id
            isDone
        }
    }

`
export {DELETE_TODO,CREATE_TODO, UPDATE_STATUS}