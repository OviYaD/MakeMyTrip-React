import React from "react";

export const Icon = (props) => {
  return (
    <>
      <a href={props.link} style={{ textDecoration: "none", color: "grey" }}>
        <span>
          <span className={`chNavIcon chSprite ${props.classDes}`}></span>
          <div
            className={props.textDec}
            style={{
              // marginTop: "-18px",
              marginBottom: "-9px",
              paddingBottom: "5px"
              // bottom: "-100px"
            }}
          >
            {props.description}
          </div>
        </span>
      </a>
    </>
  );
};
