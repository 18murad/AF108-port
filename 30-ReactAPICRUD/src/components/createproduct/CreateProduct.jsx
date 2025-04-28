import React, { useState } from 'react'

const CreateProduct = ({ onCreate}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !price) return;
        const newProduct = {
            id: Date.now(),
            title,
            price: parseFloat(price)
        };

        onCreate(newProduct);
        setTitle ("");
        setPrice ("");
    }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );

}

export default CreateProduct