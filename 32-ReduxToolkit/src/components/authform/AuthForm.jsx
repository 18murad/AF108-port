import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, register } from '../../features/auth/authSlice'

const AuthForm = () => {

    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector(state => state.auth)

    const handleRegister = () => {
        const username = prompt('ADD USERNAMe:')
        if (username) dispatch(register({ username})) 
    }

    const handleLogin = () => {
        const username = prompt('ADD USERNAME')
        if (username) dispatch(login({ username})) 
    }

    const handleLogout = () => {
        dispatch(logout())
    }
  return (
    <div style={{ marginBottom: 20}}>
        {isAuthenticated ? (
            <div>
                <span>WELCOME, {user.username}</span>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>
        ) : (
            <>
              <button onClick={handleRegister}>REGISTER</button>
              <button onClick={handleLogin}>LOGIN</button>
            </>
        )}
    </div>
  )
}

export default AuthForm