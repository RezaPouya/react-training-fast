const ConfirmModal = (props: any) => {
  return (
    <div className="modal">
      <p>{props.title}</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );

  function confirmHandler() {
    props.onConfirm();
  }
};

export default ConfirmModal;
