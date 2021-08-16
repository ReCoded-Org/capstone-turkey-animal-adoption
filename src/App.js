import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/NavBar/NavBar";
import "./style/app.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Homepage} />
    </Router>
  );
}

export default App;
