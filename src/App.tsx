import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancel = () => setShowModal(false);
  const newAlert = () => alert('New Alert')


const BtnConfiguration = [
  {classBtn: 'btn btn-primary', title: 'Continue', onClickBtn: newAlert},
  {classBtn: 'btn btn-danger', title: 'Close', onClickBtn: cancel}
]

  return (
    <div className="d-flex justify-content-around mt-5">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >Modal
      </button>

      <Modal
        show={showModal}
        title={'Some kinda modal title'}
        onClose={cancel}
        btnConfiguration={BtnConfiguration}
      >
        <div className="modal-body">
          This is modal content
        </div>
      </Modal>
    </div>
  );
}

export default App;
