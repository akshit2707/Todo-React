import React from 'react'
import {useQuery, gql} from '@apollo/client'


const GET_TODO = gql `
query{
    todos{
      id
      title
      description
      isDone
  
    }
  }
`;

export default function TodoList() {


    const {error, loading, data}= useQuery(GET_TODO)
    console.log({error,loading,data})
    if(loading) return <div>Loading... Please wait</div>

    if(error) return <div>Something went wrong..Try again</div>

    return (
        <div className='TodoList'>
            {data.todos.map(todo =>{

                return (
                <div>
                    <h1>{todo.title}</h1>
                    <h3>
                    {todo.description}
                    </h3>
                </div>
                
                )

            })}

            
        </div>
    )
}
