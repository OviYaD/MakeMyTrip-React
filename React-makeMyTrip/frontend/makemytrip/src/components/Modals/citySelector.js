import React,{useState,useEffect} from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import {getCities} from "../../services/filters";
import Modal from "@mui/material/Modal";
import Select, { components, OptionProps } from 'react-select';
import { ColourOption, colourOptions } from './docs/data.tsx';

export const CitySelector = ({enable,handleEnabler,handleSetCity,style}) => {
  const [city,setCity] = useState();
  const [cityList,setCityList] = useState();
  const [showCityList,setShowCityList] = useState();

  useEffect(() =>{
    const setCities = async() => {
      const cities=await getCities();
      console.log(cities);
      handleSetCityList(cities);
    }
    setCities();
  },[])

  const handleSetCityList = (cities) => {
    console.log("handleSetCityList",cities)
    setCityList(cities);
    setShowCityList(cities);
  }
  
  const handleCityChange = (e) => {
    setCity(e.target.value);
      const resultCity=cityList.filter((city,index)=>{

        console.log("filtering the city list",city,e.target.value);
        return city["city"].includes(e.target.value);
      })
      console.log(resultCity);
      if(resultCity.length>0){
        setShowCityList(resultCity);
      }
      else{
        setShowCityList(cityList)
      }
      // return resultCity;
  }

 

  return <>
  <OutsideClickHandler
      onOutsideClick={() => {
        handleEnabler();
      }} 
    >
    {console.log("citylist",cityList)}
    {enable && 
      <div className="hsw_autocomplePopup locus autoSuggestPlugin" style={{...style}}>
        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="true" className="react-autosuggest__container react-autosuggest__container--open">
          <input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" className="react-autosuggest__input react-autosuggest__input--open" placeholder="Enter city/ Hotel/ Area/ Building" value={city}  onChange={handleCityChange} />
          <div id="react-autowhatever-1" role="listbox" className="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open">
          <div className="react-autosuggest__section-container react-autosuggest__section-container--first">
            <div className="react-autosuggest__section-title"><p className="hsw_sectionTitle font12 latoBlack greyText">SUGGESTIONS</p></div>
            <ul role="listbox" className="react-autosuggest__suggestions-list">
            {showCityList && showCityList.map((city,index)=>{
              return <li role="option" key={index}  onClick={()=>handleSetCity(city.city)} aria-selected="false" className="react-autosuggest__suggestion" data-section-index="0" data-suggestion-index="1">
              <div className="font14 darkText noChild clickable">
              <div className="spaceBetween makeFlex column">
                <div className="spaceBetween makeFlex hrtlCenter">
                <div >
                  <p className="locusLabel appendBottom5" style={{fontSize:"15px",fontWeight:"600",textTransform:"capitalize !important",marginBottom:"5px"}}>{city.city}</p>
                  <p className="font12 greyText appendBottom5" >{city.count} properties</p>
                </div>
                <span className="font14 lightGreyText latoBold appendBottom5 appendLeft10 textRight autoSuggestHtlResultType">City</span>
                </div>
              </div>
              </div>
            </li>;
            })}
           
            </ul>
          </div>
          </div>
        </div>
      </div>

    }
    </OutsideClickHandler>
  </>;
      
  }
