import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../Feature/basketSlice';
import { Link } from 'react-router-dom';

const itemCard = ({ product }) => {
    const dispatch = useDispatch();

  return (
    <div className='col-md-4 mb-4'>
        <div className='card h-100'>
            <img src={product.image} className='card-img-top p-4' style={{height: "250px", objectFit: "contain"}} alt={product.title} />
            <div className='card-body d-flex flex-column'>
              <Link to={`/DetailPage/${product.id}`} className='card-title h5' state={{fontSize: "1rem", textDecoration: "none"}}>{product.title}</Link>
                <h5 className='card-title' style={{fontSize: "1rem"}}>{product.title}</h5>
                <p className='card-text'> ${product.price}</p>
                <button onClick={() => dispatch(addToBasket(product))} className='btn btn-primary mt-auto'>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};

export default itemCard