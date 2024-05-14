// RegisterForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './RegisterForm.module.css'

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    image: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-haciendola.vercel.app/user", formData);
      console.log("response.data------>",response.data);
      if (response.status === 201) {
        navigate("/products");
      } else {
        console.error("Error al registrar usuario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.body}>
    <div className={styles.Form}>
      <h4>Formulario de Registro</h4>
      <form className={styles.formInput} onSubmit={handleSubmit}>
      <input className={styles.formInput}
        type="text"
        name="username"
        placeholder="Usuario"
        onChange={handleChange}
      />
      <input className={styles.formInput}
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <input className={styles.formInput}
        type="text"
        name="fullname"
        placeholder="Nombre y Apellido"
        onChange={handleChange}
      />
      <input className={styles.formInput}
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Registrar
      </button>
    </form>
    </div>
    </div>
  );
};

export default RegisterForm;
