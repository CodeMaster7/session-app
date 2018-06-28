import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: null
    };
    this.updateField = this.updateField.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  updateField(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  login() {
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0) {
      return this.setState({
        error: "username and password required"
      });
    }
    axios
      .post("/api/login", { username, password })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/dashboard/" + res.data.username);
        }
      })
      .catch(error => {
        this.setState({
          error: error.response.data.error
        });
      });
  }
  register() {
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0)
      return this.setState({
        error: "username and password required"
      });
    axios
      .post("/api/register", { username, password })
      .then(res => {
        console.log("status: ", res.status);
        if (res.status === 200) {
          // successful registration of user
          this.props.history.push("/dashboard/" + res.data.username);
        } else {
          console.log("got error, setting state ", res.data.error);
          this.setStatus({
            // set error message on state
            error: res.data.error
          });
        }
      })
      .catch(error => {
        console.log("caught this, ", error.response.data.error);
        // set error on state;
        this.setState({
          error: error.response.data.error
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="login-component">
        <h2>Session Messenger App</h2>
        <br />
        {this.state.error && <ErrorMessage text={this.state.error} />}
        <input onChange={this.updateField} id="username" type="text" placeholder="enter username" />
        <br />
        <input onChange={this.updateField} id="password" type="password" placeholder="enter password" />
        <br />
        <Button method={this.login} name="login" />
        <Button method={this.register} name="register" />
      </div>
    );
  }
}
