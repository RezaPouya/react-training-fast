import { useState } from "react";
import Modal from "./modal";
import Backdrop from "./backdrop";

const Todo = (props: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={confirmHandler} />
      )}

      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function confirmHandler() {
    setModalIsOpen(false);
  }
};

export default Todo;
