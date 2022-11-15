import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {Button} from "../../types";
import NewButton from "../NewButton/NewButton";


interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
  btnConfiguration: Button[];
}

const Modal: React.FC<Props> = ({
                                  show,
                                  title,
                                  onClose,
                                  btnConfiguration,
                                  children
                                }) => {

  return (
    <>
      <Backdrop show={show}
                onClick={onClose}/>
      <div className="modal show"
           style={{display: show ? 'block' : 'none'}}
           onClick={onClose}>
        <div className="modal-dialog"
             onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <NewButton classNameBtn={"btn-close align-self-end"}
                       onClickBtn={onClose}/>
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            <div>
              {children}
            </div>
            <div className="align-self-end">
              {btnConfiguration.map((item) => {
                return <NewButton onClickBtn={item.onClickBtn}
                                  classNameBtn={item.classBtn}
                                  nameBtn={item.title}
                                  key={item.title + 1}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;