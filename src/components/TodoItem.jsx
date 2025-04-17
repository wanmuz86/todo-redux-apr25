import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
        <p>{todo.name}<button>Delete</button></p>
    </div>
  )
}

export default TodoItem