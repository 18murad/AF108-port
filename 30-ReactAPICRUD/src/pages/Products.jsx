import { useState } from 'react'
import Product from '../components/product/Product'
import CreateProduct from '../components/createproduct/CreateProduct'
import UpdateModal from '../components/updatemodal/updateModal'
import { toast } from 'react-toastify';

function Products ({ products, setProducts, loading})  {

    const [editingProduct, setEditingProduct] = useState(null);

    const handleCreate = (newProduct) => {
        setProducts(prev => [...prev, newProduct]);
        toast.success("Add Product");
    };

    const handleUpdate = (updateProduct) => {
        setProducts(prev => prev.map(p => p.id === updateProduct.id ? updateProduct : p));
        toast.success("Edit Product");
    };

    const handleDelete = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id))
        toast.success("Delete product")
    };

    const handleReset = () => {
        setProducts ([]);
        toast.success("Reset product")
    };

    if (loading) return <h2>Loading...</h2>;
  return (
    <div>
        <CreateProduct onCreate={handleCreate} />
        <button onClick={handleReset}>Reset Products</button>
        {/* <div style={{ marginTop: "20px"}}> */}
            {products.map(product => (
                <Product
                key={product.id}
                product={product}
                onDelete={handleDelete}
                onEdit={() => setEditingProduct(product)}
                />
            ))}
            <div>
                {editingProduct && (
                    <UpdateModal 
                    product={editingProduct}
                    onClose={() => setEditingProduct(null)}
                    onUpdate={handleUpdate}
                    />
                )}
            </div>
        </div>
    // </div>
  )
}

export default Products