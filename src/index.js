import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About } from "../src/components";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/collection/:collectionId" component={App} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
