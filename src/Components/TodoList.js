import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import { GET_TODO } from '../GraphQL/Query'
import {DELETE_TODO} from '../GraphQL/Mutation'


export default function TodoList() {


    const {error, loading, data, refetch}= useQuery(GET_TODO)
    const [deleteTodo] = useMutation(DELETE_TODO)
    if(loading) return <div>Loading... Please wait</div>

    if(error) return <div>Something went wrong..Try again</div>

    function handleDelete(id) {
            deleteTodo(
                {
                    variables : {
                        id
                    }
                }
            )
            alert("Task Succesfully Deleted") 
            refetch()  
        }
        

    return (
        <div className='TodoList'>
            {data.todos.map(todo =>{

                return (
                <div>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <button onClick={() => handleDelete(todo.id)}>X</button>
                   
                </div>
                
                )

            })}

            
        </div>
    )
}
