import React, { useContext } from "react";
import { Icon } from "./icon";
import { icons } from "../utils/iconsInfo";
import { UserContext } from "../api/user";
export const FloatingNavbar = () => {
  const [show, setShow] = React.useState(true);
  const user=useContext(UserContext);
  console.log(user)
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
  // console.log("floating navbar",user);
  return (
    <>
    <div>
      {
        user => {
          console.log("floating navbar",user);
          return (
            <>
            <p>{user}</p></>)
        }
      }
    </div>
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
