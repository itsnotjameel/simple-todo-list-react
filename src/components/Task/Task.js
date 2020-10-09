import React, { Component } from "react";
// SCSS FILE
import "./Task.scss";
// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
// reactEasyState
import { view } from "@risingstack/react-easy-state";
import myStore from "../../store";

class Task extends Component {
  onClickFinish = (e, index) => {
    myStore.todos = myStore.todos.filter((item, i) => i !== index);
  };

  render() {
    let numTasks = 0;
    return (
      <div className="Task">
        <ul>
          {myStore.todos.map((item, index) => {
            numTasks += 1;
            return (
              <li key={numTasks} style={{ fontSize: "1.5rem" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                  onClick={(e) => {
                    this.onClickFinish(e, index);
                  }}
                />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default view(Task);
