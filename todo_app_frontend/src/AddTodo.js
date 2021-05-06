import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ todo: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.state.todo !== "") {
      alert(this.state.todo);
    }
  }

  render() {
    return (
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          onChange={this.handleChange}
          value={this.state.todo}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default AddTodo;
