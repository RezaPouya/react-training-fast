import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = function (props) {
  // useState -> react-hook :  always return  an array with 2 elements
  // js feature : array destructring
  // 1st element : variable
  // 2nd element : function which can used  to assigned new value to variable ( whenever you call this , react will re-excute the compoenet which function is belonged to)
  const [modalIsOpen, setModalIsOpen] = useState(false); // current state snapshot  -- > see react state as variable managed by react

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={confirmHandler} />
      )}

      {/* sending delegate -- pointer to function to another component  */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );

  function deleteHandler() {
    console.log(`delete button is clicked '${props.title}'`);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    console.log(`close modal handler is clicked`);
    setModalIsOpen(false);
  }

  function confirmHandler() {
    console.log(`on confirm is clicked in Todo component`);
    setModalIsOpen(false);
  }
};

export default Todo;
