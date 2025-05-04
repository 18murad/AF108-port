import { useEffect, useState } from 'react'
import React from 'react';
import ItemCard from '../components/itemcard/itemCard'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  return (
    <div className='container mt-4'>
        <div className='row'>
            {products.map(product => (
                <ItemCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
};

export default Home