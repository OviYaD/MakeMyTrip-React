import React from "react";

export const Ticket = () => {
  return (
    <>
      <h1></h1>
      <div className="tickets">
        <div className="ticket-type">
          <span className="selected-ticket-type" id="oneway">
            <input type="radio" hidden />
            <i className="fa-solid fa-check-circle"></i> ONEWAY
          </span>
          <span>
            <input type="radio" />
            <span hidden>
              {" "}
              <i className="fa-solid fa-check-circle"></i>
            </span>
            ROUND TRIP
          </span>
          <span>
            <input type="radio" />
            <span hidden>
              {" "}
              <i className="fa-solid fa-check-circle"></i>
            </span>
            MULTI CITY
          </span>
        </div>
        <div className="flight-search">
          <div className="flight">
            <span>FROM</span>
            <h1>Delhi</h1>
            <span>DEL, Delhi Airport India</span>
          </div>
          <i className="fa-solid fa-right-left"></i>
          <div className="flight">
            <span>TO</span>
            <h1>Bengaluru</h1>
            <span>BRL, Kempegowda International Airport</span>
          </div>
          <div className="departure">
            <span>
              DEPARTURE <i className="fa-solid fa-chevron-down"></i>
            </span>

            {/* <date-picker format="MMMM DD (DDD), YYYY" style="z-index: 10;"></date-picker> */}
          </div>
          <div className="departure">
            <span>
              RETURN <i className="fa-solid fa-chevron-down"></i>
            </span>
            <br />

            <span style="font-size: 15px; color: grey; font-weight: 700">
              Tap to add a return date for bigger discounts
            </span>
            {/* <date-picker format="MMMM DD (DDD), YYYY" style="z-index: 10;"></date-picker> */}
          </div>
          <div className="departure" style="border: none; width: 200px">
            <span>
              TRAVELLERS & className{" "}
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <h1>
              1 <span style="font-size: 20px">Traveller</span>
            </h1>
            <span>Economy/Premium</span>
            <br />
            <span
              style="
                  font-size: 13px;
                  color: rgb(255, 136, 0);
                  font-weight: 600;
                "
            >
              Group Booking Now Available!
            </span>
          </div>
        </div>
        <div className="fare-search">
          <span className="fare-select">Select A Fare Type:</span>
          <div className="fare-type">
            <span className="selected-fare-type">
              <i className="fa-solid fa-check-circle"></i>Regular Fares
            </span>
            <span>
              <input type="radio" /> Armed Forces Fares
            </span>
            <span>
              <input type="radio" />
              Student Fares
            </span>
            <span>
              <input type="radio" />
              Senior Citizen Fares
            </span>
            <span>
              <input type="radio" />
              Doctors & Nurses Fares
            </span>
            <span>
              <input type="radio" />
              Double Seat Fares
            </span>
          </div>
          <div className="trending">
            <span className="selected-trend-type">Trending Search:</span>
            <div className="trend-type">
              <span>
                Delhi <i className="fa-solid fa-right-long"></i> Kerala
              </span>
              <span>
                Mumbai <i className="fa-solid fa-right-long"></i> Bangkok
              </span>
            </div>
          </div>
        </div>
        <div className="search-button">SEARCH</div>
        <div className="data">
          <div className="additional-feature">
            <span className="feature-type">
              <p>
                <i className="fa-solid fa-globe" style="margin-right:5px"></i>
                <span>
                  {" "}
                  Where2Go <br />
                  <span style="color:grey;font-size:10px;margin-top:-30px">
                    Loan credit and more
                  </span>
                </span>
              </p>
            </span>
            <span className="feature-type">
              <p>
                <i className="fa-solid fa-image"></i>{" "}
                <span style="margin-left:10px">
                  {" "}
                  Trip Money <br />
                  <span style="color:grey;font-size:10px;margin-top:-30px">
                    Loan credit and more
                  </span>
                </span>
              </p>
            </span>
            <span className="feature-type">
              <p>
                <i className="fa-solid fa-image"></i>{" "}
                <span style="margin-left:10px">
                  {" "}
                  Explore International Flights <br />
                  <span style="color:rgb(32, 134, 194);font-size:10px;padding-top:-10px">
                    Cheapest Flights to paris, Bali, Tokyo & more
                  </span>
                </span>
              </p>
            </span>
            <span className="feature-type">
              <p>
                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                <span style="margin-left:10px">
                  {" "}
                  Nearby <br />
                  <span style="color:grey;font-size:10px;padding-top:-10px">
                    Loan credit and more
                  </span>
                </span>
              </p>
            </span>
            <span className="feature-type">
              <p style="border:none">
                <i className="fa-solid fa-gift"></i>{" "}
                <span style="margin-left:10px">s
                  Gift Cards <br />
                  <span style="color:grey;font-size:10px;padding-top:-10px">
                    Loan credit and more
                  </span>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
