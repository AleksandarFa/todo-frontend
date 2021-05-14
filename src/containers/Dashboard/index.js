import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectUser } from "../../store/auth/selectors";
import { logoutRequest } from "../../store/auth/actions";

const Dashboard = () => {
  const user = useSelector(makeSelectUser());
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutRequest());
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
    </div>
  );
};

export default Dashboard;
