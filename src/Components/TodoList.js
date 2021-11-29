import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import { GET_TODO } from '../GraphQL/Query'
import {DELETE_TODO, UPDATE_STATUS} from '../GraphQL/Mutation'
import '../css/TodoList.css'


export default function TodoList() {


    const {error, loading, data, refetch}= useQuery(GET_TODO)
    const [deleteTodo] = useMutation(DELETE_TODO)

    const [updateIsDone] = useMutation(UPDATE_STATUS)
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

        const handleDone = (id, isDone) => {
            updateIsDone(
                { variables : { 
                    id : id,
                    isDone : !isDone
                }
            })
        } 
        

    return (
        <div className='TodoList'>
            <h1>Todo</h1>
            {data.todos.map(todo =>{

                return (
                <div className='items-to-display'>

                     <span  
                     className={todo.isDone?'todo-item':'false-todo-item'}
                     id = "item-id"
                     onClick={() => {
                         handleDone(todo.id,todo.isDone)
                     }}
                     >

                    {todo.title}
                    {todo.description}
                    
                    </span>
                    <button className='todo-button' onClick={() => handleDelete(todo.id)}>X</button>
                   
                   
                </div>
                
                )

            })}

            
        </div>
    )

}
