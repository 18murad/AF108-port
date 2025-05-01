
import React, { useState, useContext, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Container, Card, CardContent, Grid, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

// CONTEXT
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      toast.success('Məhsul istək siyahısına əlavə olundu!');
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
    toast.info('Məhsul istək siyahısından silindi!');
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.info('İstək siyahısı təmizləndi!');
  };

  return (
    <ProductContext.Provider value={{ products, wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </ProductContext.Provider>
  );
};

// NAVBAR
const Navbar = ({ isAuth, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          Logo
        </Typography>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <Button color="inherit" component={Link} to="/wishlist">Wishlist</Button>
        <Button color="inherit" onClick={handleClick}>Account</Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {!isAuth && (
            <>
              <MenuItem onClick={handleClose} component={Link} to="/register">Register</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
            </>
          )}
          {isAuth && <MenuItem onClick={() => { handleLogout(); handleClose(); }}>Logout</MenuItem>}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

// REGISTER PAGE
const Register = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 3 }}>Register</Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Too short').required('Required'),
        })}
        onSubmit={(values) => {
          toast.success('Qeydiyyat uğurla tamamlandı!');
          navigate('/login');
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" as={TextField} label="Email" fullWidth margin="normal"
              error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
            <Field name="password" type="password" as={TextField} label="Password" fullWidth margin="normal"
              error={touched.password && !!errors.password} helperText={touched.password && errors.password} />
            <Button type="submit" variant="contained" color="primary">Register</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

// LOGIN PAGE
const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 3 }}>Login</Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Too short').required('Required'),
        })}
        onSubmit={(values) => {
          setIsAuth(true);
          toast.success('Giriş uğurlu oldu!');
          navigate('/products');
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" as={TextField} label="Email" fullWidth margin="normal"
              error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
            <Field name="password" type="password" as={TextField} label="Password" fullWidth margin="normal"
              error={touched.password && !!errors.password} helperText={touched.password && errors.password} />
            <Button type="submit" variant="contained" color="primary">Login</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

// PRODUCT PAGE
const Products = () => {
  const { products, wishlist, addToWishlist, removeFromWishlist } = useContext(ProductContext);

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {products.map(product => {
          const isWished = wishlist.find(item => item.id === product.id);
          return (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">${product.price}</Typography>
                  {isWished ? (
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => removeFromWishlist(product.id)}
                      sx={{ mt: 1 }}
                    >
                      Remove from Wishlist
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<FavoriteIcon />}
                      onClick={() => addToWishlist(product)}
                      sx={{ mt: 1 }}
                    >
                      Add to Wishlist
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

// WISHLIST PAGE
const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useContext(ProductContext);

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Wishlist</Typography>

      {wishlist.length > 0 && (
        <Button
          variant="contained"
          color="error"
          onClick={clearWishlist}
          sx={{ mb: 2 }}
        >
          Bütün məhsulları sil
        </Button>
      )}

      {wishlist.length === 0 ? (
        <Typography variant="body1">İstək siyahısı boşdur.</Typography>
      ) : (
        <Grid container spacing={2}>
          {wishlist.map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">${product.price}</Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => removeFromWishlist(product.id)}
                    sx={{ mt: 1 }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

// APP COMPONENT
export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const handleLogout = () => {
    setIsAuth(false);
    toast.info('Çıxış edildi');
  };

  return (
    <Router>
      <ProductProvider>
        <Navbar isAuth={isAuth} handleLogout={handleLogout} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Typography variant="h4" sx={{ m: 3 }}>Ana Səhifə</Typography>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}