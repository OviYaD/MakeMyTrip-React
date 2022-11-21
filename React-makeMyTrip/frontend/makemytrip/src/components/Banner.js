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
import DateTimeSelector from "./DateTimeSelector";

export const Banner = () => {
  const [showFloatNav, setFloatNavVisibility] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  let navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search");
  };



  return (
    <>
      <div className="container-holder">
        <LandingContainer></LandingContainer>
        {showFloatNav ? <FloatingNavbar></FloatingNavbar> : <></>}
        <div
          className="tickets"
          style={{ marginTop: "-30px", paddingTop: "30px" }}
        >
          <div className="hsw-seo-header makeFlex perfectCenter">
            <h1>
              Book
              <a href="/hotels/" className="darkGreyText">
                Domestic
              </a>
              and
              <a href="/hotels-international/" className="darkGreyText">
                International
              </a>
              Property Online. To list your property
              <a href="https://www.makemytrip.com/hotels/hotelier-register.htm">
                click here
              </a>
            </h1>
          </div>
          {/* <div class="hsw_inner">
              <div class="hsw_inputBox selectHtlCity">
                  <label for="city">
                      <span data-cy="hotelCityLabel" class="lbl_input latoBold appendBottom5">City, Property name or Location</span>
                      <input data-cy="city" id="city" type="text" class="hsw_inputField lineHeight36 latoBlack font30" dir="ltr" readonly="" value="Goa" />
                      <p data-cy="hotelCountryLabel" class="code">India</p>
                  </label>
              </div>
              <div class="hsw_inputBox dates">
                  <label for="checkin">
                      <span class="lbl_input latoBold appendBottom5">CHECK-IN</span><input data-cy="checkin" id="checkin" type="text" readonly="" />
                      <p data-cy="checkInDate" class="blackText font20 code"><span class="font30 lineHeight36 latoBlack">14</span><span> Nov</span><span class="shortYear">22</span></p>
                      <p class="code">Monday</p>
                  </label>
              </div>
              <div class="hsw_inputBox dates">
                  <label for="checkout">
                      <span class="lbl_input latoBold appendBottom5">CHECK-OUT</span><input data-cy="checkout" id="checkout" type="text" readonly="" />
                      <p data-cy="checkOutDate" class="blackText font20 code"><span class="font30 lineHeight36 latoBlack">15</span><span> Nov</span><span class="shortYear">22</span></p>
                      <p class="code">Tuesday</p>
                  </label>
                  <p class="dateErrorMsg whiteText" id="range_error">You are booking hotel for more than 30 days</p>
              </div>
              <div class="hsw_inputBox roomGuests">
                  <label for="guest">
                      <span data-cy="guestLabel" class="lbl_input latoBold appendBottom5">ROOMS &amp; GUESTS</span><input data-cy="guest" id="guest" type="text" class="hsw_inputField guests font20" readonly="" />
                      <p data-cy="roomGuestCount" class="blackText font20 code truncate">
                          <span class="appendRight10">
                              <span class="font30 lineHeight36 latoBlack">1</span><span> Room </span><span class="font30 lineHeight36 latoBlack appendRight5">2</span><span class="appendRight5">Adults</span>
                              <span class="font30 lineHeight36 latoBlack appendRight5">2</span><span>Children</span>
                          </span>
                      </p>
                  </label>
              </div>
          </div> */}

          <div className="hsw_inner_Banner">
            <PlaceSelector></PlaceSelector>
            <DateTimeSelector/>
            <CategorySelector ></CategorySelector>
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
            className="search-button"
            style={{ zIndex: "1", cursor: "pointer" }}
            onClick={handleSearch}
          >
            SEARCH
          </div>
        </div>
      </div>
    </>
  );
};
