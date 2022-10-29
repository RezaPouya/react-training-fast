import { useState } from "react";
import Backdrop from "./backdrop";
import ConfirmModal from "../_generals/confirmModal";
// import Modal from "./modal";
// import ConfirmBox from "../../classes/confirm";

// props : key/value object 
// {props.title} ==> dynamic expression , single curle braces 
// all these tag are internal react components presented in jsx 
// onClick should be camel case , the casing does matter
// we can define nested function in javascript/react 
// you don't execute function in onClick={} so thats why there is no () .
// note : in javacript , functions are first class object, so we can pass them around as arguments and as values.
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
        <ConfirmModal title="Are you sure?" onCancel={cancelConfirmHandler} onConfirm={confirmDeleteHandler} />
      )}

      {modalIsOpen && <Backdrop onCancel={cancelConfirmHandler} />}
    </div>
  );

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function cancelConfirmHandler() {
    console.log('you didn\'t confirm operation');
    setModalIsOpen(false);
  }

  function confirmDeleteHandler() {
    // thse are unnecessary , but I created it for testing 
    //let confirm = new ConfirmBox('آیا مطمئن هستید');
    //let result = confirm.Ask();

    setModalIsOpen(false);
  }
};

export default Todo;
