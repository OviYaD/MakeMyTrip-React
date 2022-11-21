import React from "react";
import { ReactBingmaps } from 'react-bingmaps';
import { useSelector } from "react-redux";

export function Map() {
    const hotelDesc = useSelector((state)=>state.hotelDesc);
  return <>
  <section class="page__section appendBottom35">
      <div class="" id="Location"></div>
      <p class="luxe__title appendBottom15 font22 latoBlack blackText">Location</p>
      <p class="font16 lineHight18 latoBold appendBottom15">The Location of The St. Regis Goa Resort has been rated 4.5 by 732 guests</p>
      <div class="poiCont">
          <div class="poiCont__left">
              <div class="arroundHtl">
                  <h3 class="arroundHtl__hdr">Around this property:</h3>
                  <div class="arroundHtl__item selected">
                      <h4 class="arroundHtl__item--hdng selected">Key Landmarks</h4>
                      <ul class="arroundHtl__list">
                          <li class="arroundHtl__list--item">
                              <span class="checkmarkOuter">
                                  <input type="checkbox" id="0" />
                                  <label for="0" class="makeFlex column">
                                      <p class="latoBlack font14 blackText">Colva Beach</p>
                                      <p class="font12 grayText appendTop5">17.1 Km</p>
                                  </label>
                              </span>
                          </li>
                      </ul>
                  </div>
                  <div class="arroundHtl__item">
                      <h4 class="arroundHtl__item--hdng">Tourist Attractions</h4>
                  </div>
                  <div class="arroundHtl__item">
                      <h4 class="arroundHtl__item--hdng">Restaurants</h4>
                  </div>
              </div>
          </div>
          <div className="poiCont__left" style={{ width: "100%", height: "500px" }}>
              <ReactBingmaps
                  bingmapKey="Anvlng7nWLpL5neUOCWyCSTpV5xma3vDPp7zd8xP8D1mZzzZEwaBumuKcQcnPuvs"
                  center={[hotelDesc.address.latitude, hotelDesc.address.longitude]}
                  pushPins={[
                      {
                          location: [hotelDesc.address.latitude, hotelDesc.address.longitude],
                          option: { color: "red" },
                      },
                  ]}
              ></ReactBingmaps>
          </div>
      </div>
  </section>
</>;

}
// bingmapKey = "Anvlng7nWLpL5neUOCWyCSTpV5xma3vDPp7zd8xP8D1mZzzZEwaBumuKcQcnPuvs"