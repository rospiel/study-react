import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Info from '../../app/components/Info/Info';

interface InfoProps {
  description: string
  title: string
}

export default function info(props: InfoProps) {
  /* Allow call confirmAlert from another confirmAlert - event loop macrotask */
  setTimeout(() => {
    confirmAlert({
      overlayClassName: 'info-overlay',
      customUI: () => {
        return (
          <Info title={props.title} description={props.description}/>
        );
      }
    });  
  }, 0);
}