import React from 'react'
import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'


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

export default function TodoCrud() {

    const [addTodo] = useMutation(CREATE_TODO)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')

    return (
        <div className = "addTodo">
            <label htmlFor="add-todo">
                Enter your list 
            </label>
            <br/>
            <input id="add-todo" value={title} placeholder='Enter title here'
                onChange={e => setTitle(e.target.value)}>
            </input>
            <br/>
            <input id="add-todo" value={description} placeholder='Enter description here'
                onChange={e => setDescription(e.target.value)}>
            </input>
            <br/>
            <button 
                onClick={e => {
                    e.preventDefault()
                    addTodo({ variables: { title,description } })
                    setDescription('')
                    setTitle('')
                }}
            >
            Add</button>
        </div>
    )
}
