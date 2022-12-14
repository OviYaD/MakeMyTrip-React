/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon } from "./icon";
import { icons } from "../utils/iconsInfo";
import { IconList } from "./iconList";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropDown } from "./dropDown";
import {Link} from "react-router-dom";
import ToggleButton from './ToggleButton';


export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);

  

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
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
                <Link to="/" className="chMmtLogo">
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                    alt=""
                  />
                </Link>
              </span>
              <nav>
                <ul className="makeFlex font12">
                  {icons.slice(0,8).map((icon, index) => {
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
                  <li data-cy="menu_More" class="moreItem menu_More">
                    <span class="itemWrapper makeFlex hrtlCenter column moreWrapper">
                        <span class="chNavIcon appendBottom2 chSprite chMore"></span>
                        <span class="chNavText">
                            <span class="darkGreyText">More </span><span class="arrow arrowDown"></span>
                        </span>
                    </span>
                  </li>
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
                    <div className="makeFlex hrtlCenter" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
                      <div className="makeFlex column">
                        <span
                          className="chUserInfoName latoBold"
                          style={{ marginLeft: "5px" }}
                        >
                          Hi Traveller
                          {isShown && <DropDown></DropDown>}
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
              <ul className="makeFLex hrtlCenter font10 blackText">
              <li
                  className="makeFlex hrtlCenter font10 blackText appendLeft20 countryChanger"
                  style={{ marginTop: "13px" }}
                >
                  <ToggleButton/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
