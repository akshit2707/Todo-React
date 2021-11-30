import React from 'react'
import {useMutation} from '@apollo/client'
import { useState } from 'react'

import {CREATE_TODO} from '../GraphQL/Mutation'
import { GET_TODO } from '../GraphQL/Query'

import '../css/TodoCrud.css'


export default function TodoCrud() {

    const [addTodo] = useMutation(CREATE_TODO, {
        refetchQueries: [
          GET_TODO
        ],
      }
        
        )
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [isDone, setIsDone] = useState(false)

    return (
        <div className = "addTodo">
            <label htmlFor="add-todo">
                <h3>Enter your list </h3>
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
            <button className='addTodo-button'
                onClick={e => {
                    e.preventDefault()
                    if(title==''){
                        alert("No title added")
                        return
                    }
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
