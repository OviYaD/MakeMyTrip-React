/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
// import { filters } from "../utils/filterList";
import {
  useQueryParam,
  NumberParam,
  StringParam,
  ArrayParam,
  DelimitedNumericArrayParam
} from "use-query-params";
import { getFilters } from "../services/filters";
import {useSelector,useDispatch } from 'react-redux';
import {setFilters} from '../redux/slices/filterSlice';

export const FilterWrapper = ({
  handleCancel,
  handleClear,
  handleUpdateParam
}) => {
  const filters=useSelector((state)=>state.filters);
  const selectedItems=useSelector((state)=>state.selectedItem);
  const dispatch = useDispatch()
  const [min, setMin] = useQueryParam("minRating", DelimitedNumericArrayParam);
  const [max, setMax] = useQueryParam("maxRating", DelimitedNumericArrayParam);
  const [minRating, setMinRating] = useQueryParam("minReview", NumberParam);
  const [amenities, setAmenities] = useQueryParam("amenities", ArrayParam);
  const [rules, setRules] = useQueryParam("rules", ArrayParam);

  // console.log("selected items.......",selectedItem);

  useEffect(()=>{
    const fetchUser=async()=>{
      const filters = await getFilters();
      // console.log("filters inside filterwrapper",filters)
      dispatch(setFilters(filters))
      // console.log("from redux",filterList);
      // setUserInfo(user);
    }
    fetchUser();

  },[]);


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
            <div className="appendBottom15 bdrBottom">
              <div className="makeFlex spaceBetween end appendBottom20">
                <span className="latoBold font20 blackText">Applied Filters</span>
                <a
                  className="latoBold font12 capText"
                  href="javascript:void(0)"
                  onClick={handleClear}
                >
                  Clear
                </a>
              </div>
              <div className="appendBottom15">
                {selectedItems.map((item, index) => {
                  return (
                    <div className="apldFltr__item" key={index}>
                      <div className="apldFltr__item--left">
                        <p className="apldFltr__item--text">
                          <span>{item.id} </span>
                        </p>
                        <button
                          className="apldFltr__item--close"
                          data-testid="removeAppliedFilter"
                          onClick={() => handleCancel( item )}
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
                            onChange={handleUpdateParam}
                            min={category.min}
                            max={category.max}
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
                          data-star={category.star}
                          onChange={handleUpdateParam}
                        />
                        <label for={`${category.star} star`}>{category.star} star</label>
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
                          data-minRating={category.minRating}
                          onChange={handleUpdateParam}
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
                            id={category.name}
                            data-amenities={category.id}
                            onChange={handleUpdateParam}
                          />
                          <label for={category.name}>{category.name}</label>
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
                            id={category.name}
                            name={category.name}
                            onChange={handleUpdateParam}
                            data-rules={category.id}
                          />
                          <label for={category.name }>
                            {category.name}
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
