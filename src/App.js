import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChecklistContainer from "./components/ChecklistContainer";

function App() {


const data = [ 
  {text:"hello",
  title:"yoyoyo",
  id:"denemeLink"
}, {text:"hello",
title:"yoyoyo",
id:"ikiucdort"
}
]

  return (
    <div className="App">
      <ChecklistContainer data={data} />
    </div>
  );
}

export default App;
