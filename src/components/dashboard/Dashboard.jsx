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
      messages: []
    };
  }
  componentDidMount() {
    axios.get("/api/messages").then(res => {
      this.setState({
        messages: res.data
      });
    });
  }
  render() {
    return (
      <div className="dashboard-component">
        <MessageFeed props={this.props} state={this.state} />
      </div>
    );
  }
}
