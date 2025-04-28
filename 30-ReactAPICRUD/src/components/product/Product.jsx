import React from 'react'

const Product = ({ product, onDelete, onEdit}) => {
  return (
    <div style={{ border: "1px solid gray", marginBottom: "10px", padding: "10px"}}>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  )
}

export default Product