import React from "react";
import { NavBar } from '../components/navBar';
import {StickyHeader} from '../components/stickyHeader';
import { TopHeader as Header } from "../components/topHeader";
import { FilterWrapper } from '../components/filterWrapper';
import { HotelListingContainer } from '../components/HotelListingContainer';
import {
    useQueryParam,
    NumberParam,
    StringParam,
    ArrayParam,
    DelimitedNumericArrayParam
  } from "use-query-params";


export const Search = () => {

    const [min, setMin] = useQueryParam("minRating", DelimitedNumericArrayParam);
    const [max, setMax] = useQueryParam("maxRating", DelimitedNumericArrayParam);
    const [minRating, setMinRating] = useQueryParam("minRating", NumberParam);
    const [amenities, setAmenities] = useQueryParam("amenities", ArrayParam);
    const [rules, setRules] = useQueryParam("rules", ArrayParam);
    
    return <>
     <div className="search-page">
          <NavBar></NavBar>
          <div>
            <StickyHeader></StickyHeader>
            <div className="_Hlisting">
              <Header></Header>
              <div id="seoTopContentDontRemoveContainer"></div>
              <div id="seoTopContentText"></div>
              <div
                className=" makeFlex spaceBetween"
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
}