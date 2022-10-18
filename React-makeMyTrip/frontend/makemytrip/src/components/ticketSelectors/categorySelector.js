import React from "react";

export const CategorySelector = (props) => {
  return (
    <>
      <div
        className="departure latoBold"
        style={{ border: "none", width: "200px" }}
      >
        <span>
          ROOMS &amp; GUESTS
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <h1>
          {props.roomCount}
          <span
            className="blackText"
            style={{ fontSize: "20px", marginLeft: "5px", marginRight: "5px" }}
          >
            Room
          </span>
          {props.personCount}
          <span
            className="blackText"
            style={{ fontSize: "20px", marginLeft: "5px", marginRight: "5px" }}
          >
            Adults
          </span>
        </h1>
        <span>{props.type}</span>
        <br />
        {/* <span
          style={{
            fontSize: "12px",
            color: "rgb(255, 136, 0)",
            fontWeight: "600"
          }}
        >
          Group Booking Now Available!
        </span> */}
      </div>
    </>
  );
};
