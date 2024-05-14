import React from "react";
import { Product } from "../products/types";
import styles from "./ProductsItems.module.css";

interface ProductItemProps {
  product: Product;
  onEdit: (productId: string) => void;
  onDelete: (productId: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>{product.Title}</h3>
          <h4>Handle: {product.Handle}</h4>
          <p><h4>Description:</h4>{product.Description}</p>
          <p>SKU: {product.SKU}</p>
          <p>Grams: {product.Grams}</p>
          <p>Stock: {product.Stock}</p>
          <p>Price: ${product.Price}</p>
          <p>Compare Price: ${product.Compare_Price}</p>
          <p>Barcode: {product.Barcode}</p>
        </div>
        <div className={styles.cardFooter}>
          <button className={styles.buttonEdit} onClick={() => onEdit(String(product.id))}>
            Editar Producto
          </button>
          <button className={styles.buttonDelete} onClick={() => onDelete(String(product.id))}>
            Eliminar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
