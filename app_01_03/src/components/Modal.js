const Modal = function (props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );

  function confirmHandler() {
    console.log("modal confirmed");
    props.onConfirm();
  }
};

export default Modal;
