import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Homepage} />
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
