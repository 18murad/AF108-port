import React from 'react'
import TodoItem from '../todoitem/TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo}) => {
  return (
    <div className={styles.list}>
        {todos.length === 0 ? (
            <p className={styles.empty}> Todo elave olmuyub</p>
        ): (
            todos.map((todo, index) => (
                <TodoItem
                key={todo.id}
                todo= {todo}
                index={index}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                />
            ))
        ) }
    </div>
  );
};

export default TodoList