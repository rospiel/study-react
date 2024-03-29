import React from 'react';
import { COMMENT_POST } from '../../apiUrl';
import useFetch from '../../Hooks/useFetch';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, isSingle }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    updateListComments(response, json);
  }

  function updateListComments(response, json) {
    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment('');
    }
  }

  function setStyles() {
    return `${styles.form} ${isSingle ? styles.single : ''}`;
  }

  return (
    <form className={setStyles()} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
