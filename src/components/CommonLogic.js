import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";


// this component for showing toast message
export const CustomizeToast = (
  message,
  callback,
  timer = 2000
) => {
    //for success
  return toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: timer,
    onClose: callback ? callback : null,
  });
};
export const CustomizeToastError = (
  message,
  callback,
  timer = 2000
) => {
    //for error
  return toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: timer,
    onClose: callback ? callback : null,
  });
};
