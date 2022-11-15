import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertNoX, setShowAlertNoX] = useState(false);
  const cancel = () => setShowModal(false);
  const cancelAlert = () => setShowAlert(false);
  const cancelAlertNoX = () => setShowAlertNoX(false)
  const newAlert = () => setShowAlert(true)


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

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setShowAlert(true)}
      >alert
      </button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setShowAlertNoX(true)}
      >alert No X
      </button>

      <Alert show={showAlert}
             onClose={cancelAlert}
             onDismiss={cancelAlert}
             alertText={'This is a warning type alert'}
             typeAlert={'warning'}
      />

      <Alert show={showAlertNoX}
             onClose={cancelAlertNoX}
             alertText={'This is a success type alert'}
             typeAlert={'success'}/>

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
