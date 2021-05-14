import React from "react";
import Routes from "./Routes";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Routes />
      </div>
    </ConnectedRouter>
  );
}

export default App;
