import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { view } from "@risingstack/react-easy-state";
import myStore from "../../store";
import { Component } from "react";
class AddTask extends Component {
  state = {
    taskInfo: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    myStore.todos.push(this.state.taskInfo);
    this.setState({ taskInfo: "" });
  };

  render() {
    return (
      <div className="AddTask">
        <form
          className="form-inline"
          onSubmit={(event) => this.onSubmit(event)}
        >
          <div className="form-group">
            <label
              htmlFor="taskInput"
              className="display-4"
              style={{ fontSize: "2rem", padding: "20px", textAlign: "center" }}
            >
              Add Task
            </label>
            <input
              id="taskInput"
              className="form-control"
              value={this.state.taskInfo}
              onChange={(e) => this.setState({ taskInfo: e.target.value })}
            ></input>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ margin: "20px" }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default view(AddTask);
