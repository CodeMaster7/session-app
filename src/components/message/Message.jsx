import React from "react";
import "./message.css";

export default function(props) {
  return (
    <div className="message-component">
      <span className="message-info">{props.author + " | " + props.timestamp}</span>

      <span>{props.text || "didnt work..."}</span>
    </div>
  );
}
