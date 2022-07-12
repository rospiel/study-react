import React from 'react';

interface HeadProps {
  title: string
  description: string
}

const Head = (props: HeadProps) => {
  React.useEffect(() => {
    document.title = props.title + ' | Study';
    document.querySelector("meta[name='description']")!.setAttribute('content', props.description || '');
  }, [props]);

  return <></>;
};

export default Head;
