import { createSlice, nanoid } from "@reduxjs/toolkit"
import { toast } from "react-toastify"



const initialState = {
    todos: [],
}

const todoSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
            toast.success('Add TODO')
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            toast.warn('DELETE TODO')
        },
        updateTodo: (state, action) => {
            const { id, text} = action.payload
            const existing = state.todos.find(todo => todo.id === id)
            if (existing) {
                existing.text = text
                toast.success('UPDATE TODO')
            }
        },
        deleteAll: (state) => {
            state.todos = []
            toast.error('DELETE ALL TODOs')
        },
    },
})

export const { addTodo, deleteTodo, updateTodo, deleteAll} = todoSlice.actions
export default todoSlice.reducer