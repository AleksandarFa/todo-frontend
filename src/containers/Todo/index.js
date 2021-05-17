import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { EDIT_TODO } from "../../routes";
import { deleteTodo } from "../../store/todos/actions";

const TodoItem = ({ id, title, priority, description, completed }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
    // window.location.reload();
  };

  return (
    <li className="list-group-item">
      <div className="todo-item">
        <div className="d-flex flex-column">
          <h3>{title}</h3>
          <p>Priority: {priority}</p>
          <p className="border">{description}</p>
          {completed ? (
            <p className="bg-success text-white text-center w-25">COMPLETED</p>
          ) : (
            <p className="bg-warning text-white text-center w-25">
              Not completed
            </p>
          )}
        </div>

        <button className="btn btn-danger mr-2" onClick={handleDelete}>
          Delete
        </button>
        <Link className="btn btn-warning" to={EDIT_TODO.replace(":id", id)}>
          Edit
        </Link>
      </div>
    </li>
  );
};

export default TodoItem;
