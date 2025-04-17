import React from 'react'
import TodoItem from './TodoItem'

import { useSelector } from 'react-redux'

const TodoList = () => {
  // the state.todos.todos -> the first todos -> refer to the name set in store.js
  // the econd todos -> todoSlice -> line 7 (initialState)
const todos = useSelector((state)=> state.todos.todos)
  return (
    <div>
        <h2>List To do</h2>

        {
          todos.map(val=><TodoItem todo={val} key={val.id}/>)
        }
    </div>
  )
}

export default TodoList