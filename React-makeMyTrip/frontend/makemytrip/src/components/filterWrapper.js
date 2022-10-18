import React from "react";
// import { filters } from "../utils/filterList";
import {
  useQueryParam,
  NumberParam,
  StringParam,
  ArrayParam,
  DelimitedNumericArrayParam
} from "use-query-params";

export const FilterWrapper = ({
  handleChange,
  selectedItems,
  handleCancel,
  filters,
  handleClear
}) => {
  const [min, setMin] = useQueryParam("minRating", DelimitedNumericArrayParam);
  const [max, setMax] = useQueryParam("maxRating", DelimitedNumericArrayParam);
  const [minRating, setMinRating] = useQueryParam("minRating", NumberParam);
  const [amenities, setAmenities] = useQueryParam("amenities", ArrayParam);
  const [rules, setRules] = useQueryParam("rules", ArrayParam);
  return (
    <>
      <div
        className="filterWrapNew appendRight30"
        style={{ marginRight: "50px" }}
      >
        {/* <div>
          <h1>num is {num}</h1>
          <button onClick={() => setNum(Math.random())}>Change</button>
          <h1>foo is {foo}</h1>
          <button onClick={() => setFoo(`str${Math.random()}`)}>Change</button>
        </div> */}
        <div className="appendBottom35">
          {selectedItems.length !== 0 ? (
            <div class="appendBottom15 bdrBottom">
              <div class="makeFlex spaceBetween end appendBottom20">
                <span class="latoBold font20 blackText">Applied Filters</span>
                <a
                  class="latoBold font12 capText"
                  href="javascript:void(0)"
                  onClick={handleClear}
                >
                  Clear
                </a>
              </div>
              <div class="appendBottom15">
                {selectedItems.map((item, index) => {
                  return (
                    <div class="apldFltr__item" key={index}>
                      <div class="apldFltr__item--left">
                        <p class="apldFltr__item--text">
                          <span>{item} </span>
                        </p>
                        <button
                          class="apldFltr__item--close"
                          data-testid="removeAppliedFilter"
                          onClick={() => handleCancel({ item })}
                        ></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <></>
          )}

          <p className="makeFlex spaceBetween end">
            <span className="latoBold font20 blackText appendBottom10">
              Select Filters
            </span>
          </p>

          {filters.prices ? (
            <div className="filterRow" id="PRICE_BUCKET">
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                Price (per night)
              </div>
              <div className="priceBucketFilter">
                <ul className="filterList">
                  {filters.prices.map((category, index) => {
                    return (
                      <li className="">
                        <span className="checkmarkOuter">
                          <input
                            className="inp-check"
                            type="checkbox"
                            id={`₹ ${category.min} - ₹ ${category.max}`}
                            onChange={handleChange}
                          />
                          <label for={`₹ ${category.min} - ₹ ${category.max}`}>
                            {`₹ ${category.min} - ₹ ${category.max}`}
                          </label>
                        </span>
                        <span className="font12 grayText">
                          ({category.count})
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="latoBold font14 appendTop15">Your Budget</p>
                <div className="range">
                  <input
                    name="min"
                    className="rangeInput"
                    type="number"
                    placeholder="Min"
                    aria-label="min range input"
                    value=""
                  />
                  <span className="appendLR10">to</span>
                  <input
                    name="max"
                    className="appendLeft5 rangeInput"
                    type="number"
                    placeholder="Max"
                    aria-label="max range input"
                    value=""
                  />
                  <button
                    aria-label="Select Range button"
                    className="btnRangeGo appendLeft5 fadeEff"
                  >
                    <span className="sprite icWhiteArrow"></span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {filters.starCategories ? (
            <div className="filterRow" id="STAR_CATEGORY">
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                Star Category
              </div>
              <ul className="filterList">
                {filters.starCategories.map((category, index) => {
                  return (
                    <li className="">
                      <span className="checkmarkOuter">
                        <input
                          className="inp-check"
                          type="checkbox"
                          id={`${category.star} star`}
                          onChange={handleChange}
                        />
                        <label for={category.star}>{category.star} star</label>
                      </span>
                      <span className="font12 grayText">
                        ({category.count})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <></>
          )}
          {filters.reviews ? (
            <div
              className="filterRow"
              id="USER_RATING"
              style={{ marginTop: "15px" }}
            >
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                User Rating
              </div>
              <ul className="filterList">
                {filters.reviews?.map((category, index) => {
                  return (
                    <li className="">
                      <span className="checkmarkOuter">
                        <input
                          className="inp-check"
                          type="checkbox"
                          id={`${category.minRating} & above (${
                            category.minRating === 3
                              ? "Good"
                              : category.minRating === 4
                              ? "Very Good"
                              : "Excellence"
                          })`}
                          onChange={handleChange}
                        />
                        <label
                          for={`${category.minRating} & above (${
                            category.minRating === 3
                              ? "Good"
                              : category.minRating === 4
                              ? "Very Good"
                              : "Excellence"
                          })`}
                        >
                          {`${category.minRating} & above (${
                            category.minRating === 3
                              ? "Good"
                              : category.minRating === 4
                              ? "Very Good"
                              : "Excellence"
                          })`}
                        </label>
                      </span>
                      <span className="font12 grayText">
                        ({category.count})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <></>
          )}
          {filters.merge_property ? (
            <div className="filterRow" id="MERGE_PROPERTY_TYPE">
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                Property Type
              </div>
              <ul className="filterList">
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Hotel"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Hotel</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(1167)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Homestay"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Homestay</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(180)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Apartment"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Apartment</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(124)</span>
                </li>
              </ul>
              <p className="textRight appendTop10">
                <span
                  className="blueText pointer latoBold font12"
                  id="hlistpg_proptypes_show_more"
                >
                  Show 5 more
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
          {filters.brand_filter ? (
            <div className="filterRow" id="BRAND_FILTER">
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                Hotel Chains
              </div>
              <ul className="filterList">
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Accor"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Accor</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(3)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Best Western"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Best Western</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(1)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Bloom Hotels"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Bloom Hotels</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(4)</span>
                </li>
                <li className="">
                  <span
                    data-testid="checkboxFilter"
                    className="checkmarkOuter fadeEff"
                  >
                    <input
                      aria-label="Clarks Inn"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Clarks Inn</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(0)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Ginger Hotels"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Ginger Hotels</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(1)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Hilton"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Hilton</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(1)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Hyatt"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Hyatt</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(4)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Holiday Inn / Crowne Plaza"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Holiday Inn / Crowne Plaza</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(6)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="ITC Hotels"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>ITC Hotels</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(2)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Lemon Tree"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Lemon Tree</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(4)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Marriott"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Marriott</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(4)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Radisson"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Radisson</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(9)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Taj"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Taj</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(5)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="The Leela"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>The Leela</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(2)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="WelcomHotel"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>WelcomHotel</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(1)</span>
                </li>
                <li className="">
                  <span data-testid="checkboxFilter" className="checkmarkOuter">
                    <input
                      aria-label="Ramada"
                      className="inp-check"
                      type="checkbox"
                    />
                    <label>
                      <div className="makeFlex hrtlCenter">
                        <span>Ramada</span>
                      </div>
                    </label>
                  </span>
                  <span className="font12 grayText">(1)</span>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}

          {/* <div className="filterRow" id="hlistpg_fr_locality">
            <p className="latoBold font16 blackText appendBottom15 makeFlex spaceBetween">
              <span>Locality</span>
            </p>
            <div className="locationFtrModal">
              <div>
                <p
                  className="font15 blackText appendTop15 appendBottom15 makeFlex hrtlCenter"
                  style={{ marginTop: "15px", marginBottom: "15px" }}
                >
                  <span>Business &amp; Shopping Hubs:</span>
                </p>
                <ul className="filterList">
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Business &amp; Shopping Hubs:_0"
                      />
                      <label
                        className="makeFlex column"
                        for="Business &amp; Shopping Hubs:_0"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Karol bagh</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Business &amp; Shopping Hubs:_1"
                      />
                      <label
                        className="makeFlex column"
                        for="Business &amp; Shopping Hubs:_1"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Lajpat Nagar</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Business &amp; Shopping Hubs:_2"
                      />
                      <label
                        className="makeFlex column"
                        for="Business &amp; Shopping Hubs:_2"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Mehrauli</span>
                        </p>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  className="font15 blackText appendTop15 appendBottom15 makeFlex hrtlCenter"
                  style={{ marginTop: "15px" }}
                >
                  <span>Known for Dining &amp; Shopping:</span>
                </p>
                <ul className="filterList">
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Known for Dining &amp; Shopping:_0"
                      />
                      <label
                        className="makeFlex column"
                        for="Known for Dining &amp; Shopping:_0"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Connaught Place</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Known for Dining &amp; Shopping:_1"
                      />
                      <label
                        className="makeFlex column"
                        for="Known for Dining &amp; Shopping:_1"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Chandni Chowk</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Known for Dining &amp; Shopping:_2"
                      />
                      <label
                        className="makeFlex column"
                        for="Known for Dining &amp; Shopping:_2"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>South Delhi</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Known for Dining &amp; Shopping:_3"
                      />
                      <label
                        className="makeFlex column"
                        for="Known for Dining &amp; Shopping:_3"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Green Park</span>
                        </p>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  className="font15 blackText appendTop15 appendBottom15 makeFlex hrtlCenter"
                  style={{ marginBottom: "20px" }}
                >
                  <span>Near Transit Hub(s):</span>
                </p>
                <ul className="filterList">
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_0"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_0"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Aerocity</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_1"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_1"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>T1 - Delhi Airport (IGI Airpo...</span>
                        </p>
                        <div className="infoTooltip whiteText">
                          T1 - Delhi Airport (IGI Airport)
                        </div>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_2"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_2"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>T2 - Delhi Airport (IGI Airpo...</span>
                        </p>
                        <div className="infoTooltip whiteText">
                          T2 - Delhi Airport (IGI Airport)
                        </div>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_3"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_3"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>T3 - Delhi Airport (IGI)</span>
                        </p>
                        <div className="infoTooltip whiteText">
                          T3 - Delhi Airport (IGI)
                        </div>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_4"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_4"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>New Delhi Railway Station</span>
                        </p>
                        <div className="infoTooltip whiteText">
                          New Delhi Railway Station
                        </div>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_5"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_5"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Old Delhi Railway Station</span>
                        </p>
                        <div className="infoTooltip whiteText">
                          Old Delhi Railway Station
                        </div>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_6"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_6"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>ISBT Kashmere Gate</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_7"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_7"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Sarai Rohilla Railway Station</span>
                        </p>
                        <div className="infoTooltip whiteText">
                          Sarai Rohilla Railway Station
                        </div>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_8"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_8"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Paharganj</span>
                        </p>
                      </label>
                    </span>
                  </li>
                  <li className="">
                    <span className="checkmarkOuter">
                      <input
                        className="inp-check"
                        type="checkbox"
                        id="Near Transit Hub(s):_9"
                      />
                      <label
                        className="makeFlex column"
                        for="Near Transit Hub(s):_9"
                      >
                        <p className="makeFlex filterList__filterName">
                          <span>Mahipalpur</span>
                        </p>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="filterRow" id="LUX_DOM">
            <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
              MMT Luxe Selections
            </div>
            <ul className="filterList">
              <li className="">
                <span data-testid="checkboxFilter" className="checkmarkOuter">
                  <input
                    aria-label="MMT Luxe Selections"
                    className="inp-check"
                    type="checkbox"
                  />
                  <label>
                    <div className="makeFlex hrtlCenter">
                      <span>MMT Luxe Selections</span>
                    </div>
                    <div
                      className="infoTooltip whiteText"
                      style={{ left: "0px", top: "0px", position: "fixed" }}
                    >
                      Handpicked Luxury Properties
                    </div>
                  </label>
                </span>
                <span className="font12 grayText">(15)</span>
              </li>
            </ul>
          </div> */}
          {filters.amenities ? (
            <div className="filterRow" id="AMENITIES">
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                Amenities
              </div>
              <div className="amfltr">
                <div className="amfltr__inpWrapper">
                  <span className="sprite searchIcon"></span>
                  <input
                    type="text"
                    name="amenities"
                    className="amfltr__input"
                    placeholder="Search amenities"
                    autocomplete="off"
                    aria-label="Search amenities"
                    value=""
                  />
                </div>
              </div>
              <div className="filterRow">
                <div
                  className="latoBold font14 appendBottom12 makeFlex hrtlCenter appendTop10"
                  style={{ marginTop: "10px" }}
                >
                  Guests Love
                </div>
                <ul className="filterList">
                  {filters.amenities.map((category, index) => {
                    return (
                      <li className="">
                        <span className="checkmarkOuter">
                          <input
                            className="inp-check"
                            type="checkbox"
                            name={category.name}
                            id={category.id}
                            onChange={handleChange}
                          />
                          <label for={category.id}>{category.name}</label>
                        </span>
                        <span className="font12 grayText">
                          ({category.count})
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p
                className="textRight appendTop10"
                style={{ marginTop: "10px" }}
              >
                <span
                  className="blueText pointer latoBold font12"
                  id="hlistpg_proptypes_show_more"
                >
                  Show 18 more
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
          {/* <div className="filterRow" id="SPACE">
            <img
              className="prmFltrs__tag appendBottom10"
              src="https://promos.makemytrip.com/Hotels_product/Contextual%20Filter/Icons/Homestays_tag.png"
              alt="Booking Preference"
            />
            <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
              Booking Preference
            </div>
            <ul className="filterList">
              <li className="">
                <span data-testid="checkboxFilter" className="checkmarkOuter">
                  <input
                    aria-label="Entire Property"
                    className="inp-check"
                    type="checkbox"
                  />
                  <label>
                    <div className="makeFlex hrtlCenter">
                      <span>Entire Property</span>
                    </div>
                  </label>
                </span>
                <span className="font12 grayText">(119)</span>
              </li>
              <li className="">
                <span data-testid="checkboxFilter" className="checkmarkOuter">
                  <input
                    aria-label="Caretaker"
                    className="inp-check"
                    type="checkbox"
                  />
                  <label>
                    <div className="makeFlex hrtlCenter">
                      <span>Caretaker</span>
                    </div>
                  </label>
                </span>
                <span className="font12 grayText">(773)</span>
              </li>
              <li className="">
                <span data-testid="checkboxFilter" className="checkmarkOuter">
                  <input
                    aria-label="Instant Book"
                    className="inp-check"
                    type="checkbox"
                  />
                  <label>
                    <div className="makeFlex hrtlCenter">
                      <span>Instant Book</span>
                    </div>
                  </label>
                </span>
                <span className="font12 grayText">(1527)</span>
              </li>
              <li className="">
                <span data-testid="checkboxFilter" className="checkmarkOuter">
                  <input
                    aria-label="Homestays"
                    className="inp-check"
                    type="checkbox"
                  />
                  <label>
                    <div className="makeFlex hrtlCenter">
                      <span>Homestays</span>
                    </div>
                  </label>
                </span>
                <span className="font12 grayText">(336)</span>
              </li>
            </ul>
          </div> */}
          {filters.rules ? (
            <div className="filterRow" id="HOUSE_RULES">
              <img
                className="prmFltrs__tag appendBottom10"
                src="https://promos.makemytrip.com/Hotels_product/Contextual%20Filter/Icons/Homestays_tag.png"
                alt="House Rules"
              />
              <div className="latoBold font16 blackText appendBottom15 makeFlex hrtlCenter">
                House Rules
              </div>
              <ul className="filterList">
                {filters.rules.map((category, index) => {
                  return (
                    <>
                      <li className="">
                        <span className="checkmarkOuter">
                          <input
                            className="inp-check"
                            type="checkbox"
                            id={category.id}
                            name={`${category.name} star`}
                            onChange={handleChange}
                          />
                          <label for={category.star}>
                            {category.star} star
                          </label>
                        </span>
                        <span className="font12 grayText">
                          ({category.count})
                        </span>
                      </li>
                    </>
                  );
                })}
              </ul>
              <p
                className="textRight appendTop10"
                style={{ marginTop: "10px" }}
              >
                <span
                  className="blueText pointer latoBold font12"
                  id="hlistpg_proptypes_show_more"
                >
                  Show 1 more
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <a
          id="back_to_top_button"
          className="btnBacktoTop appendTop20 latoBlack"
          style={{ marginBottom: "50px", marginTop: "20px" }}
        >
          BACK TO TOP
        </a>
      </div>
    </>
  );
};
