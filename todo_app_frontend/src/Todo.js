import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="todo-item">
        <p>Description</p>
        <div className="todo-images">
          <img src="trash.png" alt="Trash" />
          <img src="check.png" alt="Check" />
        </div>
      </div>
    );
  }
}

export default Todo;
