import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Confirm from '../../app/components/Confirm/Confirm';

interface ConfirmProps {
  onConfirm?: () => any
  onCancel?: () => any
  question: string
}

export default function confirm(props: ConfirmProps) {

  function confirm(onClose: any) {
    if (props.onConfirm) {
      props.onConfirm();
    }
    onClose();
  }

  function cancel(onClose: any) {
    if (props.onCancel) {
      props.onCancel();
    }
    onClose();
  }

  /* Allow call confirmAlert from another confirmAlert */
  setTimeout(() => {
    confirmAlert({
      overlayClassName: 'confirma-overlay',
      customUI: ({ onClose }) => {
        return (
          <Confirm question={props.question} 
          onConfirm={() => confirm(onClose)} 
          onCancel={() => cancel(onClose)} />
        );
      }
    });      
  }, 0);
}