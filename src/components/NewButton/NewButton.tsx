import React from 'react';

interface Props {
  classNameBtn: string;
  onClickBtn: () => void;
  nameBtn?:string;
}

const NewButton:React.FC<Props> = ({classNameBtn, nameBtn, onClickBtn}) => {
  return (
    <>
      <button
        type="button"
        className= {classNameBtn}
        onClick={onClickBtn}
      >{nameBtn}
      </button>
    </>
  );
};

export default NewButton;