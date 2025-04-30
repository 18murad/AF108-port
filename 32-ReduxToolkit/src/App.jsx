import { ToastContainer } from 'react-toastify'
import './App.css'
import AuthForm from './components/authform/AuthForm'
import TodoApp from './components/totoapp/TodoApp'

function App() {

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>TODO LIST</h1>
        <AuthForm />
        <TodoApp />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
