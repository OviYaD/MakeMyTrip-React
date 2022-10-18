import React from "react";
// import "../../assets/css/style.css";
export const PlaceSelector = (props) => {
  return (
    <>
      <div className="flight latoBold" style={{}}>
        <span>{props.caption}</span>
        <h1 className="latoBlack lineHeight36 " style={{ fontSize: "30px" }}>
          {props.city}
        </h1>
        <p style={{ margin: "0px" }}>{props.airport}</p>
      </div>
    </>
  );
};
