import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.count += action.payload.count;
        toast.info(`Mehsul sayi artd: ${existing.title}`);
      } else {
        state.push(action.payload);
        toast.success(`ADD Basket: ${action.payload.title}`);
      }
    }
  }
});
const store = configureStore({ reducer: { basket: basketSlice.reducer } });

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Home</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
            <img src={product.image} alt="" style={{ width: '100px', height: '100px' }} />
            <h5>{product.title.slice(0, 30)}...</h5>
            <p>{product.price} $</p>
            <Link to={`/detail/${product.id}`}>Detala bax</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const handleAdd = () => {
    dispatch(basketSlice.actions.addToBasket({ ...product, count }));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: '30px' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" style={{ width: 150 }} />
      <p>{product.description}</p>
      <p><b>Price:</b> {product.price} $</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => setCount(prev => prev - 1)} disabled={count === 1}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(prev => prev + 1)} disabled={count === 10}>+</button>
      </div>

      <button onClick={handleAdd} style={{ marginTop: '15px' }}>Add to Cart</button>
    </div>
  );
};

const Basket = () => {
  const basket = useSelector(state => state.basket);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Basket</h2>
      {basket.length === 0 ? <p>Basket Empty</p> : (
        basket.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
            <h4>{item.title}</h4>
            <p>Count: {item.count}</p>
            <p>Price: {item.price} $</p>
          </div>
        ))
      )}
    </div>
  );
};

const Navbar = () => {
  const basket = useSelector(state => state.basket);
  const total = basket.reduce((acc, item) => acc + item.count, 0);

  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/">Home</Link> | <Link to="/basket">Basket ({total})</Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Provider>
  );
};

export default App;