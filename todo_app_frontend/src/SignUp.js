import React, { Component } from "react";
import firebase from "./Authentication";
import "firebase/auth";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.gmailLogin = this.gmailLogin.bind(this);
    this.facebookLogin = this.facebookLogin.bind(this);
    this.gitHubLogin = this.gitHubLogin.bind(this);
  }

  gmailLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode, errorMessage);
      });
  }

  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;
        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  }

  gitHubLogin() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;

        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  render() {
    return (
      <div className="flex-container">
        <button className="flex-item zocial gmail" onClick={this.gmailLogin}>
          Gmail
        </button>
        <button
          className="flex-item zocial facebook"
          onClick={this.facebookLogin}
        >
          Facebook
        </button>
        <button className="flex-item zocial github" onClick={this.gitHubLogin}>
          Github
        </button>
      </div>
    );
  }
}

export default SignUp;
