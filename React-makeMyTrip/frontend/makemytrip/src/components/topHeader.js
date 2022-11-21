import React from "react";
import { useSelector } from "react-redux";

export const TopHeader = () => {
  const params = useSelector((state)=>state.param)
  return (
    <>
      <div
        className="topHeader appendBottom30 minWidth1200 topHeaderSticky bgGradient"
        style={{ top: "5px", paddingLeft: "50px", paddingRight: "50px" }}
      >
        <div className=" makeFlex column">
          <ul className="_BreadCrumbs breadCrumbs font12">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Hotels and more in <span style={{textTransform:"capitalize"}}>{params.city}</span></a>
            </li>
          </ul>
          <div className="listingView">
            <div className="makeFlex spaceBetween appendTop15">
              <div className="flexOne appendRight30 alignSelfBottom">
                <p className="font24 latoBlack blackText">
                  Hotels, Villas, Apartments and ore in <span style={{textTransform:"capitalize",color:"black"}}>{params.city}</span>
                </p>
              </div>
              <div className="headerRight noShrink"></div>
            </div>
            <div
              className="makeFlex spaceBetween hrtlCenter appendTop10"
              id="hlistpg_sortby_search"
            >
              <div>
                <div className="slctTrpTyp">
                  <p className="slctTrpTyp__selected">Select Trip Type</p>
                </div>
                <b>|</b>
                <span className="latoBold blackText">Sort By: &nbsp;</span>
                <div className="customSelect">
                  <span className="customSelectTitle blueText latoBold blackText">
                    Popularity
                  </span>
                </div>
                <span className="">
                  <b>|</b>Showing 2 properties in <span style={{textTransform:"capitalize"}}>{params.city}</span>
                </span>
              </div>
              <div class="makeFlex hrtlCenter">
                  <button data-testid="listingPgMapImg" class="lstnHdr__footer--map"><img src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/sprite/view-map-new.png" alt="view on map" /></button>
                  <div class="height40">
                      <form autocomplete="off">
                          <div class="headerRight noShrink" id="hlistpg_search_htl_name_box">
                              <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" class="react-autosuggest__container">
                                  <input
                                      type="text"
                                      value=""
                                      autocomplete="off"
                                      aria-autocomplete="list"
                                      aria-controls="react-autowhatever-1"
                                      class="react-autosuggest__input"
                                      placeholder="Search location or property"
                                      aria-label="Search location or property"
                                  />
                                  <div id="react-autowhatever-1" role="listbox" class="react-autosuggest__suggestions-container"></div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
