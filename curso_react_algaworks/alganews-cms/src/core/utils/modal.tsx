import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';

interface modalProps {
  children: React.ReactNode
}

export default function modal(props: modalProps) {
  setTimeout(() => {
    confirmAlert({
      overlayClassName: "modal-overlay",
      customUI: () => {
        return <>
          {props.children}
        </>
      }
    });
  }, 0);
}