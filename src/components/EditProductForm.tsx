//EditProductForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from "./EditProduct.module.css";



interface EditProductFormProps {
    productId: string;
    onFinishEditing: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ productId, onFinishEditing }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`https://api-haciendola.vercel.app/products/${productId}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [productId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`https://api-haciendola.vercel.app/products/${productId}`, formData);
            onFinishEditing();
        } catch (error) {
            console.error('Error al editar el producto:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
  const handleFinishEditing = () => {
    navigate("/products");
};

    return (
        <div className={styles.body}>
            <div className={styles.Form}>
            <h2>Editar Producto</h2>
        <form className={styles.formInput} onSubmit={handleSubmit}>
            <label className={styles.formInputLabel}>
                Handle:
            </label>
                <input  className={styles.formInput} type="text" name="Handle" value={formData.Handle || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Title:
            </label>
                <input  className={styles.formInput} type="text" name="Title" value={formData.Title || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Description:
            </label>
                <input  className={styles.formInput} type="text" name="Description" value={formData.Description || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                SKU:
            </label>
                <input  className={styles.formInput} type="text" name="SKU" value={formData.SKU || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Grams:
            </label>
                <input  className={styles.formInput} type="text" name="Grams" value={formData.Grams || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Stock:
            </label>
                <input  className={styles.formInput} type="text" name="Stock" value={formData.Stock || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Price:
            </label>
                <input  className={styles.formInput} type="text" name="Price" value={formData.Price || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Compare Price:
            </label>
                <input  className={styles.formInput} type="text" name="Compare_Price" value={formData.Compare_Price || ''} onChange={handleChange} />
            <label className={styles.formInputLabel}>
                Barcode:
            </label>
                <input  className={styles.formInput} type="text" name="Barcode" value={formData.Barcode || ''} onChange={handleChange} />
            <button className={styles.button} type="submit" onClick={handleFinishEditing}>Guardar cambios</button>
        </form>
        </div>
        </div>
    );
};

export default EditProductForm;

