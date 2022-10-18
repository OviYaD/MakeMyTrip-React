import React from "react";
import { NavBar } from "../components/navBar";
import { TopHeaderSticky as StickyHeader } from "../components/topHeaderSticky";
import { TopHeader as Header } from "../components/topHeader";
import { FilterWrapper } from "../components/filterWrapper";
import { HotelListingContainer } from "../components/HotelListingContainer";
import { getFilters, getHotelsByFilters } from "../services/filters";

import { LandingContainer } from "../components/landingContainer";
export default class HotelSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      filters: {},
      params: {
        minRating: [],
        maxRating: [],
        minRating: null,
        amenities: [],
        rules: []
      }
    };
  }

  getFiltersList = async () => {
    const filters = await getFilters();
    console.log(filters);

    this.setState((state) => {
      return {
        ...this.state,
        filters: filters
      };
    });
  };

  componentDidMount = async () => {
    await this.getFiltersList();
    console.log(this.state.filters);
  };

  componentDidUpdate() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params);
  }

  addFilters = (e) => {
    console.log("add", e.target.id);

    this.setState((state) => {
      const list = state.selectedItems.concat(e.target.id);
      console.log("after add ", list);
      return {
        ...state,
        selectedItems: list
      };
    });
  };

  removeFilters = (e) => {
    console.log("remove", e.target.id);
    var array = this.state.selectedItems;
    var index = array.indexOf(e.target.id);
    delete array[index];
    console.log("after remove ", array);
    this.setState((state) => {
      return {
        ...this.state,
        selectedItems: array
      };
    });
  };

  handleClear = () => {
    this.setState((state) => {
      return {
        ...this.addFiltersstate,
        selectedItems: []
      };
    });
  };

  handleCancel = (value) => {
    console.log(value.item);
    var array = this.state.selectedItems;
    var index = array.indexOf(value.item);
    delete array[index];
    console.log("after cancel ", array);
    document.getElementById(value.item).checked = false;
    this.setState((state) => {
      return {
        ...this.state,
        selectedItems: array
      };
    });
  };

  handleChange = (e) => {
    console.log(e.target.checked);
    e.target.checked ? this.addFilters(e) : this.removeFilters(e);
    getHotelsByFilters();
  };
  render() {
    console.log(this.state.filters);
    return (
      <>
        <div className="search-page">
          <NavBar></NavBar>

          <div>
            <StickyHeader></StickyHeader>
            <div className="_Hlisting">
              <Header></Header>
              <div id="seoTopContentDontRemoveContainer"></div>
              <div id="seoTopContentText"></div>
              <div
                class=" makeFlex spaceBetween"
                style={{
                  marginLeft: "50px",
                  marginRight: "50px"
                }}
              >
                <FilterWrapper
                  selectedItems={this.state.selectedItems}
                  handleChange={this.handleChange}
                  handleCancel={this.handleCancel}
                  handleClear={this.handleClear}
                  filters={this.state.filters}
                ></FilterWrapper>
                <HotelListingContainer></HotelListingContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
