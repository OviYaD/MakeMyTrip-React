import React from "react";
// import "../../assets/css/style.css";
export const TimeSelector = (props) => {
  return (
    <>
      <div className="departure">
        <span className="latoBold">
          {props.caption}
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <h1>
          {props.date}
          <span style={{ fontSize: "20px", color: "rgb(54, 53, 53)" }}>
            {props.month}' {props.year}
          </span>
        </h1>
        <span>{props.day}</span>
        {/* <date-picker format="MMMM DD (DDD), YYYY" style="z-index: 10;"></date-picker> */}
      </div>
    </>
  );
};
