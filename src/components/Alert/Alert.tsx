import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import NewButton from "../NewButton/NewButton";
import {motion, AnimatePresence} from "framer-motion"


interface Props {
  show: boolean;
  onClose: () => void;
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
      return <NewButton classNameBtn={"btn-close align-self-end mb-5"}
                        onClickBtn={onClose}/>
    }
  }

  const classAlert = "alert alert-" + typeAlert + " text-center w-50";

  const close = () => {
    if (onDismiss === undefined) {
      return onClose
    }
  }

  return (

    <>
      <div onClick={close()}>
        <Backdrop show={show}
                  onClick={onClose}
                  children={
                    <AnimatePresence>
                      {show && (
                        <motion.div className={classAlert}
                                    role="alert"
                                    style={{display: show ? 'block' : 'none'}}
                                    animate={{
                                      scale: [1, 2, 2, 1, 1],
                                      rotate: [0, 0, 270, 270, 0],
                                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                    }}
                        >
                          <div className='d-flex justify-content-between align-items-center'>
                            <p>{alertText}</p>
                            {getBtnClose()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  }/>
      </div>
    </>
  );
};

export default Alert;