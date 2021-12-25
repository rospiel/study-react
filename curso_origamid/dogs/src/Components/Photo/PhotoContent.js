import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, isSingle }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);

  function showDeleteOrAuthor() {
    return isAuthorPhoto() ? (
      <PhotoDelete id={photo.id} />
    ) : (
      <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
    );
  }

  function isAuthorPhoto() {
    return user.data && user.data.username === photo.author;
  }

  function setStyles() {
    return `${styles.photo} ${isSingle ? styles.single : ''}`;
  }

  return (
    <div className={setStyles()}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {showDeleteOrAuthor()}
            <span className={styles.view}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments isSingle={isSingle} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
