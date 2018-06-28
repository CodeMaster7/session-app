import React from "react";
import Message from "../message/Message";
import Input from "../input/Input";
import "./dashboard.css";
import { Link } from "react-router-dom";
import MessageFeed from "../messageFeed/MessageFeed";
import axios from "axios";

// make this a class component, so it can use a CDM to get messages from server
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userInput: ""
    };
    this.getMessages = this.getMessages.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  componentDidMount() {
    axios.get("/api/messages").then(res => {
      this.setState(
        {
          messages: res.data,
          fetchMessages: setInterval(this.getMessages, 1000 * 10)
        },
        () => {
          var mc = document.getElementById("messages-container");
          mc.scrollTop = mc.scrollHeight;
        }
      );
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.fetchMessages);
  }
  getMessages() {
    console.log("getting messages");
    axios.get("/api/messages").then(res => {
      this.setState(
        {
          messages: res.data
        },
        () => {
          var mc = document.getElementById("messages-container");
          mc.scrollTop = mc.scrollHeight;
        }
      );
    });
  }
  submitMessage(event) {
    console.log("got this key: ", event.key);
    // if pressed enter
    if (event.key === "Enter" && this.state.userInput.length) {
      // get timestamp
      const timestamp = new Date().toTimeString().substr(0, 8);
      // submit message, clear user input
      // server erquires a text, timestamp and author
      axios
        .post("/api/message", {
          text: this.state.userInput,
          author: this.props.match.params.username
        })
        .then(res => {
          this.setState(
            {
              userInput: "",
              messages: res.data
            },
            () => {
              var mc = document.getElementById("messages-container");
              mc.scrollTop = mc.scrollHeight;
            }
          );
        });
    }
  }
  handleUserInput(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    console.log("dash state", this.state);
    return (
      <div className="dashboard-component">
        <MessageFeed
          props={this.props}
          state={this.state}
          submitMessage={this.submitMessage}
          handleUserInput={this.handleUserInput}
          inputValue={this.state.userInput}
        />
      </div>
    );
  }
}
