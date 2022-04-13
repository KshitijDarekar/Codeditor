import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  return (
    <div className="card" style={{margin: `${props.margin}`}}>
      <FontAwesomeIcon icon={props.icon} className="card-icon" />
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
