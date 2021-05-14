import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectUser } from "../../store/auth/selectors";
import { logoutRequest } from "../../store/auth/actions";
import { requestAllTodos } from "../../store/todos/actions";
import { makeSelectAllTodos } from "../../store/todos/selectors";

const Dashboard = () => {
  const user = useSelector(makeSelectUser());
  const todos = useSelector(makeSelectAllTodos());
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  const handleShowTodos = () => {
    dispatch(requestAllTodos());
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
      {user && (
        <div>
          <p>First name: {user.first_name}</p>
          <p>Last name: {user.last_name}</p>
        </div>
      )}
      <button onClick={handleShowTodos} className="btn btn-primary">
        Show all todos
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
