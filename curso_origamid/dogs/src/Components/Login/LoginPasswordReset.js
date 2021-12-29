import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useInputValidator';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../apiUrl';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('required');
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  function configureKeyAndLogin(key, login) {
    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    configureKeyAndLogin(key, login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!password.validate()) {
      return;
    }

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const response = await request(url, options);
    if (response.ok) {
      navigate('/login');
    }
  }

  function disabledButton() {
    return <Button disabled>Enviando</Button>;
  }

  function sendButton() {
    return <Button>Resetar</Button>;
  }

  function configureButtonReset() {
    return loading ? disabledButton() : sendButton();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {configureButtonReset()}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
