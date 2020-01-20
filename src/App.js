import React, { Component } from "react";
import Person from "./components/Person/Person.js";
import "./App.css";

class App extends Component {
  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />
      </div>
    );

    // equal to
    // return React.createElement(
    //   "div",
    //   { className: 'App' },
    //   React.createElement("h1", null, `Hi, I'm a React App`)
    // );
  }
}

export default App;
