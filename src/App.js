import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import Homepage from "./pages/homepage/HomePage";
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
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/about" component={AboutUs} />
    </Router>
  );
}

export default App;
