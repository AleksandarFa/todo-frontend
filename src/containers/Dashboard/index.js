import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectUser } from "../../store/auth/selectors";
import { logoutRequest } from "../../store/auth/actions";
import { requestAllTodos } from "../../store/todos/actions";
import { makeSelectAllTodos } from "../../store/todos/selectors";
import { CREATE_TODO } from "../../routes";

import TodoItem from "../Todo/";

const Dashboard = () => {
  const user = useSelector(makeSelectUser());
  const todos = useSelector(makeSelectAllTodos());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllTodos());
  }, []);

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div>
      <h1>Dashboard page</h1>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
      <a href={CREATE_TODO} className="btn btn-success">
        +
      </a>
      {user && (
        <div>
          <p>First name: {user.first_name}</p>
          <p>Last name: {user.last_name}</p>
        </div>
      )}
      <ul className="list-group m-3">
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                key={todo.id}
                title={todo.title}
                priority={todo.priority_choice}
                description={todo.description}
                completed={todo.completed}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Dashboard;
