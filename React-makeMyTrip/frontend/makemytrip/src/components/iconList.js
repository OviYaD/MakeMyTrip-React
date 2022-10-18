import React from "react";

export const IconList = (props) => {
  return (
    <>
      <li className={`"menu_${props.classDes}`}>
        <div>
          <a href={props.link} className="makeFlex hrtlCenter column">
            <span
              className={`chNavIcon appendBottom2 chSprite ${props.classDes}`}
            ></span>
            <span className="chNavText darkGreyText">{props.description}</span>
          </a>
        </div>
      </li>
    </>
  );
};
