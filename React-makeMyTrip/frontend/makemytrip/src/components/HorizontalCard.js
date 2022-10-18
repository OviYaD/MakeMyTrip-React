import React from "react";

export const HorizontalCard = (props) => {
  return (
    <>
      <div className="horizontal-card" style="margin-top:20px">
        <div className="left-content">
          <img src={props.image} alt="" />
          <p>T and C's Apply</p>
        </div>
        <div className="right-content">
          {props.flights ? <p>DOM FLIGHTS</p> : ""}
          <h3>{props.offerName}</h3>
          <hr align="left" />
          <p style="font-size:13px;font-weight: 500;padding:0px">
            {props.offerDescription}
          </p>
          <div>
            <a href="">BOOK NOW</a>
          </div>
        </div>
      </div>
    </>
  );
};
