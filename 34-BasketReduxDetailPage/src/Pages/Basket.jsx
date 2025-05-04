import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket } from '../Feature/basketSlice';

const Basket = () => {

    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

  return (
    <div className='container mt-4'>
        <h3>Your Basket</h3>
        {basket.length === 0 ? (
            <p>basketde item yoxdu.</p>
        ) : (
            <table className='table table-bordered mt-3'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt={item.title} style={{height: "50px"}} /></td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.count}</td>
                            <td>
                                <button className='btn btn-danger btn-sm' onClick={() => dispatch(removeFromBasket(item.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default Basket