import React from "react";

export default function Planner(props) {
  const selected = props.selected;
  return (
    <div className="planner-container">
      <div className="planner-content">
        <div className="planner-body">
          <div className="planner-title">Tasks to do today:</div>
          {selected.map((elt, ind) => {
            return (
              <div className="planner-item" key={ind}>
                - {elt.name}
              </div>
            );
          })}
        </div>
        <div className="planner-total">
          Estimated hours: {" "}
          {selected.map((elt) => elt.est_time).reduce((a, b) => a + b, 0)}
        </div>
      </div>
    </div>
  );
}
