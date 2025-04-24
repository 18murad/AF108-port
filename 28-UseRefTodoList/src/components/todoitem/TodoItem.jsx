import React from 'react'
import { useState } from 'react'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, index, toggleTodo, deleteTodo, editTodo}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
     
    const handleEdit = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    };

  return (

    <div
    className={`${StyleSheet.item} ${todo.done ? styles.done : styles.notdone}`}>
        <span className={styles.index}>{index + 1}.</span>
        {isEditing ? (
            <input 
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className={styles.editInput} />
        ) : (
            <span className={styles.text}>{todo.text}</span>
        )}
        <div className={styles.buttons}>
            {!todo.done && (
                <button onClick={() => toggleTodo(todo.id)} className={styles.complete}>Tamamla</button>
            )}
            {!todo.done ? (
                <button onClick={() => setIsEditing(!isEditing)} className={styles.edit}>
                    {isEditing ? 'tesdiq' : 'edit'}
                </button>
            ) : null}
            {todo.done && (
                <button onClick={() => deleteTodo(todo.id)} className={styles.delete}>
                    sil
                </button>
            )}
        </div>
    </div>

)
}

export default TodoItem