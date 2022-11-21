import React from 'react';

export const SpecialRequestContainer = () => {
    return <>
        <div className="splReqs appendBottom20">
              <div className="accordHead">
                <div>
                  <p className="accordHead__text">
                    <span className="capText">SPECIAL REQUEST</span>
                  </p>
                  <p>
                    <span className="font12 redText"
                      >Special requests are subject to each hotel's
                      availability, may be chargeable &amp; can't be
                      guaranteed.</span
                    >
                  </p>
                </div>
                <div><span className="accordBtn appendLeft20 up"></span></div>
              </div>
              <div className="splReqs__cont">
                <ul className="splReqs__list">
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="101" /><label
                          for="101"
                          >Smoking room</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="102" /><label
                          for="102"
                          >Late check-in</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="103" /><label
                          for="103"
                          >Early check-in</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="104" /><label
                          for="104"
                          >Room on a high floor</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="105" /><label
                          for="105"
                          >Large bed</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="106" /><label
                          for="106"
                          >Twin beds</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <div className="splReqs__listItem">
                      <span className="checkmarkOuter"
                        ><input type="checkbox" name="" id="107" /><label
                          for="107"
                          >Airport transfer</label
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <p
                      className="font16 latoBold blackText appendBottom15 appendTop25"
                    >
                      Any other request?
                    </p>
                    <textarea
                      cols="30"
                      rows="10"
                      className="splReqs__txtArea"
                      placeholder="Enter your special request"
                    ></textarea>
                  </li>
                </ul>
              </div>
            </div>
    </>;
}