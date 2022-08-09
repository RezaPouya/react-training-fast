import Todo from "./components/Todo";

const App = function (props) {
  return (
    <div>
          <h1>My Todos</h1>
          <hr/>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Teach React" />
    </div>
  );
};

export default App;
