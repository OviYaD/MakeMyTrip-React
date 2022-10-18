import React from "react";
import { Icon } from "./icon";
import { icons } from "../utils/iconsInfo";
import LoginModal from "./LoginModal";

export const LandingContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="webp  makeFlex hrtlCenter prependTop5 appendBottom40"
        style={{ marginBottom: "1000px" }}
      >
        <a data-cy="mmtLogo" className="mmtLogo makeFlex">
          <picture className="">
            <source srcset="" type="image/webp" />
            <source
              srcset="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              type="image/jpeg"
            />
            <img
              src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              alt="Make My Trip"
            />
          </picture>
        </a>
        <ul
          className="userSection pushRight"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <li className="makeFlex perfectCenter makeRelative">
            <span className="headerOfferIcon__offericonCont">
              <span className="headerOfferIcon--text">%</span>
              <span className="chSprite chDiscount headerOfferIcon"></span>
            </span>
            <div className="flexOne" style={{ marginRight: "10px" }}>
              <p className="font12 whiteText latoBlack">Super Offers</p>
              <p
                data-cy="AppDownloadSubText"
                className="font10 userPerText appendTop3"
                style={{ marginTop: "-5px" }}
              >
                Explore great deals &amp; offers
              </p>
            </div>
          </li>
          <li
            data-cy="myBiz"
            className="makeFlex perfectCenter makeRelative myBizIntro"
            id="showBizUpgradePopup"
          >
            <span
              data-cy="myBizIcon"
              className="appendRight10 landingSprite myBizIcon"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              &nbsp;
            </span>
            <div className="appendRight5">
              <p className="whiteText" style={{ padding: "0px" }}>
                <span
                  data-cy="myBizText"
                  className="latoBold"
                  style={{ color: "white", margin: "auto" }}
                >
                  Introducing myBiz
                </span>
              </p>
              <p
                data-cy="myBizSubText"
                className="font10 whiteText"
                style={{ marginTop: "-10px" }}
              >
                Business Travel Solution
              </p>
            </div>
          </li>
          <li data-cy="myTrips" className="makeFlex hrtlCenter lhMyTrips">
            <span
              data-cy="myTripsIcon"
              className="landingSprite myTripsIcon appendRight10"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              &nbsp;
            </span>
            <div className="makeFlex column flexOne font10 latoBold">
              <p
                data-cy="MyTripsWidgetText"
                className="whiteText appendBottom3 font11"
              >
                My Trips
              </p>
              <p
                data-cy="MyTripsWidgetSubText"
                className="userPerText"
                style={{ marginTop: "5px" }}
              >
                Manage your bookings
              </p>
            </div>
          </li>
          <li
            data-cy="account"
            className="makeFlex hrtlCenter font10 makeRelative lhUser userLoggedOut"
            style={{ cursor: "pointer" }}
            onClick={handleOpen}
          >
            <LoginModal></LoginModal>
          </li>
          <li className="makeFlex column makeRelative vrtlCenter conCurLang geoSwitcher">
            <div
              data-cy="LanguageSwitcherWidget"
              className="whiteText makeFlex perfectCenter langSlct"
            >
              <span className="flags flagSprite appendRight5 in"></span>
              <span className="latoBold capText font11">
                <span>IN</span> |<span> eng</span> |<span> inr</span>
              </span>
              <span
                data-cy="switcherDownArrow"
                className="switcherDownArrow appendLeft10"
              ></span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
