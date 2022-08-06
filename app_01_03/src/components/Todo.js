const Todo = function (props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );

  function deleteHandler() {
    console.log(`delete button is clicked '${props.title}'`);
  }
};

export default Todo;
