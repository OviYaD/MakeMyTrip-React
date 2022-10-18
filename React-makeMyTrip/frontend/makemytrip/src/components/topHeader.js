import React from "react";

export const TopHeader = () => {
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
              <a href="">Hotels and more in Delhi</a>
            </li>
          </ul>
          <div className="listingView">
            <div className="makeFlex spaceBetween appendTop15">
              <div className="flexOne appendRight30 alignSelfBottom">
                <p className="font24 latoBlack blackText">
                  Hotels, Villas, Apartments and ore in Delhi
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
                  <b>|</b>Showing 1590 properties in Delhi
                </span>
              </div>
              <div className="makeFlex hrtlCenter">
                <button
                  data-testid="listingPgMapImg"
                  className="lstnHdr__footer--map"
                >
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/sprite/view-map-new.png"
                    alt="view on map"
                  />
                </button>
                <div className="height40">
                  <form autocomplete="off">
                    <div
                      className="headerRight noShrink"
                      id="hlistpg_search_htl_name_box"
                    >
                      <div
                        role="combobox"
                        aria-haspopup="listbox"
                        aria-owns="react-autowhatever-1"
                        aria-expanded="false"
                        className="react-autosuggest__container"
                      >
                        <input
                          type="text"
                          value=""
                          autocomplete="off"
                          aria-autocomplete="list"
                          aria-controls="react-autowhatever-1"
                          className="react-autosuggest__input "
                          placeholder="Search location or property"
                          aria-label="Search location or property"
                          style={{ padding: "5px 5px 8px 38px" }}
                        />
                        <div
                          id="react-autowhatever-1"
                          role="listbox"
                          className="react-autosuggest__suggestions-container"
                        ></div>
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
