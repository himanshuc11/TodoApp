import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import SignUp from "./SignUp";
import Navbar from "./Navbar";

import firebase from "./Authentication";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({ user: user });
      } else {
        // No user is signed in.
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <SignUp />
      </div>
    );
  }
}

export default App;
