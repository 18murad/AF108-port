import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const basket = useSelector(state => state.basket);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-5 '> 
    <Link className='navbar-brand' to="/">Home</Link>
    <div className='ml-auto'>
        <Link className='btn btn-outline-light' to="/basket">Basket ({basket.length})</Link>
    </div>
        </nav>
  );
};

export default Navbar