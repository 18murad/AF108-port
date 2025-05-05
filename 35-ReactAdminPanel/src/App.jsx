import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ title: '', price: '', image: '', description: '' });
  const [editingProduct, setEditingProduct] = useState(null);
  const [toast, setToast] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingProduct ? 'PUT' : 'POST';
    const url = editingProduct
      ? `https://fakestoreapi.com/products/${editingProduct.id}`
      : 'https://fakestoreapi.com/products';

    const res = await fetch(url, {
      method,
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (editingProduct) {
      setProducts(products.map(p => (p.id === data.id ? data : p)));
      setToast('Məhsul redaktə olundu');
    } else {
      setProducts([...products, data]);
      setToast('Yeni məhsul əlavə olundu');
    }

    setFormData({ title: '', price: '', image: '', description: '' });
    setEditingProduct(null);
  };

  const handleDelete = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter(p => p.id !== id));
    setToast('Məhsul silindi');
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingProduct(product);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Məhsul adı"
          required
        />
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          placeholder="Qiymət"
          required
        />
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="Şəkil URL"
          required
        />
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Təsvir"
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          {editingProduct ? 'Redaktə et' : 'Əlavə et'}
        </button>
      </form>

      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Şəkil</th>
            <th>Ad</th>
            <th>Qiymət</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '40px', cursor: 'pointer' }}
                  onClick={() => navigate(`/detail/${p.id}`)}
                />
              </td>
              <td>{p.title}</td>
              <td>{p.price} $</td>
              <td>
                <button onClick={() => handleEdit(p)}>Redaktə</button>
                <button onClick={() => handleDelete(p.id)} style={{ marginLeft: '10px' }}>
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'green',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
};

// DetailPage komponenti
const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p>Yüklənir...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '150px' }} />
      <p><strong>Qiymət:</strong> {product.price} $</p>
      <p><strong>Təsvir:</strong> {product.description}</p>
      <p><strong>Kategoriya:</strong> {product.category}</p>
    </div>
  );
};

// Əsas App komponenti
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;