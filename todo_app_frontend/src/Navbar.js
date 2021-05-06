import React, { Component } from "react";
import firebase from "firebase/app";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        //alert("You are signed out");
        console.log(firebase.auth().currentUser);
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  }

  render() {
    return (
      <nav className="navbar-container">
        <p>Todo list</p>
        <ul className="user">
          <li className="navbar-element">Todo List</li>
          <li className="navbar-element">
            <button onClick={this.logout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
