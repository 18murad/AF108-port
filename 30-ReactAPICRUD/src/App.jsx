import './App.css'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Products from './pages/Products';
import 'react-toastify/dist/ReactToastify.css'


function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState (false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch ("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts (data); 
    } catch (eror) {
      toast.error("Mehsul gelmedi");
    } finally {
      setLoading( false);
    }   
  };

  useEffect (( ) => {
    fetchProducts();
  }, []);
  return (
    <div>
      <ToastContainer />
      <h1>Product CRUD App</h1>
      <Products 
      products={products}
      setProducts={setProducts}
      loading={loading}
      />
    </div>
  )
}

export default App
