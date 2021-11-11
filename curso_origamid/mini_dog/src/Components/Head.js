import React from 'react';

const Head = (props) => {
  function addDescription() {
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }

  function addTitle() {
    document.title = props.title;
  }

  React.useEffect(() => {
    addTitle();
    addDescription();
  }, [props]);

  return <></>;
};

export default Head;
