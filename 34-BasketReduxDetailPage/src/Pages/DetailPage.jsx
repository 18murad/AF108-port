import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToBasket } from '../Feature/basketSlice';
import { toast } from 'react-toastify';

const DetailPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    const handleAddToBasket = () => {
        dispatch(addToBasket({ ...product, count }));
        toast.success(`${count} item(s) added to basket`);
    };
    const increase = () => setCount(prev => prev + 1);
    const decrease = () => {
       if (count > 1) setCount (prev => prev - 1);
    };

    if (!product) return <p>Loading...</p>;

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} className='img-fluid' style={{ maxHeight: "400px", objectFit: "contain"}}/>
            </div>
            <div className='col-md-6'>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                <div className='d-flex align-items-center my-3'>
                    <button className='btn btn-outline-secondary' onClick={decrease} disabled={count <=1}>-</button>
                    <span className='mx-3'>{count}</span>
                    <button className='btn btn-outline-secondary' onClick={increase}>-</button>
                </div>
                <button className='btn btn-succes' onClick={handleAddToBasket}> Add to Basket</button>
            </div>
        </div>
    </div>
  )
}

export default DetailPage