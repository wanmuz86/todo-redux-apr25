import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

const TodoItem = ({todo}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeTodo(todo.id))
  }
  return (
    <div>
        <p>{todo.name}<button onClick={handleDelete}>Delete</button></p>
    </div>
  )
}

export default TodoItem