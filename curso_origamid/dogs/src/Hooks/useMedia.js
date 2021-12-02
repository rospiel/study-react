import React from 'react';
import propTypes from 'prop-types';

const useMedia = (media) => {
  const event = 'resize';
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    /*  GARANTIR QUE SERÁ CHAMADO AO MENOS UMA VEZ */
    changeMatch();

    window.addEventListener(event, changeMatch);
    return () => {
      window.removeEventListener(event, changeMatch);
    };
  }, [media]);

  return match;
};

useMedia.propTypes = {
  media: propTypes.string.isRequired,
};

export default useMedia;
