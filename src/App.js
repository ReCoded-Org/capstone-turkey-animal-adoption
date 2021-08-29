import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import Homepage from "./pages/homepage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import ResourcesPage from "./pages/resourcespage/ResourcesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Homepage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route exact path="/about" component={AboutUs} />
    </Router>
    </I18nextProvider>
  );
}

export default App;
