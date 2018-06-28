import React from "react";
import "./button.css";
export default function(props) {
  return (
    <button className="button-component" onClick={props.method}>
      {props.name}
    </button>
  );
}
