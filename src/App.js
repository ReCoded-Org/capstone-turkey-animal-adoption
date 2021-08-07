import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";
import milkdog from "./images/milkdog.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


const heroSectionMaterial = {
  img:`${milkdog}`,
  title:"Adopt Please",
  text:"We are We are non-profit organization who wants to help people who wants to adopt-profit organization"

}

function App() {
  
  return (
    <div className="App">
      <HeroSection heroSectionMaterial={heroSectionMaterial} />
      
    
      
    </div>
  );
}

export default App;
