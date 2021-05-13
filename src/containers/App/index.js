import React from "react";
import Routes from "./Routes";
import { Router } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
