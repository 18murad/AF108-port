import { useEffect, useReducer, useState } from 'react';
import './App.css'


const initialState ={
  users: JSON.parse(localStorage.getItem("users")) || [],

  editingUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        users: [...state.users, { id: Date.now(), ...action.payload}],
      };
      case "DELETE": 
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
      case "RESET":
        localStorage.removeItem("users");
        return {
          ...state,
          users: [],
        };
        case "SET_EDITIMG_USER":
          return{
            ...state,
            editingUser: action.payload,
          };
          case "CLEAR_EDITING_USER":
            return {
              ...state,
              editingUser: null,
            };
            case "UPDATE":
              return {
                ...state,
                users: state.user.map(user =>
                  user.id === action.payload.id ? action.payload : user
                ),
                editUser: null,
              };
              default:
                return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState({
    name: "",
    surname: ""
  });

  useEffect (() => {
    localStorage.setItem("users", JSON.stringify(state.users));
  }, [state.users]);

  const handleCreate = () => {
    if (form.name && form.surname) {
      dispatch ({type: "CREATE", payload: form});
      setForm ({ name: "", surname: ""});
    }
  };

  const handleUpdate = () => {
    if (state.editingUser.name && state.editingUser.surname) {
      dispatch({type: "UPDATE", payload: state.editingUser});
    }
  };
  return (
    <>
      <div className="App">
      <h1>USER LIST</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Ad"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Soyad"
          value={form.surname}
          onChange={e => setForm({ ...form, surname: e.target.value })}
        />
        <button onClick={handleCreate}>ADD</button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>

      <ul>
        {state.users.map(user => (
          <li key={user.id}>
            {user.name} {user.surname}
            <button onClick={() => dispatch({ type: "SET_EDITING_USER", payload: user })}>
              Edit
            </button>
            <button onClick={() => dispatch({ type: "DELETE", payload: user.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {state.editingUser && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit</h2>
            <input
              type="text"
              value={state.editingUser.name}
              onChange={e =>
                dispatch({
                  type: "SET_EDITING_USER",
                  payload: { ...state.editingUser, name: e.target.value },
                })
              }
            />
            <input
              type="text"
              value={state.editingUser.surname}
              onChange={e =>
                dispatch({
                  type: "SET_EDITING_USER",
                  payload: { ...state.editingUser, surname: e.target.value },
                })
              }
            />
            <button onClick={handleUpdate}>Remember</button>
            <button onClick={() => dispatch({ type: "CLEAR_EDITING_USER" })}>
              Colse
            </button>
          </div>
        </div>
      )}
    </div>

    </>
  )
}

export default App
