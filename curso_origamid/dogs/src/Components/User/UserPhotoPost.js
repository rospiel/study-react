import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import useInputValidator from '../../Hooks/useInputValidator';
import { PHOTO_POST } from '../../apiUrl';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useInputValidator('required');
  const peso = useInputValidator('number');
  const idade = useInputValidator('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    if (target.files.length < 1) {
      setImg({
        preview: '',
        raw: '',
      });
      return;
    }

    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function showPreviewImage() {
    return (
      <div
        className={styles.preview}
        style={{ backgroundImage: `url('${img.preview}')` }}
      ></div>
    );
  }

  function getButtonEnter() {
    return <Button>Entrar</Button>;
  }

  function getButtonLoading() {
    return <Button disabled>Carregando</Button>;
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? getButtonLoading() : getButtonEnter()}
        <Error error={error} />
      </form>
      <div>{img.preview && showPreviewImage()}</div>
    </section>
  );
};

export default UserPhotoPost;
