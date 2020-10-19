import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.scss";
import "../styles/sidebar.scss";
import SideBar from "./sidebar";
import Gallery from "./Gallery";
import "../styles/App.scss";
import tetra from "../assets/tetra.png";

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div id="App">
      <SideBar
        customBurgerIcon={<img src={tetra} alt="menu button" />}
        isOpen
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
      />
      <div id="page-wrap"></div>
    </div>
  );
}

function NoMatch() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <h1>Are you lost?</h1>
      </div>
    </div>
  );
}
