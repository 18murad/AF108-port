import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/products">Products</Button>
      </Toolbar>
    </AppBar>
  );
};

const Home = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h4">Home</Typography>
  </Container>
);

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username bos olmaz"),
      email: Yup.string().email("Email yanlisdir").required("Email bos olmaz"),
      password: Yup.string().min(6, "Min. 6 simvol").required("Password bos olma")
    }),
    onSubmit: (values) => {
      toast.success("Success Register");
      navigate("/login");
    }
  });

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5">Register Form</Typography>
      <form onSubmit={formik.handleSubmit} style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </Container>
  );
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    toast.success("Daxil oldun");
    navigate("/products");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5">Login</Typography>
      <Button variant="contained" color="success" onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Container>
  );
};

const Products = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h4">Products List</Typography>
  </Container>
);

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

                   
export default App;