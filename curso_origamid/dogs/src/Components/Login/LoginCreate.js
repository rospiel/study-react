import React from 'react';
import useInputValidator from '../../Hooks/useInputValidator';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import { USER_POST } from '../../apiUrl';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const LoginCreate = () => {
  const username = useInputValidator('required');
  const email = useInputValidator('email');
  const password = useInputValidator('required');
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  function getButtonLoading() {
    return <Button disabled>Cadastrando...</Button>;
  }

  function getButtonRegister() {
    return <Button>Cadastrar</Button>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? getButtonLoading() : getButtonRegister()}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
