import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import Home from "./components/pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/dashboard" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
