import { gql } from '@apollo/client'

const UPDATE_TODO = gql `

    mutation{
        updateTodo(id:"104", data:{
            isDone:false
        
        })
    }
`

const CREATE_TODO = gql`
   mutation{
        createTodo(data:{
            title:"New task",
            description:"Sample",
            isDone:false
            
        })
}
`

const DELETE_TODO = gql`
    mutation
            {
            deleteTodo(id:"4e39959c-015e-4bb5-84fb-8c0dfd79f1f0")
            }
`

export {DELETE_TODO,UPDATE_TODO,CREATE_TODO}