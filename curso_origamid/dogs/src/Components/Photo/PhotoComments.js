import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    scrollUntilEnd();
  }, [comments]);

  function scrollUntilEnd() {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }

  function setStyles() {
    return `${styles.comments} ${props.isSingle ? styles.single : ''}`;
  }

  return (
    <>
      <ul ref={commentsSection} className={setStyles()}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          isSingle={props.isSingle}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
