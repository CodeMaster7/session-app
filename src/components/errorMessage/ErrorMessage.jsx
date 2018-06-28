import React from "react";
import "./errorMessage.css";

export default function(props) {
  return <div className="errormessage-component">{"Error: " + props.text || "error dude"}</div>;
}
