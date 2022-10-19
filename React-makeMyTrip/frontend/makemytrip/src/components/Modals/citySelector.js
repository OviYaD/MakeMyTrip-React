import React from "react";

export class CitySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <>
          <div class="hsw_autocomplePopup autoSuggestPlugin">
            <div
              role="combobox"
              aria-haspopup="listbox"
              aria-owns="react-autowhatever-1"
              aria-expanded="true"
              class="react-autosuggest__container react-autosuggest__container--open"
            >
              <input
                type="text"
                autocomplete="off"
                aria-autocomplete="list"
                aria-controls="react-autowhatever-1"
                class="react-autosuggest__input react-autosuggest__input--open"
                placeholder="From"
                value=""
              />
              <div
                id="react-autowhatever-1"
                role="listbox"
                class="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open"
              >
                <div class="react-autosuggest__section-container react-autosuggest__section-container--first">
                  <div class="react-autosuggest__section-title">
                    <p class="hsw_sectionTitle font12 latoBlack greyText">
                      RECENT SEARCHES
                    </p>
                  </div>
                  <ul
                    role="listbox"
                    class="react-autosuggest__suggestions-list"
                  >
                    <li
                      role="option"
                      id="react-autowhatever-1-section-0-item-0"
                      aria-selected="false"
                      class="react-autosuggest__suggestion react-autosuggest__suggestion--first"
                      data-section-index="0"
                      data-suggestion-index="0"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Bangkok, Thailand
                          </p>
                          <p class="font12 greyText appendBottom3">Bangkok</p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          BKK
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-0-item-1"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="0"
                      data-suggestion-index="1"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            New Delhi, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Indira Gandhi International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          DEL
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="react-autosuggest__section-container">
                  <div class="react-autosuggest__section-title">
                    <p class="hsw_sectionTitle font12 latoBlack greyText">
                      POPULAR CITIES
                    </p>
                  </div>
                  <ul
                    role="listbox"
                    class="react-autosuggest__suggestions-list"
                  >
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-0"
                      aria-selected="false"
                      class="react-autosuggest__suggestion react-autosuggest__suggestion--first"
                      data-section-index="1"
                      data-suggestion-index="0"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Mumbai, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Chhatrapati Shivaji International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          BOM
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-1"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="1"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            New Delhi, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Indira Gandhi International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          DEL
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-2"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="2"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Bangkok, Thailand
                          </p>
                          <p class="font12 greyText appendBottom3">Bangkok</p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          BKK
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-3"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="3"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Bengaluru, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Bengaluru International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          BLR
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-4"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="4"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Pune, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Pune Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          PNQ
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-5"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="5"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Hyderabad, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Rajiv Gandhi International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          HYD
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-6"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="6"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Kolkata, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Netaji Subhash Chandra Bose International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          CCU
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-7"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="7"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Chennai, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Chennai International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          MAA
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-8"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="8"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Goa, India
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Dabolim Goa International Airport
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          GOI
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="react-autowhatever-1-section-1-item-9"
                      aria-selected="false"
                      class="react-autosuggest__suggestion"
                      data-section-index="1"
                      data-suggestion-index="9"
                    >
                      <div class="makeFlex hrtlCenter">
                        <img
                          class="icLocAlt appendRight8"
                          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
                          alt="icon"
                        />
                        <div class="calc60">
                          <p class="font14 appendBottom5 blackText">
                            Dubai, United Arab Emirates
                          </p>
                          <p class="font12 greyText appendBottom3">
                            Dubai International
                          </p>
                        </div>
                        <div class="pushRight font14 lightGreyText latoBold">
                          DXB
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  }
}
