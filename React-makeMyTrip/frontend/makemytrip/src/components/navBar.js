import React, { useEffect, useState } from "react";
import { Icon } from "./icon";
import { icons } from "../utils/iconsInfo";
import { IconList } from "./iconList";
export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(currentScrollPos > 200);

    setPrevScrollPos(currentScrollPos);
  };

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center"
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <div className="">
        <div className="headerOuter">
          <div className="chHeaderWrapper">
            <div className="chHeaderContainer">
              <span className="logoContainer">
                <a href="" className="chMmtLogo">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                    alt=""
                  />
                </a>
              </span>
              <nav>
                <ul className="makeFlex font12">
                  {icons.map((icon, index) => {
                    return (
                      <IconList
                        key={index}
                        icon={icon.icon}
                        link={icon.link}
                        classDes={icon.clssNme}
                        description={icon.description}
                      ></IconList>
                    );
                  })}
                </ul>
              </nav>
              <ul className="makeFlex hrtlCenter font10 blackText">
                <li className="font12 makeRelative">
                  <div className="makeFlex cursorPointer">
                    <div className="makeFlex hrtlCenter">
                      <span className="latoBold appendBottom">INR</span>
                    </div>
                    <span className="arrow arrowDown"></span>
                  </div>
                </li>
              </ul>
              <ul className="makeFlex hrtlCenter font10 blackText">
                <li className="font12 makeRelative">
                  <div className="makeFlex cursorPointer">
                    <span className="userInfoBoxLabel whiteText appendRight10 font10 latoBlack textCenter">
                      <span>T</span>
                    </span>
                    <div className="makeFlex hrtlCenter">
                      <div className="makeFlex column">
                        <span
                          className="chUserInfoName latoBold"
                          style={{ marginLeft: "5px" }}
                        >
                          Hi Traveller
                        </span>
                      </div>
                      <span className="arrow arrowDown"></span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="makeFLex hrtlCenter font10 blackText">
                <li
                  className="makeFlex hrtlCenter font10 blackText appendLeft20 countryChanger"
                  style={{ marginTop: "13px" }}
                >
                  <div>
                    <p className="appendBottom3 font12">Language</p>
                    <p className="makeFlex hrtlCenter">
                      <span className="latoBold">ENG</span>
                      <span className="arrow arrowDown appendLeft10 appendTop2"></span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
