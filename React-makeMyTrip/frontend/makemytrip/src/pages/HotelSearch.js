import React from "react";
import { NavBar } from "../components/navBar";
import { TopHeaderSticky as StickyHeader } from "../components/topHeaderSticky";
import { TopHeader as Header } from "../components/topHeader";
import { FilterWrapper } from "../components/filterWrapper";
import { HotelListingContainer } from "../components/HotelListingContainer";
import { getFilters, getHotelsByFilters } from "../services/filters";
import { UserContext  } from "../api/user";
import { SearchContext  } from "../api/search";
import { LandingContainer } from "../components/landingContainer";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setHotelInfo } from "../redux/slices/hotelSlice";
import { setParam } from "../redux/slices/paramSlice";
import {setSelectedItems } from "../redux/slices/selectedItemSlice";
import { hotel } from "../utils/HotelsDetail";
import { Hotels } from './Hotels';
import { hotels } from "../utils/FeaturedSearch";

export class HotelSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      filters: {},
      hotelsList:[],
      params: {
        minPrice: [],
        maxPrice: [],
        minRating: null,
        starCategory:[],
        amenities: [],
        rules: []
      }
    };
  }
  static contextType = SearchContext;
  getFiltersList = async () => {
    const filters = await getFilters();
    this.setState((state) => {
      return {
        ...this.state,
        filters: filters
      };
    });
  };

  componentDidMount = async () => {
    await this.getFiltersList();
    this.getHotelDetails();
    
  };

  getHotelDetails = async () => {

    let hotels=await getHotelsByFilters(this.state.param);

    // console.log("hotles........",hotels);
    // setHotelInfo();
    // this.props.setHotelInfo()
    
    this.setState((state)=>{
      return {
        ...state,
        hotelsList: hotels
      }
    });
    this.props.setParamInfo(this.state.params)
    this.props.setSelectedItem(this.state.selectedItems)
    this.props.setHotel(hotels);
  };

  handleClear = () => {
    this.setState((state) => {
      state.selectedItems.forEach((element,index)=>{
    document.getElementById(element.id).checked = false;

      })
      return {
        ...state,
        selectedItems: [],
      params: {
        minPrice: [],
        maxPrice: [],
        minRating: null,
        starCategory:[],
        amenities: [],
        rules: []
      }
      };
    });

    this.getHotelDetails();

  };

  handleCancel = (value) => {
    console.log(value)
    var selectedFilters = [...this.state.selectedItems];
    var index = selectedFilters.indexOf(value);
    selectedFilters = selectedFilters.filter((element,i)=>{
      return i!==index;
    })
    // delete selectedFilters[index];
    document.getElementById(value.id).checked = false;
    if(value.min){
      let minPrice = [...this.state.params.minPrice];
      let maxPrice = [...this.state.params.maxPrice];
      let ind=minPrice.indexOf(value.min);
      minPrice.splice(ind,1);
      maxPrice.splice(ind,1);
      this.setState((state) => {
        return {
          ...state,
           selectedItems: selectedFilters,
           params: {
            ...state.params,
             minPrice: minPrice,
             maxPrice:maxPrice,
           }
         };
      });
    }
    else if(value.star){
      let starCategory = [...this.state.params.starCategory];
      let ind=starCategory.indexOf(value.star);
      starCategory.splice(ind,1);
      this.setState((state) => {
        return {
          ...state,
           selectedItems: selectedFilters,
           params: {
            ...state.params,
            starCategory
           }
         };
      });
    }
    else if(value.minRating){
      let minRating=null;   
        selectedFilters=selectedFilters.filter((element,index)=>{
          if(element.minRating){
            document.getElementById(element.id).checked = false;
          }
          return element.minRating?false:true;
        }) 
        this.setState((state)=>{
          return {
            ...state,
             selectedItems: selectedFilters,
             params: {
              ...state.params,
              minRating:minRating
             }
           }
        })  
    }
    else if(value.amenities){
      let amenities = [...this.state.params.amenities];
      let ind=amenities.indexOf(value.amenities);
      amenities.splice(ind,1);
      this.setState((state) => {
        return {
          ...state,
           selectedItems: selectedFilters,
           params: {
            ...state.params,
            amenities
           }
         };
      });
    }
    else if(value.rules){
      let rules = [...this.state.params.rules];
      let ind=rules.indexOf(value.rules);
      rules.splice(ind,1);
      this.setState((state) => {
        return {
          ...state,
           selectedItems: selectedFilters,
           params: {
            ...state.params,
            rules
           }
         };
      });
    }
    this.getHotelDetails();
  };

  handleUpdateParam = (e) =>{
    
    if(e.target.min){
      this.setState((state) => {
        let minPrice = [...state.params.minPrice];
        let maxPrice = [...state.params.maxPrice];
        let selectedFilters = [...state.selectedItems];
        let ind=minPrice.indexOf(e.target.min);
    
        if(ind>=0){
          minPrice.splice(ind,1);
          maxPrice.splice(ind,1);
          selectedFilters.splice(selectedFilters.indexOf(e.target.id),1); 
          console.log(minPrice,maxPrice);
        }
        else{
          minPrice.push(e.target.min);
          maxPrice.push(e.target.max);
          selectedFilters.push({id:e.target.id,min:e.target.min});
        }
        return {
        ...state,
          selectedItems: selectedFilters,
          params: {
          ...state.params,
            minPrice: minPrice,
            maxPrice:maxPrice,
          }
        }
      });
    }
    else if(e.target.getAttribute("data-star")){
      let value=e.target.getAttribute("data-star");
      this.setState((state) => {
        let starCategory = [...state.params.starCategory];
        let selectedFilters = [...state.selectedItems];
        let ind=starCategory.indexOf(value);
    
        if(ind>=0){
          starCategory.splice(ind,1);
          selectedFilters.splice(selectedFilters.indexOf(e.target.id),1); 

        }
        else{
          starCategory.push(value);
          selectedFilters.push({id:e.target.id,star:value});
        }
        return {
        ...state,
          selectedItems: selectedFilters,
          params: {
          ...state.params,
          starCategory:starCategory
          }
        }
      });
    }
    else if(e.target.getAttribute("data-minRating")){
      let value=e.target.getAttribute("data-minRating");
      this.setState((state) => {
        let minRating;
        let selectedFilters = [...state.selectedItems];
        if(e.target.checked){
          minRating=value;
          selectedFilters=selectedFilters.filter((element)=>{
            if(element.minRating){
              document.getElementById(element.id).checked = false;
            }
            return element.minRating?false:true;
          })
          selectedFilters.push({id:e.target.id,minRating:value});
        }
        else{
          minRating=null;   
          selectedFilters=selectedFilters.filter((element,index)=>{
            
            return element.minRating?false:true;
          })   
        }
        return {
        ...state,
          selectedItems: selectedFilters,
          params: {
          ...state.params,
          minRating:minRating
          }
        }
      });
    }
    else if(e.target.getAttribute("data-amenities")){
      let value=e.target.getAttribute("data-amenities");
      this.setState((state) => {
        let amenities = [...state.params.amenities];
        let selectedFilters = [...state.selectedItems];
        let ind=amenities.indexOf(value);
    
        if(ind>=0){
          amenities.splice(ind,1);
          selectedFilters.splice(selectedFilters.indexOf(e.target.id),1); 

        }
        else{
          amenities.push(value);
          selectedFilters.push({id:e.target.id,amenities:value});
        }
        return {
        ...state,
          selectedItems: selectedFilters,
          params: {
          ...state.params,
          amenities
        }
      }});
    }
    else if(e.target.getAttribute("data-rules")){
      let value=e.target.getAttribute("data-rules");
      this.setState((state) => {
        let rules = [...state.params.rules];
        let selectedFilters = [...state.selectedItems];
        let ind=rules.indexOf(value);
    
        if(ind>=0){
          rules.splice(ind,1);
          selectedFilters.splice(selectedFilters.indexOf(e.target.id),1); 

        }
        else{
          rules.push(value);
          selectedFilters.push({id:e.target.id,rules:value});
        }
        return {
        ...state,
          selectedItems: selectedFilters,
          params: {
          ...state.params,
          rules
        }
      }});
    }
    this.getHotelDetails();
  };


  render() {
    
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
                className=" makeFlex spaceBetween"
                style={{
                  marginLeft: "50px",
                  marginRight: "50px"
                }}
              >
                <FilterWrapper
                  selectedItems={this.state.selectedItems}
                  handleCancel={this.handleCancel}
                  handleClear={this.handleClear}
                  filters={this.state.filters}
                  handleUpdateParam={this.handleUpdateParam}
                ></FilterWrapper>
                <HotelListingContainer hotelsList={this.state.hotelsList}></HotelListingContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}



const mapDispatchToProps = (dispatch,ownProps ) => {
  return {
    setHotel: (hotels) => dispatch(setHotelInfo(hotels)),
    setParamInfo : (params) => dispatch(setParam(params)),
    setSelectedItem : (selectedItems) => dispatch(setSelectedItems(selectedItems)),
  }
  //  setHotelInfo();
};
function mapStateToProps(state) {
  return {
    param:state.param
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HotelSearch);
