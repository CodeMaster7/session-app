import React from "react";
import Message from "../message/Message";
import "./messageFeed.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

// this.state.messages

export default function(props) {
  console.log("props in message feed.jsx", props);
  return (
    <div className="messagefeed-component">
      i am the message feed. welcome {props.props.match.params.username}
      <br />
      <Button method={() => props.props.history.push("/")} name="logout" />
    </div>
  );
}
