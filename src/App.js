import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import Homepage from "./pages/homepage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import ResourcesPage from "./pages/resourcespage/ResourcesPage";
import SearchPage from "./pages/searchpage/SearchPage";
import Profile from "./pages/profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Homepage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/search" component={SearchPage} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
