import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.scss";
import "../styles/sidebar.scss";
import SideBar from "./sidebar";
import Gallery from "./Gallery";
import "../styles/App.scss";
import tetra from "../assets/tetra.png";
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      <div id="App">
        <Helmet>
          <title>Home | Tetra</title>
        </Helmet>
        <SideBar
          customBurgerIcon={<img src={tetra} alt="menu button" />}
          isOpen
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
        />
        <div id="page-wrap"></div>
      </div>
    </HelmetProvider>
  );
}

function NoMatch() {
  return (
    <HelmetProvider>
      <div id="App">
        <Helmet>
          <title>Lost? | Tetra</title>
        </Helmet>
        <SideBar customBurgerIcon={<img src={tetra} alt="menu button" />} pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <h1>Are you lost?</h1>
        </div>
      </div>
    </HelmetProvider>
  );
}
