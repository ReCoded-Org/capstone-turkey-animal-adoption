import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/NavBar/NavBar";
import ResourcesPage from "./pages/resourcespage/ResourcesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/resources" component={ResourcesPage} />
    </Router>
  );
}

export default App;
