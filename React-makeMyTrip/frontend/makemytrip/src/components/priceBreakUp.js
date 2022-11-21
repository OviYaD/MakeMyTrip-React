import React from 'react';
import { useSelector } from 'react-redux';

export const PriceBreakUpCard = () => {
    const hotelDesc = useSelector((state)=>state.hotelDesc);
    console.log(hotelDesc)
    return <>
        <div className="makeRelative">
              <div
                className="prcBreakup appendBottom30"
                style={{
                  backgroundPositionX: "calc(100% + 20px)",
                  backgroundRepeatX: "no-repeat"}}
                
              >
                <div className="prcBreakup__hdr">PRICE BREAK-UP</div>
                <div className="prcBreakup__cont">
                  <div className="prcBreakup__row">
                    <div className="makeFlex flexOne spaceBetween">
                      <div className="prcBreakup__lft">
                        <p className="latoBold blackText makeFlex">
                          <span>1 Room</span> <span> x </span>
                          <span>1 Night</span>
                        </p>
                        <p className="font12 grayText appendTop3">Base Price</p>
                      </div>
                      <div className="prcBreakup__rht">
                        <p className="latoBold">₹ {hotelDesc.rooms[0].price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="prcBreakup__row">
                    <div className="makeFlex flexOne spaceBetween">
                      <div className="prcBreakup__lft">
                        <div className="latoBold greenText makeFlex hrtlCenter">
                          Total Discount
                          <div className="ttlDscTooltip appendLeft5">
                            <span className="sprite infoIconBlue pointer"></span>
                            <div className="ttlDiscount">
                              <ul className="ttlDiscount__list">
                                <li className="ttlDiscount__listItem">
                                  <span
                                    className="sprite roomSelectIcon appendRight10 appendTop2"
                                  ></span>
                                  <div className="flexOne">
                                    <div
                                      className="makeFlex spaceBetween whiteText"
                                    >
                                      <p className=" ">Discount by the Property</p>
                                      <p className="noShrink">₹ 780</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="prcBreakup__rht">
                        <p className="latoBold greenText">- ₹ 780</p>
                      </div>
                    </div>
                  </div>
                  <div className="prcBreakup__row">
                    <div className="makeFlex flexOne spaceBetween">
                      <div className="prcBreakup__lft">
                        <p className="latoBold blackText">Price after Discount</p>
                      </div>
                      <div className="prcBreakup__rht">
                        <p className="latoBold">₹ {hotelDesc.rooms[0].price-780}</p>
                      </div>
                    </div>
                  </div>
                  <div className="prcBreakup__row">
                    <div className="makeFlex flexOne spaceBetween">
                      <div className="prcBreakup__lft">
                        <div className="latoBold blackText makeFlex hrtlCenter">
                          Hotel Taxes
                          <div className="ttlDscTooltip appendLeft5">
                            <span className="sprite infoIconBlue pointer"></span>
                            <div className="ttlDiscount">
                              <ul className="ttlDiscount__list">
                                <li className="ttlDiscount__listItem">
                                  <div className="flexOne">
                                    <div
                                      className="makeFlex spaceBetween whiteText"
                                    >
                                      <p className=" ">Hotel GST</p>
                                      <p className="noShrink">₹ 842</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="prcBreakup__rht">
                        <p className="latoBold">₹ 842</p>
                      </div>
                    </div>
                  </div>
                  <div className="prcBreakup__row">
                    <div className="makeFlex flexOne spaceBetween">
                      <div className="makeRelative">
                        <span className="checkmarkOuter">
                          <input type="checkbox" name="" id="donate" />
                          <label for="donate">
                            <div className="makeFlex flexOne appendRight10">
                              <div
                                className="font12 latoBold blackText lineHight14 donate__text"
                              >
                                Donate ₹ 10 for COVID -19 Relief and Other
                                Charity Initiatives
                                <a
                                  href="https://www.makemytrip.com/promos/charity-deduction-16112017.html"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="charityTnCReviewNew"
                                  >T&amp;Cs</a>
                              </div>
                            </div>
                          </label>
                        </span>
                        {/* <div className="charityCont appendLeft5">
                          <span className="sprite infoIconBlue pointer"></span>
                          <div className="ourInitiative">
                            <div className="charityCard appendBottom10">
                              <span className="charityCard__icon"
                                ><img
                                  src="https://promos.makemytrip.com/COVID/charity.png"
                                  width="36"
                                  alt=""
                              /></span>
                              <div>
                                <p>
                                  Support community empowerment and restoration
                                  &amp; preservation of heritage.
                                  <a
                                    href="https://www.makemytrip.com/csr/covid-19-relief-efforts.html"
                                    target="_blank"
                                    >Know More</a
                                  >
                                </p>
                              </div>
                            </div>
                            <div className="charityCard appendBottom10">
                              <span className="charityCard__icon"
                                ><img
                                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_1.png?v=1"
                                  width="36"
                                  alt=""
                              /></span>
                              <div>
                                <p>
                                  Support and encourage responsible tourism
                                  practices.
                                  <a
                                    href="https://www.makemytrip.com/csr/mmt_foundation.html"
                                    target="_blank"
                                    >Know More</a>
                                </p>
                              </div>
                            </div>
                            <div className="charityCard appendBottom10">
                              <span className="charityCard__icon"
                                ><img
                                  src="https://imgak.mmtcdn.com/flights/assets/media/dt/review/charity_2.png?v=1"
                                  width="36"
                                  alt=""
                              /></span>
                              <div>
                                <p>
                                  Contribute towards afforestation and carbon
                                  sequestration projects.
                                  <a
                                    href="https://www.makemytrip.com/csr/mmt_foundation.html"
                                    target="_blank"
                                    >Know More</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <span className="noShrink latoBold charAmountDonation"
                        >₹ 10</span>
                    </div>
                  </div>
                </div>
                <div className="prcBreakup__total">
                  <div className="makeFlex flexOne spaceBetween">
                    <div className="prcBreakup__lft">
                      <p className="latoBlack blackText">Total Amount to be paid</p>
                    </div>
                    <div className="prcBreakup__rht">
                      <p className="latoBlack redText">₹ {hotelDesc.rooms[0].price-780+842}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
}