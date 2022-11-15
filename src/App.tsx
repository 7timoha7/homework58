import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";
import NewButton from "./components/NewButton/NewButton";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertNoX, setShowAlertNoX] = useState(false);
  const cancel = () => setShowModal(false);
  const cancelAlert = () => setShowAlert(false);
  const cancelAlertNoX = () => setShowAlertNoX(false);
  const newAlert = () => setShowAlert(true);

  const BtnConfiguration = [
    {classBtn: 'btn btn-primary', title: 'Continue', onClickBtn: newAlert},
    {classBtn: 'btn btn-danger', title: 'Close', onClickBtn: cancel}
  ]

  return (
    <div className="d-flex justify-content-around mt-5">

      <NewButton classNameBtn={"btn btn-primary"}
                 onClickBtn={() => setShowModal(true)}
                 nameBtn={'Modal'}/>

      <NewButton classNameBtn={"btn btn-danger"}
                 onClickBtn={() => setShowAlert(true)}
                 nameBtn={'Alert'}/>

      <NewButton classNameBtn={"btn btn-warning"}
                 onClickBtn={() => setShowAlertNoX(true)}
                 nameBtn={'Alert No X'}/>

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
    </div>
  );
}

export default App;
