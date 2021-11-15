import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
