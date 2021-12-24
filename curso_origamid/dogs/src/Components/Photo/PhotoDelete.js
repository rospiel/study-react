import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../apiUrl';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const buttonDelete = React.useRef(null);

  async function handleClick() {
    if (isConfirmed() === false) {
      return;
    }
    disabledButton();
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    reloadPage(response);
  }

  function reloadPage(response) {
    if (response.ok) {
      window.location.reload();
    }
  }

  function isConfirmed() {
    return window.confirm('Tem certeza que deseja deletar?');
  }

  function disabledButton() {
    if (loading) {
      buttonDelete.current.disabled = true;
    }
  }

  return (
    <>
      <button
        ref={buttonDelete}
        onClick={handleClick}
        className={styles.delete}
      >
        Deletar
      </button>
    </>
  );
};
<button className={styles.delete}>Deletar</button>;

export default PhotoDelete;
