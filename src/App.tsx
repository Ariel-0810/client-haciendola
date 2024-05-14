import React from "react";
import { BrowserRouter as Router, Route, useNavigate, useParams } from "react-router-dom";
import { Routes } from "react-router-dom";
import Products from "./views/Products";
import Login from "./views/Login";
import RegisterForm from './components/RegisterForm';
import EditProductForm from './components/EditProductForm';
import CreateProductForm from './components/CreateProductForm';

const App: React.FC = () => {

    const EditProductFormWrapper: React.FC = () => {
        const navigate = useNavigate();
        const { productId } = useParams();
      
        const handleFinishEditing = () => {
          navigate("/products");
        };      
        return <EditProductForm productId={productId ?? ''} onFinishEditing={handleFinishEditing} />;
      };

      return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register-form" element={<RegisterForm />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create-product" element={<CreateProductForm />} />
            <Route path="/edit-product/:productId" element={<EditProductFormWrapper />} />
          </Routes>
        </Router>
      );
    };

export default App;
