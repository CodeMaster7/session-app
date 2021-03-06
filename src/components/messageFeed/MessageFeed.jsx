import React from "react";
import Message from "../message/Message";
import "./messageFeed.css";
import Button from "../button/Button";

// this.state.messages
// create ref for messages-container
// mc.scrollTop = mc.scrollHeight

export default function(props) {
  const messages = props.state.messages.map(function(message) {
    return <Message key={message.id} timestamp={message.timestamp} author={message.author} text={message.text} />;
  });
  return (
    <div className="messagefeed-component">
      i am the message feed. welcome {props.props.match.params.username}
      <br />
      <Button method={props.logout} name="logout" />
      <div id="messages-container">{messages}</div>
      <p>here we can enter meesages</p>
      <input
        className="message-input"
        type="text"
        placeholder="type o messga fren"
        onKeyUp={props.submitMessage}
        onChange={props.handleUserInput}
        value={props.inputValue}
      />
    </div>
  );
}
