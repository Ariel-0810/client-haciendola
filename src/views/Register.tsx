// Register.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    return (
        <div>
            <h2>Registrarse</h2>
            <Link to="/register-form">Go to Register Form</Link>
        </div>
    );
};

export default Register;
