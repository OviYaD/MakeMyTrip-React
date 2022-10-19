import React, { useState } from "react";
import { NavBar } from "./navBar";
import { PlaceSelector } from "./ticketSelectors/placeSelector";
import { TimeSelector } from "./ticketSelectors/timeSelector";
import { CategorySelector } from "./ticketSelectors/categorySelector";
import { RadioInput } from "./RadioInput";
import { flights } from "../utils/FeaturedSearch";
import { RecentSearch } from "./recentSearch";
import { Ticket } from "./__test__/ticketCounter/Ticket";
import { useNavigate } from "react-router-dom";
import { CitySelector } from "./Modals/citySelector";
import { LandingContainer } from "./landingContainer";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import { Modal } from "./__test__/modal";
import Button from "react-bootstrap/Button";
import { MyVerticallyCenteredModal } from "./__test__/modal";
import { FloatingNavbar } from "./floatingNavbar";
export const Banner = () => {
  const [showFloatNav, setFloatNavVisibility] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);

  let navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search");
  };
  return (
    <>
      {/* <div style={{ position: "sticky", top: "0", zIndex: "20" }}>
        <NavBar></NavBar>
      </div> */}
      <div className="container-holder">
        {/* <img
          className="logo"
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          alt=""
        /> */}
        <LandingContainer></LandingContainer>
        {showFloatNav ? <FloatingNavbar></FloatingNavbar> : <></>}
        <div
          className="tickets"
          style={{ marginTop: "-30px", paddingTop: "30px" }}
        >
          <div class="hsw-seo-header makeFlex perfectCenter">
            <h1>
              Book
              <a href="/hotels/" class="darkGreyText">
                Domestic
              </a>
              and
              <a href="/hotels-international/" class="darkGreyText">
                International
              </a>
              Property Online. To list your property
              <a href="https://www.makemytrip.com/hotels/hotelier-register.htm">
                click here
              </a>
            </h1>
          </div>

          {/* <div className="ticket-type">
            <span className="selected-ticket-type" id="oneway">
              <input type="radio" hidden />
              <i className="fa-solid fa-check-circle"></i> ONEWAY
            </span>
            <span>
              <input type="radio" />
              <span hidden>
                <i className="fa-solid fa-check-circle"></i>
              </span>
              ROUND TRIP
            </span>
            <span>
              <input type="radio" />
              <span hidden>
                <i className="fa-solid fa-check-circle"></i>
              </span>
              MULTI CITY
            </span>
          </div> */}
          <div className="flight-search">
            <PlaceSelector
              caption="CITY, PROPERTY NAME OR LOCATION"
              city="Delhi"
              airport="India"
            ></PlaceSelector>
            <CitySelector></CitySelector>

            <TimeSelector
              caption="CHECK-IN"
              date="9"
              month="Sep"
              year="22"
              day="Monday"
            ></TimeSelector>
            <TimeSelector
              caption="CHECK-OUT"
              date="9"
              month="Sep"
              year="22"
              day="Monday"
            ></TimeSelector>
            <CategorySelector roomCount="1" personCount="2"></CategorySelector>
          </div>
          <div className="fare-search">
            <span className="fare-select">Select A Fare Type:</span>
            <div className="fare-type">
              {flights.map((option, index) => {
                return (
                  <RadioInput
                    key={index}
                    item={option}
                    name="fare-type"
                  ></RadioInput>
                );
              })}
            </div>
            <div className="trending">
              <RecentSearch></RecentSearch>
            </div>
          </div>

          <div
            class="search-button"
            style={{ zIndex: "20", cursor: "pointer" }}
            onClick={handleSearch}
          >
            SEARCH
          </div>
        </div>
      </div>
      {/* <Button variant="primary">Launch vertically centered modal</Button> */}

      {/* <button onClick={() => setModalShow(true)}>LOGIN</button> */}
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </>
  );
};
