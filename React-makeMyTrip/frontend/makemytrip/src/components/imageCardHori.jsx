import React from "react";

export default class ImageCardHori extends React.Component {
  render() {
    return (
      <>
        <div class="card-pair swiper-slide">
          <div class="horizontal-card">
            <div class="left-content">
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-jazeera-26092022.jpg"
                alt=""
              />
              <p>T and C's Apply</p>
            </div>
            <div class="right-content">
              <p>DOM FLIGHTS</p>
              <h3>FOR YOU: Up to 35% OFF* ON Domestic Flights</h3>
              <hr align="left" />
              <p
                style={{ fontSize: "13px", fontWeight: "500", padding: "0px" }}
              >
                with Our Flight Sale, LIVE till 30th September.
              </p>
              <div>
                <a href="">BOOK NOW</a>
              </div>
            </div>
          </div>
          <div class="horizontal-card" style={{ marginTop: "20px" }}>
            <div class="left-content">
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//116X116-jazeera-26092022.jpg"
                alt=""
              />
              <p>T and C's Apply</p>
            </div>
            <div class="right-content">
              <p>DOM FLIGHTS</p>
              <h3>FOR YOU: Up to 35% OFF* ON Domestic Flights</h3>
              <hr align="left" />
              <p
                style={{ fontSize: "13px", fontWeight: "500", padding: "0px" }}
              >
                with Our Flight Sale, LIVE till 30th September.
              </p>
              <div>
                <a href="">BOOK NOW</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
