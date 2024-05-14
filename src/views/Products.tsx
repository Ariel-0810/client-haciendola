import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../products/types";
import ProductList from "../components/ProductList";
import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";
import styles from "./Products.module.css";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://api-haciendola.vercel.app/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEditProduct = (productId: string) => {
    setEditingProductId(productId);
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await axios.delete(`https://api-haciendola.vercel.app/products/${productId}`);
      setDeleteProductId(productId);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get<Product[]>(
        `https://api-haciendola.vercel.app/products?Title=${searchTerm}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const handleCreateProduct = () => {
    navigate("/create-product");
  };

  return (
    <div className={styles.body}>
      {!editingProductId && (
        <div>
          <div className={styles.container}>
            <button className={styles.buttonSearch} onClick={handleSearch}>
              Buscar por Titulo
            </button>
            <input
              className={styles.input}
              type="text"
              value={searchTerm}
              placeholder="Titulo"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <h2>Lista de Productos</h2>
            <button
              className={styles.buttonCreate}
              onClick={handleCreateProduct}
            >
              Crear Nuevo Producto
            </button>
          </div>
        </div>
      )}
      {editingProductId ? (
        <EditProductForm
          productId={editingProductId}
          onFinishEditing={() => {
            setEditingProductId(null);
            fetchProducts();
          }}
        />
      ) : (
        <ProductList
          products={products}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      )}
    </div>
  );
};

export default Products;
