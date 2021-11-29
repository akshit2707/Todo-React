import React from 'react'
import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

import {CREATE_TODO} from '../GraphQL/Mutation'


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
