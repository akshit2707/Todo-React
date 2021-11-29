import React from 'react'
import {useMutation} from '@apollo/client'
import { useState } from 'react'

import {CREATE_TODO} from '../GraphQL/Mutation'


export default function TodoCrud() {

    const [addTodo] = useMutation(CREATE_TODO)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [isDone, setIsDone] = useState(false)

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
                    addTodo({ variables: { title,description, isDone } })
                    setTitle('')
                    setDescription('')
                    setIsDone(false)
                    
                }}
            >
            Add</button>
        </div>
    )
}
