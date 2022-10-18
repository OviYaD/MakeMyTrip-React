import React from "react";

export const TopHeaderSticky = () => {
  return (
    <>
      <header style={{ position: "sticky", top: "0" }}>
        <div
          className="hsw minWidth1200 topHeaderSticky"
          style={{ marginLeft: "-10px" }}
        >
          <div class="hsw_inner" id="hsw_inner_components">
            <div class="hsw_inputBox" id="hsw_inputBox_city">
              <label for="city" class="lbl_input latoBold font12 blueText">
                CITY, AREA or PROPERTY
              </label>
              <input
                type="text"
                id="city"
                class="hsw_inputField font16 whiteText"
                value="Erode, Tamil Nadu, I..."
                readonly=""
                placeholder=""
              />
            </div>
            <div class="hsw_inputBox" id="hsw_inputBox_check_in">
              <label
                for="checkin"
                class="lbl_input latoBold font12 blueText capText"
              >
                Check-In:
              </label>
              <input
                type="text"
                id="checkin"
                class="hsw_inputField font16 whiteText"
                value="Tue, 18 Oct 2022"
                readonly=""
              />
            </div>
            <div class="hsw_inputBox" id="hsw_inputBox_check_out">
              <label
                for="checkout"
                class="lbl_input latoBold font12 blueText capText"
              >
                Check-Out:
              </label>
              <input
                type="text"
                id="checkout"
                class="hsw_inputField font16 whiteText"
                value="Wed, 19 Oct 2022"
                readonly=""
              />
              <p class="dateErrorMsg whiteText" id="range_error">
                You are booking hotel for more than 30 days
              </p>
            </div>
            <div class="hsw_inputBox" id="hsw_inputBox_room_guests">
              <label
                for="guest"
                class="lbl_input latoBold font12 blueText capText"
              >
                Rooms &amp; Guests
              </label>
              <input
                type="text"
                id="guest"
                class="hsw_inputField guests font16 whiteText"
                value="1 Room, 2 Adults"
                readonly=""
              />
            </div>
            <button class="primaryBtn hsw_searchButton" id="hsw_search_button">
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
