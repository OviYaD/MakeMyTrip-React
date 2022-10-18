import React from "react";

export const RadioInput = (props) => {
  return (
    <>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="radio"
          id={props.item}
          name={props.name}
          value={props.item}
        />
        <label for={props.item} style={{ marginLeft: "10px" }}>
          {props.item}
        </label>
      </span>
    </>
  );
};
