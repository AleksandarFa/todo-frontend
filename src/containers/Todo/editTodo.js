import React from "react";
import TodoForm from "../Todo/createTodoForm";
const EditTodo = () => {
  return (
    <div className="container">
      <h1>Edit todo page</h1>
      <TodoForm isEditing={true} />
    </div>
  );
};

export default EditTodo;
