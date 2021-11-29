
import {gql } from '@apollo/client'
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

export {GET_TODO}