import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteAll, deleteTodo, updateTodo } from '../../features/todos/todoSlice'

const TodoApp = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const { isAuthenticated} = useSelector(state => state.auth)
    const [input, setInput] = useState('')
    const [editing, setEditing] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editing) {
            dispatch(updateTodo({ id: editing.id, text: input }))
            setEditing(null)

        }else {
            if (input.trim() !== '') dispatch(addTodo(input))
        }
    setInput('')
    }

    const startEdit = (todo) => {
        setEditing(todo)
        setInput(todo.text)
    }

    if (!isAuthenticated) return <p>daxil olun.</p>


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='yeni todo...'
            />
            <button type='submit'>{editing ? 'YENILE' : 'elave et'}</button>
        </form>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => startEdit(todo)}>EDIT</button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button>
                </li>
            ))}
        </ul>

        {todos.length > 0 && (
                    <button onClick={() => dispatch(deleteAll())}>DELETEALL</button>
                )}
    </div>
  )
}

export default TodoApp