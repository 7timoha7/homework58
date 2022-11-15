import React from 'react';
import Backdrop from "../Backdrop/Backdrop";

interface Props {
  show: boolean;
  onClose: React.MouseEventHandler;
  onDismiss?: () => void;
  alertText: string;
  typeAlert: string;
}

const Alert: React.FC<Props> = ({
                                  show,
                                  onClose,
                                  onDismiss,
                                  alertText,
                                  typeAlert
                                }) => {

  const getBtnClose = () => {
    if (onDismiss) {
      return <button className="btn-close align-self-end mb-5" onClick={onClose}></button>
    }
  }
  const classAlert = "alert alert-" + typeAlert + " text-center w-50";

  const close = ()=> {
    if (onDismiss === undefined){
      return onClose
    }
  }

  return (

    <>
      <div onClick={close()}>
        <Backdrop show={show} onClick={onClose} children={
          <div className={classAlert} role="alert" style={{display: show ? 'block' : 'none'}}>
            <div className='d-flex justify-content-between align-items-center'>
              <p>{alertText}</p>
              {getBtnClose()}
            </div>
          </div>
        }/>
      </div>

    </>
  );
};

export default Alert;