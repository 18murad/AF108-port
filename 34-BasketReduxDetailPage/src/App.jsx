import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './Pages/Home'
import Basket from './Pages/Basket'
import { ToastContainer } from 'react-toastify'
import DetailPage from './Pages/DetailPage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 

  return (
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </Router>
  );
};

export default App
