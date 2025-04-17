import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'

const Add = () => {
    const [newTodo,setNewTodo] = useState('')
    const dispatch = useDispatch()
    
    const handleAddItem = () => {
      // dispatching addTodo Method, by passing the payload as argument of the method
      dispatch(addTodo({id:Date.now(), name:newTodo}))
      setNewTodo('')
    }
  return (
    <div>
        <h2>Add new To Do</h2>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default Add