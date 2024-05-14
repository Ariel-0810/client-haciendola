import React from "react";
import { Product } from "../products/types";
import ProductItem from "./ProductItem";
import styles from "./productList.module.css";

interface ProductListProps {
  products: Product[];
  onEditProduct: (productId: string) => void;
  onDeleteProduct: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onEditProduct,
  onDeleteProduct,
}) => {
  return (
    <div className={styles.container}>         
      {Array.isArray(products) ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={onEditProduct}
            onDelete={onDeleteProduct}
          />
        ))
      ) : (
        <h3>No existe ese Producto</h3>
      )}
    </div>
  );
};

export default ProductList;
