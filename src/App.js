import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
// reactEasyState
import { view } from "@risingstack/react-easy-state";
// SCSS FILE
import "./App.scss";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: "50%", margin: "auto" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
            className="display-1"
          >
            To-Do List
          </h1>
          <AddTask />
          <Task />
        </div>
      </div>
    );
  }
}

export default view(App);
