import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {Button} from "../../types";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  btnConfiguration: Button[];
}

const Modal: React.FC<Props> = ({show, title, onClose, btnConfiguration, children}) => {

  return (
    <>
      <Backdrop show={show} onClick={onClose}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}
           onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <button className="btn-close align-self-end" onClick={onClose}></button>
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            <div>
              {children}
            </div>
            <div className="align-self-end">
              {btnConfiguration.map((item) => {
                return <button
                  className={item.classBtn}
                  onClick={item.onClickBtn}
                  key={item.title + 1}>
                  {item.title}
                </button>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;