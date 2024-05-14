import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://api-haciendola.vercel.app/user/login", {
        username,
        password,
      });
      console.log("response---->", response.data);
      if (response.status === 200) {
        navigate("/products");
      } else {
        console.error("Error al iniciar sesión");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setShowAlert(true);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register-form");
  };

  return (
    <div className={styles.body}>
      <div className={styles.Form}>
        <h2>Inicie sesion en su cuenta</h2>

        {showAlert && (
          <div className="alert alert-danger" role="alert">
            Usuario o Contraseña incorrectos. Por favor, inténtelo de nuevo.
          </div>
        )}

        <form
          className={styles.formInput}
          onSubmit={handleLogin}
          action="#"
          method="POST"
        >
          <label className={styles.formInputLabel} htmlFor="usuario">
            Usuario
          </label>

          <input
            className={styles.formInput}
            id="usuario"
            name="usuario"
            type="usuario"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className={styles.formInputLabel} htmlFor="password">
            Contraseña
          </label>

          <input
            className={styles.formInput}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.formInputA}>
            <a href="#">Ha olvidado su contraseña?</a>
          </div>

          <button className={styles.button} type="submit">
            Iniciar sesión
          </button>
          <p className={styles.formInputP}>¿No tenes una cuenta?</p>
          <button className={styles.button} onClick={handleRegisterRedirect}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
