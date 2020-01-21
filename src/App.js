import React, { Component } from "react";
import Person from "./components/Person/Person.js";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  };

  switchNameHandler = () => {
    // console.log("Was clicked!");
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: "some other value"
    });
  };

  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
