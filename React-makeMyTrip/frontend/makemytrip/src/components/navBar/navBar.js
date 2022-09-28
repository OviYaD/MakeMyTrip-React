import React from "react";
import "../../css/style.css";
import { icons } from "./icons";

export const NavBar = () => {
  return (
    <>
      <div className="data">
        <div className="categories">
          {icons.map((icon, index) => {
            return (
              <span key={index}>
                <i className={icon.icon}></i>
                {icon.description}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
