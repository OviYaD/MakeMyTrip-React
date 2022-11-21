import React from 'react';

export const DealCode = () => {
    return <>
        <div className="makeRelative">
              <div className="dlCodes appendBottom20">
                <p className="latoBlack font14 capText appendBottom15 blackText">
                  Deal Codes
                </p>
                <ul className="dlCodes__list">
                  <li className="dlCodes__listItem itemSelected">
                    <span className="radioBtn appendRight10"
                      ><input
                        type="radio"
                        name="rGroup"
                        id="DEALOFTHEDAYCBCouponCard" /><label
                        for="DEALOFTHEDAYCBCouponCard"
                      ></label></span>
                    <div className="dlCodes__listItemDtl flexOne">
                      <div className="makeFlex spaceBetween appendBottom3">
                        <p className="dlCodes__listItemCode">
                          <span
                            className="dealCode__truncate overrideRtl"
                            title="DEALOFTHEDAYCB"
                            >DEALOFTHEDAYCB</span>
                          <span className="dlCodes__delete"></span>
                        </p>
                      </div>
                      <p className="font12 lineHight16">
                        Cashback of INR 561 will be credited to your card within
                        3 days of booking
                      </p>
                      <div className="dealTimer">
                        <span>Deal expires in:</span><span>05h : 25m : 37s</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="dlCodes__giftmsg appendBottom15">
                  <p className="font12 latoBold">
                    Gift cards may be applied in next step
                  </p>
                </div>
                <div className="cpnCont">
                  <div className="cpnInput">
                    <input
                      type="text"
                      placeholder="Have a Coupon Code"
                      value=""
                    /><a className="cpnInput__btn" data-testid="applyCpnBtn"
                      ><span className="sprite icWhiteArrow"></span></a>
                  </div>
                </div>
              </div>
            </div>
    </>;
}