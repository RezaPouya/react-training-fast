import Todo from "./components/Todo";

const App = function () {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Teach React" />
    </div>
  );
};

export default App;
