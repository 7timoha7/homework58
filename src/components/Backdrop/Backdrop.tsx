import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  onClick?: React.MouseEventHandler
}

const Backdrop: React.FC<Props> = ({show, children}) => {
  return (
    <div className="modal-backdrop show"
         style={{display: show ? 'block' : 'none'}}>
      <div className='d-flex align-items-center w-100 h-100 justify-content-center'>
        {children}
      </div>
    </div>
  );
};

export default Backdrop;