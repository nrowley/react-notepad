import React from "react";
import Topnav from "./components/Topnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Hello from "./components/Hello";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Topnav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Hello} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
