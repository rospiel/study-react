import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useInputValidator';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../apiUrl';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email.validate) {
      return;
    }

    const { url, options } = PASSWORD_LOST({
      login: email.value,
      url: window.location.href.replace('perdeu', 'resetar'),
    });
    request(url, options);
    disabledButton();
  }

  function disabledButton() {
    return <Button disabled>Enviando</Button>;
  }

  function sendButton() {
    return <Button>Enviar Email</Button>;
  }

  function informIfAlreadySend() {
    return <p style={{ color: '#4c1' }}>{data}</p>;
  }

  function configureButtonSend() {
    return loading ? disabledButton() : sendButton();
  }

  return (
    <section>
      <Head
        title="Perdeu a senha"
        description="Página para recuperar a senha."
      />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        informIfAlreadySend()
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...email} />
          {configureButtonSend()}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
