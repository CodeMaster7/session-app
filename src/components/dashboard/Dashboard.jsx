import React from "react";
import "./dashboard.css";
import MessageFeed from "../messageFeed/MessageFeed";
import functions from "./functions";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userInput: "",
      error: null
    };
    this.getMessages = this.getMessages.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    functions.cdm.call(this);
  }
  componentWillUnmount() {
    clearInterval(this.state.fetchMessages);
  }
  getMessages() {
    functions.getMessages.call(this);
  }
  submitMessage(event) {
    functions.submitMessage.call(this, event);
  }
  handleUserInput(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  logout() {
    functions.logout.call(this);
  }
  render() {
    return (
      <div className="dashboard-component">
        {this.state.error ? (
          <ErrorMessage text={"You are not " + this.props.match.params.username + ", you are an imposter."} />
        ) : (
          <MessageFeed
            logout={this.logout}
            props={this.props}
            state={this.state}
            submitMessage={this.submitMessage}
            handleUserInput={this.handleUserInput}
            inputValue={this.state.userInput}
          />
        )}
      </div>
    );
  }
}
