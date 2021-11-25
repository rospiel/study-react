import React from 'react';
import { Link } from 'react-router-dom';
import useInputValidator from '../../Hooks/useInputValidator';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../Forms/Button.module.css';

const LoginForm = () => {
  const context = React.useContext(UserContext);
  const username = useInputValidator('required');
  const password = useInputValidator('required');

  function isAllFieldsValidated() {
    return username.validate() && password.validate();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isAllFieldsValidated() === false) {
      return;
    }

    context.userLogin(username, password);
  }

  function getButtonEnter() {
    return <Button>Entrar</Button>;
  }

  function getButtonLoading() {
    return <Button disabled>Carregando</Button>;
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {context.loading ? getButtonLoading() : getButtonEnter()}
        <Error error={context.error} />
      </form>
      <Link className={styles.lost} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.registry}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesButton.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
