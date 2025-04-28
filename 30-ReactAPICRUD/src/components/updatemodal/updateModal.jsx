import React, { useState } from 'react'

function updateModal ({ product, onClose, onUpdate}) {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate({ ...product, title, price: parseFloat(price) });
        onClose();
    };

  return (
    <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        background: "white", padding: "20px", border: "1px solid black"
      }}>
        <h2>Update Product</h2>
        <form onSubmit={handleUpdate}>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input 
            type="number" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
    </div>
  )
}

export default updateModal