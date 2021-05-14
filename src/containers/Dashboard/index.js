import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => {
    return state.authReducer.user;
  });
  return (
    <div>
      <h1>Dashboard page</h1>
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
