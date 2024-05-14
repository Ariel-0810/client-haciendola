//createProductForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./CreateProduct.module.css";

const CreateProductForm: React.FC = () => {
    const [formData, setFormData] = useState<any>({
        Handle: '',
        Title: '',
        Description: '',
        SKU: '',
        Grams: '',
        Stock: '',
        Price: '',
        Compare_Price: '',
        Barcode: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://api-haciendola.vercel.app/products', formData);
            navigate('/products');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className={styles.body}>
        <div className={styles.Form}>
            <h2>Crear Nuevo Producto</h2>
            <form className={styles.formInput} onSubmit={handleSubmit}>
                <label className={styles.formInputLabel}>
                    Handle:
                </label>
                    <input className={styles.formInput} type="text" name="Handle" value={formData.Handle} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Title:
                </label>
                    <input className={styles.formInput} type="text" name="Title" value={formData.Title} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Description:
                </label>
                    <input className={styles.formInput} type="text" name="Description" value={formData.Description} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    SKU:
                </label>
                    <input className={styles.formInput} type="text" name="SKU" value={formData.SKU} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Grams:
                </label>
                    <input className={styles.formInput} type="text" name="Grams" value={formData.Grams} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Stock:
                </label>
                    <input className={styles.formInput} type="text" name="Stock" value={formData.Stock} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Price:
                </label>
                    <input className={styles.formInput} type="text" name="Price" value={formData.Price} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Compare Price:
                </label>
                    <input className={styles.formInput}  type="text" name="Compare_Price" value={formData.Compare_Price} onChange={handleChange} />
                <label className={styles.formInputLabel}>
                    Barcode:
                </label>
                    <input className={styles.formInput} type="text" name="Barcode" value={formData.Barcode} onChange={handleChange} />
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        </div>
        </div>
    );
};

export default CreateProductForm;
