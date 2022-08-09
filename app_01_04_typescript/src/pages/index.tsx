import React from "react";
import Todo from "../components/todos/Todo";

const IndexPage = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <hr />
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Teach React" />
    </div>
  );
};

export default IndexPage;
