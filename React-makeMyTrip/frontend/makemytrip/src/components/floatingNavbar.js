import React from "react";
import { Icon } from "./icon";
import { icons } from "../utils/iconsInfo";

export const FloatingNavbar = () => {
  const [show, setShow] = React.useState(true);
  const controlNavBar = () => {
    if (window.scrollY > 10) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  //   React.useEffect(() => {
  //     window.addEventListener("scroll", controlNavBar);
  //     return () => {
  //       window.removeEventListener("scroll", controlNavBar);
  //     };
  //   }, []);
  return (
    <>
      {show ? (
        <div className="data" style={{ marginTop: "-40px" }}>
          <div className="categories">
            {icons.map((icon, index) => {
              return (
                <Icon
                  key={index}
                  icon={icon.icon}
                  link={icon.link}
                  classDes={icon.clssNme}
                  description={icon.description}
                  textDec={icon.textDec}
                ></Icon>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
