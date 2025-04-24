import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './components/controls/Controls';
import TodoForm from './components/todoform/TodoForm';
import TodoList from './components/todolist/TodoList';
import styles from './App.module.css';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return toast.error("Bos todo olmaz");
    if (todos.some(todo => todo.text === text.trim())) {
      return toast.error("Bu todo var");
    }
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
    toast.success("Yeni Todo elave oldu");
  };

  const toggleTodo = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
    toast.success("Todonun statusu deyisdi");
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) return toast.error("Bos deyer olmaz");
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updated);
    toast.info("Todo redakte oldu");
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
    toast.error("Todo silindi");
  };

  const deleteAll = () => {
    if (!todos.length) return toast.error("SIlinecek hecne yoxdur");
    setTodos([]);
    toast.error("butun todolar silindi");
  };

  


  return (
   
    <div className={styles.app}>
      <h1>TodoList</h1>
      <TodoForm addTodo={addTodo}/>
      <Controls deleteAll={deleteAll}/>
      <TodoList
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      editTodo={editTodo} />

      <ToastContainer/>
      
    </div>

  )
}

export default App
