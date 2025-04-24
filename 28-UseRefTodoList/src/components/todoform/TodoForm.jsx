import React from 'react'
import { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ( { addTodo}) => {

    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    };


  return (

    <form className={'styles.form'} onSubmit={handleSubmit}>
        <input type="text"
        value={input}
        placeholder='yeni Todo...'
        onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input.trim()}>Elave et</button>
    </form>

);
};

export default TodoForm